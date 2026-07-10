"use client";

import { useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CONTACT_EMAIL } from "@/lib/constants";

type FormStatus = "idle" | "submitting" | "success" | "error";

const ROLE_KEYS = ["carrier", "shipper", "producer", "forwarder", "other"] as const;

const MIN_MESSAGE_LENGTH = 5;

const FIELD_ERROR_KEYS = [
  "invalid_message",
  "invalid_name",
  "invalid_email",
  "invalid_company",
  "privacy_required",
] as const;

type FieldErrorKey = (typeof FIELD_ERROR_KEYS)[number];

function isFieldErrorKey(value: string): value is FieldErrorKey {
  return (FIELD_ERROR_KEYS as readonly string[]).includes(value);
}

export function ContactForm() {
  const t = useTranslations("contact.form");
  const locale = useLocale();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorKey, setErrorKey] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const message = String(formData.get("message") ?? "").trim();

    if (message.length < MIN_MESSAGE_LENGTH) {
      setErrorKey("invalid_message");
      setStatus("error");
      return;
    }

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      role: String(formData.get("role") ?? ""),
      message,
      privacyAccepted: formData.get("privacy") === "on",
      website: String(formData.get("website") ?? ""),
      locale,
    };

    if (!payload.privacyAccepted) {
      setErrorKey("privacy_required");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorKey(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setErrorKey(data.error ?? "send_failed");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorKey("send_failed");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-form-success glass-card rounded-2xl p-8 md:p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-glow/10 text-cyan-glow">
          <Icon name="check" size={28} />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">{t("successTitle")}</h3>
        <p className="text-text-secondary mb-6">{t("successBody")}</p>
        <Button type="button" variant="secondary" size="sm" onClick={() => setStatus("idle")}>
          {t("sendAnother")}
        </Button>
      </div>
    );
  }

  return (
    <form className="contact-form glass-card rounded-2xl p-6 md:p-8" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-grid">
        <div className="contact-field">
          <label htmlFor="contact-name" className="contact-label">
            {t("name")} <span className="text-cyan-soft">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="contact-input"
            placeholder={t("namePlaceholder")}
            disabled={status === "submitting"}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-email" className="contact-label">
            {t("email")} <span className="text-cyan-soft">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="contact-input"
            placeholder={t("emailPlaceholder")}
            disabled={status === "submitting"}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-company" className="contact-label">
            {t("company")}
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            className="contact-input"
            placeholder={t("companyPlaceholder")}
            disabled={status === "submitting"}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-role" className="contact-label">
            {t("role")}
          </label>
          <select id="contact-role" name="role" className="contact-input contact-select" disabled={status === "submitting"} defaultValue="">
            <option value="">{t("rolePlaceholder")}</option>
            {ROLE_KEYS.map((key) => (
              <option key={key} value={key}>
                {t(`roles.${key}`)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="contact-field mt-4">
        <label htmlFor="contact-message" className="contact-label">
          {t("message")} <span className="text-cyan-soft">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={MIN_MESSAGE_LENGTH}
          rows={5}
          className="contact-input contact-textarea"
          placeholder={t("messagePlaceholder")}
          disabled={status === "submitting"}
        />
        <p className="mt-1.5 text-xs text-text-muted">{t("messageHint")}</p>
      </div>

      <label className="contact-privacy mt-5">
        <input
          type="checkbox"
          name="privacy"
          required
          className="contact-checkbox"
          disabled={status === "submitting"}
        />
        <span>{t("privacy")}</span>
      </label>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="contact-honeypot"
        aria-hidden="true"
      />

      {status === "error" && (
        <div className="contact-form-error mt-4" role="alert">
          <p className="font-medium text-red-accent">{t("errorTitle")}</p>
          {errorKey && isFieldErrorKey(errorKey) ? (
            <p className="text-sm text-text-secondary mt-1">{t(`errors.${errorKey}`)}</p>
          ) : (
            <p className="text-sm text-text-secondary mt-1">
              {t("errorBody")}{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-cyan-soft hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          )}
          {errorKey === "rate_limit" && (
            <p className="text-sm text-text-muted mt-1">{t("rateLimit")}</p>
          )}
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          <Icon name="email" size={18} />
          {status === "submitting" ? t("submitting") : t("submit")}
          {status !== "submitting" && <Icon name="arrow" size={16} className="arrow-accent" />}
        </Button>
        <p className="text-sm text-text-muted">{t("responseTime")}</p>
      </div>
    </form>
  );
}

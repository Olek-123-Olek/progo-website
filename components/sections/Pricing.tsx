"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BILLING_OPTIONS, PRICING_TIERS } from "@/lib/constants";

type BillingId = (typeof BILLING_OPTIONS)[number]["id"];

export function Pricing() {
  const [billing, setBilling] = useState<BillingId>("monthly");
  const t = useTranslations("pricing");
  const tc = useTranslations("common");

  const activeBilling = BILLING_OPTIONS.find((b) => b.id === billing)!;

  return (
    <section id="pricing" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.03] to-cyan-glow/[0.02]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader label={t("label")} title={t("title")} description={t("description")} />

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {BILLING_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setBilling(option.id)}
              className={`relative rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                billing === option.id
                  ? "bg-gradient-to-r from-cyan-dim/40 to-purple-600/30 border border-cyan-glow/40 text-text-primary glow-cyan"
                  : "glass-card text-text-secondary hover:text-text-primary hover:border-cyan-glow/20"
              }`}
            >
              {t(`billing.${option.id}`)}
              {option.id !== "monthly" && (
                <span
                  className={`ml-2 text-xs font-bold ${
                    billing === option.id ? "text-cyan-glow" : "text-purple-400"
                  }`}
                >
                  {option.id === "semiannual" ? t("discount10") : t("discount20")}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {PRICING_TIERS.map((tier, i) => {
            const basePrice = parseInt(tier.price, 10);
            const adjusted = Math.round(basePrice * activeBilling.multiplier);
            const savings = activeBilling.multiplier < 1 ? basePrice - adjusted : 0;

            return (
              <GlassCard
                key={tier.key}
                highlight={tier.highlight}
                accent="cyan"
                className="text-center animate-fade-in-up pricing-card"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                {tier.highlight && (
                  <span className="mb-3 inline-block rounded-full bg-gradient-to-r from-cyan-glow/15 to-purple-500/15 border border-cyan-glow/25 px-3 py-1 text-xs font-medium text-cyan-soft">
                    {tc("mostPopular")}
                  </span>
                )}
                <p className="text-sm text-text-secondary mb-2">{t(`tiers.${tier.key}`)}</p>
                <p className="text-4xl font-bold text-text-primary">
                  {adjusted}
                  <span className="text-lg font-normal text-text-muted"> {tc("currency")}</span>
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  {tc("perMonth")}
                  {billing !== "monthly" && (
                    <span className="block text-xs text-purple-400 mt-0.5">
                      {tc("billed", { period: t(`billing.${billing}`).toLowerCase() })}
                    </span>
                  )}
                </p>
                {savings > 0 && (
                  <p className="mt-2 text-xs text-cyan-glow font-medium">
                    {tc("savePerMonth", { amount: savings })}
                  </p>
                )}
              </GlassCard>
            );
          })}
        </div>

        <div className="glass-card rounded-2xl p-6 max-w-2xl mx-auto text-center border-purple-500/20">
          <p className="text-text-secondary">
            {t("footerText", { highlight: tc("fullFunctionality") })}
          </p>
          <p className="mt-4 text-sm text-purple-400">
            {t("footerDiscounts", {
              d10: t("discount10"),
              d20: t("discount20"),
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

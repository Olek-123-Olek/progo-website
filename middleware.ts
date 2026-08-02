import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Include bare legal URLs so App Store canonical paths redirect into locale routes.
  matcher: [
    "/",
    "/privacy",
    "/privacy-choices",
    "/(de|it|fr|uk|pl|en)/:path*",
  ],
};

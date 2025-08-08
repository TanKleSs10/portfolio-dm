import { errorMessages } from "@/components/contact/inputsLables";
import { locale } from "@/types";

export function translateError(
  lang: locale,
  errorKey?: string,
): string | undefined {
  if (!errorKey) return;

  switch (errorKey) {
    case "name":
    case "lastName":
    case "message":
      return errorMessages[errorKey].required[lang];
    case "email":
      return errorMessages.email.invalid[lang];
    default:
      return "Error desconocido";
  }
}

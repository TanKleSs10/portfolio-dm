"use client";

import { useState } from "react";
import { ContactFormContent, Cta } from "@/content/types";
import ContactBody from "@/components/contact/ContactBody";
import { locale } from "@/types";

interface FinalCtaBodyProps {
  locale: locale;
  primaryCta: Cta;
  secondaryCta?: Cta;
  scheduleEmbedUrl?: string;
  formContent: ContactFormContent;
}

export default function FinalCtaBody({
  locale,
  primaryCta,
  secondaryCta,
  scheduleEmbedUrl,
  formContent,
}: FinalCtaBodyProps) {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const closeLabel = locale === "es" ? "Cerrar" : "Close";

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        <a
          href={primaryCta.href}
          className="inline-flex items-center justify-center rounded-lg bg-platinum-300 px-5 py-3 font-unbounded text-sm font-bold text-night-800 transition-colors duration-300 hover:bg-white"
        >
          {primaryCta.label}
        </a>
        {scheduleEmbedUrl && secondaryCta ? (
          <button
            type="button"
            onClick={() => setIsScheduleOpen(true)}
            className="inline-flex items-center justify-center rounded-lg border border-platinum-200/40 px-5 py-3 font-unbounded text-sm text-platinum-100"
          >
            {secondaryCta.label}
          </button>
        ) : null}
      </div>
      {scheduleEmbedUrl && isScheduleOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={locale === "es" ? "Agenda una llamada" : "Schedule a call"}
          onClick={() => setIsScheduleOpen(false)}
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-night-100/20 px-4 py-3">
              <p className="font-unbounded text-sm text-night-900">
                {locale === "es" ? "Agenda una llamada" : "Schedule a call"}
              </p>
              <button
                type="button"
                onClick={() => setIsScheduleOpen(false)}
                className="text-xs font-unbounded text-night-500"
              >
                {closeLabel}
              </button>
            </div>
            <iframe
              title={locale === "es" ? "Agenda una llamada" : "Schedule a call"}
              src={scheduleEmbedUrl}
              className="w-full min-h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      ) : null}
      <div id="contact-form">
        <ContactBody locale={locale} formContent={formContent} />
      </div>
    </div>
  );
}

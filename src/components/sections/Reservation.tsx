"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";

export function Reservation() {
  const t = useTranslations("reservation");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      date: formData.get("date") as string,
      time: formData.get("time") as string,
    };

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setToastMessage(t("successToast"));
        form.reset();
      } else {
        const err = await res.json();
        setToastMessage(err.error || t("errorToast"));
      }
    } catch {
      setToastMessage(t("errorToast"));
    }

    setToastVisible(true);
    setSubmitting(false);
  };

  const hideToast = useCallback(() => setToastVisible(false), []);

  const inputClasses =
    "w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-sm px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-300";

  return (
    <SectionWrapper id="reservation">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[var(--accent)] text-sm uppercase tracking-[0.3em] mb-3">
            {t("subtitle")}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            {t("title")}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                {t("fullName")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={t("namePlaceholder")}
                className={inputClasses}
                aria-label={t("nameAriaLabel")}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                {t("phone")}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder={t("phonePlaceholder")}
                className={inputClasses}
                aria-label={t("phoneAriaLabel")}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                {t("date")}
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className={inputClasses}
                aria-label={t("dateAriaLabel")}
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                {t("time")}
              </label>
              <input
                type="time"
                id="time"
                name="time"
                required
                className={inputClasses}
                aria-label={t("timeAriaLabel")}
              />
            </div>
          </div>

          <div className="pt-4">
            <Button type="submit" variant="primary" className="w-full">
              {submitting ? t("sending") : t("reserveNow")}
            </Button>
          </div>
        </form>
      </div>

      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={hideToast}
      />
    </SectionWrapper>
  );
}

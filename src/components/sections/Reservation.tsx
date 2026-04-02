"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import { cn } from "@/lib/utils";

const reservationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone number is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

export function Reservation() {
  const t = useTranslations("reservation");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = async (data: ReservationFormValues) => {
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setToastMessage(t("successToast"));
        reset();
      } else {
        const err = await res.json();
        setToastMessage(err.error || t("errorToast"));
      }
    } catch {
      setToastMessage(t("errorToast"));
    }

    setToastVisible(true);
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                {t("fullName")}
              </label>
              <input
                type="text"
                id="name"
                placeholder={t("namePlaceholder")}
                className={cn(inputClasses, errors.name && "border-red-500")}
                aria-label={t("nameAriaLabel")}
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                {t("phone")}
              </label>
              <input
                type="tel"
                id="phone"
                placeholder={t("phonePlaceholder")}
                className={cn(inputClasses, errors.phone && "border-red-500")}
                aria-label={t("phoneAriaLabel")}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
              )}
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
                className={cn(inputClasses, errors.date && "border-red-500")}
                aria-label={t("dateAriaLabel")}
                {...register("date")}
              />
              {errors.date && (
                <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                {t("time")}
              </label>
              <input
                type="time"
                id="time"
                className={cn(inputClasses, errors.time && "border-red-500")}
                aria-label={t("timeAriaLabel")}
                {...register("time")}
              />
              {errors.time && (
                <p className="mt-1 text-xs text-red-500">{errors.time.message}</p>
              )}
            </div>
          </div>

          <div className="pt-4">
            <Button type="submit" variant="primary" className="w-full">
              {isSubmitting ? t("sending") : t("reserveNow")}
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

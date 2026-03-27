import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { restaurantInfo, workingHours } from "@/lib/data";

export function Location() {
  return (
    <SectionWrapper id="location" dark>
      <div className="text-center mb-12">
        <p className="text-[var(--accent)] text-sm uppercase tracking-[0.3em] mb-3">
          Find Us
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
          Location & Hours
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Map */}
        <div className="rounded-sm overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[400px]">
          <iframe
            src={restaurantInfo.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bistro Central location on Google Maps"
            aria-label="Map showing Bistro Central restaurant location"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)] mb-4">
              Working Hours
            </h3>
            <div className="space-y-3">
              {workingHours.map((wh) => (
                <div
                  key={wh.day}
                  className="flex justify-between text-sm border-b border-[var(--border)] pb-3"
                >
                  <span className="text-[var(--text-primary)] font-medium">
                    {wh.day}
                  </span>
                  <span
                    className={
                      wh.hours === "Closed"
                        ? "text-red-400"
                        : "text-[var(--text-secondary)]"
                    }
                  >
                    {wh.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)] mb-4">
              Address
            </h3>
            <p className="text-[var(--text-secondary)] text-sm">
              {restaurantInfo.address}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)] mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href={`tel:${restaurantInfo.phone.replace(/\s/g, "")}`}
                  className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                >
                  {restaurantInfo.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                >
                  {restaurantInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

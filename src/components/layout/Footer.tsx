import { restaurantInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[var(--bg-accent)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-[var(--accent)] mb-3">
              {restaurantInfo.name}
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {restaurantInfo.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-semibold mb-4 text-[var(--text-primary)]">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <p>{restaurantInfo.address}</p>
              <p>
                <a
                  href={`tel:${restaurantInfo.phone.replace(/\s/g, "")}`}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  {restaurantInfo.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  {restaurantInfo.email}
                </a>
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-semibold mb-4 text-[var(--text-primary)]">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find us on TripAdvisor"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div suppressHydrationWarning className="mt-10 pt-8 border-t border-[var(--border)] text-center text-xs text-[var(--text-secondary)]">
          <p>&copy; {new Date().getFullYear()} {restaurantInfo.name} {restaurantInfo.city}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

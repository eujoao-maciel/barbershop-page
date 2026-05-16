const contactLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const openingHours = [
  "Monday - Friday: 9AM - 6PM",
  "Saturday: 9AM - 4PM",
  "Sunday: Closed",
];

export const Footer = () => {
  return (
    <footer className="border-t border-gold-primary bg-black-primary">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.1fr_0.9fr_1fr_1fr] xl:items-start">
          <div className="flex items-start gap-4">
            <span
              className="mt-1 block h-10 w-10 shrink-0 bg-gold-primary"
              aria-hidden="true"
            />

            <div>
              <h2 className="font-serif text-xl font-semibold text-white-primary">
                Name
              </h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.35em] text-gold-primary">
                Barber
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-white-primary">
              Contact
            </h3>
            <nav aria-label="Footer navigation" className="mt-4">
              <ul className="space-y-2 text-sm text-white-primary/70">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-colors duration-200 hover:text-gold-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-white-primary">
              Opening Hours
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-white-primary/70">
              {openingHours.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="max-w-xs text-sm leading-6 text-white-primary/70">
              A little description of your services and the shop.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-white-primary/70 transition-colors duration-200 hover:text-gold-primary"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-current"
                >
                  <path d="M7.75 2h8.5A5.756 5.756 0 0 1 22 7.75v8.5A5.756 5.756 0 0 1 16.25 22h-8.5A5.756 5.756 0 0 1 2 16.25v-8.5A5.756 5.756 0 0 1 7.75 2Zm0 1.5A4.255 4.255 0 0 0 3.5 7.75v8.5A4.255 4.255 0 0 0 7.75 20.5h8.5a4.255 4.255 0 0 0 4.25-4.25v-8.5a4.255 4.255 0 0 0-4.25-4.25Zm8.75 1.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.506 5.506 0 0 1 12 6.5Zm0 1.5A4 4 0 1 0 16 12a4 4 0 0 0-4-4Z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="text-white-primary/70 transition-colors duration-200 hover:text-gold-primary"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-current"
                >
                  <path d="M18.901 2H21.99l-6.75 7.715L23.18 22h-6.216l-4.867-7.43L5.59 22H2.5l7.22-8.251L1.5 2h6.374l4.4 6.719L18.9 2Zm-1.084 18.153h1.711L6.948 3.75H5.112Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

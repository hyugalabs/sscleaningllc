import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Mark } from "@/components/Mark";
import { WorkOrder } from "@/components/WorkOrder";
import { AddToOrder } from "@/components/AddToOrder";
import { business, services } from "@/lib/business";

const tel = `tel:${business.phoneE164}`;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Copies />
        <FinePrint />
        <Area />
        <Close />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}

/* ───────────────────────── Header ───────────────────────── */

function SiteHeader() {
  return (
    <header className="on-desk sticky top-0 z-40 border-b border-white/10 bg-desk text-paper">
      <div className="mx-auto flex h-16 max-w-[78rem] items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-end gap-2 no-underline" aria-label="SS Cleaning LLC, back to top">
          <Mark tone="paper" className="text-[1.65rem]" />
          <span className="cond pb-[0.15rem] text-[1.15rem] font-extrabold uppercase leading-none tracking-[0.01em]">
            SS Cleaning <span className="text-mist">LLC</span>
          </span>
        </a>
        <nav aria-label="Sections" className="hidden items-center gap-7 text-[0.9rem] font-medium text-mist md:flex">
          <a className="no-underline transition-colors hover:text-paper" href="#services">Services</a>
          <a className="no-underline transition-colors hover:text-paper" href="#how">How it works</a>
          <a className="no-underline transition-colors hover:text-paper" href="#area">Service area</a>
        </nav>
        <a
          href={tel}
          className="semi-cond tnum inline-flex min-h-10 items-center gap-2 border-2 border-canary px-3 text-[0.95rem] font-bold tracking-[0.04em] text-canary no-underline transition-colors hover:bg-canary hover:text-desk active:bg-paper active:text-desk"
        >
          <Phone className="size-4" strokeWidth={2.5} aria-hidden="true" />
          <span className="hidden sm:inline">{business.phoneDisplay}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

/* ───────────────────────── Hero: the order book on the desk ───────────────────────── */

function PenCheck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`overflow-visible ${className}`} fill="none" aria-hidden="true">
      <path
        className="check-path is-on"
        d="M3 13.5c2 1.4 3.6 3.2 5 5.4C11 12 15.5 6 22 1.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const proof = [
  { text: "5.0 on Google", sub: `${business.googleReviewCount} reviews` },
  { text: "BBB A+", sub: "Accredited business" },
  { text: "Insured", sub: "Ohio LLC" },
  { text: "Workers' comp", sub: "Ready for job sites" },
];

function Hero() {
  return (
    <section id="top" className="on-desk relative overflow-hidden bg-desk text-paper">
      <div className="mx-auto grid max-w-[78rem] gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-16">
        <div className="lg:col-span-5 lg:pt-6">
          <h1 className="cond text-[clamp(2.9rem,4.9vw,4.4rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.01em]">
            Clean homes, offices &amp; job sites across Northeast Ohio.
          </h1>
          <p className="mt-6 max-w-[34rem] text-[1.1rem] leading-relaxed text-mist">
            SS Cleaning is owner-run by {business.owner} out of {business.town}, taking residential, commercial, and
            post-construction jobs in Portage, Summit &amp; Stark County. Write up the order and she&rsquo;ll get back to
            you with a quote.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={tel}
              className="semi-cond tnum inline-flex min-h-14 items-center justify-center gap-2.5 whitespace-nowrap bg-canary px-6 text-[1.1rem] font-bold uppercase tracking-[0.05em] text-desk no-underline transition-colors duration-150 hover:bg-paper active:bg-desk active:text-canary"
            >
              <Phone className="size-5" strokeWidth={2.5} aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
            <a
              href="#order"
              className="semi-cond group inline-flex min-h-14 items-center justify-center gap-2 px-2 text-[1rem] font-bold uppercase tracking-[0.05em] text-paper underline decoration-mist/50 decoration-2 underline-offset-[0.35em] transition-colors hover:decoration-canary"
            >
              Or fill out the work order
              <ArrowRight className="hidden size-5 transition-transform group-hover:translate-x-1 lg:block" aria-hidden="true" />
              <ArrowDown className="size-5 lg:hidden" aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/15 pt-6" aria-label="Credentials">
            {proof.map((p) => (
              <li key={p.text} className="flex items-start gap-3">
                <span className="relative mt-0.5 grid size-[1.2rem] shrink-0 place-items-center border-2 border-mist">
                  <PenCheck className="absolute -top-2 left-0.5 size-6 text-canary" />
                </span>
                <span>
                  <span className="semi-cond block text-[1.05rem] font-bold leading-tight">{p.text}</span>
                  <span className="block text-[0.85rem] text-mist">{p.sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="pb-5 pr-4 sm:pb-7 sm:pr-6">
            <WorkOrder />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Services as line items ───────────────────────── */

function Services() {
  return (
    <section id="services" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[78rem] px-4 sm:px-6">
        <div className="grid gap-6 border-b-4 border-ink pb-8 lg:grid-cols-12 lg:items-end">
          <h2 className="cond text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold uppercase leading-[0.92] lg:col-span-7">
            Description of work
          </h2>
          <p className="max-w-[36rem] text-[1.05rem] leading-relaxed text-ink-soft lg:col-span-5">
            From homes to businesses and new construction, three kinds of jobs. Every one is quoted to your space, so tell
            Shellie what you&rsquo;ve got and she&rsquo;ll price it straight.
          </p>
        </div>

        <ol className="divide-y-2 divide-ink">
          {services.map((s) => (
            <li key={s.id} className="grid gap-6 py-10 md:grid-cols-12 md:gap-10">
              <figure className="md:col-span-5 lg:col-span-4">
                <div className="relative aspect-[4/3] overflow-hidden bg-paper-shade">
                  <Image
                    src={s.photo}
                    alt={s.photoAlt}
                    fill
                    sizes="(min-width: 1024px) 26rem, (min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-1.5 text-[0.72rem] uppercase tracking-[0.1em] text-ink-soft semi-cond">
                  Sample photo
                </figcaption>
              </figure>
              <div className="flex flex-col md:col-span-7 lg:col-span-8">
                <h3 className="cond text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold uppercase leading-none">{s.name}</h3>
                <p className="mt-4 max-w-[60ch] text-[1.08rem] leading-relaxed">{s.body}</p>
                <dl className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <dt className="semi-cond text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                    Good for
                  </dt>
                  {s.goodFor.map((g) => (
                    <dd key={g} className="font-pen text-[1.55rem] leading-none text-pen">
                      {g}
                    </dd>
                  ))}
                </dl>
                <div className="mt-6 md:mt-auto md:pt-6">
                  <AddToOrder id={s.id} label={s.name} />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────────────────────── How it works: three copies ───────────────────────── */

const copies = [
  {
    copy: "White: customer",
    title: "You send the order",
    body: "Fill out the work order at the top of this page, or skip it and call. Either way takes about a minute.",
    cls: "bg-paper md:-rotate-[1.2deg]",
  },
  {
    copy: "Canary: office",
    title: "Shellie calls you back",
    body: "She talks through the space, what needs doing, and when, then gives you a quote.",
    cls: "bg-canary md:translate-y-6 md:rotate-[0.8deg]",
  },
  {
    copy: "Pink: job file",
    title: "Your space, ready to enjoy",
    body: "The job gets done and your home, office, or site is left clean and fresh.",
    cls: "bg-pink md:translate-y-2 md:-rotate-[0.6deg]",
  },
];

function Copies() {
  return (
    <section id="how" className="on-desk bg-desk py-20 text-paper lg:py-28">
      <div className="mx-auto max-w-[78rem] px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="cond text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold uppercase leading-[0.92] lg:col-span-7">
            One order, three copies
          </h2>
          <p className="max-w-[34rem] text-[1.05rem] leading-relaxed text-mist lg:col-span-5">
            It works the way a job gets written up on site. No account, no app, no waiting on a call center.
          </p>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3 md:gap-5 md:pb-8">
          {copies.map((c) => (
            <li key={c.title} className={`sheet-shadow flex flex-col text-ink ${c.cls}`}>
              <div className="perf" />
              <div className="flex-1 px-6 pb-6 pt-5">
                <h3 className="cond text-[1.9rem] font-extrabold uppercase leading-none">{c.title}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed">{c.body}</p>
              </div>
              <p className="semi-cond border-t border-ink/25 px-6 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                {c.copy}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────────────────────── Fine print ───────────────────────── */

const terms = [
  {
    term: "Insured",
    detail: "SS Cleaning LLC carries insurance on the work it does, in your home or on your site.",
  },
  {
    term: "Workers' comp",
    detail:
      "Workers' compensation coverage is in place: the paperwork builders and property managers ask about before anyone steps on site.",
  },
  { term: "BBB A+", detail: "An accredited business with the Better Business Bureau, rated A+." },
  {
    term: "5.0 on Google",
    detail: `A 5.0 average across ${business.googleReviewCount} Google reviews.`,
    link: { href: business.googleReviews, label: "Read them on Google" },
  },
  { term: "Straight to the owner", detail: `Calls, texts, and emails go straight to ${business.owner}, the owner.` },
  { term: "Everyone welcome", detail: "Listed as LGBTQ+ friendly on Google." },
];

function FinePrint() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="mx-auto grid max-w-[78rem] gap-10 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="cond text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold uppercase leading-[0.92]">
            The fine print is the good part
          </h2>
          <p className="mt-5 max-w-[30rem] text-[1.05rem] leading-relaxed text-ink-soft">
            What you&rsquo;d want to check before letting anyone into your house, your office, or onto your job site.
          </p>
        </div>
        <dl className="border-t-4 border-ink lg:col-span-8">
          {terms.map((t) => (
            <div key={t.term} className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[13rem_1fr] sm:gap-6">
              <dt className="semi-cond text-[1.2rem] font-bold uppercase leading-snug tracking-[0.02em]">{t.term}</dt>
              <dd className="max-w-[58ch] text-[1.02rem] leading-relaxed">
                {t.detail}
                {t.link && (
                  <>
                    {" "}
                    <a
                      href={t.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 font-semibold text-pen underline"
                    >
                      {t.link.label}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ───────────────────────── Service area ───────────────────────── */

function Area() {
  return (
    <section id="area" className="border-t-2 border-ink bg-paper-shade py-20 lg:py-24">
      <div className="mx-auto grid max-w-[78rem] gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <h2 className="cond text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold uppercase leading-[0.92]">
            Job location: Northeast Ohio
          </h2>
          <p className="mt-5 max-w-[30rem] text-[1.05rem] leading-relaxed text-ink-soft">
            Based in {business.town}, {business.state}. Not sure you&rsquo;re in range? Call or text and ask.
          </p>
        </div>
        <div className="bg-paper sheet-shadow lg:col-span-7">
          <div className="perf" style={{ ["--perf-hole" as string]: "var(--color-paper-shade)" }} />
          <ul className="px-6 pb-6 pt-3 sm:px-8">
            {business.counties.map((c, i) => (
              <li key={c} className="flex items-end justify-between gap-4 border-b border-rule py-4">
                <span className="flex items-center gap-3">
                  <span className="relative grid size-[1.35rem] shrink-0 place-items-center border-2 border-ink">
                    <PenCheck className="absolute -top-2 left-0.5 size-7 text-pen" />
                  </span>
                  <span className="cond text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold uppercase leading-none">{c}</span>
                </span>
                {i === 0 && (
                  <span className="flex shrink-0 items-center gap-1 whitespace-nowrap font-pen text-[1.45rem] leading-none text-pen">
                    <MapPin className="size-4" aria-hidden="true" />
                    home base
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Close: signed off ───────────────────────── */

function Close() {
  return (
    <section className="bg-canary py-20 text-ink lg:py-28">
      <div className="mx-auto max-w-[78rem] px-4 sm:px-6">
        <h2 className="cond max-w-[14ch] text-[clamp(2.6rem,6vw,5rem)] font-extrabold uppercase leading-[0.9]">
          Get your space on the schedule
        </h2>
        <a
          href={tel}
          className="cond tnum mt-8 inline-block text-[clamp(3.2rem,11vw,8.5rem)] font-black leading-[0.85] tracking-[-0.01em] text-ink no-underline decoration-4 underline-offset-8 hover:underline"
        >
          {business.phoneDisplay}
        </a>
        <div className="mt-10 grid gap-10 border-t-2 border-ink pt-8 md:grid-cols-2">
          <div className="flex flex-col gap-3 text-[1.05rem]">
            <a href={`mailto:${business.email}`} className="inline-flex items-center gap-2.5 font-semibold underline">
              <Mail className="size-5" aria-hidden="true" />
              {business.email}
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-semibold underline"
            >
              <ArrowUpRight className="size-5" aria-hidden="true" />
              SS Cleaning on Facebook
            </a>
            <a
              href="#order"
              className="semi-cond mt-4 inline-flex min-h-12 w-fit items-center gap-2 border-2 border-ink bg-ink px-5 text-[0.95rem] font-bold uppercase tracking-[0.06em] text-canary no-underline transition-colors hover:bg-desk-deep active:bg-canary active:text-ink"
            >
              Write up a work order
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="self-end">
            <div className="h-[clamp(2.6rem,5vw,3.6rem)]" aria-hidden="true" />
            <div className="mt-1 border-t-2 border-ink pt-2">
              <p className="semi-cond text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                Authorized by · {business.owner}, Owner
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Footer & mobile bar ───────────────────────── */

function Footer() {
  return (
    <footer className="on-desk bg-desk-deep pb-24 pt-10 text-mist md:pb-10">
      <div className="mx-auto flex max-w-[78rem] flex-col gap-4 px-4 text-[0.9rem] sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="flex items-end gap-2 text-paper">
          <Mark tone="paper" className="text-[1.3rem]" />
          <span className="cond pb-[0.1rem] font-extrabold uppercase leading-none">{business.name}</span>
        </p>
        <p>
          {business.town}, Ohio · Portage, Summit &amp; Stark County ·{" "}
          <a href={tel} className="tnum whitespace-nowrap text-paper underline">
            {business.phoneDisplay}
          </a>
        </p>
        <p>Sample photos via Unsplash</p>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t-2 border-ink md:hidden">
      <a
        href={tel}
        className="semi-cond flex min-h-14 items-center justify-center gap-2 bg-canary text-[1rem] font-bold uppercase tracking-[0.05em] text-desk no-underline active:bg-paper"
      >
        <Phone className="size-5" strokeWidth={2.5} aria-hidden="true" />
        Call Shellie
      </a>
      <a
        href="#order"
        className="semi-cond flex min-h-14 items-center justify-center gap-2 bg-ink text-[1rem] font-bold uppercase tracking-[0.05em] text-paper no-underline active:bg-paper active:text-ink"
      >
        Get a quote
      </a>
    </div>
  );
}

/* ───────────────────────── Structured data ───────────────────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.name,
  description:
    "Residential, commercial/office, and post-construction cleaning in Portage, Summit, and Stark County, Ohio.",
  telephone: business.phoneE164,
  email: business.email,
  founder: { "@type": "Person", name: business.owner },
  address: {
    "@type": "PostalAddress",
    addressLocality: business.town,
    addressRegion: business.state,
    addressCountry: "US",
  },
  areaServed: business.counties.map((c) => ({ "@type": "AdministrativeArea", name: `${c}, Ohio` })),
  sameAs: [business.facebook],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, description: s.body },
    })),
  },
};

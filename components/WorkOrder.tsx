"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Mail, MessageSquareText, Phone, RotateCcw } from "lucide-react";
import { Mark } from "./Mark";
import { ADD_SERVICE_EVENT, business, services, type ServiceId } from "@/lib/business";

const frequencies = ["One time", "Weekly", "Every 2 weeks", "Monthly"] as const;
type Frequency = (typeof frequencies)[number];

type Stage = "writing" | "tearing" | "sent";
type Method = "sms" | "email";

type Errors = Partial<Record<"name" | "phone" | "services", string>>;



function serial(n: number) {
  return String(n).padStart(4, "0");
}

export function WorkOrder() {
  const uid = useId();
  const [orderNo, setOrderNo] = useState(504);
  const [stage, setStage] = useState<Stage>("writing");
  const [method, setMethod] = useState<Method>("sms");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [where, setWhere] = useState("");
  const [picked, setPicked] = useState<ServiceId[]>([]);
  const [often, setOften] = useState<Frequency | "">("");
  const [start, setStart] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [lockHeight, setLockHeight] = useState<number | null>(null);

  const wrapRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  // "Add to work order" buttons elsewhere on the page check a box here.
  useEffect(() => {
    function onAdd(e: Event) {
      const id = (e as CustomEvent<ServiceId>).detail;
      setPicked((prev) => (prev.includes(id) ? prev : [...prev, id]));
      setErrors((prev) => ({ ...prev, services: undefined }));
      setStage((s) => (s === "sent" ? "writing" : s));
      wrapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 500);
    }
    window.addEventListener(ADD_SERVICE_EVENT, onAdd);
    return () => window.removeEventListener(ADD_SERVICE_EVENT, onAdd);
  }, []);

  function toggleService(id: ServiceId) {
    setPicked((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]));
    setErrors((prev) => ({ ...prev, services: undefined }));
  }

  function pickedNames() {
    return services.filter((s) => picked.includes(s.id)).map((s) => s.short);
  }

  function composeMessage() {
    const lines = [
      `Work order No. ${serial(orderNo)} (quote request from your website)`,
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      where.trim() && `Job location: ${where.trim()}`,
      `Type of work: ${pickedNames().join(", ")}`,
      often && `How often: ${often}`,
      start.trim() && `Preferred start: ${start.trim()}`,
      notes.trim() && `Notes: ${notes.trim()}`,
    ];
    return lines.filter(Boolean).join("\n");
  }

  function validate(): boolean {
    const next: Errors = {};
    if (!name.trim()) next.name = "Add your name so Shellie knows who she's calling.";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) next.phone = "Add a 10-digit phone number for the callback.";
    if (picked.length === 0) next.services = "Check at least one type of work.";
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(`${uid}-${first}`)?.focus();
      return false;
    }
    return true;
  }

  function send(via: Method) {
    if (!validate()) return;
    const body = encodeURIComponent(composeMessage());
    const href =
      via === "sms"
        ? `sms:${business.phoneE164}?&body=${body}`
        : `mailto:${business.email}?subject=${encodeURIComponent(
            `Work order No. ${serial(orderNo)}: quote request from ${name.trim()}`,
          )}&body=${body}`;
    setMethod(via);
    setLockHeight(wrapRef.current?.offsetHeight ?? null);
    setStage("tearing");
    window.location.href = href;
    window.setTimeout(() => {
      setStage("sent");
      setLockHeight(null);
    }, 900);
  }

  function writeAnother() {
    setOrderNo((n) => n + 1);
    setName("");
    setPhone("");
    setWhere("");
    setPicked([]);
    setOften("");
    setStart("");
    setNotes("");
    setErrors({});
    setStage("writing");
  }

  const today = new Date().toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit",
  });

  return (
    <div
      ref={wrapRef}
      id="order"
      className="relative scroll-mt-24"
      style={lockHeight ? { minHeight: lockHeight } : undefined}
    >
      {/* Carbon copies underneath the top sheet */}
      <div aria-hidden="true" className="fan-pink absolute inset-0 bg-pink sheet-shadow" />
      <div aria-hidden="true" className="fan-canary absolute inset-0 bg-canary sheet-shadow" />

      {stage !== "writing" && (
        <CustomerCopy
          className={stage === "tearing" ? "absolute inset-0" : "relative"}
          orderNo={orderNo}
          method={method}
          name={name}
          phone={phone}
          where={where}
          services={pickedNames()}
          onAnother={writeAnother}
        />
      )}

      {stage !== "sent" && (
        <form
          noValidate
          aria-labelledby={`${uid}-title`}
          onSubmit={(e) => {
            e.preventDefault();
            send("sms");
          }}
          className={`relative z-10 bg-paper text-ink sheet-shadow ${stage === "tearing" ? "tearing" : ""}`}
        >
          {/* Stub */}
          <div className="flex items-center justify-between bg-paper-shade px-5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-soft semi-cond sm:px-7">
            <span>Work order · Quote request</span>
            <span className="hidden sm:inline">Customer fills in · Shellie calls back</span>
          </div>
          <div className="perf" style={{ ["--perf-hole" as string]: "var(--color-desk)" }} />

          {/* Pre-printed header */}
          <header className="flex items-start justify-between gap-4 border-b-2 border-ink px-5 pb-3 pt-3 sm:px-7">
            <div className="min-w-0">
              <div className="flex items-end gap-2">
                <Mark className="text-[1.9rem]" />
                <h2 id={`${uid}-title`} className="cond pb-[0.2rem] text-[1.35rem] font-extrabold uppercase leading-none tracking-[0.01em]">
                  SS Cleaning LLC
                </h2>
              </div>
              <p className="mt-2 text-[0.8rem] leading-snug text-ink-soft">
                Residential · Commercial · Post-construction
                <br />
                {business.town}, {business.state} · {business.phoneDisplay}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-soft semi-cond">
                No.
              </span>
              <span className="tnum block text-[1.75rem] font-semibold leading-none tracking-[0.06em] text-serial semi-cond" aria-label={`Order number ${serial(orderNo)}`}>
                {serial(orderNo)}
              </span>
            </div>
          </header>

          <div className="grid grid-cols-2 gap-x-5 gap-y-1 px-5 pt-3 sm:grid-cols-6 sm:px-7">
            <div className="col-span-1 sm:col-span-2">
              <span className={labelCls}>Date</span>
              <span className="block border-b border-rule pb-0.5 font-pen text-[1.6rem] leading-[2.4rem] text-pen" suppressHydrationWarning>
                {today}
              </span>
            </div>
            <Field
              className="col-span-1 sm:col-span-4"
              id={`${uid}-start`}
              label="Preferred start"
            >
              <input
                id={`${uid}-start`}
                value={start}
                onChange={(e) => setStart(e.target.value)}
                className={entryCls}
              />
            </Field>

            <Field
              className="col-span-2 sm:col-span-3"
              id={`${uid}-name`}
              label="Customer name"
              error={errors.name}
            >
              <input
                ref={nameRef}
                id={`${uid}-name`}
                autoComplete="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                }}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? `${uid}-name-err` : undefined}
                className={entryCls}
              />
            </Field>
            <Field
              className="col-span-2 sm:col-span-3"
              id={`${uid}-phone`}
              label="Phone"
              error={errors.phone}
            >
              <input
                id={`${uid}-phone`}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
                }}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? `${uid}-phone-err` : undefined}
                className={`${entryCls} tnum`}
              />
            </Field>

            <Field className="col-span-2 sm:col-span-6" id={`${uid}-where`} label="Job location (address or town)">
              <input
                id={`${uid}-where`}
                autoComplete="street-address"
                value={where}
                onChange={(e) => setWhere(e.target.value)}
                className={entryCls}
              />
            </Field>
          </div>

          {/* Type of work */}
          <fieldset
            className="mx-5 mt-4 border-t-2 border-ink pt-3 sm:mx-7"
            aria-describedby={errors.services ? `${uid}-services-err` : undefined}
          >
            <legend className="sr-only">Type of work</legend>
            <span aria-hidden="true" className={labelCls}>
              Type of work
            </span>
            <div className="mt-1.5 grid gap-x-4 gap-y-2 sm:grid-cols-3">
              {services.map((s, i) => (
                <label key={s.id} className="group flex cursor-pointer items-center gap-2.5 py-1">
                  <input
                    id={i === 0 ? `${uid}-services` : undefined}
                    type="checkbox"
                    className="peer sr-only"
                    checked={picked.includes(s.id)}
                    onChange={() => toggleService(s.id)}
                  />
                  <span className="check-box relative grid size-[1.35rem] shrink-0 place-items-center border-2 border-ink bg-paper transition-colors group-hover:bg-paper-shade peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-pen">
                    <svg viewBox="0 0 24 24" className="absolute -top-2 left-0.5 size-7 overflow-visible" fill="none" aria-hidden="true">
                      <path
                        className="check-path"
                        d="M3 13.5c2 1.4 3.6 3.2 5 5.4C11 12 15.5 6 22 1.5"
                        stroke="var(--color-pen)"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[0.95rem] font-semibold leading-tight">{s.short}</span>
                </label>
              ))}
            </div>
            {errors.services && (
              <p id={`${uid}-services-err`} className={errCls}>
                {errors.services}
              </p>
            )}
          </fieldset>

          {/* Frequency */}
          <fieldset className="mx-5 mt-3 sm:mx-7">
            <legend className={labelCls}>How often</legend>
            <div className="mt-1 flex flex-wrap gap-x-1.5 gap-y-1">
              {frequencies.map((f) => {
                const on = often === f;
                return (
                  <label key={f} className="relative cursor-pointer px-3 py-1.5 before:pointer-events-none before:absolute before:inset-x-0.5 before:inset-y-1 before:rounded-[50%] before:border before:border-dashed before:border-rule before:transition-colors hover:before:border-ink-soft">
                    <input
                      type="radio"
                      name={`${uid}-often`}
                      value={f}
                      checked={on}
                      onChange={() => setOften(f)}
                      className="peer sr-only"
                    />
                    <span className="relative z-10 text-[0.95rem] font-medium peer-focus-visible:underline peer-focus-visible:decoration-pen peer-focus-visible:decoration-2">
                      {f}
                    </span>
                    {on && (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 100 40"
                        preserveAspectRatio="none"
                        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                        fill="none"
                      >
                        <path
                          className="circle-path"
                          d="M88 8C70 1 22 1 8 12 -2 22 14 36 50 37 86 38 100 26 94 14 90 7 78 4 64 3"
                          stroke="var(--color-pen)"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    )}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mx-5 mt-3 sm:mx-7">
            <label htmlFor={`${uid}-notes`} className={labelCls}>
              Description of work
            </label>
            <textarea
              id={`${uid}-notes`}
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="ruled mt-0.5 block w-full resize-none bg-transparent font-pen text-[1.5rem] text-pen outline-none focus-visible:outline-none"
            />
            <p className="mt-1 text-[0.8rem] text-ink-soft">Rooms, square footage, move-out date, anything Shellie should know.</p>
          </div>

          {/* Actions */}
          <div className="mt-5 border-t-2 border-ink bg-paper-shade/60 px-5 py-4 sm:px-7">
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <button type="submit" className={btnPrimary}>
                <MessageSquareText className="size-[1.1rem]" strokeWidth={2.25} aria-hidden="true" />
                Text it to Shellie
              </button>
              <button type="button" onClick={() => send("email")} className={btnSecondary}>
                <Mail className="size-[1.1rem]" strokeWidth={2.25} aria-hidden="true" />
                Email it instead
              </button>
            </div>
            <p className="mt-2.5 text-[0.8rem] leading-snug text-ink-soft">
              Opens your messages or email app with this order filled in. Nothing is sent until you hit send.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

function CustomerCopy({
  className,
  orderNo,
  method,
  name,
  phone,
  where,
  services: picked,
  onAnother,
}: {
  className: string;
  orderNo: number;
  method: Method;
  name: string;
  phone: string;
  where: string;
  services: string[];
  onAnother: () => void;
}) {
  return (
    <section
      aria-live="polite"
      className={`${className} copy-rise flex flex-col bg-canary text-ink sheet-shadow`}
    >
      <div className="flex items-center justify-between border-b-2 border-ink px-5 py-4 sm:px-7">
        <p className="cond text-[1.35rem] font-extrabold uppercase leading-none">Customer copy</p>
        <p className="tnum text-[1.5rem] font-semibold leading-none tracking-[0.06em] text-serial semi-cond">
          {serial(orderNo)}
        </p>
      </div>
      <div className="flex-1 px-5 py-6 sm:px-7">
        <p className="font-pen text-[2rem] leading-tight text-pen">
          Thanks{name.trim() ? `, ${name.trim().split(" ")[0]}` : ""}!
        </p>
        <p className="mt-3 max-w-[46ch] text-[1.05rem] leading-relaxed">
          Your {method === "sms" ? "messages" : "email"} app should be open with the order filled in
          {picked.length ? ` for ${picked.join(" + ").toLowerCase()} cleaning` : ""}. Hit send and Shellie will get back to you
          with a quote.
        </p>
        <dl className="mt-5 grid max-w-[40rem] grid-cols-[auto_1fr] gap-x-5 border-t border-ink/30 pt-3">
          {[
            ["Name", name.trim()],
            ["Phone", phone.trim()],
            ["Location", where.trim()],
            ["Work", picked.join(", ")],
          ]
            .filter(([, v]) => v)
            .map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="semi-cond pt-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-soft">{k}</dt>
                <dd className="border-b border-ink/20 font-pen text-[1.45rem] leading-[2.1rem] text-pen">{v}</dd>
              </div>
            ))}
        </dl>
        <p className="mt-4 max-w-[46ch] text-[0.95rem] leading-relaxed text-ink-soft">
          Nothing opened? Call or text {business.phoneDisplay} directly.
        </p>
      </div>
      <div className="flex flex-col gap-2.5 border-t-2 border-ink px-5 py-4 sm:flex-row sm:px-7">
        <a href={`tel:${business.phoneE164}`} className={btnPrimary}>
          <Phone className="size-[1.1rem]" strokeWidth={2.25} aria-hidden="true" />
          Call {business.phoneDisplay}
        </a>
        <button type="button" onClick={onAnother} className={btnSecondary}>
          <RotateCcw className="size-[1.1rem]" strokeWidth={2.25} aria-hidden="true" />
          Write another order
        </button>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  className = "",
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className={errCls}>
          {error}
        </p>
      )}
    </div>
  );
}

const labelCls =
  "semi-cond block pt-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-soft";

const entryCls =
  "block h-[2.6rem] w-full border-b border-rule bg-transparent pb-0.5 font-pen text-[1.6rem] leading-none text-pen outline-none transition-colors hover:border-ink-soft focus:border-pen focus:border-b-2 aria-[invalid=true]:border-serial";

const errCls = "mt-1 text-[0.8rem] font-medium text-serial";

const btnBase =
  "inline-flex min-h-12 items-center justify-center gap-2 px-5 text-[0.95rem] font-bold uppercase tracking-[0.06em] semi-cond transition-colors duration-150 active:bg-paper active:text-ink";

const btnPrimary = `${btnBase} border-2 border-ink bg-ink text-paper hover:bg-desk-deep`;

const btnSecondary = `${btnBase} border-2 border-ink bg-transparent text-ink hover:bg-paper`;

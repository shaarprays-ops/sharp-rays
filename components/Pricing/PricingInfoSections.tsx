import Link from "next/link";
import { ArrowUpRight, Check, CircleX, Layers3, ShieldCheck, X } from "lucide-react";

const newYork = { fontFamily: '"New York", Georgia, serif' };

const process = [
  {
    number: "01",
    title: "Free audit or call",
    text: "Share your goals. We review your website, search and social presence.",
  },
  {
    number: "02",
    title: "Clear proposal",
    text: "Get a written plan with scope, timeline and price.",
  },
  {
    number: "03",
    title: "Onboarding",
    text: "We set up access, tracking and your content or campaign plan in 1–2 weeks.",
  },
  {
    number: "04",
    title: "Launch and improve",
    text: "Work goes live and we review results with you every month.",
  },
];

export default function PricingInfoSections() {
  return (
    <>
      <section style={newYork} className="bg-white px-5 py-20 text-[#0B2A52] sm:px-8 md:px-10 lg:px-14 lg:py-28 xl:px-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[30px] border border-[#98B6CF]/25 bg-[linear-gradient(145deg,#F8FBFD,#EAF3FA)] p-7 sm:p-9 lg:p-10">
              <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full border-[35px] border-white/55" />

              <Layers3 size={21} className="relative text-[#547B9F]" />

              <h2 className="relative mt-8 max-w-[530px] text-[2.35rem] font-medium leading-[1.03] tracking-[-0.04em]">
                Need More Than One Service?
              </h2>

              <p className="relative mt-5 max-w-[580px] text-[13px] leading-7 text-[#60768C]">
                Most businesses grow faster when their website, SEO, social media and ads work together. Combine any services and get one plan, one monthly report and one point of contact.
              </p>

            <Link
  href="/contact"
  title="Request a Custom Quote"
  className="group relative mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-[15px] bg-[#0B2A52] px-5 text-[11px] font-medium !text-white transition hover:bg-[#123B69] hover:!text-white"
>
  <span className="!text-white">
    Request a Custom Quote
  </span>

  <ArrowUpRight
    size={14}
    className="!text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  />
</Link>
            </article>

            <article className="rounded-[30px] border border-[#0B2A52]/10 bg-white p-7 sm:p-9 lg:p-10">
              <CircleX size={21} className="text-[#547B9F]" />

              <h2 className="mt-8 text-[2.35rem] font-medium leading-[1.03] tracking-[-0.04em]">
                What&apos;s Not Included in Our Fees
              </h2>

              <div className="mt-7 space-y-5">
                <div className="border-b border-[#0B2A52]/10 pb-5">
                  <h3 className="text-[13px] font-medium">Third-party costs</h3>
                  <p className="mt-2 text-[12px] leading-6 text-[#677C90]">
                    Domains, premium plugins, paid APIs, software subscriptions, AI usage and WhatsApp message charges.
                  </p>
                </div>

                <div className="border-b border-[#0B2A52]/10 pb-5">
                  <h3 className="text-[13px] font-medium">Production</h3>
                  <p className="mt-2 text-[12px] leading-6 text-[#677C90]">
                    Photo and video shoots, models and travel.
                  </p>
                </div>

                <div>
                  <h3 className="text-[13px] font-medium">Extra scope</h3>
                  <p className="mt-2 text-[12px] leading-6 text-[#677C90]">
                    Anything beyond your plan is quoted and approved before we start.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            <div>
              <ShieldCheck size={23} className="text-[#547B9F]" />

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#708DA9]">
                Our Promise
              </p>

              <h2 className="mt-4 max-w-[560px] text-[2.6rem] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]">
                What We Promise (and What We Don&apos;t)
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-[25px] border border-[#9DB8CF]/25 bg-[#F7FBFD] p-6 sm:p-7">
                <h3 className="text-[17px] font-medium">We promise</h3>

                <ul className="mt-6 space-y-4">
                  {[
                    "A written scope and price before any work starts — no hidden charges.",
                    "Your website, domain, ad accounts and content stay in your name.",
                    "Honest monthly reports from your real Google Analytics, Search Console and ad data.",
                    "A reply to every enquiry within 1 working day (Mon–Sat, 10:00–19:00 IST).",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[12px] leading-6 text-[#5F758A]">
                      <Check size={13} className="mt-1 shrink-0 text-[#35658F]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[25px] border border-[#0B2A52]/10 bg-white p-6 sm:p-7">
                <h3 className="text-[17px] font-medium">We don&apos;t promise</h3>

                <div className="mt-6 flex items-start gap-3">
                  <X size={14} className="mt-1 shrink-0 text-[#71899F]" />
                  <p className="text-[12px] leading-7 text-[#64798D]">
                    &quot;#1 rankings&quot;, guaranteed leads or a fixed ROI. No one controls Google or Meta — and any agency that guarantees it should explain how.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section style={newYork} className="bg-[#F8FBFD] px-5 py-20 text-[#0B2A52] sm:px-8 md:px-10 lg:px-14 lg:py-28 xl:px-20">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#708DA9]">
            The Process
          </p>

          <h2 className="mt-4 text-[2.6rem] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]">
            How It Works
          </h2>

          <div className="mt-12 grid border-t border-[#0B2A52]/10 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <article key={item.number} className={`border-b border-[#0B2A52]/10 py-8 md:p-7 ${index < 3 ? "lg:border-r" : ""}`}>
                <span className="text-[9px] tracking-[0.18em] text-[#91A4B6]">{item.number}</span>

                <h3 className="mt-8 text-[18px] font-medium tracking-[-0.025em]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-[#687D91]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

         <Link
  href="/free-audit"
  title="Start With a Free Audit"
  className="group mt-9 inline-flex min-h-[49px] items-center gap-2 rounded-[15px] bg-[#0B2A52] px-6 text-[11px] font-medium !text-white transition hover:bg-[#123B69] hover:!text-white"
>
  <span className="!text-white">
    Start With a Free Audit
  </span>

  <ArrowUpRight
    size={14}
    className="!text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  />
</Link>
        </div>
      </section>
    </>
  );
}
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import type { PricingService } from "./pricingData";

const newYork = { fontFamily: '"New York", Georgia, serif' };

type PricingServiceSectionProps = {
  service: PricingService;
  index: number;
};

export default function PricingServiceSection({ service, index }: PricingServiceSectionProps) {
  const background = index % 2 === 0 ? "bg-[#F8FBFD]" : "bg-white";

  return (
    <section id={service.id} style={newYork} className={`scroll-mt-24 px-5 py-20 text-[#0B2A52] sm:px-8 md:px-10 lg:px-14 lg:py-28 xl:px-20 ${background}`}>
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-7 border-b border-[#0B2A52]/10 pb-9 lg:grid-cols-[1fr_.78fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#708DA9]">
              {service.label}
            </p>

            <h2 className="mt-4 max-w-[880px] text-[2.6rem] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]">
              {service.title}
            </h2>
          </div>

          <p className="max-w-[620px] text-[14px] leading-7 text-[#60758B] lg:justify-self-end">
            {service.description}
          </p>
        </div>

        {service.offer && (
          <div className="mt-7 flex items-center gap-3 rounded-[16px] border border-[#8FAFCC]/20 bg-[#EAF4FA] px-5 py-4 text-[12px] font-medium text-[#355F86]">
            <Sparkles size={14} className="shrink-0" />
            {service.offer}
          </div>
        )}

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {service.plans.map((plan) => (
            <article key={plan.name} className={`relative flex h-full flex-col overflow-hidden rounded-[28px] border p-6 transition duration-300 sm:p-7 lg:p-7 xl:p-8 ${plan.popular ? "border-[#6285AD]/35 bg-[linear-gradient(150deg,#F9FCFE_0%,#EAF4FA_100%)] shadow-[0_24px_70px_rgba(11,42,82,.09)] lg:-translate-y-2" : "border-[#0B2A52]/10 bg-white hover:-translate-y-1 hover:border-[#6285AD]/30 hover:shadow-[0_18px_50px_rgba(11,42,82,.06)]"}`}>
              {plan.popular && (
                <span className="absolute right-5 top-5 rounded-full bg-[#0B2A52] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-white">
                  Most Popular
                </span>
              )}

              <div className={plan.popular ? "pr-28" : ""}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#748EA7]">
                  {plan.name}
                </p>

                <p className="mt-3 text-[24px] font-medium leading-tight tracking-[-0.035em]">
                  {plan.price}
                </p>
              </div>

              {plan.description && (
                <p className="mt-5 min-h-[48px] text-[12px] leading-6 text-[#687D91]">
                  {plan.description}
                </p>
              )}

              {plan.note && (
                <p className="mt-5 rounded-[13px] border border-[#8EADC8]/20 bg-white/70 px-4 py-3 text-[11px] leading-5 text-[#476B8D]">
                  {plan.note}
                </p>
              )}

              <div className="my-6 h-px bg-[#0B2A52]/10" />

              <ul className="flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[12px] leading-[1.65] text-[#506981]">
                    <span className="mt-[2px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#EAF3F9] text-[#315D86]">
                      <Check size={10} strokeWidth={2.4} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

             <Link
  href={plan.href}
  title={plan.cta}
  className={`group mt-8 inline-flex min-h-[48px] items-center justify-between rounded-[15px] px-5 py-3 text-[11px] font-medium transition ${
    plan.popular
      ? "bg-[#0B2A52] !text-white hover:bg-[#123B69] hover:!text-white"
      : "border border-[#0B2A52] bg-[#0B2A52] !text-white hover:bg-[#123B69] hover:!text-white"
  }`}
>
  <span className="!text-white">
    {plan.cta}
  </span>

  <ArrowUpRight
    size={14}
    className="!text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  />
</Link>
            </article>
          ))}
        </div>

        {service.extra && (
          <div className="mt-6 rounded-[22px] border border-[#9AB7D0]/20 bg-[linear-gradient(135deg,#F8FBFD,#EEF6FB)] px-6 py-6 sm:px-8">
            {service.extra.title && (
              <h3 className="text-[17px] font-medium tracking-[-0.02em]">
                {service.extra.title}
              </h3>
            )}

            {service.extra.text && (
              <p className="mt-2 max-w-[900px] text-[12px] leading-6 text-[#63798F]">
                {service.extra.text}
              </p>
            )}

            {service.extra.items && (
              <ul className="mt-5 grid gap-3 md:grid-cols-3">
                {service.extra.items.map((item) => (
                  <li key={item} className="rounded-[14px] bg-white px-4 py-4 text-[11px] leading-5 text-[#526C85] shadow-[0_8px_25px_rgba(11,42,82,.04)]">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className="mt-7 flex flex-col gap-5 border-t border-[#0B2A52]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          {service.note ? (
            <p className="max-w-[920px] text-[11px] leading-6 text-[#75889A]">
              {service.note}
            </p>
          ) : (
            <span />
          )}

          <Link href={service.detailsHref} title={service.detailsLabel} className="group inline-flex shrink-0 items-center gap-2 text-[11px] font-medium text-[#315F88]">
            {service.detailsLabel}
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
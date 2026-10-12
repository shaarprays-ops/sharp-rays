import { pricingFaqs } from "./pricingData";

const newYork = { fontFamily: '"New York", Georgia, serif' };

export default function PricingFAQ() {
  return (
    <section id="faq" style={newYork} className="scroll-mt-24 bg-white px-5 py-20 text-[#0B2A52] sm:px-8 md:px-10 lg:px-14 lg:py-28 xl:px-20">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#708DA9]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 max-w-[520px] text-[2.6rem] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]">
            Digital Marketing Pricing FAQs
          </h2>
        </div>

        <div className="border-t border-[#0B2A52]/10">
          {pricingFaqs.map((faq, index) => (
            <details key={faq.question} className="group border-b border-[#0B2A52]/10">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-6 sm:py-7 [&::-webkit-details-marker]:hidden">
                <div className="flex gap-4 sm:gap-6">
                  <span className="pt-1 text-[9px] tracking-[0.16em] text-[#98A9B8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="max-w-[730px] text-[15px] font-medium leading-6 tracking-[-0.015em] sm:text-[17px]">
                    {faq.question}
                  </h3>
                </div>

                <span className="relative mt-1 h-5 w-5 shrink-0">
                  <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 bg-[#0B2A52]" />
                  <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-[#0B2A52] transition duration-300 group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>

              <div className="pb-7 pl-9 sm:pl-[54px]">
                <p className="max-w-[750px] text-[12px] leading-7 text-[#63798E]">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
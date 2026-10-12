import { BadgeIndianRupee, Boxes, CircleDollarSign, ShieldCheck } from "lucide-react";

const newYork = { fontFamily: '"New York", Georgia, serif' };

const pricingPoints = [
  {
    icon: CircleDollarSign,
    number: "01",
    title: "Starting prices, confirmed in writing.",
    text: 'Every package shows a "from" price. Your final price depends on scope and is fixed in a written proposal before work begins.',
  },
  {
    icon: BadgeIndianRupee,
    number: "02",
    title: "Monthly plans and one-time projects.",
    text: "SEO, social media, ads, video editing and content are monthly plans. Websites are a monthly plan with design and build included (6-month minimum for new builds). AI automation builds are one-time projects.",
  },
  {
    icon: Boxes,
    number: "03",
    title: "Third-party costs are separate.",
    text: "Paid tools, domains, plugins and shoots are billed by the provider or quoted separately.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "You own everything.",
    text: "Your website, ad accounts, content and data stay in your name.",
  },
];

export default function HowPricingWorks() {
  return (
    <section style={newYork} className="bg-white px-5 py-20 text-[#0B2A52] sm:px-8 md:px-10 lg:px-14 lg:py-28 xl:px-20">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#708EAA]">
              Pricing Principles
            </p>

            <h2 className="mt-4 max-w-[500px] text-[2.6rem] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]">
              How Our Pricing Works
            </h2>

            <p className="mt-5 max-w-[460px] text-[14px] leading-7 text-[#64798E]">
              Clear scope first. Clear price second. No guessing what you&apos;re actually paying for.
            </p>
          </div>

          <div className="grid border-t border-[#0B2A52]/10 sm:grid-cols-2">
            {pricingPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <article key={item.number} className={`relative border-b border-[#0B2A52]/10 py-8 sm:p-8 ${index % 2 === 0 ? "sm:border-r" : ""}`}>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF5FA] text-[#426D95]">
                      <Icon size={18} />
                    </span>
                    <span className="text-[10px] tracking-[0.18em] text-[#A0AFBD]">{item.number}</span>
                  </div>

                  <h3 className="mt-7 text-[18px] font-medium leading-6 tracking-[-0.02em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-[#667C91]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
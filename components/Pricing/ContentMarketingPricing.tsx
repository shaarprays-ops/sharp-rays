import Link from "next/link";
import { ArrowUpRight, Check, FileText } from "lucide-react";

const newYork = { fontFamily: '"New York", Georgia, serif' };

const features = [
  "Content strategy, topic research and roadmap",
  "Agreed number of articles or pages each month",
  "Optimisation of existing pages and internal linking",
  "Monthly reporting",
];

export default function ContentMarketingPricing() {
  return (
    <section
      id="content"
      style={newYork}
      className="scroll-mt-24 bg-white px-5 py-20 text-[#0B2A52] sm:px-8 md:px-10 lg:px-14 lg:py-28 xl:px-20"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="relative overflow-hidden rounded-[34px] border border-[#9FBAD2]/25 bg-[linear-gradient(135deg,#F9FCFE_0%,#EAF3FA_100%)] p-7 sm:p-9 lg:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[48px] border-white/45" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_.82fr] lg:items-center">
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#426D95] shadow-[0_12px_35px_rgba(11,42,82,.06)]">
                <FileText size={18} />
              </span>

              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#708DA9]">
                Content Marketing
              </p>

              <h2 className="mt-4 text-[2.6rem] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]">
                Content Marketing Plans
              </h2>

              <p className="mt-5 max-w-[670px] text-[14px] leading-7 text-[#5E758B]">
                Blogs, service-page copy and SEO content written to answer your
                customers&apos; real questions — from ₹12,999/month.
              </p>
            </div>

            <div className="rounded-[26px] border border-white/80 bg-white/75 p-6 shadow-[0_18px_50px_rgba(11,42,82,.05)] backdrop-blur-sm sm:p-8">
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[12px] leading-6 text-[#526B83]"
                  >
                    <span className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#EAF3F9] text-[#315D86]">
                      <Check size={10} />
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact?service=content-marketing"
                title="Get a Content Plan"
                className="group mt-8 flex min-h-[49px] items-center justify-between rounded-[15px] bg-[#0B2A52] px-5 text-[11px] font-medium !text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#123B69] hover:!text-white"
              >
                <span className="!text-white">
                  Get a Content Plan
                </span>

                <ArrowUpRight
                  size={14}
                  className="!text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
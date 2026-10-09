import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ArticleCTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20">
        <div className="relative overflow-hidden rounded-[30px] border border-[#0B2A52]/10 bg-[linear-gradient(135deg,#ffffff_0%,#f4f8fc_55%,#e8f1f9_100%)] px-7 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="max-w-[820px]">
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#6285AD]">
              Turn Insight Into Action
            </p>

            <h2 className="mt-4 font-serif text-[2.6rem] leading-[1] tracking-[-0.035em] text-[#0B2A52] sm:text-[2.95rem] md:text-[3.1rem] lg:text-[3.35rem]">
              Ready to Build a Clearer Growth Strategy?
            </h2>

            <p className="mt-6 max-w-[680px] text-[15px] leading-7 text-[#0B2A52]/68 sm:text-[16px] sm:leading-8">
              If this topic connects with a growth challenge you&apos;re
              working through, Sharp Rays can help turn the thinking into a
              practical digital strategy.
            </p>

            <Link
              href="/contact#contact-form"
              title="Start the Conversation"
              className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[16px] bg-[#0B2A52] px-5 py-[12px] text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(11,42,82,0.18)]"
            >
              Start the Conversation
              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
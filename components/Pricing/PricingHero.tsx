import Link from "next/link";
import { ArrowDown, ArrowUpRight, MessageCircle, Phone } from "lucide-react";

const newYork = { fontFamily: '"New York", Georgia, serif' };

const jumpLinks = [
  { label: "Website", href: "#website" },
  { label: "SEO", href: "#seo" },
  { label: "Social Media", href: "#social-media" },
  { label: "Ads", href: "#ads" },
  { label: "AI Automation", href: "#ai-automation" },
  { label: "Video Editing", href: "#video-editing" },
  { label: "Content", href: "#content" },
  { label: "Compare", href: "#compare" },
  { label: "FAQ", href: "#faq" },
];

export default function PricingHero() {
  return (
    <>
      <section style={newYork} className="relative overflow-hidden bg-white pt-28 text-[#0B2A52] sm:pt-32 lg:pt-36">
        <div className="pointer-events-none absolute -left-[180px] top-16 h-[430px] w-[430px] rounded-full bg-[#EAF3FA]/75 blur-[2px]" />
        <div className="pointer-events-none absolute -right-[220px] top-0 h-[590px] w-[590px] rounded-full border-[70px] border-[#F0F6FA]" />
        <div className="pointer-events-none absolute right-[10%] top-36 h-2 w-2 rounded-full bg-[#B79A72]" />

        <div className="relative mx-auto max-w-[1500px] px-5 pb-14 sm:px-8 sm:pb-16 md:px-10 lg:px-14 lg:pb-20 xl:px-20">
          <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#6285AD]/20 bg-[#F8FBFD]/90 px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B79A72]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#607F9E]">
                  Sharp Rays Pricing
                </span>
              </div>

              <h1 className="mt-7 max-w-[950px] text-[2.65rem] font-medium leading-[.98] tracking-[-0.052em] sm:text-[3.4rem] md:text-[4rem] lg:text-[4.7rem] xl:text-[5.25rem]">
                Digital Marketing Price List{" "}
                <span className="text-[#7192B2]">& Packages</span> in India
              </h1>

              <p className="mt-7 max-w-[780px] text-[15px] leading-7 text-[#526A82] sm:text-[16px] lg:text-[17px] lg:leading-8">
                Clear, published starting prices for websites, SEO, social media, ads, AI automation, video editing and content. Choose a package, or tell us your goal and we&apos;ll build a plan around your budget.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
               <Link
  href="/free-audit"
  title="Get My Free Audit"
  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-[16px] bg-[#0B2A52] px-6 py-3 text-[12px] font-medium !text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#123B69] hover:!text-white"
>
  Get My Free Audit
  <ArrowUpRight
    size={15}
    className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  />
</Link>
                <a href="tel:+919415951060" title="Call Sharp Rays" className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-[16px] border border-[#0B2A52]/15 bg-white px-5 py-3 text-[12px] font-medium text-[#0B2A52] shadow-[0_10px_35px_rgba(11,42,82,.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[#6285AD]/35">
                  <Phone size={14} />
                  Call +91 94159 51060
                </a>

                <a href="https://wa.me/919415951060" target="_blank" rel="noreferrer" title="WhatsApp Sharp Rays" className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-[16px] border border-[#0B2A52]/15 bg-white px-5 py-3 text-[12px] font-medium text-[#0B2A52] transition duration-300 hover:-translate-y-0.5 hover:border-[#6285AD]/35">
                  <MessageCircle size={14} />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="lg:pb-2">
              <div className="relative overflow-hidden rounded-[30px] border border-[#9CB7D0]/25 bg-[linear-gradient(145deg,#F9FCFE_0%,#EBF4FA_100%)] p-7 sm:p-9">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[35px] border-white/60" />

                <p className="relative text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6B89A7]">
                  Explore Pricing
                </p>

                <div className="relative mt-7 grid grid-cols-2 gap-x-5 gap-y-2">
                  {jumpLinks.slice(0, 8).map((item, index) => (
                    <a key={item.href} href={item.href} title={`View ${item.label} pricing`} className="group flex items-center justify-between border-b border-[#0B2A52]/10 py-4 text-[12px] text-[#385F84] transition hover:text-[#0B2A52]">
                      <span>
                      
                        {item.label}
                      </span>
                      <ArrowDown size={12} className="opacity-40 transition group-hover:translate-y-0.5 group-hover:opacity-100" />
                    </a>
                  ))}
                </div>

                <a href="#faq" title="View Pricing FAQ" className="relative mt-5 flex items-center justify-between rounded-[14px] bg-white/75 px-4 py-4 text-[12px] font-medium text-[#0B2A52]">
                  Digital Marketing Pricing FAQs
                  <ArrowDown size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav style={newYork} aria-label="Pricing page navigation" className="sticky top-0 z-40 border-y border-[#0B2A52]/[0.06] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] gap-1 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:px-8 md:px-10 lg:px-14 xl:px-20 [&::-webkit-scrollbar]:hidden">
          {jumpLinks.map((item) => (
            <a key={item.href} href={item.href} title={`Go to ${item.label}`} className="shrink-0 rounded-full px-4 py-2 text-[11px] font-medium text-[#607790] transition hover:bg-[#EEF5FA] hover:text-[#0B2A52]">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
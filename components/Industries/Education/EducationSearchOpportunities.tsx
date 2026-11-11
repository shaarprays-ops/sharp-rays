import {
  ArrowUpRight,
  BookOpen,
  Building2,
  GraduationCap,
  Search,
  Sparkles,
} from "lucide-react";

const audienceTags = ["Schools", "Colleges", "Coaching", "EdTech"];

const searchTerms = [
  "BBA colleges in [city]",
  "MBA admission 2027",
  "BCA course fees",
  "best colleges for BTech in [city]",
  "[course] eligibility and admission",
];

export default function EducationSearchOpportunities() {
  return (
    <section
      id="education-search-opportunities"
      className="relative overflow-hidden bg-white text-[#0B2A52]"
    >
     
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
          {/* Left */}
          <div className="max-w-[620px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
                Where Students Are Searching
              </p>
            </div>

            <h2 className="max-w-[620px] text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
              Your Next Student May Already Be Searching for{" "}
              <span className="text-[#B79A72]">a Course You Offer.</span>
            </h2>

            <p className="mt-6 text-[14px] leading-7 text-[#0B2A52]/68 sm:text-[15px] lg:text-[16px]">
              Students and parents search for programmes, institutions, fees,
              eligibility, locations, admissions and career opportunities. We
              help education businesses create relevant pages and campaigns
              around those searches.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {audienceTags.map((item) => (
                <span
                  key={item}
                  className="inline-flex min-h-[38px] items-center rounded-full border border-[#0B2A52]/10 bg-[#F8FBFD] px-4 text-[11px] font-medium text-[#0B2A52]/72"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-[22px] border border-[#0B2A52]/[0.08] bg-[#F8FBFD] p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#B79A72] shadow-[0_6px_18px_rgba(11,42,82,0.05)]">
                  <BookOpen size={20} strokeWidth={1.7} />
                </span>

                <div>
                  <h3 className="text-[19px] font-medium leading-[1.2] tracking-[-0.02em]">
                    College & Course Searches
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#0B2A52]/65 sm:text-[14px]">
                    Course-specific SEO, programme pages and admission landing
                    pages can bring better-matched prospective students to your
                    website.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="rounded-[28px] border border-[#0B2A52]/[0.08] bg-[linear-gradient(145deg,#F8FBFD_0%,#FFFFFF_100%)] p-5 shadow-[0_18px_45px_rgba(11,42,82,0.05)] sm:p-6 lg:p-7">
              <div className="flex items-center gap-3 rounded-[16px] border border-[#0B2A52]/10 bg-white px-4 py-3.5">
                <Search size={17} className="shrink-0 text-[#B79A72]" />
                <span className="text-[13px] text-[#0B2A52]/45">
                  What are students searching for?
                </span>
                <span className="ml-auto hidden items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-[#0B2A52]/35 sm:flex">
                  <Sparkles size={12} />
                  High intent
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {searchTerms.map((term, index) => (
                  <div
                    key={term}
                    className="group rounded-[18px] border border-[#0B2A52]/[0.08] bg-white p-4 transition-all duration-300 hover:-translate-y-[2px] hover:border-[#B79A72]/35 hover:shadow-[0_12px_28px_rgba(11,42,82,0.06)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF5FB] text-[#0B2A52]">
                        {index === 0 ? (
                          <Building2 size={15} strokeWidth={1.8} />
                        ) : index === 1 ? (
                          <GraduationCap size={15} strokeWidth={1.8} />
                        ) : (
                          <Search size={15} strokeWidth={1.8} />
                        )}
                      </span>

                      <div className="min-w-0">
                        <p className="text-[13px] font-medium leading-5 text-[#0B2A52]">
                          {term}
                        </p>

                        <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#0B2A52]/35">
                          {index % 2 === 0
                            ? "Search opportunity"
                            : "Programme intent"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[18px] border border-[#B79A72]/20 bg-[#FFFDFC] px-4 py-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B79A72]/10 text-[#B79A72]">
                    <ArrowUpRight size={15} strokeWidth={1.8} />
                  </span>

                  <p className="text-[12px] leading-6 text-[#0B2A52]/62 sm:text-[13px]">
                    These are illustrative search patterns, not verified keyword
                    volumes or ranking opportunities. Actual keyword targeting
                    depends on the institution, programme, location and search
                    competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
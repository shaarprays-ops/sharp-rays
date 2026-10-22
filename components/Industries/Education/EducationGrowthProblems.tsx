
import {
  CalendarDays,
  FileX2,
  Search,
  UsersRound,
} from "lucide-react";

const problems = [
  {
    icon: Search,
    title: "Your Courses Aren't Ranking on Google.",
    description:
      "Students search for courses, colleges, coaching centres, fees and admission opportunities, but your website may not appear for relevant searches.",
  },
  {
    icon: UsersRound,
    title: "Getting Enquiries, But Not the Right Students.",
    description:
      "Broad advertising, unclear course information and poorly targeted campaigns can attract enquiries from students who are not eligible, interested or ready to apply.",
  },
  {
    icon: CalendarDays,
    title: "Admissions Depend Too Much on Peak Season.",
    description:
      "Without early search visibility and well-planned admission campaigns, enquiry flow can become inconsistent between admission cycles.",
  },
  {
    icon: FileX2,
    title: "Interested Students Don't Complete Admissions.",
    description:
      "Slow counselling responses, missed follow-ups and complicated application steps can turn genuine student interest into lost opportunities.",
  },
];

export default function EducationGrowthProblems() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#FAFCFE] text-[#0B2A52]">
      {/* Soft decorative background */}
      <div className="pointer-events-none absolute -right-36 -top-52 hidden h-[550px] w-[550px] rounded-full bg-[#E9F3FC] lg:block" />
      <div className="pointer-events-none absolute -right-20 -top-44 hidden h-[450px] w-[450px] rounded-full bg-[#F3F8FD] lg:block" />
      <div className="pointer-events-none absolute -left-40 bottom-[-220px] h-[400px] w-[400px] rounded-full bg-[#EAF3FB]/45 blur-[60px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Section heading */}
        <div className="relative max-w-[1250px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 shrink-0 bg-[#B79A72]" />
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
              What May Be Holding Back Admissions
            </p>
          </div>

          <h2 className="max-w-[1200px] text-[32px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            Students Are Searching.
            <br className="hidden sm:block" />
            <span className="text-[#B79A72]">
              {" "}Why Aren&apos;t More of Them Enquiring?
            </span>
          </h2>

          <p className="mt-6 max-w-[1030px] text-[14px] leading-7 text-[#0B2A52]/70 sm:text-[15px] lg:text-[16px]">
            Having good courses, experienced faculty and modern facilities is
            important. But if prospective students and parents cannot discover
            your institution, find the information they need or receive timely
            responses, they may consider other options.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="relative mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {problems.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group flex min-h-[340px] flex-col rounded-[19px] border border-[#DCE9F5] bg-white/90 p-6 shadow-[0_12px_35px_rgba(11,42,82,0.035)] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#B79A72]/35 hover:shadow-[0_18px_45px_rgba(11,42,82,0.06)] sm:min-h-[365px] sm:p-7 lg:min-h-[385px]"
            >
              {/* Icon */}
              <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#E8F3FD] text-[#0B2A52]">
                <Icon size={31} strokeWidth={1.7} />
              </div>

              {/* Text */}
              <h3 className="mt-5 text-[19px] font-medium leading-[1.2] tracking-[-0.025em] sm:text-[20px] lg:text-[21px]">
                {title}
              </h3>

              <p className="mt-4 flex-1 text-[13px] leading-[1.8] text-[#0B2A52]/68 sm:text-[14px]">
                {description}
              </p>

              {/* Small gold line */}
              <span className="mt-8 h-[2px] w-[54px] bg-[#D6AE78] transition-all duration-300 group-hover:w-[75px]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

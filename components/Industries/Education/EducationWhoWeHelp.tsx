
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Laptop,
  School,
  Settings2,
  Shapes,
} from "lucide-react";

const institutions = [
  {
    number: "01",
    title: "Schools",
    description:
      "Reach parents researching admissions, curriculum, facilities, fees and nearby schools.",
    icon: School,
    category: "School Admissions",
  },
  {
    number: "02",
    title: "Colleges & Universities",
    description:
      "Promote degree programmes, courses and admission opportunities to relevant prospective students.",
    icon: GraduationCap,
    category: "Higher Education",
  },
  {
    number: "03",
    title: "Coaching Institutes",
    description:
      "Generate enquiries for competitive exam preparation, tuition programmes and upcoming batches.",
    icon: BookOpen,
    category: "Coaching & Preparation",
  },
  {
    number: "04",
    title: "EdTech & Online Learning",
    description:
      "Reach interested learners for online courses, certifications, demos and digital training programmes.",
    icon: Laptop,
    category: "Digital Learning",
  },
  {
    number: "05",
    title: "Skill Training Centres",
    description:
      "Connect with people exploring practical skills, professional certifications and career-focused training.",
    icon: Settings2,
    category: "Career & Skill Development",
  },
  {
    number: "06",
    title: "Preschools & Early Learning Centres",
    description:
      "Build visibility and trust with local parents looking for early education and preschool admission options.",
    icon: Shapes,
    category: "Early Education",
  },
];

export default function EducationWhoWeHelp() {
  return (
    <section
      id="education-who-we-help"
      className="relative isolate w-full overflow-hidden bg-white text-[#0B2A52]"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full border border-[#E8F1FA]" />
      <div className="pointer-events-none absolute -right-28 -top-28 h-[350px] w-[350px] rounded-full bg-[#F3F8FD]" />
      <div className="pointer-events-none absolute -left-40 bottom-[-180px] h-[380px] w-[380px] rounded-full bg-[#EFF6FC]/65 blur-[60px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">

        {/* Header */}
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div className="max-w-[820px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 shrink-0 bg-[#B79A72]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
                Education Businesses We Support
              </p>
            </div>

            <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
              Different Institutions.
              <br />
              <span className="text-[#B79A72]">
                Different Admission Goals.
              </span>
            </h2>
          </div>

          <p className="max-w-[530px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px] lg:pb-2">
            From local schools to online learning platforms, education
            marketing should reflect who you want to reach, what you offer
            and how prospective students make decisions.
          </p>
        </div>

        {/* Institution Directory */}
        <div className="mt-12 overflow-hidden rounded-[24px] border border-[#0B2A52]/[0.09] bg-white shadow-[0_20px_55px_rgba(11,42,82,0.035)] sm:mt-14">
          <div className="grid md:grid-cols-2">
            {institutions.map(({ number, title, description, icon: Icon, category }, index) => (
              <article
                key={number}
                className={`group relative flex flex-col gap-5 p-6 transition-colors duration-300 hover:bg-[#F8FBFD] sm:flex-row sm:items-start sm:gap-6 sm:p-8 lg:p-9 ${
                  index % 2 === 0 ? "md:border-r md:border-[#0B2A52]/[0.08]" : ""
                } ${
                  index < 4 ? "border-b border-[#0B2A52]/[0.08]" : ""
                } ${
                  index === 4 ? "max-md:border-b max-md:border-[#0B2A52]/[0.08]" : ""
                }`}
              >
                {/* Icon */}
                <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-[18px] border border-[#DCE9F5] bg-[#F0F6FC] text-[#0B2A52] transition-all duration-300 group-hover:border-[#B79A72]/25 group-hover:bg-white">
                  <Icon size={29} strokeWidth={1.45} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#B79A72]">
                      {category}
                    </span>

                   
                  </div>

                  <h3 className="max-w-[410px] text-[20px] font-medium leading-[1.17] tracking-[-0.025em] sm:text-[22px]">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-[460px] text-[13px] leading-6 text-[#0B2A52]/65 sm:text-[14px] sm:leading-7">
                    {description}
                  </p>
                </div>

                {/* Small gold accent */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#B79A72] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>

        {/* Bottom editorial highlight */}
        <div className="mt-7 flex flex-col gap-5 rounded-[20px] bg-[#0B2A52] px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[#D7BD98]">
              <GraduationCap size={21} strokeWidth={1.6} />
            </span>

            <div>
              <h3 className="text-[17px] font-medium leading-6 sm:text-[18px]">
                Different audiences need different admission strategies.
              </h3>

              <p className="mt-2 max-w-[770px] text-[12px] leading-6 text-white/65 sm:text-[13px]">
                We align search visibility, campaigns, content and enquiry
                journeys with your institution and the students you want
                to reach.
              </p>
            </div>
          </div>

          <span className="flex shrink-0 items-center gap-2 text-[11px] font-medium text-[#D7BD98]">
            Built Around Your Institution
            <ArrowUpRight size={15} strokeWidth={1.7} />
          </span>
        </div>
      </div>
    </section>
  );
}

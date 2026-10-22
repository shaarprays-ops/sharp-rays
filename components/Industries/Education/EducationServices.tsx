
import Image from "next/image";
import {
  FileText,
  Megaphone,
  MessageCircle,
  Monitor,
  Search,
  UsersRound,
} from "lucide-react";

const services = [
  {
    title: "Education SEO & Local Search",
    description:
      "Help your institution, programmes and admission pages become more visible for relevant Google searches. We work on course-specific SEO, local search, technical SEO, internal linking, structured data, Google Business Profile optimisation and educational content.",
    image: "/industries/education/services/education-seo.webp",
    alt: "Modern university campus and academic building",
    imageTitle: "Education SEO and Local Search Services",
    icon: Search,
  },
  {
    title: "Google Ads & Admission Campaigns",
    description:
      "Reach prospective students and parents actively searching for schools, programmes, coaching classes and admission opportunities. We plan campaigns around course intent, eligibility, locations and admission timelines, with landing pages designed to encourage relevant enquiries.",
    image: "/industries/education/services/education-google-ads.webp",
    alt: "Laptop displaying digital marketing analytics and student admission campaigns",
    imageTitle: "Google Ads and Education Admission Campaigns",
    icon: Megaphone,
  },
  {
    title: "Social Media Marketing & Meta Ads",
    description:
      "Build awareness and trust by showcasing campus life, faculty expertise, learning experiences, student achievements, events and facilities. We create content and targeted campaigns that help prospective students and parents discover and evaluate your institution.",
    image: "/industries/education/services/education-social-media.webp",
    alt: "Social media content promoting university campus and student activities",
    imageTitle: "Education Social Media Marketing and Meta Ads",
    icon: UsersRound,
  },
  {
    title: "Admission Landing Pages & Websites",
    description:
      "Create focused pages for courses, programmes, admission campaigns and institutional information. We organise eligibility, curriculum, duration, fees, important dates and application steps with clear enquiry and application actions.",
    image: "/industries/education/services/education-websites.webp",
    alt: "University admission website displayed on a laptop",
    imageTitle: "Education Admission Landing Pages and Websites",
    icon: Monitor,
  },
  {
    title: "WhatsApp & AI Lead Automation",
    description:
      "Help admission teams respond faster and manage prospective student enquiries more efficiently. Workflows can support automatic acknowledgements, approved course information, counsellor assignments, follow-up reminders and application updates.",
    image: "/industries/education/services/education-automation.webp",
    alt: "Education counsellor assisting a student with admission information",
    imageTitle: "WhatsApp and AI Automation for Education Admissions",
    icon: MessageCircle,
  },
  {
    title: "Content Marketing & AI Video Creative",
    description:
      "Create course guides, career-related articles, admission explainers, faculty stories and engaging promotional videos. Help students understand your offerings, explore learning opportunities and make more informed decisions.",
    image: "/industries/education/services/education-content.webp",
    alt: "Educator presenting educational video content in a classroom",
    imageTitle: "Education Content Marketing and AI Video Creative",
    icon: FileText,
  },
];

export default function EducationServices() {
  return (
    <section
      id="education-services"
      className="relative isolate w-full overflow-hidden bg-[#F5FAFE] text-[#0B2A52]"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full border border-[#B79A72]/20" />
      <div className="pointer-events-none absolute -left-24 -top-48 h-[340px] w-[340px] rounded-full border border-[#B79A72]/10" />
      <div className="pointer-events-none absolute -right-40 -top-32 h-[480px] w-[480px] rounded-full bg-[#E8F3FD]/75" />
      <div className="pointer-events-none absolute -right-24 top-[-110px] h-[360px] w-[360px] rounded-full bg-[#F4F9FD]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Section Header */}
        <div className="mx-auto max-w-[950px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#B79A72]" />
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
              What We Can Build for Your Institution
            </p>
            <span className="h-px w-9 bg-[#B79A72]" />
          </div>

          <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            From Better Search Rankings to{" "}
            <span className="text-[#B79A72]">
              Better Admission Enquiries.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[800px] text-[14px] leading-7 text-[#0B2A52]/68 sm:text-[15px] lg:text-[16px]">
            We bring together digital marketing services around your
            programmes, admission goals, target locations and student
            audience to help you attract relevant enquiries and support
            the admission journey.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-11 grid gap-4 sm:mt-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {services.map(({ title, description, image, alt, imageTitle, icon: Icon }) => (
            <article
              key={title}
              className="group relative flex h-full flex-col rounded-[20px] border border-[#E4EDF5] bg-white p-3 shadow-[0_12px_35px_rgba(11,42,82,0.035)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_18px_45px_rgba(11,42,82,0.07)]"
            >
              {/* Image */}
              <div className="relative aspect-[2.15/1] overflow-hidden rounded-[13px] bg-[#EAF2FA]">
                <Image
                  src={image}
                  alt={alt}
                  title={imageTitle}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                />
              </div>

              {/* Overlapping Icon */}
              <div className="relative -mt-6 ml-3 flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border-[3px] border-white bg-[#FBF5EA] text-[#B79A72] shadow-[0_8px_20px_rgba(11,42,82,0.08)]">
                <Icon size={24} strokeWidth={1.7} />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col px-3 pb-4 pt-1 sm:px-4">
                <h3 className="text-[19px] font-medium leading-[1.2] tracking-[-0.025em] sm:text-[20px]">
                  {title}
                </h3>

                <p className="mt-3 text-[13px] leading-[1.7] text-[#0B2A52]/68 sm:text-[14px]">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

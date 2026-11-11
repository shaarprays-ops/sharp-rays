import Image from "next/image";

const healthcareBusinesses = [
  {
    title: "Hospitals & Multispeciality Centres",
    description:
      "Improve visibility for medical departments, hospital locations, facilities and specialist services.",
    image: "/industries/healthcare/who-we-help/hospitals_multispeciality.webp",
    alt: "Modern hospital exterior for healthcare marketing services",
    imgTitle: "Healthcare Marketing for Hospitals and Multispeciality Centres",
  },
  {
    title: "Private Clinics",
    description:
      "Help nearby patients find accurate consultation information, contact details and appointment options.",
    image: "/industries/healthcare/who-we-help/private_clinics.webp",
    alt: "Private clinic consultation room for clinic marketing services",
    imgTitle: "Healthcare Marketing for Private Clinics",
  },
  {
    title: "Doctors & Medical Specialists",
    description:
      "Build clear professional profiles with verified qualifications, specialty information and practice locations.",
    image: "/industries/healthcare/who-we-help/doctors_medical_specialists.webp",
    alt: "Medical specialist workspace with stethoscope and healthcare documents",
    imgTitle: "Healthcare Marketing for Doctors and Medical Specialists",
  },
  {
    title: "Dental Clinics",
    description:
      "Improve local discovery and provide useful information about dental services, consultations and clinic timings.",
    image: "/industries/healthcare/who-we-help/dental_clinics.webp",
    alt: "Modern dental clinic interior for dental marketing services",
    imgTitle: "Healthcare Marketing for Dental Clinics",
  },
  {
    title: "Diagnostic & Imaging Centres",
    description:
      "Make available tests, locations, preparation instructions and enquiry options easier to find.",
    image: "/industries/healthcare/who-we-help/diagnostic_imaging_centres.webp",
    alt: "Diagnostic and imaging centre with scanning equipment",
    imgTitle: "Healthcare Marketing for Diagnostic and Imaging Centres",
  },
  {
    title: "Physiotherapy Centres",
    description:
      "Explain services, practitioner credentials, clinic locations and appointment processes clearly.",
    image: "/industries/healthcare/who-we-help/physiotherapy_centres.webp",
    alt: "Physiotherapy treatment room for physiotherapy marketing services",
    imgTitle: "Healthcare Marketing for Physiotherapy Centres",
  },
  {
    title: "Eye Care Clinics",
    description:
      "Improve visibility for eye care services, specialist information and clinic appointments.",
    image: "/industries/healthcare/who-we-help/eye_care_clinics.webp",
    alt: "Eye care clinic equipment and consultation setup",
    imgTitle: "Healthcare Marketing for Eye Care Clinics",
  },
  {
    title: "Multi-location Healthcare Groups",
    description:
      "Create consistent business information, location-specific pages and coordinated digital communication.",
    image: "/industries/healthcare/who-we-help/multilocation_healthcare_groups.webp",
    alt: "Large healthcare group building for multi-location healthcare marketing",
    imgTitle: "Healthcare Marketing for Multi-location Healthcare Groups",
  },
];

export default function HealthcareWhoWeHelp() {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFD] text-[#0B2A52]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(248,251,253,1)_100%)]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-52 w-52 rounded-full bg-[#EAF4FF] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#EEF5FB] blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20">
        {/* Centered Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
              Healthcare Businesses We Support
            </p>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2 className="mx-auto max-w-[850px] text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            Different Healthcare Providers.{" "}
            <span className="text-[#B79A72]">
              Different Patient Needs.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[740px] text-[14px] leading-7 text-[#0B2A52]/70 sm:text-[15px] lg:text-[16px] lg:leading-8">
            From independent medical practices to multi-location hospitals,
            every healthcare organisation needs a digital presence that
            reflects its specialties, services, locations and patient
            information needs.
          </p>
        </div>

        {/* Healthcare Business Cards */}
        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 xl:mt-16 xl:grid-cols-4">
          {healthcareBusinesses.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[22px] border border-[#0B2A52]/[0.08] bg-white shadow-[0_14px_36px_rgba(11,42,82,0.045)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_20px_48px_rgba(11,42,82,0.08)]"
            >
              {/* Image */}
              <div className="relative h-[155px] overflow-hidden sm:h-[170px]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  title={item.imgTitle}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Card Content */}
              <div className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                <h3 className="text-[18px] font-medium leading-[1.15] tracking-[-0.025em] text-[#0B2A52] sm:text-[19px]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#0B2A52]/68 sm:text-[14px]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
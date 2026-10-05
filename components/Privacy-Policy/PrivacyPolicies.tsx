

import Link from "next/link";



const sections = [
  {
    number: "01",
    title: "Information We Collect",
    content: (
      <>
        <p>
          We may collect information that you voluntarily provide when you
          contact Sharp Rays, submit an enquiry, request an audit, book a call,
          or communicate with us about our services.
        </p>

        <p>This information may include:</p>

        <ul>
          <li>Your name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company or business name</li>
          <li>Website URL</li>
          <li>Selected service or area of interest</li>
          <li>Project requirements</li>
          <li>Any information you include in your enquiry or message</li>
        </ul>
      </>
    ),
  },
  {
    number: "02",
    title: "Information Collected Automatically",
    content: (
      <>
        <p>
          When you visit our website, certain technical and usage information
          may be collected automatically through analytics tools, cookies, and
          similar technologies.
        </p>

        <p>This may include:</p>

        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device type</li>
          <li>Operating system</li>
          <li>Pages visited</li>
          <li>Time spent on pages</li>
          <li>Referral source</li>
          <li>Approximate geographic location</li>
          <li>Website interactions</li>
        </ul>
      </>
    ),
  },
  {
    number: "03",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We may use collected information to:</p>

        <ul>
          <li>Respond to enquiries and contact requests</li>
          <li>Understand your business requirements</li>
          <li>Prepare proposals, audits, recommendations, or estimates</li>
          <li>Deliver and improve our services</li>
          <li>Communicate regarding projects or potential projects</li>
          <li>Improve website performance and user experience</li>
          <li>Measure website traffic and marketing performance</li>
          <li>Prevent misuse, fraud, or security issues</li>
          <li>Comply with applicable legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    number: "04",
    title: "Cookies and Analytics",
    content: (
      <>
        <p>
          Our website may use cookies and similar technologies to understand
          website usage, remember preferences, measure performance, and improve
          our digital experience.
        </p>

        <p>
          We may use third-party analytics and advertising technologies,
          including services such as Google Analytics, Google Tag Manager, or
          other measurement platforms where applicable.
        </p>

        <p>
          These services may collect information according to their own privacy
          policies and terms.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "How We Share Information",
    content: (
      <>
        <p>
          Sharp Rays does not sell your personal information.
        </p>

        <p>
          We may share limited information with trusted service providers when
          required to operate our business or provide services. This may include
          hosting providers, analytics platforms, communication tools, CRM
          systems, payment processors, or other technology providers.
        </p>

        <p>
          We may also disclose information where required by law, regulation,
          court order, or other lawful request.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably
          necessary for the purpose for which it was collected, including
          communication, project administration, legal compliance, accounting,
          dispute resolution, and legitimate business records.
        </p>

        <p>
          Retention periods may vary depending on the type of information and
          the nature of our relationship with you.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Data Security",
    content: (
      <>
        <p>
          We use reasonable technical and organisational measures intended to
          protect information against unauthorised access, loss, misuse,
          alteration, or disclosure.
        </p>

        <p>
          However, no internet transmission, storage system, or digital platform
          can be guaranteed to be completely secure.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Third-Party Links",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, platforms, or
          services.
        </p>

        <p>
          Sharp Rays is not responsible for the privacy practices, security,
          content, or policies of third-party websites. We recommend reviewing
          their privacy policies separately.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Your Rights",
    content: (
      <>
        <p>
          Depending on applicable law, you may have rights relating to your
          personal information, including the ability to request access,
          correction, deletion, or restriction of certain processing.
        </p>

        <p>
          You may contact us if you would like to make a request regarding your
          personal information.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Children’s Privacy",
    content: (
      <>
        <p>
          Our website and services are intended for businesses and individuals
          who are able to engage in commercial services.
        </p>

        <p>
          We do not knowingly collect personal information from children where
          such collection is prohibited by applicable law.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our services, website, technologies, or legal requirements.
        </p>

        <p>
          Any updated version will be published on this page with the revised
          effective date.
        </p>
      </>
    ),
  },
  {
    number: "12",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or how your
          information is handled, you can contact Sharp Rays through our contact
          page.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center text-[#0B2A52] underline decoration-[#6285AD]/40 underline-offset-4 transition-colors hover:text-[#6285AD]"
        >
          Contact Sharp Rays
        </Link>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#0B2A52]">
 <section className="relative overflow-hidden border-b border-[#0B2A52]/10 bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-[#6285AD]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-[-180px] h-[400px] w-[400px] rounded-full bg-[#0B2A52]/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1180px] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24 lg:pt-40">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#6285AD] sm:text-[11px]">
              Legal Information
            </p>

            <h1
              className="text-[42px] font-medium leading-[0.98] tracking-[-0.04em] text-[#0B2A52] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.5rem]"
              style={{
                fontFamily: "New York, ui-serif, Georgia, serif",
              }}
            >
              Privacy Policy
            </h1>

            <p
              className="mx-auto mt-6 max-w-[680px] text-[15px] leading-[1.8] text-[#475467] sm:text-[16px]"
              style={{
                fontFamily: "New York, ui-serif, Georgia, serif",
              }}
            >
              This Privacy Policy explains how Sharp Rays may collect, use,
              store and protect information when you visit our website, contact
              us, or engage with our services.
            </p>

            <p className="mt-5 text-[12px] uppercase tracking-[0.16em] text-[#98A2B3]">
              Effective Date: October 1, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 sm:px-8 lg:grid-cols-[260px_1fr] lg:gap-16 lg:px-12">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6285AD]">
                Privacy Policy
              </p>

              <div className="mt-5 h-px w-16 bg-[#B79A72]" />

              <p className="mt-6 max-w-[210px] text-[13px] leading-[1.8] text-[#667085]">
                How Sharp Rays handles information collected through our
                website and business communications.
              </p>

              <div className="mt-8 border-t border-[#0B2A52]/10 pt-6">
                <Link
                  href="/terms-and-conditions"
                  className="text-[13px] font-medium text-[#0B2A52] transition-colors hover:text-[#6285AD]"
                >
                  View Terms & Conditions →
                </Link>
              </div>
            </div>
          </aside>

          <div className="max-w-[780px]">
            <div className="mb-12 border-b border-[#0B2A52]/10 pb-10">
              <h2
                className="text-[28px] font-medium tracking-[-0.03em] text-[#0B2A52] sm:text-[34px]"
                style={{
                  fontFamily: "New York, ui-serif, Georgia, serif",
                }}
              >
                Your privacy matters.
              </h2>

              <p
                className="mt-5 text-[15px] leading-[1.85] text-[#475467] sm:text-[16px]"
                style={{
                  fontFamily: "New York, ui-serif, Georgia, serif",
                }}
              >
                By using this website or submitting information through our
                forms, you acknowledge the practices described in this Privacy
                Policy.
              </p>
            </div>

            <div className="space-y-12">
              {sections.map((section) => (
                <section
                  key={section.number}
                  className="border-b border-[#0B2A52]/10 pb-12 last:border-b-0"
                >
                  <div className="flex gap-5 sm:gap-7">
                    <span className="mt-1 shrink-0 text-[11px] font-semibold tracking-[0.16em] text-[#B79A72]">
                      {section.number}
                    </span>

                    <div>
                      <h2
                        className="text-[23px] font-medium tracking-[-0.025em] text-[#0B2A52] sm:text-[27px]"
                        style={{
                          fontFamily:
                            "New York, ui-serif, Georgia, serif",
                        }}
                      >
                        {section.title}
                      </h2>

                      <div
                        className="mt-5 space-y-4 text-[14px] leading-[1.85] text-[#475467] sm:text-[15px] [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:list-disc [&_li::marker]:text-[#6285AD]"
                        style={{
                          fontFamily:
                            "New York, ui-serif, Georgia, serif",
                        }}
                      >
                        {section.content}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-14 rounded-[24px] border border-[#6285AD]/20 bg-[#F7FAFD] p-6 sm:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6285AD]">
                Questions?
              </p>

              <h2
                className="mt-3 text-[26px] font-medium tracking-[-0.03em] text-[#0B2A52]"
                style={{
                  fontFamily: "New York, ui-serif, Georgia, serif",
                }}
              >
                Need clarity about your information?
              </h2>

              <p
                className="mt-4 max-w-[580px] text-[14px] leading-[1.8] text-[#667085]"
                style={{
                  fontFamily: "New York, ui-serif, Georgia, serif",
                }}
              >
                Contact us if you have questions about how information submitted
                through the Sharp Rays website is handled.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-[16px] border border-[#6285AD]/30 bg-white/80 px-5 py-[11px] text-[13px] font-medium text-[#0B2A52] shadow-[0_8px_30px_rgba(11,42,82,0.08)] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#6285AD]/40 hover:bg-white hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]"
                style={{
                  fontFamily: "New York, ui-serif, Georgia, serif",
                }}
              >
                Contact Sharp Rays
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
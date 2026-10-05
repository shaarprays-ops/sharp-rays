import Navbar from "@/components/Home/Navbar";
import type { Metadata } from "next";
import Link from "next/link";



const sections = [
  {
    number: "01",
    title: "Acceptance of These Terms",
    content: (
      <>
        <p>
          By accessing or using the Sharp Rays website, contacting us through
          our website, or engaging our services, you agree to these Terms &
          Conditions where applicable.
        </p>

        <p>
          If you do not agree with these terms, you should discontinue use of
          the website.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "About Sharp Rays",
    content: (
      <>
        <p>
          Sharp Rays provides digital growth and marketing-related services
          which may include social media marketing, search engine optimization,
          performance marketing, website development, video and creative
          services, AI video and editing, AI automation, strategy, consulting,
          and related digital services.
        </p>

        <p>
          The exact scope of any client engagement is determined separately
          through a proposal, quotation, statement of work, email confirmation,
          contract, or other agreed documentation.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Website Use",
    content: (
      <>
        <p>You agree not to use this website:</p>

        <ul>
          <li>For unlawful or fraudulent activity</li>
          <li>To interfere with website security or availability</li>
          <li>To attempt unauthorised access to systems or data</li>
          <li>To distribute malicious code or harmful material</li>
          <li>To copy or misuse protected website content</li>
          <li>In any way that may damage Sharp Rays or other users</li>
        </ul>
      </>
    ),
  },
  {
    number: "04",
    title: "Service Scope and Proposals",
    content: (
      <>
        <p>
          Website descriptions provide general information about the services
          Sharp Rays may offer. They do not automatically form a complete
          project agreement.
        </p>

        <p>
          Project scope, timelines, deliverables, revision limits, fees,
          responsibilities, dependencies, and other commercial terms will be
          defined separately before work begins.
        </p>

        <p>
          Additional work outside the agreed scope may require additional fees
          and revised timelines.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Client Responsibilities",
    content: (
      <>
        <p>
          Clients are responsible for providing accurate information,
          approvals, access, files, credentials, brand materials, legal
          permissions, and other resources reasonably required to complete the
          agreed work.
        </p>

        <p>
          Delays in client feedback, approvals, content, access, or required
          materials may affect delivery timelines.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Fees and Payments",
    content: (
      <>
        <p>
          Fees, billing schedules, retainers, deposits, recurring charges, and
          payment deadlines will be communicated in the applicable proposal,
          quotation, invoice, contract, or written agreement.
        </p>

        <p>
          Unless otherwise agreed in writing, work may be paused where payment
          obligations remain overdue.
        </p>

        <p>
          Taxes, transaction charges, platform fees, advertising spend, third
          party subscriptions, software charges, media budgets, or production
          costs may be charged separately where applicable.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Cancellations and Refunds",
    content: (
      <>
        <p>
          Cancellation and refund terms may vary depending on the service,
          project stage, resources committed, third-party costs, and work
          already completed.
        </p>

        <p>
          Any project-specific cancellation, notice period, refund, or
          non-refundable payment terms stated in an agreed proposal, invoice,
          contract, or written communication will apply to that engagement.
        </p>

        <p>
          Payments relating to completed work, committed resources, purchased
          services, advertising spend, or third-party expenses may be
          non-refundable where applicable.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Revisions and Approvals",
    content: (
      <>
        <p>
          Revision rounds may be limited according to the agreed scope.
          Additional revisions or changes after approval may require additional
          fees.
        </p>

        <p>
          Once content, design, development, campaigns, creative assets, or
          other deliverables are approved by the client, subsequent changes may
          be treated as additional work.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          Unless otherwise agreed in writing, Sharp Rays retains ownership of
          its pre-existing methodologies, templates, processes, systems,
          frameworks, reusable components, internal tools, know-how, and other
          intellectual property.
        </p>

        <p>
          Ownership or usage rights for final client deliverables may transfer
          according to the applicable project agreement and subject to full
          payment of all outstanding fees.
        </p>

        <p>
          Third-party assets, software, fonts, plugins, stock media, platforms,
          libraries, or licensed materials remain subject to their respective
          licences and terms.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Portfolio and Case Study Usage",
    content: (
      <>
        <p>
          Unless confidentiality requirements, contractual restrictions, or
          written instructions state otherwise, Sharp Rays may request or use
          publicly launched work for portfolio, case study, award, marketing,
          or promotional purposes.
        </p>

        <p>
          Confidential or restricted information will not knowingly be
          disclosed in violation of an agreed confidentiality obligation.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Third-Party Platforms and Services",
    content: (
      <>
        <p>
          Our work may rely on third-party services such as search engines,
          advertising platforms, social networks, hosting providers, analytics
          tools, APIs, AI platforms, payment services, CRM systems, plugins, or
          software products.
        </p>

        <p>
          Sharp Rays does not control the availability, policies, algorithms,
          pricing, account decisions, technical changes, or performance of
          third-party platforms.
        </p>

        <p>
          Changes made by third parties may affect campaigns, websites,
          rankings, integrations, automations, reporting, or other deliverables.
        </p>
      </>
    ),
  },
  {
    number: "12",
    title: "No Guarantee of Marketing Results",
    content: (
      <>
        <p>
          Marketing, advertising, SEO, content, social media, website,
          automation, and growth services are influenced by many factors outside
          the direct control of Sharp Rays.
        </p>

        <p>
          Unless expressly agreed in writing, we do not guarantee specific
          rankings, traffic, impressions, leads, followers, conversions,
          revenue, sales, return on advertising spend, platform approvals, or
          other commercial outcomes.
        </p>

        <p>
          Forecasts, projections, audits, estimates, benchmarks, and
          recommendations are provided for planning purposes and are not
          guarantees of future performance.
        </p>
      </>
    ),
  },
  {
    number: "13",
    title: "Accuracy of Information",
    content: (
      <>
        <p>
          We aim to keep website information accurate and current, but website
          content may occasionally contain errors, omissions, outdated
          information, or general descriptions that do not apply to every
          project.
        </p>

        <p>
          Sharp Rays may update website content, service descriptions, pricing,
          or availability without prior notice.
        </p>
      </>
    ),
  },
  {
    number: "14",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the extent permitted by applicable law, Sharp Rays will not be
          responsible for indirect, incidental, consequential, special, or
          similar losses arising from use of the website or third-party
          platforms.
        </p>

        <p>
          Any liability relating to a paid client engagement may also be subject
          to limitations contained in the applicable proposal, contract, or
          written agreement.
        </p>
      </>
    ),
  },
  {
    number: "15",
    title: "Confidentiality",
    content: (
      <>
        <p>
          Where confidential information is shared during a project, each party
          should use reasonable care to protect that information and use it only
          for legitimate purposes connected with the engagement.
        </p>

        <p>
          More specific confidentiality obligations may be defined in a
          separate agreement where required.
        </p>
      </>
    ),
  },
  {
    number: "16",
    title: "Suspension or Termination",
    content: (
      <>
        <p>
          Sharp Rays may suspend website access or project work where reasonably
          necessary due to non-payment, misuse, unlawful activity, security
          concerns, serious breach of agreed terms, or other material issues.
        </p>

        <p>
          Project-specific termination provisions may be defined separately in
          the applicable agreement.
        </p>
      </>
    ),
  },
  {
    number: "17",
    title: "Governing Law",
    content: (
      <>
        <p>
          These Terms & Conditions are intended to operate in accordance with
          applicable laws of India.
        </p>

        <p>
          Any specific jurisdiction, dispute resolution process, arbitration
          provision, or court jurisdiction applicable to a client engagement
          should be defined in the relevant contract or written agreement.
        </p>
      </>
    ),
  },
  {
    number: "18",
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          Sharp Rays may revise these Terms & Conditions from time to time.
          Updated terms will be published on this page with the revised
          effective date.
        </p>
      </>
    ),
  },
  {
    number: "19",
    title: "Contact",
    content: (
      <>
        <p>
          If you have questions about these Terms & Conditions, contact Sharp
          Rays through our website.
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

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-[#0B2A52]">
      <Navbar />
      <section className="relative overflow-hidden border-b border-[#0B2A52]/10 bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-[#6285AD]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-[-180px] h-[400px] w-[400px] rounded-full bg-[#B79A72]/[0.07] blur-3xl"
        />

        <div className="relative mx-auto max-w-[1180px] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24 lg:pt-40">
          <div className="mx-auto max-w-[880px] text-center">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#6285AD] sm:text-[11px]">
              Legal Information
            </p>

            <h1
              className="text-[42px] font-medium leading-[0.98] tracking-[-0.04em] text-[#0B2A52] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.5rem]"
              style={{
                fontFamily: "New York, ui-serif, Georgia, serif",
              }}
            >
              Terms & Conditions
            </h1>

            <p
              className="mx-auto mt-6 max-w-[720px] text-[15px] leading-[1.8] text-[#475467] sm:text-[16px]"
              style={{
                fontFamily: "New York, ui-serif, Georgia, serif",
              }}
            >
              These terms explain the conditions that apply when using the
              Sharp Rays website and provide general terms relevant to our
              services and client engagements.
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
                Terms & Conditions
              </p>

              <div className="mt-5 h-px w-16 bg-[#B79A72]" />

              <p className="mt-6 max-w-[215px] text-[13px] leading-[1.8] text-[#667085]">
                General website, service and commercial terms for Sharp Rays.
              </p>

              <div className="mt-8 border-t border-[#0B2A52]/10 pt-6">
                <Link
                  href="/privacy-policy"
                  title="View Sharp Rays Privacy Policy"
                  className="text-[13px] font-medium text-[#0B2A52] transition-colors hover:text-[#6285AD]"
                >
                  View Privacy Policy →
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
                Clear terms. Clear expectations.
              </h2>

              <p
                className="mt-5 text-[15px] leading-[1.85] text-[#475467] sm:text-[16px]"
                style={{
                  fontFamily: "New York, ui-serif, Georgia, serif",
                }}
              >
                These website terms provide a general framework. Where you
                become a client, the applicable proposal, quotation, scope,
                invoice, contract, or written agreement may contain additional
                or more specific terms.
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
                Need Clarification?
              </p>

              <h2
                className="mt-3 text-[26px] font-medium tracking-[-0.03em] text-[#0B2A52]"
                style={{
                  fontFamily: "New York, ui-serif, Georgia, serif",
                }}
              >
                Questions about our terms?
              </h2>

              <p
                className="mt-4 max-w-[580px] text-[14px] leading-[1.8] text-[#667085]"
                style={{
                  fontFamily: "New York, ui-serif, Georgia, serif",
                }}
              >
                Contact us if you need clarification about website use,
                proposals, project terms, or service engagements.
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
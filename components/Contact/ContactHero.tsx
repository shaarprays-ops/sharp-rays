"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Bot,
  ChevronDown,
  CircleHelp,
  Clock3,
  Code2,
  FileText,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Search,
  TrendingUp,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const newYorkFont = {
  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',
};

/* =========================================================
   DATA
========================================================= */

const services = [
  "Social Media Marketing",
  "SEO",
  "Content Marketing",
  "Performance Marketing",
  "Website Development",
  "AI Video & Video Editing",
  "AI Automation",
  "Not Sure Yet",
];

const serviceQueryMap: Record<string, string> = {
  "social-media-marketing": "Social Media Marketing",
  seo: "SEO",
  "content-marketing": "Content Marketing",
  "performance-marketing": "Performance Marketing",
  "website-development": "Website Development",
  "ai-video-editing": "AI Video & Video Editing",
  "ai-automation": "AI Automation",
};

const planQueryMap: Record<string, string> = {
  starter: "Starter Plan",
  foundation: "Foundation Plan",
  growth: "Growth Plan",
  scale: "Scale Plan",
  launch: "Launch Plan",
  "edit-starter": "Edit Starter Plan",
  "edit-growth": "Edit Growth Plan",
  "edit-scale": "Edit Scale Plan",
  "ai-starter": "AI Starter Plan",
  "ai-growth": "AI Growth Plan",
  "ai-scale": "AI Scale Plan",
};

const needQueryMap: Record<string, string> = {
  // Social Media
  "platform-strategy": "Platform Strategy",
  "custom-social-media-plan": "Custom Social Media Plan",

  // SEO
  "seo-opportunity-review": "Free SEO Opportunity Review",

  // Performance Marketing
  "paid-media-strategy": "Paid Media Strategy",
  "google-ads-management": "Google Ads Management",
  "paid-social-advertising": "Paid Social Advertising",
  "performance-creative": "Performance Creative",
  "landing-page-optimization": "Landing Page Optimization",
  "conversion-tracking": "Conversion Tracking",
  retargeting: "Retargeting",
  "campaign-optimization": "Campaign Optimization",
  "custom-performance-plan": "Custom Performance Marketing Plan",

  // Website Development
  "website-strategy-architecture": "Website Strategy & Architecture",
  "ux-interface-design": "UX & Interface Design",
  "custom-website-development": "Custom Website Development",
  "nextjs-website-development": "Next.js Website Development",
  "responsive-website-development": "Responsive Website Development",
  "landing-page-development": "Landing Page Development",
  "website-redesign-redevelopment": "Website Redesign & Redevelopment",
  "cms-content-management": "CMS & Content Management",
  "integrations-functionality": "Integrations & Functionality",
  "custom-web-development": "Custom Website Development Quote",

  // Content Marketing
  "content-strategy": "Content Strategy",
  "content-plan": "Content Marketing Plan",
  "content-question": "Content Marketing Question",

  // AI Video & Editing
  "ai-video-creation": "AI Video Creation",
  "professional-video-editing": "Professional Video Editing",
  "short-form-video-editing": "Short-Form Video Editing",
  "social-media-video-editing": "Social Media Video Editing",
  "advertising-performance-video": "Advertising & Performance Video",
  "ai-product-concept-videos": "AI Product & Concept Videos",
  "motion-graphics-visual-effects": "Motion Graphics & Visual Effects",
  "video-repurposing": "Video Repurposing",
  "captions-subtitles-text-treatment": "Captions, Subtitles & Text Treatment",
  "ai-assisted-enhancement": "AI-Assisted Enhancement",
  "combined-video-plan": "AI Video + Regular Editing Plan",

  // AI Automation
  "automation-for-team": "Automation for My Team",
  "custom-automation-system": "Custom AI Automation System",
  "automation-question": "AI Automation Question",
  "automation-discovery": "Automation Opportunity Discovery",
};

const problemRoutes = [
  {
    problem: "People can’t find us",
    service: "SEO",
    icon: Search,
    accent: "#4278A5",
    soft: "#EAF3FA",
  },
  {
    problem: "Our social media feels random",
    service: "Social Media Marketing",
    icon: Megaphone,
    accent: "#75659B",
    soft: "#F0EDF7",
  },
  {
    problem: "We have knowledge but don’t know what to publish",
    service: "Content Marketing",
    icon: FileText,
    accent: "#A17B52",
    soft: "#F7EFE3",
  },
  {
    problem: "We’re spending on ads but results are unclear",
    service: "Performance Marketing",
    icon: TrendingUp,
    accent: "#477D72",
    soft: "#E7F2EE",
  },
  {
    problem: "Our website doesn’t represent us anymore",
    service: "Website Development",
    icon: Code2,
    accent: "#4F7499",
    soft: "#E9F1F8",
  },
  {
    problem: "We need more video without more production friction",
    service: "AI Video & Video Editing",
    icon: Bot,
    accent: "#9A6E55",
    soft: "#F6ECE7",
  },
  {
    problem: "It’s a mix of things",
    service: "Not Sure Yet",
    icon: CircleHelp,
    accent: "#6C7D8B",
    soft: "#EFF3F5",
  },
];

const process = [
  {
    number: "01",
    title: "You Send the Enquiry",
    description:
      "Give us enough context to understand what you are looking for.",
  },
  {
    number: "02",
    title: "We Review It",
    description:
      "We look at the information you have provided before recommending the next step.",
  },
  {
    number: "03",
    title: "We Talk",
    description:
      "If the project looks like something we can help with, we arrange a conversation.",
  },
  {
    number: "04",
    title: "We Define the Scope",
    description:
      "We clarify priorities, services, responsibilities, deliverables and dependencies.",
  },
  {
    number: "05",
    title: "You Receive a Proposal",
    description:
      "Where appropriate, we provide a clear project or ongoing-service proposal.",
  },
  {
    number: "06",
    title: "We Start",
    description:
      "Once everything is agreed, the work moves into discovery or planning.",
  },
];

const expectations = [
  {
    title: "Scope",
    description: "What Sharp Rays is responsible for.",
  },
  {
    title: "Deliverables",
    description: "What will actually be created or managed.",
  },
  {
    title: "Inputs",
    description: "What we need from your team.",
  },
  {
    title: "Timeline",
    description: "Important stages, dependencies and approvals.",
  },
  {
    title: "Revisions",
    description: "How feedback and changes are handled.",
  },
  {
    title: "Commercials",
    description: "What the work costs and what is not included.",
  },
  {
    title: "Measurement",
    description: "How progress or outcomes will be evaluated where relevant.",
  },
];

const faqs = [
  {
    question: "Do I need to know which service I need?",
    answer:
      "No. If you know what you need, select the relevant service. If you are unsure, choose Not Sure Yet and explain the problem you are trying to solve.",
  },
  {
    question: "Do I need a full project brief?",
    answer:
      "No. A short explanation of your business, current situation and objective is enough to begin the conversation.",
  },
  {
    question: "Does Sharp Rays work with startups?",
    answer:
      "Yes. The right scope depends on the stage of the business, available resources and the problem that needs to be solved.",
  },
  {
    question: "Do you work with established businesses too?",
    answer:
      "Yes. Sharp Rays can support businesses that already have existing websites, marketing teams, campaigns or digital systems and need help improving a specific area.",
  },
  {
    question: "Can I contact you for just one service?",
    answer:
      "Yes. A project can focus on one service where that is all the business needs. We do not require every engagement to combine multiple services.",
  },
 
  
];

/* =========================================================
   REUSABLE SECTION LABEL
========================================================= */

function Eyebrow({
  children,
  centered = false,
}: {
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 ${
        centered ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-9 bg-[#B79A72]" />

      <span
        className="
          text-[0.55rem]
          font-semibold
          uppercase
          tracking-[0.29em]
          text-[#92745C]
          sm:text-[0.61rem]
        "
      >
        {children}
      </span>

      {centered && <span className="h-px w-9 bg-[#B79A72]" />}
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ContactPage() {
  const reduceMotion = Boolean(useReducedMotion());

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [enquiryNeed, setEnquiryNeed] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const serviceParam = params.get("service");
    const needParam = params.get("need");
    const planParam = params.get("plan");

    if (serviceParam && serviceQueryMap[serviceParam]) {
      setSelectedServices([serviceQueryMap[serviceParam]]);
    }

    if (needParam && needQueryMap[needParam]) {
      setEnquiryNeed(needQueryMap[needParam]);
    } else {
      setEnquiryNeed("");
    }

    if (planParam && planQueryMap[planParam]) {
      setSelectedPlan(planQueryMap[planParam]);
    } else {
      setSelectedPlan("");
    }

    // Service-page CTAs have clear contact intent, so take the user
    // directly to the form while preserving the selected context.
    if (serviceParam || needParam || planParam) {
      window.setTimeout(() => {
        document.getElementById("contact-form")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 250);
    }
  }, []);

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.075,
      },
    },
  };

  const toggleService = (service: string) => {
    if (service === "Not Sure Yet") {
      setSelectedServices(
        selectedServices.includes(service) ? [] : ["Not Sure Yet"],
      );
      return;
    }

    let current = selectedServices.filter(
      (item) => item !== "Not Sure Yet",
    );

    if (current.includes(service)) {
      current = current.filter((item) => item !== service);
    } else {
      current = [...current, service];
    }

    setSelectedServices(current);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    if (selectedServices.length === 0) {
      setSubmitStatus("error");
      setSubmitMessage("Please select at least one service or choose Not Sure Yet.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      website: String(formData.get("website") || "").trim(),
      services: selectedServices,
      selectedPlan,
      enquiryNeed,
      message: String(formData.get("message") || "").trim(),
      budget: String(formData.get("budget") || "").trim(),
      timeline: String(formData.get("timeline") || "").trim(),
      source: String(formData.get("source") || "").trim(),
      websiteConfirm: String(formData.get("websiteConfirm") || "").trim(),
    };

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          typeof result?.message === "string"
            ? result.message
            : "Something went wrong while sending your enquiry.",
        );
      }

      setSubmitStatus("success");
      setSubmitMessage(
        "Thanks — your enquiry has been sent to Sharp Rays. We’ll review it and get back to you.",
      );

      form.reset();
      setSelectedServices([]);
      setSelectedPlan("");
      setEnquiryNeed("");
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "We couldn’t send your enquiry. Please try again or email info@sharprays.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="overflow-hidden bg-white text-[#0B2A52]">
      {/* =====================================================
          SECTION 01 — HERO
      ===================================================== */}

     <section
  className="
    relative
    isolate
    overflow-hidden
    bg-white

    pb-16
    pt-24

    sm:pb-20
    sm:pt-28

    md:pb-24
    md:pt-32

    lg:min-h-[82vh]
    lg:pb-28
    lg:pt-36
  "
>
  {/* =====================================================
      BACKGROUND
  ===================================================== */}

  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      inset-0
      -z-20
      overflow-hidden
    "
  >
    {/* TOP BLUE GLOW */}

    <div
      className="
        absolute
        left-1/2
        top-[-260px]

        h-[500px]
        w-[760px]

        -translate-x-1/2

        rounded-full

        bg-[#EDF5FB]

        blur-[130px]

        sm:top-[-320px]
        sm:h-[620px]
        sm:w-[1000px]

        lg:top-[-360px]
        lg:h-[720px]
        lg:w-[1250px]
        lg:blur-[165px]
      "
    />

    {/* SOFT GOLD GLOW */}

    <div
      className="
        absolute
        -right-[180px]
        bottom-[-120px]

        h-[330px]
        w-[330px]

        rounded-full

        bg-[#FBF4EA]

        blur-[100px]

        sm:h-[390px]
        sm:w-[390px]

        lg:-right-[210px]
        lg:bottom-[-100px]
        lg:h-[450px]
        lg:w-[450px]
        lg:blur-[120px]
      "
    />

    {/* VERY SOFT LEFT DETAIL */}

    <div
      className="
        absolute
        -left-[180px]
        top-[42%]

        h-[320px]
        w-[320px]

        rounded-full

        bg-[#EEF5FA]/70

        blur-[115px]
      "
    />
  </div>

  {/* =====================================================
      CONTENT
  ===================================================== */}

  <div
    className="
      relative
      z-10

      mx-auto
      flex
      w-full
      max-w-[1240px]

      items-center
      justify-center

      px-4

      sm:px-6
      md:px-8
      lg:px-12
      xl:px-14
    "
  >
    {/* =====================================================
        HERO COPY
    ===================================================== */}

    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="
        mx-auto
        w-full
        max-w-[880px]

        text-center
      "
    >
      {/* EYEBROW */}

      <motion.div variants={fadeUp}>
        <Eyebrow centered>Let&apos;s Talk</Eyebrow>
      </motion.div>

      {/* HEADING */}

      <motion.h1
        variants={fadeUp}
        className="
          mx-auto
          mt-5
          max-w-[840px]

          font-serif

          text-[2.2rem]
          font-normal
          leading-[1.03]
          tracking-[-0.05em]

          text-[#0B2A52]

          sm:mt-6
          sm:text-[2.6rem]

          md:text-[2.95rem]

          lg:text-[3.1rem]

          xl:text-[3.35rem]
        "
      >
        Tell Us What You&apos;re Trying to{" "}
        <span className="italic text-[#A97C52]">
          Improve.
        </span>
      </motion.h1>

      {/* COPY */}

      <motion.div
        variants={fadeUp}
        className="
          mx-auto
          mt-5
          max-w-[680px]

          space-y-1.5

          font-serif
          text-[0.9rem]
          leading-[1.7]

          text-[#5F7488]

          sm:mt-6
          sm:space-y-2
          sm:text-[1rem]
          sm:leading-[1.75]
        "
      >
        <p>You do not need a perfect brief.</p>

        <p>
          You do not need to know exactly which service you need.
        </p>

        <p className="pt-1.5 sm:pt-2">
          Tell us what you are trying to achieve, what feels unclear or
          what is currently not working.
        </p>

        <p className="font-medium text-[#0B2A52]">
          We&apos;ll start there.
        </p>
      </motion.div>

      {/* =====================================================
          CTA BUTTONS
      ===================================================== */}

      <motion.div
        variants={fadeUp}
        className="
          mx-auto
          mt-7

          flex
          w-full
          max-w-[430px]

          flex-row
          flex-nowrap

          items-center
          justify-center

          gap-2

          sm:mt-8
          sm:max-w-none
          sm:gap-3
        "
      >
        {/* PRIMARY BUTTON */}

        <a
          href="#contact-form"
          style={newYorkFont}
          className="
            group
            relative

            inline-flex

            min-h-[44px]
            min-w-0
            flex-1

            items-center
            justify-center

            overflow-hidden

            rounded-[16px]

            border
            border-[#6285AD]/30

            bg-white/80

            px-3
            py-[10px]

            text-[10px]
            font-medium
            tracking-[-0.01em]

            text-[#0B2A52]

            shadow-[0_8px_30px_rgba(11,42,82,0.08)]

            backdrop-blur-[8px]

            transition-all
            duration-300
            ease-out

            hover:-translate-y-[2px]
            hover:border-[#6285AD]/40
            hover:bg-white
            hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]

            active:translate-y-0

            sm:min-h-[48px]
            sm:flex-none
            sm:px-6
            sm:py-3
            sm:text-[14px]

            md:text-[15px]
          "
        >
          {/* INNER BORDER */}

          <span
            className="
              pointer-events-none
              absolute
              inset-[2px]

              rounded-[13px]

              border
              border-white/60
            "
          />

          {/* TOP LIGHT */}

          <span
            className="
              pointer-events-none
              absolute
              inset-x-4
              top-0

              h-px

              bg-gradient-to-r
              from-transparent
              via-white
              to-transparent
            "
          />

          {/* TEXT */}

          <span
            className="
              relative
              z-10

              whitespace-nowrap

              text-[#0B2A52]
            "
          >
            Start the Conversation
          </span>
        </a>

        {/* SECONDARY BUTTON */}

        <a
          href="/#services"
          title="Explore Our Services"
          style={newYorkFont}
          className="
            group
            relative

            inline-flex

            min-h-[44px]
            min-w-0
            flex-1

            items-center
            justify-center

            overflow-hidden

            rounded-[16px]

            border
            border-[#6285AD]/30

            bg-white/80

            px-3
            py-[10px]

            text-[10px]
            font-medium
            tracking-[-0.01em]

            text-[#0B2A52]

            shadow-[0_8px_30px_rgba(11,42,82,0.08)]

            backdrop-blur-[8px]

            transition-all
            duration-300
            ease-out

            hover:-translate-y-[2px]
            hover:border-[#6285AD]/40
            hover:bg-white
            hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]

            active:translate-y-0

            sm:min-h-[48px]
            sm:flex-none
            sm:px-6
            sm:py-3
            sm:text-[14px]

            md:text-[15px]
          "
        >
          {/* INNER BORDER */}

          <span
            className="
              pointer-events-none
              absolute
              inset-[2px]

              rounded-[13px]

              border
              border-white/60
            "
          />

          {/* TOP LIGHT */}

          <span
            className="
              pointer-events-none
              absolute
              inset-x-4
              top-0

              h-px

              bg-gradient-to-r
              from-transparent
              via-white
              to-transparent
            "
          />

          {/* TEXT */}

          <span
            className="
              relative
              z-10

              whitespace-nowrap

              text-[#0B2A52]
            "
          >
            Explore Our Services
          </span>
        </a>
      </motion.div>

      {/* =====================================================
          SUPPORTING LINE
      ===================================================== */}

      <motion.div
        variants={fadeUp}
        className="
          mt-7

          flex
          flex-wrap

          items-center
          justify-center

          gap-x-2.5
          gap-y-2

          sm:mt-9
          sm:gap-x-3
        "
      >
        {["Ask", "Understand", "Plan", "Move"].map(
          (item, index) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-2.5

                sm:gap-3
              "
            >
              <span
                className="
                  text-[0.42rem]
                  font-semibold
                  uppercase
                  tracking-[0.16em]

                  text-[#6D8193]

                  sm:text-[0.45rem]
                  sm:tracking-[0.19em]
                "
              >
                {item}
              </span>

              {index !== 3 && (
                <span
                  className="
                    h-1
                    w-1

                    shrink-0

                    rounded-full

                    bg-[#B79A72]
                  "
                />
              )}
            </div>
          ),
        )}
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* =====================================================
          SECTION 02 — CONTACT FORM
      ===================================================== */}

      <section
        id="contact-form"
        className="
          relative
          scroll-mt-24
          overflow-hidden
          bg-[#F8FAFC]
          py-16
          sm:py-20
          md:py-24
          lg:py-28
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1380px]
            gap-10
            px-4
            sm:gap-12
            sm:px-6
            md:px-8
            lg:grid-cols-[0.72fr_1.28fr]
            lg:gap-14
            lg:px-12
            xl:px-16
          "
        >
          {/* LEFT INTRO */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <Eyebrow>Start a Project</Eyebrow>

            <h2
              className="
                mt-6
                max-w-[540px]
                font-serif
                text-[2.1rem]
                leading-[1.04]
                tracking-[-0.045em]
                text-[#0B2A52]
                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              A Few Details. Then We Can{" "}
              <span className="italic text-[#A97C52]">
                Talk Properly.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-[460px]
                font-serif
                text-[0.95rem]
                leading-[1.75]
                text-[#60758A]
              "
            >
              Give us enough context to understand where the conversation
              should begin.
            </p>

            <div
              className="
                mt-9
                border-l-2
                border-[#B79A72]
                pl-5
              "
            >
              <p
                className="
                  font-serif
                  text-[1.05rem]
                  leading-[1.6]
                  text-[#0B2A52]
                "
              >
                No pressure. No automated sales sequence.
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[0.83rem]
                  leading-[1.6]
                  text-[#6A7E90]
                "
              >
                Just enough information for us to understand what you need.
              </p>
            </div>
          </motion.div>

          {/* FORM */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 28,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease }}
            className="
              rounded-[28px]
              border
              border-[#D8E3E9]
              bg-white
              p-5
              shadow-[0_24px_65px_rgba(11,42,82,0.055)]
              sm:p-7
              md:p-8
            "
          >
            {/* BASIC FIELDS */}

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-[#60758A]">
                  Your Name *
                </span>

                <input
                  required
                  name="name"
                  placeholder="Your name"
                  className="
                    mt-2.5
                    w-full
                    rounded-[13px]
                    border
                    border-[#D8E2E8]
                    bg-[#FBFCFD]
                    px-4
                    py-3.5
                    font-serif
                    text-[0.86rem]
                    text-[#0B2A52]
                    outline-none
                    transition
                    placeholder:text-[#A6B1BA]
                    focus:border-[#89A4B9]
                    focus:bg-white
                  "
                />
              </label>

              <label className="block">
                <span className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-[#60758A]">
                  Work Email *
                </span>

                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="
                    mt-2.5
                    w-full
                    rounded-[13px]
                    border
                    border-[#D8E2E8]
                    bg-[#FBFCFD]
                    px-4
                    py-3.5
                    font-serif
                    text-[0.86rem]
                    text-[#0B2A52]
                    outline-none
                    transition
                    placeholder:text-[#A6B1BA]
                    focus:border-[#89A4B9]
                    focus:bg-white
                  "
                />
              </label>

              <label className="block">
                <span className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-[#60758A]">
                  Company / Brand
                </span>

                <input
                  name="company"
                  placeholder="Company name"
                  className="
                    mt-2.5
                    w-full
                    rounded-[13px]
                    border
                    border-[#D8E2E8]
                    bg-[#FBFCFD]
                    px-4
                    py-3.5
                    font-serif
                    text-[0.86rem]
                    text-[#0B2A52]
                    outline-none
                    placeholder:text-[#A6B1BA]
                    focus:border-[#89A4B9]
                    focus:bg-white
                  "
                />
              </label>

              <label className="block">
                <span className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-[#60758A]">
                  Website
                </span>

                <input
                  name="website"
                  placeholder="www.yourwebsite.com"
                  className="
                    mt-2.5
                    w-full
                    rounded-[13px]
                    border
                    border-[#D8E2E8]
                    bg-[#FBFCFD]
                    px-4
                    py-3.5
                    font-serif
                    text-[0.86rem]
                    text-[#0B2A52]
                    outline-none
                    placeholder:text-[#A6B1BA]
                    focus:border-[#89A4B9]
                    focus:bg-white
                  "
                />
              </label>
            </div>

            {/* SERVICES */}

            <div className="mt-7">
              <span
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#60758A]
                "
              >
                What Can We Help With? *
              </span>

              <p
                className="
                  mt-1.5
                  font-serif
                  text-[0.75rem]
                  text-[#8796A3]
                "
              >
                Select one or more.
              </p>

              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  gap-2.5
                "
              >
                {services.map((service) => {
                  const selected = selectedServices.includes(service);

                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      style={newYorkFont}
                      className={`
                        group
                        relative
                        inline-flex
                        min-h-[42px]
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-[16px]
                        border
                        px-4
                        py-2.5
                        text-[11px]
                        font-medium
                        tracking-[-0.01em]
                        shadow-[0_7px_24px_rgba(11,42,82,0.065)]
                        backdrop-blur-[8px]
                        transition-all
                        duration-300
                        hover:-translate-y-[2px]
                        hover:shadow-[0_10px_28px_rgba(98,133,173,0.13)]
                        sm:min-h-[44px]
                        sm:px-5
                        sm:text-[12px]

                        ${
                          selected
                            ? "border-[#0B2A52] bg-[#0B2A52] text-white shadow-[0_10px_30px_rgba(11,42,82,0.16)]"
                            : "border-[#6285AD]/30 bg-white/80 text-[#0B2A52] hover:border-[#6285AD]/40 hover:bg-white"
                        }
                      `}
                    >
                      <span className="pointer-events-none absolute inset-[2px] rounded-[13px] border border-white/60" />
                      <span className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                        {selected && (
                          <span aria-hidden="true" className="text-[12px]">
                            ✓
                          </span>
                        )}
                        {service}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PRE-SELECTED ENQUIRY CONTEXT */}
            {(enquiryNeed || selectedPlan) && (
              <div className="mt-5 rounded-[16px] border border-[#D8E3E9] bg-[#F8FAFC] px-4 py-3.5">
                <span className="text-[0.48rem] font-semibold uppercase tracking-[0.18em] text-[#92745C]">
                  You&apos;re enquiring about
                </span>

                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedPlan && (
                    <span className="rounded-full border border-[#C9D8E2] bg-white px-3 py-1.5 font-serif text-[0.75rem] text-[#0B2A52]">
                      {selectedPlan}
                    </span>
                  )}

                  {enquiryNeed && (
                    <span className="rounded-full border border-[#C9D8E2] bg-white px-3 py-1.5 font-serif text-[0.75rem] text-[#0B2A52]">
                      {enquiryNeed}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Keep pre-selected context available when the form is wired to a backend */}
            <input
              type="hidden"
              name="services"
              value={selectedServices.join(", ")}
            />
            <input type="hidden" name="selectedPlan" value={selectedPlan} />
            <input type="hidden" name="enquiryNeed" value={enquiryNeed} />

            {/* Honeypot: real users never see or fill this */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden opacity-0"
            >
              <label htmlFor="websiteConfirm">Leave this field empty</label>
              <input
                id="websiteConfirm"
                name="websiteConfirm"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* MESSAGE */}

            <label className="mt-7 block">
              <span
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#60758A]
                "
              >
                What Are You Trying to Achieve? *
              </span>

              <textarea
                required
                name="message"
                rows={6}
                placeholder="Tell us about the challenge, project or opportunity. What would you like to improve?"
                className="
                  mt-2.5
                  w-full
                  resize-none
                  rounded-[15px]
                  border
                  border-[#D8E2E8]
                  bg-[#FBFCFD]
                  px-4
                  py-4
                  font-serif
                  text-[0.86rem]
                  leading-[1.65]
                  text-[#0B2A52]
                  outline-none
                  placeholder:text-[#A6B1BA]
                  focus:border-[#89A4B9]
                  focus:bg-white
                "
              />
            </label>

            {/* SELECTS */}

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <label>
                <span className="text-[0.48rem] font-semibold uppercase tracking-[0.16em] text-[#60758A]">
                  Estimated Budget
                </span>

                <select
                  name="budget"
                  defaultValue=""
                  className="
                    mt-2.5
                    w-full
                    rounded-[13px]
                    border
                    border-[#D8E2E8]
                    bg-[#FBFCFD]
                    px-4
                    py-3.5
                    font-serif
                    text-[0.79rem]
                    text-[#536D83]
                    outline-none
                  "
                >
                  <option value="" disabled>
                    Select budget
                  </option>
                  <option>Still Exploring</option>
                  <option>Under ₹50,000</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>₹1,00,000 – ₹2,50,000</option>
                  <option>₹2,50,000+</option>
                  <option>Let&apos;s Discuss</option>
                </select>
              </label>

              <label>
                <span className="text-[0.48rem] font-semibold uppercase tracking-[0.16em] text-[#60758A]">
                  When Would You Like to Start?
                </span>

                <select
                  name="timeline"
                  defaultValue=""
                  className="
                    mt-2.5
                    w-full
                    rounded-[13px]
                    border
                    border-[#D8E2E8]
                    bg-[#FBFCFD]
                    px-4
                    py-3.5
                    font-serif
                    text-[0.79rem]
                    text-[#536D83]
                    outline-none
                  "
                >
                  <option value="" disabled>
                    Select timeline
                  </option>
                  <option>As Soon as Possible</option>
                  <option>Within 1 Month</option>
                  <option>1–3 Months</option>
                  <option>3+ Months</option>
                  <option>Still Planning</option>
                </select>
              </label>

              <label>
                <span className="text-[0.48rem] font-semibold uppercase tracking-[0.16em] text-[#60758A]">
                  How Did You Find Sharp Rays?
                </span>

                <select
                  name="source"
                  defaultValue=""
                  className="
                    mt-2.5
                    w-full
                    rounded-[13px]
                    border
                    border-[#D8E2E8]
                    bg-[#FBFCFD]
                    px-4
                    py-3.5
                    font-serif
                    text-[0.79rem]
                    text-[#536D83]
                    outline-none
                  "
                >
                  <option value="" disabled>
                    Select source
                  </option>
                  <option>Google Search</option>
                  <option>Social Media</option>
                  <option>Referral</option>
                  <option>LinkedIn</option>
                  <option>Saw Our Work</option>
                  <option>Other</option>
                </select>
              </label>
            </div>

            {/* SUBMIT */}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-4
                border-t
                border-[#E0E7EC]
                pt-6
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:gap-6
              "
            >
              <p
                className="
                  max-w-[390px]
                  font-serif
                  text-[0.72rem]
                  leading-[1.55]
                  text-[#8796A3]
                "
              >
                No pressure. No automated sales sequence. Just enough
                information for us to understand what you need.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                style={newYorkFont}
                className="
                  group
                  relative
                  inline-flex
                  min-h-[46px]
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[16px]
                  border
                  border-[#6285AD]/30
                  bg-white/80
                  px-5
                  py-[11px]
                  text-[13px]
                  font-medium
                  tracking-[-0.01em]
                  text-[#0B2A52]
                  shadow-[0_8px_30px_rgba(11,42,82,0.08)]
                  backdrop-blur-[8px]
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-[2px]
                  hover:border-[#6285AD]/40
                  hover:bg-white
                  hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]
                  active:translate-y-0
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  disabled:hover:translate-y-0
                  sm:w-auto
                  sm:min-h-[48px]
                  sm:px-6
                  sm:py-3
                  sm:text-[14px]
                  md:text-[15px]
                "
              >
                <span className="pointer-events-none absolute inset-[2px] rounded-[13px] border border-white/60" />
                <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <span className="relative z-10 whitespace-nowrap text-[#0B2A52]">
                  {isSubmitting ? "Sending Enquiry..." : "Send My Enquiry"}
                </span>
              </button>
            </div>

            {submitStatus !== "idle" && submitMessage && (
              <div
                role={submitStatus === "error" ? "alert" : "status"}
                aria-live="polite"
                className={`mt-4 rounded-[14px] border px-4 py-3 font-serif text-[0.78rem] leading-[1.6] ${
                  submitStatus === "success"
                    ? "border-[#BFD9CE] bg-[#F3FAF6] text-[#2F6D55]"
                    : "border-[#E5C7C7] bg-[#FFF7F7] text-[#9B4A4A]"
                }`}
              >
                {submitMessage}
              </div>
            )}
          </motion.form>
        </div>
      </section>

      {/* =====================================================
          SECTION 03 — NOT SURE?
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-white
          py-16
          sm:py-20
          md:py-24
          lg:py-28
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1320px]
            px-5
            sm:px-7
            md:px-9
            lg:px-12
            xl:px-16
          "
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-[1030px] text-center"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow centered>Start With the Problem</Eyebrow>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="
                mx-auto
                mt-5
                max-w-[1000px]
                font-serif
                text-[2.1rem]
                leading-[1.04]
                tracking-[-0.045em]
                text-[#0B2A52]
                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              You Don&apos;t Need to Diagnose It{" "}
              <span className="italic text-[#A97C52]">
                Before You Contact Us.
              </span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="
                mx-auto
                mt-6
                max-w-[760px]
                space-y-2
                font-serif
                text-[0.92rem]
                leading-[1.75]
                text-[#60758A]
              "
            >
              <p>Sometimes the service is obvious. Sometimes it is not.</p>
              <p>Tell us what you are seeing.</p>
            </motion.div>
          </motion.div>

          {/* DIAGNOSTIC ROUTES */}

          <div
            className="
              mx-auto
              mt-14
              max-w-[1120px]
              border-y
              border-[#DCE5EB]
            "
          >
            {problemRoutes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.problem}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : index % 2 === 0 ? -20 : 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : index * 0.05,
                    ease,
                  }}
                  className="
                    group
                    grid
                    gap-4
                    border-b
                    border-[#E2E9EE]
                    py-5
                    last:border-b-0
                    sm:grid-cols-[60px_1fr_auto]
                    sm:items-center
                  "
                >
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                    "
                    style={{
                      color: item.accent,
                      backgroundColor: item.soft,
                    }}
                  >
                    <Icon size={16} strokeWidth={1.7} />
                  </span>

                  <div>
                    <span
                      className="
                        text-[0.42rem]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#9AA7B1]
                      "
                    >
                      Problem {String(index + 1).padStart(2, "0")}
                    </span>

                    <p
                      className="
                        mt-1
                        font-serif
                        text-[1rem]
                        text-[#36536D]
                      "
                    >
                      “{item.problem}”
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      sm:justify-end
                    "
                  >
                    <span
                      className="
                        text-[0.4rem]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#A0AAB3]
                      "
                    >
                      Start With
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-[#D9E2E8]
                        bg-white
                        px-4
                        py-2
                        text-[0.56rem]
                        font-semibold
                        text-[#0B2A52]
                      "
                    >
                      {item.service}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p
            className="
              mx-auto
              mt-7
              max-w-[680px]
              text-center
              font-serif
              text-[0.92rem]
              italic
              text-[#60758A]
            "
          >
            “Not Sure Yet” is a perfectly valid starting point.
          </p>
        </div>
      </section>

     
        
       
  

      {/* =====================================================
          SECTION 05 — WHAT HAPPENS NEXT
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-white
          py-16
          sm:py-20
          md:py-24
          lg:py-28
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1340px]
            px-5
            sm:px-7
            md:px-9
            lg:px-12
            xl:px-16
          "
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-[980px] text-center"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow centered>After You Contact Us</Eyebrow>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="
                mt-5
                font-serif
                text-[2.1rem]
                leading-[1.04]
                tracking-[-0.045em]
                text-[#0B2A52]
                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              Clear From the{" "}
              <span className="italic text-[#A97C52]">
                First Conversation.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                mx-auto
                mt-5
                max-w-[680px]
                font-serif
                text-[0.92rem]
                leading-[1.7]
                text-[#60758A]
              "
            >
              We want the beginning of the project to feel as clear as the work
              itself.
            </motion.p>
          </motion.div>

          {/* PROCESS */}

          <div
            className="
              relative
              mx-auto
              mt-14
              max-w-[1200px]
            "
          >
            <div
              className="
                absolute
                left-[7%]
                right-[7%]
                top-[25px]
                hidden
                h-px
                bg-[#DCE5EB]
                xl:block
              "
            />

            <motion.div
              initial={{ scaleX: reduceMotion ? 1 : 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.1, ease }}
              style={{ transformOrigin: "left" }}
              className="
                absolute
                left-[7%]
                right-[7%]
                top-[25px]
                hidden
                h-px
                bg-[linear-gradient(90deg,#0B2A52,#88A5BA,#B79A72)]
                xl:block
              "
            />

            <div
              className="
                grid
                gap-0
                border-y
                border-[#DCE5EB]
                md:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-6
              "
            >
              {process.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.6,
                    delay: reduceMotion ? 0 : index * 0.07,
                    ease,
                  }}
                  className="
                    relative
                    min-h-[220px]
                    border-b
                    border-r
                    border-[#E2E9EE]
                    px-5
                    py-5
                  "
                >
                  <span
                    className="
                      relative
                      z-10
                      flex
                      h-[50px]
                      w-[50px]
                      items-center
                      justify-center
                      rounded-full
                      border-[6px]
                      border-white
                      bg-[#EEF4F8]
                      font-serif
                      text-[0.8rem]
                      text-[#0B2A52]
                      shadow-[0_0_0_1px_#D6E1E8]
                    "
                  >
                    {item.number}
                  </span>

                  <h3
                    className="
                      mt-6
                      font-serif
                      text-[1rem]
                      leading-[1.3]
                      text-[#0B2A52]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      font-serif
                      text-[0.72rem]
                      leading-[1.6]
                      text-[#60758A]
                    "
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-9 text-center">
            <span
              className="
                text-[0.46rem]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#92745C]
              "
            >
              The Principle
            </span>

            <p
              className="
                mt-3
                font-serif
                text-[1.35rem]
                italic
                text-[#0B2A52]
              "
            >
              Clarity Before Commitment.
            </p>
          </div>
        </div>
      </section>

     
      {/* =====================================================
          SECTION 07 — DIRECT CONTACT
      ===================================================== */}

    {/* =====================================================
    SECTION 08 — CONTACT FAQS
===================================================== */}

<section
  className="
    relative
    overflow-hidden
    bg-[#F8FAFC]
    py-16
    sm:py-20
    md:py-24
    lg:py-28
  "
>
  {/* BACKGROUND DETAIL */}

  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      inset-0
      overflow-hidden
    "
  >
    <div
      className="
        absolute
        -right-[180px]
        top-[80px]
        h-[360px]
        w-[360px]
        rounded-full
        bg-[#EDF4F9]
        blur-[110px]
      "
    />

    <div
      className="
        absolute
        -left-[160px]
        bottom-[-120px]
        h-[320px]
        w-[320px]
        rounded-full
        bg-[#FBF3E8]
        blur-[105px]
      "
    />
  </div>

  <div
    className="
      relative
      z-10
      mx-auto
      w-full
      max-w-[1240px]
      px-5
      sm:px-7
      md:px-9
      lg:px-12
      xl:px-16
    "
  >
    {/* SECTION HEADING */}

    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="
        mx-auto
        max-w-[900px]
        text-center
      "
    >
      <motion.div variants={fadeUp}>
        <Eyebrow centered>Contact FAQs</Eyebrow>
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className="
          mx-auto
          mt-5
          max-w-[850px]
          font-serif
          text-[2.1rem]
          leading-[1.04]
          tracking-[-0.045em]
          text-[#0B2A52]
          sm:text-[2.6rem]
          md:text-[2.95rem]
          lg:text-[3.1rem]
          xl:text-[3.35rem]
        "
      >
        Before You Send the{" "}
        <span className="italic text-[#A97C52]">
          Enquiry.
        </span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="
          mx-auto
          mt-5
          max-w-[660px]
          font-serif
          text-[0.9rem]
          leading-[1.75]
          text-[#60758A]
        "
      >
        Straightforward answers to common questions before the first
        conversation.
      </motion.p>
    </motion.div>

    {/* FAQ LIST */}

    <div
      className="
        mx-auto
        mt-12
        max-w-[950px]
        border-y
        border-[#D9E3E9]
      "
    >
      {[
        {
          question: "Do I need to know which service I need?",
          answer:
            "No. If you already know what you need, select the relevant service. If you are unsure, choose Not Sure Yet and explain what you are trying to improve.",
        },
        {
          question: "Do I need a full project brief?",
          answer:
            "No. A short explanation of your business, current situation and objective is enough to start the conversation.",
        },
        {
          question: "Does Sharp Rays work with startups?",
          answer:
            "Yes. We work with startups and growing businesses. The right scope depends on your stage, priorities, available resources and the problem you are trying to solve.",
        },
        {
          question: "Do you work with established businesses too?",
          answer:
            "Yes. Sharp Rays can support established businesses that already have websites, campaigns, marketing teams or digital systems and need help improving a specific area.",
        },
        {
          question: "Can I contact you for just one service?",
          answer:
            "Yes. You can contact us for a single service such as SEO, social media marketing, website development, performance marketing, content marketing, AI video or AI automation.",
        },
        {
          question: "What happens after I send the enquiry?",
          answer:
            "We review the information you provide and determine the most useful next step. If the project looks like something we can help with, we arrange a conversation and clarify scope, deliverables and requirements.",
        },
        {
          question: "How quickly will Sharp Rays respond?",
          answer:
            "We aim to review enquiries as soon as possible during business hours. More complex requests may require additional time so we can properly understand the project before responding.",
        },
      ].map((faq, index) => {
        const isOpen = openFaq === index;

        return (
          <motion.div
            key={faq.question}
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.5,
              delay: reduceMotion ? 0 : index * 0.04,
              ease,
            }}
            className="
              border-b
              border-[#E1E8ED]
              last:border-b-0
            "
          >
            <button
              type="button"
              onClick={() => setOpenFaq(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="
                group
                flex
                w-full
                items-start
                justify-between
                gap-6
                py-6
                text-left
                sm:py-7
              "
            >
              <div className="flex min-w-0 gap-4 sm:gap-5">
                {/* NUMBER */}

                <span
                  className="
                    mt-[3px]
                    shrink-0
                    text-[0.48rem]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#A97C52]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* QUESTION */}

                <span
                  className="
                    font-serif
                    text-[1rem]
                    leading-[1.45]
                    text-[#0B2A52]
                    transition-colors
                    duration-300
                    group-hover:text-[#A97C52]
                    sm:text-[1.08rem]
                  "
                >
                  {faq.question}
                </span>
              </div>

              {/* ICON */}

              <span
                className={`
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D5E0E7]
                  bg-white
                  text-[#0B2A52]
                  shadow-[0_5px_16px_rgba(11,42,82,0.04)]
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? "rotate-180 border-[#B79A72]/40 bg-[#FBF7F1] text-[#A97C52]"
                      : ""
                  }
                `}
              >
                <ChevronDown size={14} strokeWidth={1.8} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.35,
                    ease,
                  }}
                  className="overflow-hidden"
                >
                  <div
                    className="
                      pb-6
                      pl-[2.5rem]
                      pr-12
                      sm:pb-7
                      sm:pl-[3.25rem]
                      sm:pr-16
                    "
                  >
                    <p
                      className="
                        max-w-[760px]
                        font-serif
                        text-[0.84rem]
                        leading-[1.75]
                        text-[#60758A]
                        sm:text-[0.9rem]
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>

    {/* BOTTOM SUPPORT */}

    <motion.div
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease }}
      className="
        mx-auto
        mt-9
        max-w-[760px]
        text-center
      "
    >
      <p
        className="
          font-serif
          text-[0.82rem]
          leading-[1.7]
          text-[#6A7E90]
        "
      >
        Still unsure where to start? You can select{" "}
        <span className="font-medium text-[#0B2A52]">
          Not Sure Yet
        </span>{" "}
        in the enquiry form and simply describe the problem.
      </p>

      <a
        href="#contact-form"
        title="Start a conversation with Sharp Rays"
        style={newYorkFont}
        className="
          group
          relative
          mt-6
          inline-flex
          min-h-[44px]
          items-center
          justify-center
          overflow-hidden
          rounded-[16px]
          border
          border-[#6285AD]/30
          bg-white/80
          px-5
          py-[10px]
          text-[12px]
          font-medium
          tracking-[-0.01em]
          text-[#0B2A52]
          shadow-[0_8px_30px_rgba(11,42,82,0.07)]
          backdrop-blur-[8px]
          transition-all
          duration-300
          hover:-translate-y-[2px]
          hover:border-[#6285AD]/40
          hover:bg-white
          hover:shadow-[0_10px_35px_rgba(98,133,173,0.14)]
          sm:min-h-[46px]
          sm:px-6
          sm:text-[13px]
        "
      >
        <span className="pointer-events-none absolute inset-[2px] rounded-[13px] border border-white/60" />

        <span className="relative z-10">
          Start the Conversation
        </span>
      </a>
    </motion.div>
  </div>
</section>

      {/* =====================================================
          SECTION 08 — BEFORE WE START
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#F8FAFC]
          py-16
          sm:py-20
          md:py-24
          lg:py-28
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1320px]
            px-5
            sm:px-7
            md:px-9
            lg:px-12
            xl:px-16
          "
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-[1020px] text-center"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow centered>Good to Know</Eyebrow>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="
                mt-5
                font-serif
                text-[2.1rem]
                leading-[1.04]
                tracking-[-0.045em]
                text-[#0B2A52]
                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              A Better Project Starts With{" "}
              <span className="italic text-[#A97C52]">
                Clear Expectations.
              </span>
            </motion.h2>
          </motion.div>

          <div
            className="
              mx-auto
              mt-12
              grid
              max-w-[1120px]
              border-y
              border-[#DCE5EB]
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {expectations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.05,
                }}
                className="
                  min-h-[145px]
                  border-b
                  border-r
                  border-[#E2E9EE]
                  bg-white/60
                  px-5
                  py-5
                "
              >
                <span
                  className="
                    font-serif
                    text-[1.4rem]
                    text-[#B79A72]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className="
                    mt-4
                    text-[0.51rem]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#0B2A52]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    font-serif
                    text-[0.75rem]
                    leading-[1.55]
                    text-[#60758A]
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div
            className="
              mx-auto
              mt-9
              max-w-[780px]
              text-center
            "
          >
            <p className="font-serif text-[0.88rem] text-[#60758A]">
              No vague package. No hidden responsibilities.
            </p>

            <p
              className="
                mt-2
                font-serif
                text-[1.22rem]
                text-[#0B2A52]
              "
            >
              Know what you&apos;re agreeing to{" "}
              <span className="italic text-[#A97C52]">
                before the work begins.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 09 — FAQ
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-white
          py-16
          sm:py-20
          md:py-24
          lg:py-28
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1240px]
            px-5
            sm:px-7
            md:px-9
            lg:px-12
            xl:px-16
          "
        >
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[0.72fr_1.28fr]
              lg:gap-16
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : -28,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <Eyebrow>Contact FAQs</Eyebrow>

              <h2
                className="
                  mt-6
                  max-w-[470px]
                  font-serif
                  text-[2.1rem]
                  leading-[1.04]
                  tracking-[-0.045em]
                  text-[#0B2A52]
                  sm:text-[2.6rem]
                  md:text-[2.95rem]
                  lg:text-[3.1rem]
                  xl:text-[3.35rem]
                "
              >
                Before You Send the{" "}
                <span className="italic text-[#A97C52]">
                  Enquiry?
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-[420px]
                  font-serif
                  text-[0.86rem]
                  leading-[1.7]
                  text-[#60758A]
                "
              >
                Straightforward answers to common questions before the first
                conversation.
              </p>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const open = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="
                      overflow-hidden
                      rounded-[18px]
                      border
                      border-[#6285AD]/25
                      bg-white/80
                      shadow-[0_8px_28px_rgba(11,42,82,0.055)]
                      backdrop-blur-[8px]
                    "
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(open ? null : index)
                      }
                      style={newYorkFont}
                      className="
                        group
                        relative
                        flex
                        w-full
                        items-center
                        gap-3
                        overflow-hidden
                        rounded-[16px]
                        px-4
                        py-4
                        text-left
                        transition-all
                        duration-300
                        hover:bg-white
                        sm:gap-4
                        sm:px-5
                        sm:py-5
                      "
                    >
                      <span
                        className="
                          font-serif
                          text-[1.25rem]
                          text-[#B79A72]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="
                          flex-1
                          font-serif
                          text-[0.98rem]
                          text-[#0B2A52]
                          sm:text-[1.03rem]
                        "
                      >
                        {faq.question}
                      </span>

                      <motion.span
                        animate={{
                          rotate: open ? 180 : 0,
                        }}
                        transition={{ duration: 0.25 }}
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-[#F2F6F8]
                          text-[#0B2A52]
                        "
                      >
                        <ChevronDown size={13} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.35,
                            ease,
                          }}
                          className="overflow-hidden"
                        >
                          <p
                            className="
                              max-w-[720px]
                              pb-5
                              pl-4
                              pr-4
                              sm:pl-[58px]
                              sm:pr-5
                              font-serif
                              text-[0.82rem]
                              leading-[1.7]
                              text-[#60758A]
                            "
                          >
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 10 — FINAL CTA
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-white
          pb-24
          pt-8
          sm:pb-28
          lg:pb-32
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1320px]
            px-5
            sm:px-7
            md:px-9
            lg:px-12
            xl:px-16
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 28,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease }}
            className="
              relative
              overflow-hidden
              rounded-[34px]
              border
              border-[#D4E0E8]
              bg-[linear-gradient(135deg,#EFF6FB_0%,#FFFFFF_50%,#FAF4EA_100%)]
              px-4
              py-12
              text-center
              shadow-[0_30px_80px_rgba(11,42,82,0.07)]
              sm:px-8
              sm:py-16
              md:px-10
              md:py-20
              lg:py-24
            "
          >
            {/* DECORATION */}

            <div
              className="
                pointer-events-none
                absolute
                -left-[180px]
                -top-[210px]
                h-[450px]
                w-[450px]
                rounded-full
                border
                border-[#CBDDE8]
              "
            />

            <div
              className="
                pointer-events-none
                -bottom-[210px]
                -right-[180px]
                absolute
                h-[470px]
                w-[470px]
                rounded-full
                border
                border-[#E2CBA8]
              "
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="
                relative
                z-10
                mx-auto
                max-w-[900px]
              "
            >
              <motion.div variants={fadeUp}>
                <Eyebrow centered>Ready When You Are</Eyebrow>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="
                  mx-auto
                  mt-5
                  max-w-[850px]
                  font-serif
                  text-[2.1rem]
                  leading-[1.04]
                  tracking-[-0.045em]
                  text-[#0B2A52]
                  sm:text-[2.6rem]
                  md:text-[2.95rem]
                  lg:text-[3.1rem]
                  xl:text-[3.35rem]
                "
              >
                Let&apos;s Start With{" "}
                <span className="italic text-[#A97C52]">
                  the Problem.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="
                  mx-auto
                  mt-6
                  max-w-[680px]
                  font-serif
                  text-[0.94rem]
                  leading-[1.75]
                  text-[#60758A]
                "
              >
                You do not need to arrive with the solution. Tell us what you
                want to improve, what is getting in the way and what a better
                outcome would look like.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="
                  mt-3
                  font-serif
                  text-[1.08rem]
                  italic
                  text-[#0B2A52]
                "
              >
                We&apos;ll take it from there.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="
                  mx-auto
                  mt-9
                  flex
                  w-full
                  max-w-[430px]
                  flex-row
                  flex-nowrap
                  items-center
                  justify-center
                  gap-2
                  sm:max-w-none
                  sm:gap-3
                "
              >
                <a
                  href="#contact-form"
                  style={newYorkFont}
                  className="
                    group
                    relative
                    inline-flex
                    min-h-[44px]
                    min-w-0
                    flex-1
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[16px]
                    border
                    border-[#6285AD]/30
                    bg-white/80
                    px-3
                    py-[10px]
                    text-[10px]
                    font-medium
                    tracking-[-0.01em]
                    text-[#0B2A52]
                    shadow-[0_8px_30px_rgba(11,42,82,0.08)]
                    backdrop-blur-[8px]
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-[2px]
                    hover:border-[#6285AD]/40
                    hover:bg-white
                    hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]
                    active:translate-y-0
                    sm:min-h-[48px]
                    sm:flex-none
                    sm:px-6
                    sm:py-3
                    sm:text-[14px]
                    md:text-[15px]
                  "
                >
                  <span className="pointer-events-none absolute inset-[2px] rounded-[13px] border border-white/60" />
                  <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                  <span className="relative z-10 whitespace-nowrap text-[#0B2A52]">
                    Start the Conversation
                  </span>
                </a>

                <a
                  href="mailto:info@sharprays.com"
                  title="Email Sharp Rays"
                  style={newYorkFont}
                  className="
                    group
                    relative
                    inline-flex
                    min-h-[44px]
                    min-w-0
                    flex-1
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[16px]
                    border
                    border-[#6285AD]/30
                    bg-white/80
                    px-3
                    py-[10px]
                    text-[10px]
                    font-medium
                    tracking-[-0.01em]
                    text-[#0B2A52]
                    shadow-[0_8px_30px_rgba(11,42,82,0.08)]
                    backdrop-blur-[8px]
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-[2px]
                    hover:border-[#6285AD]/40
                    hover:bg-white
                    hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]
                    active:translate-y-0
                    sm:min-h-[48px]
                    sm:flex-none
                    sm:px-6
                    sm:py-3
                    sm:text-[14px]
                    md:text-[15px]
                  "
                >
                  <span className="pointer-events-none absolute inset-[2px] rounded-[13px] border border-white/60" />
                  <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                  <span className="relative z-10 whitespace-nowrap text-[#0B2A52]">
                    Email Sharp Rays
                  </span>
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="
                  mx-auto
                  mt-10
                  flex
                  w-fit
                  items-center
                  gap-4
                "
              >
                <span className="h-px w-10 bg-[#D2DEE6]" />

                <span
                  className="
                    text-[0.45rem]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#6B8194]
                  "
                >
                  Tell Us What&apos;s Next
                </span>

                <span className="h-px w-10 bg-[#D2DEE6]" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
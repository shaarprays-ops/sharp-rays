
"use client";

import { useId } from "react";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

const startupStages = [
  "Pre-Launch",
  "Early Traction",
  "Growth",
  "Scaling",
];

const businessModels = [
  { value: "saas", label: "SaaS & Software" },
  { value: "b2b", label: "B2B & Technology" },
  { value: "d2c", label: "D2C & Consumer Brands" },
  { value: "app", label: "Consumer App" },
  { value: "hardware", label: "Product & Hardware" },
  { value: "services", label: "Service-Based Startup" },
];

const startupGoals = [
  "Launch",
  "Signups",
  "Leads",
  "Customers",
  "Conversion",
];

const marketingBudgets = [
  { value: "not-decided", label: "Not decided yet" },
  { value: "under-25000", label: "Under ₹25,000 / month" },
  { value: "25000-50000", label: "₹25,000–₹50,000 / month" },
  { value: "50000-100000", label: "₹50,000–₹1,00,000 / month" },
  { value: "100000-250000", label: "₹1,00,000–₹2,50,000 / month" },
  { value: "above-250000", label: "Above ₹2,50,000 / month" },
];

const inputClass =
  "mt-2 block h-[48px] w-full min-w-0 rounded-[11px] border border-[#E5DED5] bg-white px-4 text-[13px] text-[#0B2A52] outline-none transition-all duration-300 placeholder:text-[#A5ACB4] focus:border-[#B79A72] focus:ring-2 focus:ring-[#B79A72]/10";

const labelClass =
  "block text-[12px] font-medium leading-[1.6] text-[#344B62]";

export default function StartupContactFields() {
  const id = useId();

  return (
    <fieldset className="mx-auto w-full min-w-0 max-w-[900px] border-0 p-10">

      {/* HEADER */}

      <div className="mb-8 border-b border-[#E9E2D9] pb-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-7 bg-[#B79A72]" />

          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#B79A72]">
            Startup Growth Enquiry
          </span>
        </div>

        <h3 className="font-serif text-[26px] font-normal leading-[1.25] tracking-[-0.03em] text-[#0B2A52] sm:text-[31px]">
          Tell Us About{" "}
          <span className="text-[#B79A72]">
            Your Startup.
          </span>
        </h3>

        <p className="mt-3 max-w-[610px] text-[12px] leading-[1.85] text-[#708194] sm:text-[13px]">
          A few details will help us understand your stage,
          audience and marketing priorities before recommending
          a suitable growth plan.
        </p>
      </div>

      {/* FORM FIELDS */}

      <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">

        <div className="min-w-0">
          <label htmlFor={`${id}-startup-name`} className={labelClass}>
            Startup Name
          </label>

          <input
            id={`${id}-startup-name`}
            name="startupName"
            type="text"
            maxLength={120}
            placeholder="Your startup name"
            autoComplete="organization"
            className={inputClass}
          />
        </div>

        <div className="min-w-0">
          <label htmlFor={`${id}-startup-website`} className={labelClass}>
            Website <span className="font-normal text-[#98A4AF]">(optional)</span>
          </label>

          <input
            id={`${id}-startup-website`}
            name="startupWebsite"
            type="text"
            maxLength={250}
            inputMode="url"
            placeholder="example.com"
            className={inputClass}
          />
        </div>

        <div className="min-w-0">
          <label htmlFor={`${id}-startup-stage`} className={labelClass}>
            Startup Stage
          </label>

          <select
            id={`${id}-startup-stage`}
            name="startupStage"
            defaultValue=""
            className={inputClass}
          >
            <option value="">Select current stage</option>
            {startupStages.map((stage) => (
              <option key={stage} value={stage}>{stage}</option>
            ))}
          </select>
        </div>

        <div className="min-w-0">
          <label htmlFor={`${id}-business-model`} className={labelClass}>
            Business Model
          </label>

          <select
            id={`${id}-business-model`}
            name="startupBusinessModel"
            defaultValue=""
            className={inputClass}
          >
            <option value="">Select business model</option>
            {businessModels.map((model) => (
              <option key={model.value} value={model.value}>{model.label}</option>
            ))}
          </select>
        </div>

        <div className="min-w-0">
          <label htmlFor={`${id}-primary-goal`} className={labelClass}>
            Primary Marketing Goal
          </label>

          <select
            id={`${id}-primary-goal`}
            name="startupPrimaryGoal"
            defaultValue=""
            className={inputClass}
          >
            <option value="">Select main goal</option>
            {startupGoals.map((goal) => (
              <option key={goal} value={goal}>{goal}</option>
            ))}
          </select>
        </div>

        <div className="min-w-0">
          <label htmlFor={`${id}-marketing-budget`} className={labelClass}>
            Approximate Monthly Budget
          </label>

          <select
            id={`${id}-marketing-budget`}
            name="startupMarketingBudget"
            defaultValue=""
            className={inputClass}
          >
            <option value="">Select budget range</option>
            {marketingBudgets.map((budget) => (
              <option key={budget.value} value={budget.value}>{budget.label}</option>
            ))}
          </select>
        </div>

        <div className="min-w-0 sm:col-span-2">
          <label htmlFor={`${id}-target-market`} className={labelClass}>
            Target Audience or Market
          </label>

          <input
            id={`${id}-target-market`}
            name="startupTargetMarket"
            type="text"
            maxLength={200}
            placeholder="e.g. Indian D2C customers, Mumbai SMEs, global SaaS businesses"
            className={inputClass}
          />
        </div>
      </div>

      {/* PRIVACY NOTE */}

      <div className="mt-7 flex items-start gap-3 border-t border-[#E9E2D9] pt-5">
        <ShieldCheck
          size={17}
          strokeWidth={1.5}
          className="mt-0.5 shrink-0 text-[#B79A72]"
        />

        <p className="max-w-[760px] text-[11px] leading-[1.85] text-[#83909D]">
          Share general business information only.
          Please don't include passwords, confidential
          investor documents, customer lists or sensitive financial data.
        </p>
      </div>
    </fieldset>
  );
}

"use client";



import { useState } from "react";

import {

  AnimatePresence,

  motion,

  useReducedMotion,

} from "framer-motion";

import type { LucideIcon } from "lucide-react";

import {

  ArrowRight,

  BarChart3,

  BookOpen,

  Bot,

  CheckCircle2,

  ChevronDown,

  Database,

  FileText,

  Headphones,

  Mail,

  Megaphone,

  Play,

  Route,

  Settings,

  Sparkles,

  TrendingUp,

  UserRoundCheck,

  Users,

} from "lucide-react";



const newYorkFont = {

  fontFamily: "New York, ui-serif, Georgia, serif",

};



const ease = [0.22, 1, 0.36, 1] as const;



type Service = {

  number: string;

  title: string;

  short: string;

  icon: LucideIcon;

  tone: string;

  iconTone: string;

  listLabel: string;

  intro?: string;

  items: string[];

  closing: string;

  emphasis?: string;

};



const services: Service[] = [

  {

    number: "01",

    title: "Workflow Automation",

    short: "Turn repetitive processes into repeatable systems.",

    icon: Settings,

    tone: "from-[#EEF6FF] to-[#E6F1FC]",

    iconTone: "bg-[#E0EEFD] text-[#174F91]",

    intro:

      "We map existing workflows and identify where manual steps can be reduced.",

    listLabel: "Potential workflows can involve:",

    items: [

      "Forms",

      "Email",

      "Spreadsheets",

      "CRM systems",

      "Internal tools",

      "Calendars",

      "Databases",

      "Project management systems",

      "Notifications",

      "Approvals",

    ],

    closing:

      "The goal is to create a process that moves more consistently with fewer manual handoffs.",

  },

  {

    number: "02",

    title: "AI Agent Development",

    short: "Give specific jobs to purpose-built AI workflows.",

    icon: Bot,

    tone: "from-[#FFF7E9] to-[#F8EEDF]",

    iconTone: "bg-[#FFF0D7] text-[#8B5926]",

    listLabel: "Depending on the use case, an agent may help:",

    items: [

      "Review incoming information",

      "Find relevant internal data",

      "Summarize requests",

      "Prepare responses",

      "Update systems",

      "Trigger other workflows",

      "Generate reports",

      "Route exceptions to people",

    ],

    closing:

      "We define what the agent is allowed to do before deciding how autonomous it should become.",

  },

  {

    number: "03",

    title: "Lead Qualification Automation",

    short: "Respond faster without treating every lead the same.",

    icon: UserRoundCheck,

    tone: "from-[#EEF9F4] to-[#E3F4EC]",

    iconTone: "bg-[#DFF3E9] text-[#167151]",

    listLabel: "New enquiries can be automatically:",

    items: [

      "Captured",

      "Categorized",

      "Enriched with relevant information",

      "Qualified against defined criteria",

      "Added to the CRM",

      "Assigned to the right person",

      "Acknowledged",

      "Moved into an appropriate follow-up workflow",

    ],

    closing:

      "This can help sales teams focus attention where human involvement creates the most value.",

  },

  {

    number: "04",

    title: "CRM Automation",

    short:

      "Keep customer information moving without constant manual updates.",

    icon: Database,

    tone: "from-[#F2EFFF] to-[#EAE7FB]",

    iconTone: "bg-[#E7E1FF] text-[#5138C7]",

    listLabel: "CRM automation can support processes such as:",

    items: [

      "Lead creation",

      "Contact updates",

      "Pipeline movement",

      "Task creation",

      "Follow-up reminders",

      "Lead assignment",

      "Status changes",

      "Internal notifications",

      "Activity summaries",

      "Data synchronization",

    ],

    closing:

      "The objective is a cleaner system with fewer administrative steps between customer interactions.",

  },

  {

    number: "05",

    title: "Sales Automation",

    short: "Reduce the admin around selling.",

    icon: TrendingUp,

    tone: "from-[#FFF0F4] to-[#F9E4EC]",

    iconTone: "bg-[#FFE0E9] text-[#A13F66]",

    intro:

      "Sales teams should spend more time communicating with opportunities and less time maintaining the process around them.",

    listLabel: "Automation can assist with:",

    items: [

      "Lead routing",

      "Follow-up sequences",

      "Meeting preparation",

      "Call summaries",

      "Pipeline updates",

      "Proposal triggers",

      "Reminders",

      "Internal handoffs",

      "Opportunity alerts",

    ],

    closing:

      "Human review remains important where conversations or decisions require judgement.",

  },

  {

    number: "06",

    title: "Customer Support Automation",

    short: "Handle routine requests without making support feel robotic.",

    icon: Headphones,

    tone: "from-[#EEF9F5] to-[#E3F3ED]",

    iconTone: "bg-[#DFF2EA] text-[#176D58]",

    listLabel: "AI-assisted support workflows can help:",

    items: [

      "Identify enquiry types",

      "Answer suitable recurring questions",

      "Search approved knowledge",

      "Summarize conversations",

      "Create support tickets",

      "Assign requests",

      "Escalate sensitive issues",

      "Prepare suggested responses",

      "Update customer records",

    ],

    closing:

      "Automation should shorten the path to a useful answer.",

    emphasis:

      "Not make customers fight through another system.",

  },

  {

    number: "07",

    title: "Marketing Automation",

    short: "Connect interest with the right next step.",

    icon: Megaphone,

    tone: "from-[#FFF6E8] to-[#FAEEDC]",

    iconTone: "bg-[#FFECCE] text-[#925824]",

    listLabel: "Marketing workflows can help coordinate:",

    items: [

      "Lead capture",

      "Audience segmentation",

      "Email sequences",

      "Campaign follow-ups",

      "Content distribution",

      "CRM updates",

      "Event registrations",

      "Notifications",

      "Lead nurturing",

      "Campaign data",

    ],

    closing:

      "Automation supports the journey while strategy determines what communication should happen and why.",

  },

  {

    number: "08",

    title: "Email Automation",

    short: "Make routine communication more reliable.",

    icon: Mail,

    tone: "from-[#EFF6FF] to-[#E7F0FA]",

    iconTone: "bg-[#E0ECFC] text-[#245FAB]",

    listLabel: "Email workflows can help with:",

    items: [

      "Enquiry acknowledgements",

      "Follow-up reminders",

      "Internal alerts",

      "Customer onboarding",

      "Status notifications",

      "Meeting preparation",

      "Recurring updates",

      "Post-event communication",

      "Lead nurturing",

    ],

    closing:

      "Important communication should still be reviewed where context, sensitivity or accuracy requires human involvement.",

  },

  {

    number: "09",

    title: "Document Processing Automation",

    short: "Turn incoming documents into usable information.",

    icon: FileText,

    tone: "from-[#FFF0F5] to-[#F8E5ED]",

    iconTone: "bg-[#FFE0EA] text-[#A23F68]",

    listLabel: "AI can assist with workflows involving:",

    items: [

      "Forms",

      "PDFs",

      "Invoices",

      "Applications",

      "Reports",

      "Briefs",

      "Meeting notes",

      "Customer documents",

      "Internal files",

    ],

    closing:

      "Depending on the use case, information can be extracted, categorized, summarized and routed into the systems where it is needed.",

  },

  {

    number: "10",

    title: "Reporting & Data Automation",

    short: "Spend less time building the report.",

    icon: BarChart3,

    tone: "from-[#EDF8F3] to-[#E2F1EA]",

    iconTone: "bg-[#DDF1E8] text-[#1A7558]",

    intro:

      "Automation can help collect and organize information from different sources into recurring business views.",

    listLabel: "Potential applications include:",

    items: [

      "Marketing reports",

      "Sales summaries",

      "Lead activity",

      "Campaign data",

      "Operational dashboards",

      "Weekly summaries",

      "Performance notifications",

      "Exception alerts",

    ],

    closing:

      "The goal is to reduce the time between data existing and somebody being able to use it.",

  },

  {

    number: "11",

    title: "Internal Knowledge Automation",

    short: "Help teams find what the business already knows.",

    icon: BookOpen,

    tone: "from-[#F1EFFF] to-[#E9E6FA]",

    iconTone: "bg-[#E8E2FF] text-[#5940BD]",

    intro:

      "Important information is often scattered across documents, messages and internal systems.",

    listLabel:

      "AI-assisted knowledge workflows can help employees:",

    items: [

      "Find approved information",

      "Summarize internal documents",

      "Retrieve procedures",

      "Prepare meeting context",

      "Answer recurring internal questions",

      "Locate relevant resources",

    ],

    closing:

      "Access should always follow the permissions and boundaries defined by the business.",

  },

];



/* =========================================================

   MINI VISUAL

========================================================= */



function MiniVisual({ index }: { index: number }) {

  if (index === 0) {

    return (



      <div className="relative mx-auto h-[120px] w-full max-w-[180px]">

        <svg

          viewBox="0 0 180 120"

          aria-hidden="true"

          className="absolute inset-0 h-full w-full"

        >

          <path

            d="M30 65 C55 65 63 30 90 30"

            fill="none"

            stroke="#7AA6D4"

            strokeWidth="1.15"

          />



          <path

            d="M90 30 C90 55 90 77 90 99"

            fill="none"

            stroke="#7AA6D4"

            strokeWidth="1.15"

          />



          <path

            d="M90 30 C117 30 123 65 150 65"

            fill="none"

            stroke="#7AA6D4"

            strokeWidth="1.15"

          />

        </svg>



        {[

          "left-[7px] top-[48px]",

          "left-1/2 top-[10px] -translate-x-1/2",

          "right-[7px] top-[48px]",

        ].map((position, i) => (

          <div

            key={i}

            className={`

              absolute

              flex

              h-[40px]

              w-[40px]

              items-center

              justify-center

              rounded-[12px]

              border

              border-white

              bg-white/90

              text-[#0B2A52]

              shadow-sm



              ${position}

            `}

          >

            <Mail size={15} />

          </div>

        ))}



        <div

          className="

            absolute

            bottom-[1px]

            left-1/2

            flex

            h-[40px]

            w-[40px]

            -translate-x-1/2

            items-center

            justify-center

            rounded-[12px]

            border

            border-white

            bg-white/90

            text-[#0B2A52]

            shadow-sm

          "

        >

          <Users size={15} />

        </div>

      </div>

    );

  }



  if (index === 1) {

    return (

      <div className="flex h-[120px] items-center justify-center">

        <div

          className="

            flex

            h-[88px]

            w-[108px]

            flex-col

            items-center

            justify-center

            rounded-[30px_30px_22px_22px]

            border

            border-white

            bg-white/90

            shadow-[0_12px_25px_rgba(11,42,82,0.09)]

          "

        >

          <div

            className="

              flex

              h-[38px]

              w-[66px]

              items-center

              justify-center

              rounded-full

              bg-[#0B2A52]

            "

          >

            <span className="h-[8px] w-[8px] rounded-full bg-[#7FC2F2]" />

            <span className="ml-5 h-[8px] w-[8px] rounded-full bg-[#7FC2F2]" />

          </div>



          <div className="mt-3 h-[8px] w-[48px] rounded-full bg-[#E7EBEF]" />

        </div>

      </div>

    );

  }



  if (index === 2) {

    return (

      <div

        className="

          mx-auto

          flex

          h-[120px]

          max-w-[180px]

          flex-col

          justify-center

          rounded-[20px]

          border

          border-white

          bg-white/90

          p-4

          shadow-sm

        "

      >

        {["New Lead", "Qualified", "Assigned"].map(

          (item, itemIndex) => (

            <div

              key={item}

              className="

                flex

                items-center

                gap-2

                border-b

                border-[#0B2A52]/[0.06]

                py-2

                last:border-b-0

              "

            >

              <CheckCircle2

                size={13}

                className={

                  itemIndex === 0

                    ? "text-[#B18458]"

                    : "text-[#32866A]"

                }

              />



              <span

                style={newYorkFont}

                className="text-[8px] text-[#0B2A52]"

              >

                {item}

              </span>

            </div>

          )

        )}

      </div>

    );

  }



  if (index === 3 || index === 4) {

    const items =

      index === 3

        ? [

            "New Lead",

            "Update Contact",

            "Move to Pipeline",

            "Create Task",

          ]

        : [

            "New Lead",

            "Follow Up",

            "Meeting",

            "Proposal",

          ];



    return (

      <div

        className="

          mx-auto

          flex

          h-[120px]

          max-w-[180px]

          flex-col

          justify-center

          rounded-[20px]

          border

          border-white

          bg-white/90

          p-4

          shadow-sm

        "

      >

        {items.map((item, itemIndex) => (

          <div

            key={item}

            className="

              flex

              items-center

              gap-2

              py-[5px]

            "

          >

            <span

              className={`

                flex

                h-[17px]

                w-[17px]

                shrink-0

                items-center

                justify-center

                rounded-full

                text-white



                ${

                  itemIndex === 0

                    ? "bg-[#7864DA]"

                    : "bg-[#52A78A]"

                }

              `}

            >

              <CheckCircle2 size={9} />

            </span>



            <span

              style={newYorkFont}

              className="text-[8px] text-[#0B2A52]"

            >

              {item}

            </span>

          </div>

        ))}

      </div>

    );

  }



  if (index === 5) {

    return (

      <div

        className="

          mx-auto

          flex

          h-[120px]

          max-w-[185px]

          flex-col

          justify-center

          gap-2

        "

      >

        <div

          className="

            rounded-full

            border

            border-white

            bg-white/90

            px-4

            py-2.5

          "

        >

          <span

            style={newYorkFont}

            className="text-[8px] text-[#0B2A52]"

          >

            How can we help you?

          </span>

        </div>



        <div

          className="

            flex

            items-center

            gap-3

            rounded-[17px]

            border

            border-white

            bg-white/90

            p-3

          "

        >

          <Bot

            size={18}

            className="shrink-0 text-[#0B2A52]"

          />



          <span

            style={newYorkFont}

            className="

              text-[8px]

              leading-[1.3]

              text-[#0B2A52]

            "

          >

            Instant answer from your knowledge base.

          </span>

        </div>

      </div>

    );

  }



  if (index === 6) {

    return (

      <div

        className="

          mx-auto

          flex

          h-[120px]

          max-w-[175px]

          flex-col

          justify-center

          rounded-[20px]

          border

          border-white

          bg-white/90

          p-4

        "

      >

        {["Capture", "Segment", "Nurture", "Convert"].map(

          (item, itemIndex) => (

            <div

              key={item}

              className="flex items-center gap-2 py-[5px]"

            >

              <span

                style={newYorkFont}

                className="

                  flex

                  h-[18px]

                  w-[18px]

                  items-center

                  justify-center

                  rounded-full

                  bg-[#E9EFF6]

                  text-[8px]

                  text-[#0B2A52]

                "

              >

                {itemIndex + 1}

              </span>



              <span

                style={newYorkFont}

                className="text-[8px] text-[#0B2A52]"

              >

                {item}

              </span>

            </div>

          )

        )}

      </div>

    );

  }



  if (index === 7) {

    return (

      <div className="flex h-[120px] items-center justify-center">

        <div

          className="

            flex

            h-[98px]

            w-[155px]

            items-center

            justify-center

            rounded-[24px]

            border

            border-white

            bg-white/85

            shadow-sm

          "

        >

          <Mail

            size={35}

            className="text-[#2869B0]"

          />

        </div>

      </div>

    );

  }



  if (index === 8) {

    return (

      <div className="relative mx-auto h-[120px] max-w-[180px]">

        {["PDF", "Invoice", "Form"].map((item, itemIndex) => (

          <div

            key={item}

            className="

              absolute

              top-[14px]

              h-[86px]

              w-[60px]

              rounded-[13px]

              border

              border-white

              bg-white/90

              p-2.5

              shadow-sm

            "

            style={{

              left: `${itemIndex * 47 + 10}px`,

              transform: `rotate(${(itemIndex - 1) * 5}deg)`,

            }}

          >

            <span

              style={newYorkFont}

              className="text-[8px] text-[#0B2A52]"

            >

              {item}

            </span>



            <div className="mt-5 h-[3px] w-full rounded bg-[#CBD7E3]" />

            <div className="mt-2 h-[3px] w-[72%] rounded bg-[#DCE5EC]" />

          </div>

        ))}

      </div>

    );

  }



  if (index === 9) {

    return (

      <div

        className="

          mx-auto

          flex

          h-[120px]

          max-w-[180px]

          flex-col

          rounded-[20px]

          border

          border-white

          bg-white/90

          p-4

        "

      >

        <span

          style={newYorkFont}

          className="text-[8px] text-[#0B2A52]"

        >

          Weekly Report

        </span>



        <div className="mt-auto flex h-[65px] items-end justify-center gap-2">

          {[24, 39, 31, 54, 45].map((height, itemIndex) => (

            <span

              key={itemIndex}

              className="

                w-[11px]

                rounded-t

                bg-[#5C8FAD]

              "

              style={{ height }}

            />

          ))}

        </div>

      </div>

    );

  }



  return (

    <div

      className="

        mx-auto

        flex

        h-[120px]

        max-w-[180px]

        flex-col

        rounded-[20px]

        border

        border-white

        bg-white/90

        p-4

      "

    >

      <div

        className="

          flex

          items-center

          gap-2

          rounded-full

          border

          border-[#DDE5EC]

          px-3

          py-2

        "

      >

        <BookOpen

          size={11}

          className="text-[#6650C5]"

        />



        <span

          style={newYorkFont}

          className="text-[7px] text-[#60748A]"

        >

          Find information...

        </span>

      </div>



      <div className="mt-3 space-y-2">

        {[

          "Policies",

          "Procedures",

          "Meeting notes",

          "Resources",

        ].map((item) => (

          <div

            key={item}

            className="flex items-center gap-2"

          >

            <span className="h-[5px] w-[5px] rounded-full bg-[#806AD6]" />



            <span

              style={newYorkFont}

              className="text-[7px] text-[#0B2A52]"

            >

              {item}

            </span>

          </div>

        ))}

      </div>

    </div>

  );

}



/* =========================================================

   SERVICE CARD

========================================================= */



function ServiceCard({

  service,

  index,

  reduceMotion,

  onOpen,

}: {

  service: Service;

  index: number;

  reduceMotion: boolean;

  onOpen: () => void;

}) {

  const Icon = service.icon;



  return (

    <motion.article

      initial={

        reduceMotion

          ? false

          : {

              opacity: 0,

              y: 26,

            }

      }

      whileInView={{

        opacity: 1,

        y: 0,

      }}

      viewport={{

        once: true,

        amount: 0.18,

      }}

      transition={{

        duration: reduceMotion ? 0 : 0.65,

        delay: reduceMotion ? 0 : Math.min(index * 0.045, 0.22),

        ease,

      }}

      whileHover={

        reduceMotion

          ? undefined

          : {

              y: -5,

            }

      }

      className={`

        group

        relative

        flex

        h-[500px]

        min-w-0

        flex-col

        overflow-hidden

        rounded-[40px]

        border

        border-white/90

        bg-gradient-to-b

        px-[18px]

        pb-[18px]

        pt-[18px]

        shadow-[0_14px_36px_rgba(11,42,82,0.055)]

        transition-shadow

        duration-300



        hover:shadow-[0_22px_48px_rgba(11,42,82,0.085)]



        ${service.tone}

      `}

    >

      {/* SOFT LOWER CURVE */}



      <div

        className="

          pointer-events-none

          absolute

          -bottom-[95px]

          -right-[80px]

          h-[235px]

          w-[235px]

          rounded-full

          bg-white/35

        "

      />



      {/* TOP */}



      <div

        className="

          relative

          z-10

          flex

          h-[48px]

          shrink-0

          items-start

          justify-between

          gap-3

        "

      >

        <div

          className={`

            flex

            h-[44px]

            w-[44px]

            shrink-0

            items-center

            justify-center

            rounded-full



            ${service.iconTone}

          `}

        >

          <Icon

            size={19}

            strokeWidth={1.5}

          />

        </div>



        <span

          style={newYorkFont}

          className="

            pt-[8px]

            text-[9px]

            text-[#B18458]

          "

        >

          {service.number}

        </span>

      </div>



      {/* TITLE */}



      <div

        className="

          relative

          z-10

          mt-[18px]

          min-h-[74px]

        "

      >

        <h3

          style={newYorkFont}

          className="

            text-[1.22rem]

            font-light

            leading-[1.02]

            tracking-[-0.045em]

            text-[#0B2A52]



            2xl:text-[1.32rem]

          "

        >

          {service.title}

        </h3>

      </div>



      {/* DESCRIPTION */}



      <div

        className="

          relative

          z-10

          min-h-[66px]

        "

      >

        <p

          style={newYorkFont}

          className="

            text-[9.5px]

            leading-[1.5]

            text-[#536D85]



            2xl:text-[10px]

          "

        >

          {service.short}

        </p>

      </div>



      {/* LEARN MORE */}



      <button

        type="button"

        onClick={onOpen}

        className="

          relative

          z-20

          mt-[6px]

          flex

          h-[34px]

          w-fit

          shrink-0

          items-center

          gap-2

          text-[#0B2A52]

        "

      >

        <span

          style={newYorkFont}

          className="

            text-[7px]

            uppercase

            tracking-[0.18em]

          "

        >

          Learn More

        </span>



        <ArrowRight

          size={12}

          strokeWidth={1.5}

          className="

            transition-transform

            duration-300

            group-hover:translate-x-1

          "

        />

      </button>



      {/* VISUAL */}



      <div

        className="

          relative

          z-10

          mt-auto

          flex

          h-[158px]

          shrink-0

          items-end

          justify-center

          pt-[18px]

        "

      >

        <div className="w-full">

          <MiniVisual index={index} />

        </div>

      </div>

    </motion.article>

  );

}



/* =========================================================

   BIGGER PICTURE CARD

========================================================= */



function BiggerPictureCard({

  reduceMotion,

}: {

  reduceMotion: boolean;

}) {

  return (

    <motion.article

      initial={

        reduceMotion

          ? false

          : {

              opacity: 0,

              y: 26,

            }

      }

      whileInView={{

        opacity: 1,

        y: 0,

      }}

      viewport={{

        once: true,

        amount: 0.18,

      }}

      transition={{

        duration: reduceMotion ? 0 : 0.65,

        delay: reduceMotion ? 0 : 0.22,

        ease,

      }}

      whileHover={

        reduceMotion

          ? undefined

          : {

              y: -5,

            }

      }

      className="

        group

        relative

        flex

        h-[500px]

        min-w-0

        flex-col

        overflow-hidden

        rounded-[40px]

        border

        border-[#173F6B]

        bg-[#0B2A52]

        px-[20px]

        pb-[18px]

        pt-[18px]

        text-white

        shadow-[0_18px_42px_rgba(11,42,82,0.16)]

      "

    >

      <div

        className="

          pointer-events-none

          absolute

          -bottom-[110px]

          -right-[100px]

          h-[270px]

          w-[270px]

          rounded-full

          border

          border-white/[0.07]

        "

      />



      <div

        className="

          pointer-events-none

          absolute

          -bottom-[46px]

          -right-[38px]

          h-[150px]

          w-[150px]

          rounded-full

          border

          border-white/[0.08]

        "

      />



      <div

        className="

          relative

          z-10

          flex

          h-[48px]

          shrink-0

          items-start

          justify-between

        "

      >

        <Sparkles

          size={25}

          strokeWidth={1.3}

          className="text-[#9CC8EB]"

        />



        <span

          style={newYorkFont}

          className="

            pt-[8px]

            text-[9px]

            text-white/35

          "

        >

          12

        </span>

      </div>



      <div

        className="

          relative

          z-10

          mt-[18px]

          min-h-[74px]

        "

      >

        <span

          style={newYorkFont}

          className="

            text-[6px]

            uppercase

            leading-[1.6]

            tracking-[0.32em]

            text-white/55

          "

        >

          The Bigger Picture

        </span>



        <span className="mt-4 block h-px w-8 bg-[#C6A77A]" />

      </div>



      <div

        className="

          relative

          z-10

          min-h-[132px]

        "

      >

        <h3

          style={newYorkFont}

          className="

            text-[1.65rem]

            font-light

            leading-[0.98]

            tracking-[-0.05em]



            2xl:text-[1.8rem]

          "

        >

          A More

          <br />

          Connected

          <br />

          Business.

        </h3>

      </div>



      <p

        style={newYorkFont}

        className="

          relative

          z-10

          text-[9px]

          leading-[1.5]

          text-white/60

        "

      >

        Connect systems, information and workflows so work moves

        with less manual coordination.

      </p>



      <a

        href="/contact?service=ai-automation#contact-form"
        title="Contact Us"
        style={newYorkFont}

        className="

          group

          relative

          z-10

          mt-auto

          inline-flex

          min-h-[46px]

          shrink-0

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



          sm:min-h-[48px]

          sm:px-6

          sm:py-3

          sm:text-[14px]



          md:text-[15px]

        "

      >

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



        <span

          className="

            relative

            z-10

            whitespace-nowrap

            text-[#0B2A52]

          "

        >

          Let&apos;s Talk

        </span>

      </a>

    </motion.article>

  );

}



/* =========================================================

   MAIN

========================================================= */



export default function AiAutomationServices() {

  const reduceMotion = Boolean(useReducedMotion());



  const [activeService, setActiveService] =

    useState<number | null>(null);



  const selected =

    activeService === null

      ? null

      : services[activeService];



  return (

    <section

      id="ai-automation-services"

      aria-labelledby="ai-automation-services-heading"

      className="

        relative

        scroll-mt-[120px]

        overflow-hidden

        bg-white

        py-24

        sm:py-28

        lg:py-32

        xl:py-36

      "

    >

      {/* BACKGROUND */}



      <div

        className="

          relative

          z-10

          mx-auto

          w-full

          max-w-[1720px]

          px-5

          sm:px-8

          md:px-10

          lg:px-10

          xl:px-8

          2xl:px-10

        "

      >

        {/* =====================================================

            INTRO

        ===================================================== */}



        <div

          className="

            grid

            gap-12



            lg:grid-cols-[0.58fr_0.42fr]

            lg:items-center

            lg:gap-14

          "

        >

          <motion.div

            initial={

              reduceMotion

                ? false

                : {

                    opacity: 0,

                    x: -24,

                  }

            }

            whileInView={{

              opacity: 1,

              x: 0,

            }}

            viewport={{

              once: true,

              amount: 0.35,

            }}

            transition={{

              duration: reduceMotion ? 0 : 0.8,

              ease,

            }}

          >

            <div className="flex items-center gap-4">

              <span

                style={newYorkFont}

                className="

                  text-[9px]

                  uppercase

                  tracking-[0.34em]

                  text-[#B18458]

                  sm:text-[10px]

                "

              >

                AI Automation Services

              </span>



              <span className="h-px w-14 bg-[#C6A77A]" />

            </div>



            <h2

              id="ai-automation-services-heading"

              style={newYorkFont}

              className="

                mt-7

                max-w-[760px]

                text-[2.1rem]

                font-light

                leading-[0.96]

                tracking-[-0.055em]

                text-[#0B2A52]



                sm:text-[2.6rem]

                md:text-[2.95rem]

                lg:text-[3.1rem]

                xl:text-[3.35rem]

              "

            >

              Connect the Work That Happens{" "}

              <span className="text-[#B18458]">

                Between Your Systems.

              </span>

            </h2>



            <p

              style={newYorkFont}

              className="

                mt-6

                max-w-[700px]

                text-[15px]

                leading-[1.65]

                text-[#4E6982]

                sm:text-[16px]

              "

            >

              AI automation can support different parts of a

              business depending on where repetitive work, delays

              or disconnected information exist.

            </p>



            <div

              className="

                mt-8

                flex

                flex-wrap

                items-center

                gap-4

              "

            >







            </div>

          </motion.div>





        </div>



        {/* =====================================================

            SERVICE GRID

            ALWAYS 6 ON XL DESKTOP

        ===================================================== */}



        <div

          id="automation-service-grid"

          className="

            mt-16

            grid

            scroll-mt-[120px]

            items-stretch

            gap-[12px]



            sm:grid-cols-2

            lg:grid-cols-3

            xl:grid-cols-6

          "

        >

          {services.slice(0, 6).map((service, index) => (

            <ServiceCard

              key={service.number}

              service={service}

              index={index}

              reduceMotion={reduceMotion}

              onOpen={() => setActiveService(index)}

            />

          ))}



          {services.slice(6).map(

            (service, secondIndex) => {

              const realIndex = secondIndex + 6;



              return (

                <ServiceCard

                  key={service.number}

                  service={service}

                  index={realIndex}

                  reduceMotion={reduceMotion}

                  onOpen={() =>

                    setActiveService(realIndex)

                  }

                />

              );

            }

          )}



          <BiggerPictureCard

            reduceMotion={reduceMotion}

          />

        </div>



        {/* =====================================================

            EXPANDED DETAILS

        ===================================================== */}



        <AnimatePresence mode="wait">

          {selected && activeService !== null && (

            <motion.div

              key={selected.number}

              initial={

                reduceMotion

                  ? false

                  : {

                      opacity: 0,

                      y: 18,

                    }

              }

              animate={{

                opacity: 1,

                y: 0,

              }}

              exit={{

                opacity: 0,

                y: 10,

              }}

              transition={{

                duration: reduceMotion ? 0 : 0.4,

                ease,

              }}

              className="

                mt-8

                rounded-[34px]

                border

                border-[#D7E4ED]

                bg-white

                p-6

                shadow-[0_18px_44px_rgba(11,42,82,0.05)]



                sm:p-8



                lg:grid

                lg:grid-cols-[0.75fr_1.25fr]

                lg:gap-12

                lg:p-10

              "

            >

              <div>

                <span

                  style={newYorkFont}

                  className="

                    text-[8px]

                    uppercase

                    tracking-[0.3em]

                    text-[#B18458]

                  "

                >

                  {selected.number} · {selected.title}

                </span>



                <h3

                  style={newYorkFont}

                  className="

                    mt-4

                    max-w-[500px]

                    text-[1.8rem]

                    font-light

                    leading-[1.05]

                    tracking-[-0.04em]

                    text-[#0B2A52]



                    sm:text-[2rem]

                  "

                >

                  {selected.short}

                </h3>



                {selected.intro && (

                  <p

                    style={newYorkFont}

                    className="

                      mt-5

                      max-w-[500px]

                      text-[13px]

                      leading-[1.65]

                      text-[#526D85]

                    "

                  >

                    {selected.intro}

                  </p>

                )}



                <div

                  className="

                    mt-8

                    flex

                    items-center

                    gap-4

                  "

                >

                  <span

                    className="

                      flex

                      h-[40px]

                      w-[40px]

                      items-center

                      justify-center

                      rounded-full

                      border

                      border-[#D5E3ED]

                      bg-[#F4F8FB]

                      text-[#0B2A52]

                    "

                  >

                    <Route

                      size={16}

                      strokeWidth={1.4}

                    />

                  </span>



                  <span className="h-px w-12 bg-[#C6A77A]" />



                  <span

                    style={newYorkFont}

                    className="

                      text-[7px]

                      uppercase

                      tracking-[0.25em]

                      text-[#0B2A52]/45

                    "

                  >

                    CONNECT · AUTOMATE · REVIEW

                  </span>

                </div>

              </div>



              <div

                className="

                  mt-8

                  border-t

                  border-[#0B2A52]/10

                  pt-7



                  lg:mt-0

                  lg:border-l

                  lg:border-t-0

                  lg:pl-10

                  lg:pt-0

                "

              >

                <span

                  style={newYorkFont}

                  className="

                    text-[8px]

                    uppercase

                    tracking-[0.27em]

                    text-[#0B2A52]/45

                  "

                >

                  {selected.listLabel}

                </span>



                <div

                  className="

                    mt-5

                    grid

                    gap-x-8

                    gap-y-2.5



                    sm:grid-cols-2

                  "

                >

                  {selected.items.map((item) => (

                    <div

                      key={item}

                      className="

                        flex

                        items-start

                        gap-3

                        border-b

                        border-[#0B2A52]/[0.07]

                        pb-2.5

                      "

                    >

                      <span

                        className="

                          mt-[7px]

                          h-[5px]

                          w-[5px]

                          shrink-0

                          rounded-full

                          bg-[#B18458]

                        "

                      />



                      <span

                        style={newYorkFont}

                        className="

                          text-[11px]

                          leading-[1.45]

                          text-[#405F7B]

                        "

                      >

                        {item}

                      </span>

                    </div>

                  ))}

                </div>



                <div

                  className="

                    mt-7

                    border-l

                    border-[#C6A77A]

                    pl-5

                  "

                >

                  <p

                    style={newYorkFont}

                    className="

                      text-[12px]

                      leading-[1.65]

                      text-[#0B2A52]

                    "

                  >

                    {selected.closing}

                  </p>



                  {selected.emphasis && (

                    <p

                      style={newYorkFont}

                      className="

                        mt-2

                        text-[13px]

                        text-[#B18458]

                      "

                    >

                      {selected.emphasis}

                    </p>

                  )}

                </div>



                <button

                  type="button"

                  onClick={() =>

                    setActiveService(null)

                  }

                  className="

                    mt-6

                    flex

                    items-center

                    gap-2

                    text-[8px]

                    uppercase

                    tracking-[0.2em]

                    text-[#0B2A52]/55

                  "

                >

                  Close Details



                  <ChevronDown

                    size={13}

                    className="rotate-180"

                  />

                </button>

              </div>

            </motion.div>

          )}

        </AnimatePresence>



        {/* =====================================================

            BOTTOM

        ===================================================== */}



        <motion.div

          initial={

            reduceMotion

              ? false

              : {

                  opacity: 0,

                  y: 20,

                }

          }

          whileInView={{

            opacity: 1,

            y: 0,

          }}

          viewport={{

            once: true,

            amount: 0.4,

          }}

          transition={{

            duration: reduceMotion ? 0 : 0.7,

            ease,

          }}

          className="

            mt-10

            grid

            gap-7

            rounded-[36px]

            border

            border-[#D6E4ED]

            bg-[#F7FAFC]

            px-7

            py-8



            lg:grid-cols-[0.4fr_0.6fr_auto]

            lg:items-center

            lg:gap-10

            lg:px-10

          "

        >

          <div>

            <span

              style={newYorkFont}

              className="

                text-[7px]

                uppercase

                tracking-[0.32em]

                text-[#B18458]

              "

            >

              The Real Goal

            </span>



            <h3

              style={newYorkFont}

              className="

                mt-3

                text-[1.7rem]

                font-light

                leading-[1.05]

                tracking-[-0.04em]

                text-[#0B2A52]



                sm:text-[2rem]

              "

            >

              Work Smarter.{" "}

              <span className="text-[#B18458]">

                Move Faster.

              </span>

            </h3>

          </div>



          <p

            style={newYorkFont}

            className="

              max-w-[570px]

              text-[11px]

              leading-[1.6]

              text-[#536D85]



              lg:border-l

              lg:border-[#0B2A52]/10

              lg:pl-7

            "

          >

            When your systems, information and people work

            together, your business stays organized and creates

            more time for the work that actually matters.

          </p>



          <a

            href="/contact?service=ai-automation#contact-form"
            title="Contact Us"
            style={newYorkFont}

            className="

              group

              relative

              inline-flex

              min-h-[46px]

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



              sm:min-h-[48px]

              sm:px-6

              sm:py-3

              sm:text-[14px]



              md:text-[15px]

            "

          >

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



            <span

              className="

                relative

                z-10

                whitespace-nowrap

                text-[#0B2A52]

              "

            >

              Talk About Automation

            </span>

          </a>

        </motion.div>

      </div>

    </section>

  );

}
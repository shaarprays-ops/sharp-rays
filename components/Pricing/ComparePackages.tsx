const newYork = { fontFamily: '"New York", Georgia, serif' };

const rows = [
  {
    service: "Website",
    entry: "Launch ₹9,999/mo",
    popular: "Growth ₹14,999/mo",
    advanced: "Scale ₹24,999/mo",
    billing: "Monthly, 6-month minimum",
  },
  {
    service: "SEO",
    entry: "Foundation ₹14,999/mo",
    popular: "Growth ₹24,999/mo",
    advanced: "Scale ₹39,999/mo",
    billing: "Monthly, 10% off quarterly",
  },
  {
    service: "Social media",
    entry: "Starter ₹12,999/mo",
    popular: "Growth ₹21,999/mo",
    advanced: "Scale ₹34,999/mo",
    billing: "Monthly",
  },
  {
    service: "Google & Meta ads",
    entry: "Starter ₹9,999/mo",
    popular: "Growth ₹16,999/mo",
    advanced: "Scale ₹23,999/mo",
    billing: "Monthly",
  },
  {
    service: "AI automation",
    entry: "Starter ₹14,999",
    popular: "Growth ₹29,999",
    advanced: "Scale ₹49,999",
    billing: "One-time; Care from ₹4,999/mo",
  },
  {
    service: "Video editing",
    entry: "Edit Starter ₹9,999/mo",
    popular: "Edit Growth ₹17,999/mo",
    advanced: "Edit Scale ₹27,999/mo",
    billing: "Monthly",
  },
  {
    service: "Content marketing",
    entry: "from ₹12,999/mo",
    popular: "—",
    advanced: "—",
    billing: "Monthly",
  },
];

export default function ComparePackages() {
  return (
    <section
      id="compare"
      style={newYork}
      className="scroll-mt-24 bg-[#F8FBFD] px-5 py-20 text-[#0B2A52] sm:px-8 md:px-10 lg:px-14 lg:py-28 xl:px-20"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="max-w-[850px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#708DA9]">
            Compare
          </p>

          <h2 className="mt-4 text-[2.6rem] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]">
            Compare Digital Marketing Packages in India
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-[#0B2A52]/10 bg-white shadow-[0_18px_60px_rgba(11,42,82,.05)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px] border-collapse">
              <thead>
                <tr className="bg-[#EDF5FA] text-left">
                  {[
                    "Service",
                    "Entry plan",
                    "Most popular",
                    "Advanced",
                    "Billing",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="px-6 py-5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#64819D]"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.service}
                    className="border-t border-[#0B2A52]/[0.07]"
                  >
                    <td className="px-6 py-5 text-[12px] font-medium text-[#0B2A52]">
                      {row.service}
                    </td>

                    <td className="px-6 py-5 text-[11px] text-[#61778D]">
                      {row.entry}
                    </td>

                    <td className="bg-[#F8FBFD] px-6 py-5 text-[11px] font-medium text-[#315E87]">
                      {row.popular}
                    </td>

                    <td className="px-6 py-5 text-[11px] text-[#61778D]">
                      {row.advanced}
                    </td>

                    <td className="px-6 py-5 text-[11px] text-[#61778D]">
                      {row.billing}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="border-t border-[#0B2A52]/10 px-6 py-4 text-[10px] text-[#7A8C9E]">
            All prices are &quot;from&quot; prices in INR.
          </p>
        </div>
      </div>
    </section>
  );
}
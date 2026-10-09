export default function BlogEmptyState() {
  return (
    <div className="border border-[#0B2A52]/10 bg-[#F8FAFC] px-6 py-12 text-center sm:px-10">
      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#6285AD]">
        No Insights Found
      </p>

      <h3 className="mt-3 font-serif text-[1.75rem] leading-tight text-[#0B2A52]">
        Nothing matches this selection yet.
      </h3>

      <p className="mx-auto mt-3 max-w-[480px] text-[13px] leading-6 text-[#0B2A52]/55">
        Try another category or search term to explore more Sharp Rays insights.
      </p>
    </div>
  );
}
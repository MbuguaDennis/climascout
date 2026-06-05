export default function InsightsCard({ analysis }) {
  if (!analysis) {
    return (
      <div className="mt-4 rounded-xl bg-[#DFE3DB] p-4 shadow-sm border border-black/5">
        <h3 className="text-[#560270] font-semibold text-4xl flex items-center gap-2 mb-3">
          🧠 AI Match Intelligence
        </h3>

        <div className="bg-white/60 px-3 py-4 rounded-md border border-black/5">
          <p className="text-[#560270]/70">
            Search for weather conditions to generate AI-powered match insights and recommendations.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-xl bg-[#DFE3DB] p-4 shadow-sm border border-black/5">
      <h3 className="text-[#560270] font-semibold text-4xl flex items-center gap-2 mb-3">
        🧠 AI Match Intelligence
      </h3>

      <ul className="space-y-2">
        {analysis.insights.map((item, i) => (
          <li
            key={i}
            className="text-sm text-[#560270] bg-white/60 px-3 py-2 rounded-md
                       border border-black/5 leading-snug"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
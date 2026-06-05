export default function ScoreCard({ analysis }) {
  if (!analysis) {
    return (
      <div className="mt-4 rounded-xl bg-[#DFE3DB] p-5 shadow-sm border border-black/5 text-center">
        <h3 className="text-[#560270] font-semibold text-4xl mb-3 flex justify-center gap-2">
          ⚽ Match Readiness Score
        </h3>

        <p className="text-[#560270]/70">
          Search for weather conditions to generate a match readiness score.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-xl bg-[#DFE3DB] p-5 shadow-sm border border-black/5 text-center">
      <h3 className="text-[#560270] font-semibold text-4xl mb-3 flex justify-center gap-2">
        ⚽ Match Readiness Score
      </h3>

      <h1 className="text-4xl font-bold text-[#560270]">
        {analysis.score}
        <span className="text-lg font-medium text-[#560270]/70">
          /100
        </span>
      </h1>
    </div>
  );
}
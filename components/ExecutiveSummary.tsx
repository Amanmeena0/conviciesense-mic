import Link from 'next/link';

export default function ExecutiveSummary() {
  return (
    <section className="lg:col-span-4 glass-module rounded-xl p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-title-md text-title-md flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">auto_awesome</span>
            Executive Summary
          </h2>
          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-[10px] font-bold uppercase">AI Generated</span>
        </div>
        <p className="text-on-surface-variant leading-relaxed">
          The call was primarily a discovery and scoping session for the upcoming Q4 renewal. Jane successfully navigated the initial skepticism regarding the seat-based pricing model by highlighting the new AI-driven integration capabilities. Key stakeholder Mike showed significant interest in the automated reporting feature but remains cautious about the implementation timeline.
        </p>
      </div>
      <div className="mt-6 pt-6 border-t border-outline-variant/30 grid grid-cols-2 gap-4">
        <div>
          <p className="text-outline text-[10px] uppercase font-bold tracking-widest mb-1">Overall Sentiment</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <span className="text-secondary font-bold">Strongly Positive</span>
          </div>
        </div>
        <div>
          <p className="text-outline text-[10px] uppercase font-bold tracking-widest mb-1">Conversion Prob.</p>
          <span className="text-primary font-bold text-lg">82%</span>
        </div>
      </div>
    </section>
  );
}

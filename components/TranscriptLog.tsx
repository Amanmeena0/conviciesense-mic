import Link from 'next/link';

export default function TranscriptLog() {
  return (
    <section className="glass-module rounded-xl overflow-hidden">
      <div className="px-6 py-4 bg-surface-container-high flex items-center justify-between border-b border-outline-variant">
        <h2 className="font-title-md text-title-md flex items-center gap-2">
          <span className="material-symbols-outlined text-outline">description</span>
          Full Transcript Log
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <button className="px-3 py-1 bg-surface-container-lowest text-[12px] font-bold rounded-l border border-outline-variant text-primary">All</button>
            <button className="px-3 py-1 text-[12px] font-medium border-y border-outline-variant hover:bg-surface-bright">Jane (Sales)</button>
            <button className="px-3 py-1 text-[12px] font-medium rounded-r border border-outline-variant hover:bg-surface-bright">Client</button>
          </div>
          <button className="material-symbols-outlined text-outline">settings</button>
        </div>
      </div>
      <div className="h-96 overflow-y-auto p-6 space-y-6 custom-scrollbar">
        {/* Transcript entries – replace with dynamic data as needed */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center font-bold text-on-primary-container">J</div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-primary">Jane Smith</span>
              <span className="text-[10px] text-outline font-label-mono">02:14</span>
            </div>
            <p className="text-on-surface-variant leading-relaxed">Good morning Mike, great to see you again. I wanted to dive straight into the integration roadmap we discussed briefly over email last week. How has the team been handling the new compliance guidelines?</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold">M</div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold">Mike Johnson</span>
              <span className="text-[10px] text-outline font-label-mono">02:45</span>
            </div>
            <p className="text-on-surface-variant leading-relaxed">Hi Jane. Honestly, it's been a bit of a headache. The manual auditing process is taking our managers nearly 10 hours a week each. We need a way to automate this, but we're worried about the learning curve for the newer reps.</p>
          </div>
        </div>
        {/* Additional messages would be rendered similarly */}
        <div className="text-center py-4">
          <button className="text-primary font-label-sm hover:underline">Load Remaining 20 Minutes</button>
        </div>
      </div>
    </section>
  );
}

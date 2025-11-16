import { TimelineItem } from "@/data/timeline";

export function TimelineEntry({ item, isLast }: { item: TimelineItem; isLast: boolean }) {
  return (
    <div className="relative flex gap-6 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[27px] top-[56px] bottom-0 w-[2px] bg-zinc-200" />
      )}

      {/* Logo */}
      <div className="relative flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-zinc-200 overflow-hidden flex items-center justify-center">
        {item.logoUrl ? (
          <img
            src={item.logoUrl}
            alt={item.organization}
            className="w-10 h-10 object-contain"
          />
        ) : (
          <div className="w-10 h-10 bg-zinc-100 rounded-full" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pt-2">
        <div className="text-xs text-zinc-500 mb-1">{item.date}</div>
        <h3 className="text-base font-serif mb-1">{item.title}</h3>
        <p className="text-sm text-zinc-600">{item.organization}</p>
      </div>
    </div>
  );
}

interface ScheduleSlot {
  time: string;
  artist: string;
  stage: string;
}

interface ScheduleDayProps {
  day: string;
  date: string;
  slots: ScheduleSlot[];
  color: string;
}

export default function ScheduleDay({ day, date, slots, color }: ScheduleDayProps) {
  return (
    <div className={`${color} border-3 border-black shadow-brutal`}>
      {/* Day header */}
      <div className="p-6 border-b-3 border-black">
        <div className="font-mono text-sm uppercase mb-1">{date}</div>
        <h3 className="font-display font-bold text-3xl uppercase">{day}</h3>
      </div>

      {/* Slots */}
      <div className="divide-y-3 divide-black">
        {slots.map((slot, i) => (
          <div key={i} className="p-4 flex items-center gap-4 hover:bg-black hover:text-neon-yellow transition-colors group cursor-pointer">
            <div className="font-mono text-sm w-20 shrink-0">{slot.time}</div>
            <div className="flex-1">
              <div className="font-display font-bold uppercase">{slot.artist}</div>
              <div className="font-mono text-xs uppercase opacity-60 group-hover:opacity-100">
                {slot.stage}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

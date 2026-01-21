import ScheduleDay from "./ScheduleDay";
import { schedule } from "@/lib/data";

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 md:py-32 bg-blue text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-yellow text-black font-mono text-xs font-bold uppercase mb-4 border-3 border-black">
            3 Days, 4 Stages
          </div>
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase">
            Schedule
          </h2>
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScheduleDay
            day="Friday"
            date="June 14"
            color="bg-yellow text-black"
            slots={schedule.friday}
          />
          <ScheduleDay
            day="Saturday"
            date="June 15"
            color="bg-green text-black"
            slots={schedule.saturday}
          />
          <ScheduleDay
            day="Sunday"
            date="June 16"
            color="bg-pink text-black"
            slots={schedule.sunday}
          />
        </div>

        {/* Download full schedule */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-white text-black font-mono font-bold uppercase border-3 border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-x-1 hover:-translate-y-1 transition-all">
            Download Full Schedule (PDF) →
          </button>
        </div>
      </div>
    </section>
  );
}

import MarqueeModule from "react-fast-marquee";

// Safe fallback for React 19 / Modern Vite module system quirks
const Marquee = MarqueeModule.default || MarqueeModule;

const BreakingNews = () => {
  return (
    <div className="flex items-center gap-4 bg-gray-100 px-4 py-3 rounded-sm">
      <span className="bg-brand  font-semibold px-6 py-2 rounded-sm shrink-0">
        Latest
      </span>

      {/* Pass your breaking news text directly into the fixed Marquee component */}
      <Marquee
        pauseOnHover={true}
        speed={60}
        className="text-gray-700 font-medium"
      >
        BREAKING NEWS: Germany vs Spain Match Highlights — 12 mins: GOAL
        GERMANY! Kai Havertz converts a controversial penalty to put the hosts
        ahead — 35 mins: Pedri orchestrates the midfield as Spain dominates
        possession — 42 mins: GOAL SPAIN! Nico Williams blasts a rocket into the
        roof of the net — Halftime Score: Locked at 1-1 in an absolute classic —
        60 mins: GOAL SPAIN! Morata capitalizes on a defensive error to take the
        lead 2-1 — 72 mins: Rudiger makes a heroic goal-line clearance to keep
        Germany alive — 85 mins: GOAL GERMANY! Sané unlocks the defense and
        chips the keeper — Final Score: A breathtaking 2-2 draw as both teams
        share the points in a masterclass of modern football!
      </Marquee>
    </div>
  );
};

export default BreakingNews;

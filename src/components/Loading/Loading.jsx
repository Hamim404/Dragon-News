import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    // Fixed full-screen container with flex centering and a subtle neutral background
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-50/80 dark:bg-neutral-900/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Upsized PuffLoader */}
        <PuffLoader
          color="#36d7b7"
          size={90} // Increased size for a prominent full-page visual anchor
          speedMultiplier={1}
        />

        {/* Optional: Micro-copy label to guide user experience */}
        <p className="text-sm font-medium tracking-wide text-neutral-500 dark:text-neutral-400 animate-pulse">
          Loading system assets...
        </p>
      </div>
    </div>
  );
};

export default Loading;

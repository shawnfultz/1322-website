interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  topColor,
  bottomColor,
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      style={{ backgroundColor: topColor }}
    >
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="relative block w-full h-[70px] md:h-[100px] lg:h-[140px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Back wave — subtle seafoam hint */}
        <path
          d="M0,90 C180,60 360,110 540,80 C720,50 900,100 1080,70 C1260,40 1380,90 1440,80 L1440,140 L0,140 Z"
          fill={bottomColor}
          opacity="0.3"
        />
        {/* Middle wave */}
        <path
          d="M0,70 C240,110 480,40 720,70 C960,100 1200,30 1440,70 L1440,140 L0,140 Z"
          fill={bottomColor}
          opacity="0.6"
        />
        {/* Front wave — main shape */}
        <path
          d="M0,85 C200,50 400,105 720,75 C1040,45 1240,100 1440,80 L1440,140 L0,140 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}

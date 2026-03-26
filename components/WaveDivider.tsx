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
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[60px] md:h-[80px] lg:h-[120px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          fill={bottomColor}
        />
        <path
          d="M0,80 C200,40 400,100 720,70 C1040,40 1240,90 1440,70 L1440,120 L0,120 Z"
          fill={bottomColor}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

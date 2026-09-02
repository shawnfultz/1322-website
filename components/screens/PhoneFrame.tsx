interface PhoneFrameProps {
  children: React.ReactNode;
  /** Outer frame size in CSS px. */
  width: number;
  height: number;
  /**
   * When set, `children` are authored at this size and scaled down to fit the
   * frame. Used for screens lifted from the apps' own 402x874 design files so
   * their real proportions survive.
   */
  designWidth?: number;
  designHeight?: number;
  radius?: number;
  className?: string;
}

const BEZEL = 11;

export default function PhoneFrame({
  children,
  width,
  height,
  designWidth,
  designHeight,
  radius = 46,
  className = "",
}: PhoneFrameProps) {
  const screenWidth = width - BEZEL * 2;
  const screenHeight = height - BEZEL * 2;
  const scale = designWidth ? screenWidth / designWidth : 1;

  return (
    <div
      className={`flex-shrink-0 shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.07)] ${className}`}
      style={{
        width,
        height,
        borderRadius: radius,
        padding: BEZEL,
        boxSizing: "border-box",
        background:
          "linear-gradient(160deg, #2f3d4d 0%, #16202c 55%, #2a3644 100%)",
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          width: screenWidth,
          height: screenHeight,
          borderRadius: radius - 13,
        }}
      >
        {designWidth && designHeight ? (
          <div
            style={{
              width: designWidth,
              height: designHeight,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            {children}
          </div>
        ) : (
          <div className="w-full h-full flex flex-col">{children}</div>
        )}
      </div>
    </div>
  );
}

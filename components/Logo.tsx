export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="50" cy="50" r="42" stroke="url(#logo-outer)" strokeWidth="0.8" opacity="0.25" />
      <circle cx="50" cy="50" r="30" stroke="url(#logo-mid)" strokeWidth="1" opacity="0.35" />
      <circle cx="50" cy="50" r="18" stroke="#2563eb" strokeWidth="1.2" opacity="0.55" />
      <circle cx="50" cy="50" r="5" fill="url(#logo-core)" />
      <circle cx="50" cy="8" r="3" fill="#7c3aed" opacity="0.9" />
      <circle cx="92" cy="50" r="3" fill="#2563eb" opacity="0.9" />
      <circle cx="50" cy="92" r="3" fill="#4f46e5" opacity="0.9" />
      <circle cx="8" cy="50" r="3" fill="#38bdf8" opacity="0.9" />
      <circle cx="80" cy="20" r="1.5" fill="#60a5fa" opacity="0.6" />
      <circle cx="80" cy="80" r="1.5" fill="#818cf8" opacity="0.6" />
      <circle cx="20" cy="80" r="1.5" fill="#a78bfa" opacity="0.6" />
      <circle cx="20" cy="20" r="1.5" fill="#7dd3fc" opacity="0.6" />
      <defs>
        <linearGradient id="logo-outer" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="logo-mid" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <radialGradient id="logo-core" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </radialGradient>
      </defs>
    </svg>
  );
}

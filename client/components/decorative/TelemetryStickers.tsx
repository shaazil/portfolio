/**
 * TelemetryStickers — Absolute-positioned SVG decorations
 * that inject the vintage motorsport / pit-wall timing screen motif.
 *
 * Each sticker is placed asymmetrically in section margins.
 * They are purely decorative (aria-hidden, pointer-events: none).
 */

/** Aero vector — simplified front wing cross-section */
export function AeroSticker({
  className = "",
  size = 180,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={`sticker ${className}`}
      aria-hidden="true"
    >
      {/* Main aero body */}
      <path d="M20 140 L80 120 L120 100 L160 92 L185 96 L188 110 L170 128 L80 140 Z" />
      {/* Endplate */}
      <path d="M185 88 L185 116" />
      <path d="M188 85 L188 120" />
      {/* Vortex generators */}
      <line x1="100" y1="108" x2="108" y2="96" />
      <line x1="120" y1="102" x2="128" y2="90" />
      <line x1="140" y1="96" x2="148" y2="86" />
      {/* Airflow lines */}
      <path d="M10 130 Q60 118 120 108" strokeDasharray="4 6" strokeWidth="0.5" />
      <path d="M10 120 Q60 110 130 100" strokeDasharray="4 6" strokeWidth="0.5" />
      <path d="M10 110 Q60 102 140 94" strokeDasharray="4 6" strokeWidth="0.5" />
      {/* Ground line */}
      <line x1="0" y1="155" x2="200" y2="155" strokeDasharray="3 8" strokeWidth="0.6" />
      {/* Dimension annotation */}
      <line x1="20" y1="145" x2="20" y2="160" strokeWidth="0.4" />
      <line x1="170" y1="130" x2="170" y2="160" strokeWidth="0.4" />
      <line x1="20" y1="158" x2="170" y2="158" strokeWidth="0.4" />
      <text
        x="95"
        y="168"
        textAnchor="middle"
        fontSize="7"
        fontFamily="'DM Mono', monospace"
        fill="currentColor"
        stroke="none"
      >
        1800mm
      </text>
    </svg>
  );
}

/** Chassis blueprint — top-down monocoque outline */
export function ChassisSticker({
  className = "",
  size = 220,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size * 0.55}
      viewBox="0 0 240 130"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      className={`sticker ${className}`}
      aria-hidden="true"
    >
      {/* Monocoque body — top view */}
      <path d="M30 65 L60 48 L100 38 L150 35 L190 38 L210 50 L212 65 L210 80 L190 92 L150 95 L100 92 L60 82 L30 65 Z" />
      {/* Cockpit opening */}
      <ellipse cx="120" cy="65" rx="18" ry="12" />
      {/* Centre line */}
      <line x1="20" y1="65" x2="225" y2="65" strokeDasharray="2 4" strokeWidth="0.4" />
      {/* Front axle */}
      <line x1="55" y1="40" x2="55" y2="90" strokeWidth="0.5" />
      {/* Rear axle */}
      <line x1="195" y1="40" x2="195" y2="90" strokeWidth="0.5" />
      {/* Wheelbase annotation */}
      <line x1="55" y1="108" x2="195" y2="108" strokeWidth="0.4" />
      <line x1="55" y1="100" x2="55" y2="112" strokeWidth="0.4" />
      <line x1="195" y1="100" x2="195" y2="112" strokeWidth="0.4" />
      <text
        x="125"
        y="120"
        textAnchor="middle"
        fontSize="7"
        fontFamily="'DM Mono', monospace"
        fill="currentColor"
        stroke="none"
      >
        3600mm wheelbase
      </text>
      {/* Cross-hatch at nose */}
      <line x1="35" y1="60" x2="50" y2="52" strokeWidth="0.3" />
      <line x1="35" y1="70" x2="50" y2="78" strokeWidth="0.3" />
      <line x1="40" y1="58" x2="48" y2="54" strokeWidth="0.3" />
      <line x1="40" y1="72" x2="48" y2="76" strokeWidth="0.3" />
    </svg>
  );
}

/** Tire compound indicator — the Pirelli-style compound dot with temp readout */
export function TireSticker({
  className = "",
  size = 80,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      className={`sticker ${className}`}
      aria-hidden="true"
    >
      {/* Outer tire */}
      <circle cx="40" cy="40" r="32" />
      {/* Inner rim */}
      <circle cx="40" cy="40" r="14" />
      {/* Spokes */}
      <line x1="40" y1="8" x2="40" y2="26" />
      <line x1="72" y1="40" x2="54" y2="40" />
      <line x1="40" y1="72" x2="40" y2="54" />
      <line x1="8" y1="40" x2="26" y2="40" />
      {/* Temp readout */}
      <text
        x="40"
        y="43"
        textAnchor="middle"
        fontSize="8"
        fontFamily="'DM Mono', monospace"
        fill="currentColor"
        stroke="none"
      >
        97°C
      </text>
    </svg>
  );
}

/** Telemetry trace — a mini speed/throttle trace */
export function TelemetryTrace({
  className = "",
  width = 200,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <svg
      width={width}
      height={width * 0.3}
      viewBox="0 0 200 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
      className={`sticker ${className}`}
      aria-hidden="true"
    >
      {/* Grid lines */}
      {[0, 15, 30, 45, 60].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="200"
          y2={y}
          strokeWidth="0.2"
          strokeDasharray="2 4"
        />
      ))}
      {/* Speed trace */}
      <polyline
        points="0,55 15,50 30,42 50,20 65,12 80,8 100,10 115,18 125,30 135,22 150,10 170,8 185,14 200,20"
        strokeWidth="1"
        style={{ color: "var(--racing-orange)" }}
        stroke="currentColor"
      />
      {/* Throttle trace */}
      <polyline
        points="0,58 15,55 30,40 50,10 65,5 80,5 100,8 115,35 125,12 135,5 150,5 170,5 185,20 200,30"
        strokeWidth="0.6"
        strokeDasharray="3 2"
      />
      {/* Labels */}
      <text
        x="2"
        y="7"
        fontSize="6"
        fontFamily="'DM Mono', monospace"
        fill="currentColor"
        stroke="none"
      >
        SPD
      </text>
      <text
        x="2"
        y="58"
        fontSize="6"
        fontFamily="'DM Mono', monospace"
        fill="currentColor"
        stroke="none"
      >
        THR
      </text>
    </svg>
  );
}

import { Link } from "react-router-dom";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className={`brand ${light ? "brand-light" : ""}`}
      aria-label="HIRENEST Home"
    >
      <b
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "46px",
          height: "46px",
          padding: 0,
          background: "transparent",
          flexShrink: 0,
          fontSize: 0,
          lineHeight: 0,
        }}
      >
        <svg
          width="46"
          height="46"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Magnifying Glass Ring */}
          <circle
            cx="27"
            cy="27"
            r="20"
            stroke="#159FE8"
            strokeWidth="6"
          />

          {/* Magnifying Glass Handle */}
          <path
            d="M42 42L57 57"
            stroke="#159FE8"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Blue H Background */}
          <rect
            x="16"
            y="16"
            width="22"
            height="22"
            rx="6"
            fill="#159FE8"
          />

          {/* White H */}
          <path
            d="M20 21H24V26H30V21H34V35H30V30H24V35H20V21Z"
            fill="white"
          />
        </svg>
      </b>

      <span>
       HIRE<strong>NEST</strong>
      </span>
    </Link>
  );
}
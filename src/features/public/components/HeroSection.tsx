import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

// HIRENEST Search Logo
function HirenestSearchIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="27"
        cy="27"
        r="20"
        stroke="#159FE8"
        strokeWidth="6"
      />

      <path
        d="M42 42L57 57"
        stroke="#159FE8"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <rect
        x="16"
        y="16"
        width="22"
        height="22"
        rx="6"
        fill="#159FE8"
      />

      <path
        d="M20 21H24V26H30V21H34V35H30V30H24V35H20V21Z"
        fill="white"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">

        <div className="hero-copy">

          <span className="eyebrow-pill">
            A smarter way to find your next move
          </span>

          <h1>
            Find work that <span>moves you</span> forward.
          </h1>

          <p>
            Discover meaningful opportunities, meet ambitious teams,
            and make your next career move with confidence.
          </p>

          {/* Search Bar */}
          <div className="hero-search">

            <label>
              <HirenestSearchIcon />

              <input
                placeholder="Job title, skill or company"
              />
            </label>

            <label>
              <MapPin size={17} />

              <select defaultValue="">
                <option value="" disabled>
                  All locations
                </option>
                <option>Dhaka</option>
                <option>Remote</option>
                <option>Chattogram</option>
              </select>
            </label>

            <Link
              className="button button-primary"
              to="/jobs"
            >
              Explore jobs
              <ArrowRight size={16} />
            </Link>

          </div>

          {/* Social Proof */}
          <div className="hero-proof">

            <span className="avatar-stack">
              <i>AM</i>
              <i>SK</i>
              <i>JR</i>
              <i>2k+</i>
            </span>

            <span>
              <b>Trusted by growing teams</b>
              <small>
                Join a community building what's next.
              </small>
            </span>

          </div>

        </div>

        {/* Hero Image */}
        <div className="hero-visual">

          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
            alt="Professionals collaborating"
          />

          <div className="floating-card float-top">
            <b>✦ New opportunities</b>
            <small>Curated for your next chapter</small>
          </div>

          <div className="floating-card float-bottom">
            <b>✓ Profile strength · 92%</b>
            <small>You're ready to stand out</small>
          </div>

        </div>

      </div>

      {/* Trusted Companies */}
      <div className="container trusted-row">

        <small>TEAMS THAT TRUST HIRENEST</small>

        <b>northstar</b>
        <b>vertex<span>digital</span></b>
        <b>aster.</b>
        <b>Bloom</b>
        <b>orbit systems</b>

      </div>
    </section>
  );
}
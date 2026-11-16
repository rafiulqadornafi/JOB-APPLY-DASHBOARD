import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, BriefcaseBusiness } from "lucide-react";

import { PageHeader } from "../../../components/common/PageHeader";
import { mockCompanies } from "../../../data/mock/companies";

const colors = [
  { bg: "#EEF2FF", text: "#4338CA" },
  { bg: "#ECFEFF", text: "#0E7490" },
  { bg: "#F5F3FF", text: "#6D28D9" },
  { bg: "#FFF7ED", text: "#C2410C" },
];

export function CompaniesPage() {
  return (
    <main className="container page-pad">
      <PageHeader
        eyebrow="MEET THE TEAMS"
        title="Companies building what's next."
        description="Explore thoughtful teams and discover where your skills can make a difference."
      />

      <div
        className="company-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
          marginTop: "32px",
        }}
      >
        {mockCompanies.map((company, index) => {
          const color = colors[index % colors.length];

          return (
            <Link
              to={`/companies/${company.id}`}
              className="company-card"
              key={company.id}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#FFFFFF",
                color: "#172033",
                padding: "26px",
                border: "1px solid #E2E8F0",
                borderRadius: "16px",
                minHeight: "230px",
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(15,23,42,0.04)",
                transition: "all 0.25s ease",
              }}
            >
              <span
                className="company-mark large-mark"
                style={{
                  width: "58px",
                  height: "58px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "14px",
                  background: color.bg,
                  color: color.text,
                  fontSize: "21px",
                  fontWeight: 800,
                  marginBottom: "22px",
                }}
              >
                {company.initials}
              </span>

              <h3
                style={{
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "#172033",
                  margin: "0 0 10px",
                }}
              >
                {company.name}
              </h3>

              <p
                style={{
                  color: "#64748B",
                  fontSize: "13px",
                  margin: "0 0 12px",
                }}
              >
                {company.industry}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#64748B",
                  fontSize: "13px",
                  marginBottom: "20px",
                }}
              >
                <MapPin size={14} />
                {company.location}
              </div>

              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "16px",
                  borderTop: "1px solid #E2E8F0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#4F46E5",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <BriefcaseBusiness size={15} />
                  {company.openings} Open Roles
                </span>

                <ArrowUpRight size={18} />
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
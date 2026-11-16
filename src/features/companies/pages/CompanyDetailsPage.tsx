import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  BriefcaseBusiness,
} from "lucide-react";

import { useAppStore } from "../../../app/store/appStore";
import { mockCompanies } from "../../../data/mock/companies";
import { JobCard } from "../../jobs/components/JobCard";

export function CompanyDetailsPage() {
  const { id } = useParams();

  // Find company
  const company = mockCompanies.find(
    (item) => item.id === id
  );

  // Get stable Zustand state
  const allJobs = useAppStore(
    (state) => state.jobs
  );

  // Filter jobs outside Zustand selector
  const jobs = useMemo(() => {
    if (!company) return [];

    return allJobs.filter(
      (job) => job.company === company.name
    );
  }, [allJobs, company?.name]);

  // Company not found
  if (!company) {
    return (
      <main className="container page-pad">
        <h1>Company not found</h1>

        <Link to="/companies">
          <ArrowLeft size={16} />
          Back to companies
        </Link>
      </main>
    );
  }

  return (
    <main className="container page-pad">

      {/* Back Button */}
      <Link
        to="/companies"
        className="text-link"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "30px",
        }}
      >
        <ArrowLeft size={16} />
        Back to companies
      </Link>

      {/* Company Header */}
      <section
        className="job-detail-heading"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          padding: "32px",
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "18px",
          marginBottom: "35px",
        }}
      >
        <span
          className="company-mark large-mark"
          style={{
            width: "80px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#EEF2FF",
            color: "#4338CA",
            borderRadius: "18px",
            fontSize: "27px",
            fontWeight: 800,
            flexShrink: 0,
          }}
        >
          {company.initials}
        </span>

        <div>
          <small
            style={{
              color: "#4F46E5",
              fontWeight: 700,
            }}
          >
            {company.industry}
          </small>

          <h1
            style={{
              color: "#172033",
              margin: "8px 0",
            }}
          >
            {company.name}
          </h1>

          <p
            style={{
              color: "#64748B",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <MapPin size={15} />
            {company.location}
          </p>

          <p style={{ color: "#64748B", marginTop: "8px" }}>
            <BriefcaseBusiness size={15} />
            {" "}{company.openings} Open Roles
          </p>
        </div>
      </section>

      {/* Company Information */}
      <section className="detail-section">
        <h2>About the company</h2>

        <p style={{ color: "#64748B", lineHeight: 1.8 }}>
          {company.description}
        </p>
      </section>

      {/* Open Positions */}
      <section style={{ marginTop: "45px" }}>
        <div
          className="section-heading"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <div>
            <small>CAREER OPPORTUNITIES</small>
            <h2>Open Positions</h2>
          </div>

          <Link to="/jobs" className="text-link">
            Explore all jobs
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {jobs.length > 0 ? (
          <div className="job-grid">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            ))}
          </div>
        ) : (
          <div
            className="surface"
            style={{
              padding: "40px",
              textAlign: "center",
              background: "#FFFFFF",
              borderRadius: "16px",
            }}
          >
            <BriefcaseBusiness
              size={35}
              color="#94A3B8"
            />

            <h3 style={{ color: "#172033" }}>
              No Open Positions Yet
            </h3>

            <p style={{ color: "#64748B" }}>
              This company has no matching job listings right now.
              Please check back later.
            </p>

            <Link
              to="/jobs"
              className="button button-primary"
              style={{ marginTop: "15px" }}
            >
              Browse Jobs
            </Link>
          </div>
        )}
      </section>

    </main>
  );
}
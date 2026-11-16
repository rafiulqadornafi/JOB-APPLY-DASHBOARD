import { useMemo } from "react";
import { Link } from "react-router-dom";

import {
  Bookmark,
  BriefcaseBusiness,
  CalendarDays,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

import { PageHeader } from "../../../components/common/PageHeader";
import { useAuthStore } from "../../../app/store/authStore";
import { useAppStore } from "../../../app/store/appStore";

import { StatCard } from "../../../components/common/StatCard";
import { ApplicationCard } from "../../applications/components/ApplicationCard";
import { JobCard } from "../../jobs/components/JobCard";

export function CandidateDashboard() {
  // Authentication state
  const user = useAuthStore((state) => state.user);

  // Get stable Zustand state references
  const allApplications = useAppStore(
    (state) => state.applications
  );

  const saved = useAppStore(
    (state) => state.savedJobIds
  );

  const jobs = useAppStore(
    (state) => state.jobs
  );

  // Filter applications outside Zustand selector
  const apps = useMemo(() => {
    return allApplications.filter(
      (application) => application.candidateId === user?.id
    );
  }, [allApplications, user?.id]);

  // Recommended jobs
  const recommendedJobs = useMemo(() => {
    return jobs.slice(0, 3);
  }, [jobs]);

  return (
    <>
      <PageHeader
        eyebrow="CANDIDATE WORKSPACE"
        title={`Good morning, ${user?.name.split(" ")[0] ?? "Alex"} 👋`}
        description="Here's what's happening with your career journey."
        action={
          <Link className="button button-primary" to="/jobs">
            Explore jobs <ArrowUpRight size={15} />
          </Link>
        }
      />

      {/* Statistics */}
      <div className="stats-grid">
        <StatCard
          label="Applications sent"
          value={String(apps.length)}
          helper="+2 this month"
          icon={<BriefcaseBusiness />}
        />

        <StatCard
          label="Saved opportunities"
          value={String(saved.length)}
          helper="Keep exploring"
          icon={<Bookmark />}
        />

        <StatCard
          label="Interviews"
          value="2"
          helper="1 upcoming"
          icon={<CalendarDays />}
        />

        <StatCard
          label="Profile strength"
          value="92%"
          helper="Looking great"
          icon={<TrendingUp />}
        />
      </div>

      {/* Dashboard Columns */}
      <div className="dashboard-columns">

        <section className="surface">
          <div className="panel-heading">
            <h3>Recent applications</h3>

            <Link to="/candidate/applications">
              View all →
            </Link>
          </div>

          {apps.length > 0 ? (
            apps.slice(0, 4).map((application) => (
              <ApplicationCard
                key={application.id}
                application={application}
              />
            ))
          ) : (
            <p>No applications yet. Explore jobs to get started.</p>
          )}
        </section>

        <section className="surface">
          <div className="panel-heading">
            <h3>Profile strength</h3>

            <b className="score">92%</b>
          </div>

          <div className="progress-track">
            <span style={{ width: "92%" }} />
          </div>

          <p className="muted">
            Add your latest resume and portfolio to stand out to employers.
          </p>

          <Link to="/candidate/profile" className="text-link">
            Complete your profile →
          </Link>
        </section>

      </div>

      {/* Recommended Jobs */}
      <div className="section-heading compact">
        <div>
          <small>HAND-PICKED FOR YOU</small>
          <h2>Recommended roles</h2>
        </div>

        <Link to="/jobs">
          See all jobs →
        </Link>
      </div>

      <div className="job-grid">
        {recommendedJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
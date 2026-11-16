import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { useAppStore } from "../../../app/store/appStore";
import { JobCard } from "../../jobs/components/JobCard";

export function FeaturedJobs() {
  const allJobs = useAppStore((state) => state.jobs);

  const jobs = useMemo(() => {
    return allJobs
      .filter((job) => job.featured)
      .slice(0, 3);
  }, [allJobs]);

  return (
    <section className="section container">
      <div className="section-heading">
        <div>
          <small>OPPORTUNITIES, CURATED</small>

          <h2>
            Find a role worth
            <br />
            <span>getting excited about.</span>
          </h2>
        </div>

        <Link to="/jobs" className="text-link">
          Explore all jobs
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="job-grid">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}
      </div>
    </section>
  );
}
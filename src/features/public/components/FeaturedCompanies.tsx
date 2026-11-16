import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const companies = [
  {
    id: 1,
    name: "TechNova Solutions",
    category: "Information Technology",
    jobs: 12,
    initial: "T",
    color: "#4F46E5",
  },
  {
    id: 2,
    name: "FinEdge Technologies",
    category: "Finance & Banking",
    jobs: 8,
    initial: "F",
    color: "#0891B2",
  },
  {
    id: 3,
    name: "CloudCore Systems",
    category: "Cloud Computing",
    jobs: 15,
    initial: "C",
    color: "#7C3AED",
  },
  {
    id: 4,
    name: "NextGen Digital",
    category: "Digital Marketing",
    jobs: 6,
    initial: "N",
    color: "#EA580C",
  },
  {
    id: 5,
    name: "GreenLeaf Industries",
    category: "Environmental Services",
    jobs: 9,
    initial: "G",
    color: "#16A34A",
  },
  {
    id: 6,
    name: "PixelCraft Studio",
    category: "Design & Creative",
    jobs: 11,
    initial: "P",
    color: "#DB2777",
  },
];

export function FeaturedCompanies() {
  return (
    <section className="featured-companies">
      <div className="companies-container">

        <div className="companies-header">
          <div>
            <small className="section-label">
              OUR PARTNERS
            </small>

            <h2>Top Companies Hiring Now</h2>

            <p>
              Discover exciting career opportunities
              from leading companies.
            </p>
          </div>

          <Link to="/companies" className="view-all">
            Explore Companies
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="companies-grid">
          {companies.map((company) => (
            <div className="company-card" key={company.id}>

              <div
                className="company-logo"
                style={{
                  backgroundColor: company.color,
                }}
              >
                {company.initial}
              </div>

              <h3>{company.name}</h3>

              <p className="company-category">
                {company.category}
              </p>

              <div className="company-footer">
                <span>
                  {company.jobs} Open Positions
                </span>

                <Link to="/jobs">
                  View Jobs →
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
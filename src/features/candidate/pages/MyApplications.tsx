import { useMemo } from "react";
import { PageHeader } from "../../../components/common/PageHeader";
import { useAuthStore } from "../../../app/store/authStore";
import { useAppStore } from "../../../app/store/appStore";
import { ApplicationCard } from "../../applications/components/ApplicationCard";
import { EmptyState } from "../../../components/ui/EmptyState";

export function MyApplications() {
  const user = useAuthStore((state) => state.user);
  const allApplications = useAppStore((state) => state.applications);

  const apps = useMemo(() => {
    return allApplications.filter(
      (application) => application.candidateId === user?.id
    );
  }, [allApplications, user?.id]);

  return (
    <>
      <PageHeader
        eyebrow="YOUR CAREER JOURNEY"
        title="My applications"
        description="Track every opportunity you've applied for."
      />

      <div className="surface list-surface">
        {apps.length > 0 ? (
          apps.map((application) => (
            <ApplicationCard
              key={application.id}
              application={application}
            />
          ))
        ) : (
          <EmptyState
            title="No applications yet"
            description="Your applications will appear here once you apply to a role."
          />
        )}
      </div>
    </>
  );
}
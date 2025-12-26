import { useLocation } from "react-router";
import { useGetSubjectSections } from "../api/queries";
import { SectionsList } from "./SectionsList";

export const Sections = () => {
  const location = useLocation();

  const { data } = useGetSubjectSections({
    skip: 0,
    take: 5,
    subjectId: location.pathname.split("/")[2],
  });

  return (
    <div>
      <SectionsList items={data?.items || []} />
    </div>
  );
};

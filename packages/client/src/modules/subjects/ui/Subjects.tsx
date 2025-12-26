import { useGetSubjects } from "../api/queries";
import { SubjectsList } from "./SubectsList";

export const Subjects = () => {
  const { data } = useGetSubjects({ take: 5, skip: 0 });

  data;
  return (
    <div>
      <SubjectsList items={data?.items || []} />
    </div>
  );
};

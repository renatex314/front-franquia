import CourseCard from "./CourseCard";

const CoursesPage = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-[80%] overflow-hidden grid grid-cols-1 min-[870px]:grid-cols-2 xl:grid-cols-3 m-10 mx-auto gap-3">
        <CourseCard
          courseName="Curso de Russo"
          courseLevel="intermediario"
          courseStatus="matriculado"
          teachersList={["Vadim Kolosenvo", "Dmitri Pavlov"]}
        />
      </div>
    </div>
  );
};

export default CoursesPage;

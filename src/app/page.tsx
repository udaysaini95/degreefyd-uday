import CollegeComparator from "@/components/CollegeComparator";
import CourseListing from "@/components/CourseListing";
import CourseDetail from "@/components/CourseDetail";
import CollegeListing from "@/components/CollegeListing";
import UniversityPage from "@/components/UniversityPage";
import ExamListing from "@/components/ExamListing";
import ExamDetail from "@/components/ExamDetail";
import BlogListing from "@/components/BlogListing";
import BlogDetail from "@/components/BlogDetail";

export default async function Home(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams;
  const view = searchParams.view;

  return (
    <main>
      {view === "course-detail" ? <CourseDetail /> : view === "blog-detail" ? <BlogDetail /> : view === "blogs" ? <BlogListing /> : view === "exam-detail" ? <ExamDetail /> : view === "exams" ? <ExamListing /> : view === "university" ? <UniversityPage /> : view === "courses" ? <CourseListing /> : view === "colleges" ? <CollegeListing /> : <CollegeComparator />}
    </main>
  );
}

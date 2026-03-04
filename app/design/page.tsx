import Navbar from "@/components/design/navbar";
import DesignHero from "@/components/design/hero";
import MethodologySection from "@/components/design/how";
import AdmissionCriteria from "@/components/design/admission";
import CourseEcosystem from "@/components/design/suite";
import FeaturesSection from "@/components/design/Features";
import Courses from "@/components/design/courses";
//import StudioCurriculum from "@/components/design/design";
import Design2 from "@/components/design/design2";
import TacSmallFooter from "@/components/design/footer";
//import Curriculum from "@/components/design/Curriculum";
import TacAdvantage from "@/components/design/Careers";

export default function DesignPage() {
  return (
    <>
      <Navbar />
      <DesignHero />
      <TacAdvantage />
      <MethodologySection />
      <CourseEcosystem />
      {/*<Curriculum />*/}
      <AdmissionCriteria />
      <Design2 />
      <Courses />
      <FeaturesSection />
      <TacSmallFooter />
    </>
  );
}

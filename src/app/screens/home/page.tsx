import Image from "next/image";
import CategorySection from "./sections/category/page";
import ContactSection from "./sections/contact/page";
import MainSection from "./sections/main/page";
import TestimonialSection from "./sections/testimonial/page";
import WorkSection from "./sections/work/page";

export default function HomeScreen() {
  return (
    <div>
      <MainSection />
      <WorkSection />
      <CategorySection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
}

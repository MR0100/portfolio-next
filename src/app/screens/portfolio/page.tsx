import PageAnimationWrapper from "@/app/components/page_animation_wrapper";
import WorkSection from "../home/sections/work/page";

export default function PortfolioScreen() {
  return (
    <PageAnimationWrapper>
      {" "}
      <div className="container m-auto">
        <WorkSection />
      </div>
    </PageAnimationWrapper>
  );
}

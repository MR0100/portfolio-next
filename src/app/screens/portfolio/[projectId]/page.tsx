import Image from "next/image";
import { TbBackground } from "react-icons/tb";

export default function PortfolioDetailsScreen({
  params,
}: {
  params: { projectId: string };
}) {
  let data = [
    {
      image: "/portfolio/today_quote/01.png",
      projectName: "Today Quote",
      projectDetails: "Daily Quote and Motivation Application",
      projectId: "today_quote",
      background: "bg-[#F4F4F4]",
    },
    {
      image: "/portfolio/careshare/01.png",
      projectName: "CareShare",
      projectDetails: "Health Care and Assistance Application",
      projectId: "careshare",
      background: "bg-[#E3FFF0]",
    },
    {
      image: "/portfolio/lili/01.png",
      projectName: "Lili | Fitness Assistance",
      projectDetails: "Fitness Assistance Application",
      projectId: "lili",
      background: "bg-[#ECF2FF]",
    },
    {
      image: "/portfolio/bookmrk/01.png",
      projectName: "BookMRK",
      projectDetails: "Book Ordering Application for schools",
      projectId: "bookmrk",
      background: "bg-[#E5DBFF]",
    },

    {
      image: "/portfolio/bookmrk_delivery/01.png",
      projectName: "BookMRK Delivery",
      projectDetails: "Delivery Application for BookMRK",
      projectId: "bookmrk_delivery",
      background: "bg-[#F1E9FE]",
    },
    {
      image: "/portfolio/foresite/01.png",
      projectName: "Foresite",
      projectDetails: "Crop Monitoring and grow assistant application",
      projectId: "foresite",
      background: "bg-[#E4F2FD]",
    },
    {
      image: "/portfolio/havitglam/01.png",
      projectName: "Havit Glam",
      projectDetails:
        "Personality improvement and daily engagement application",
      projectId: "havitglam",
      background: "bg-[#FFE8C3]",
    },

    {
      image: "/portfolio/lux_cards/01.png",
      projectName: "Lux Cards",
      projectDetails:
        "Business, Engagement, Wedding, Baby Shower and Many other Card Designing and Ordering Application",
      projectId: "lux_cards",
      background: "bg-[#FEFAFF]",
    },
    {
      image: "/portfolio/marline_media/01.png",
      projectName: "Marline Media",
      projectDetails: "Filter and Poster Designing and ordering Application",
      projectId: "marline_media",
      background: "bg-[#E6DDFB]",
    },
    {
      image: "/portfolio/physio_mobile/01.png",
      projectName: "Physio Mobile",
      projectDetails: "Fitness and Mobility Mobile Application",
      projectId: "physio_mobile",
      background: "bg-[#F3FFF3]",
    },
    {
      image: "/portfolio/synergy/01.png",
      projectName: "Synergy",
      projectDetails: "Match making and Dating application",
      projectId: "synergy",
      background: "bg-[#EBF6FB]",
    },
    {
      image: "/portfolio/tarot_cat/01.jpg",
      projectName: "Tarot Cat",
      projectDetails: "Tarot Reading and Astrology Application",
      projectId: "tarot_cat",
      background: "bg-[#EFE5FF]",
    },
    {
      image: "/portfolio/radio_station/01.png",
      projectName: "Radio Station",
      projectDetails: "Online Radio Station Application",
      projectId: "radio_station",
      background: "bg-[#EFE5FF]",
    },
  ];

  let project = data.find((item) => item.projectId === params.projectId);
  if (project === undefined) {
    return <div>Project not found</div>;
  }
  return (
    <div className="w-screen flex place-content-center">
      <div className="flex flex-col items-center">
        <Image
          src={project.image}
          alt={project.projectName}
          width={3368}
          height={2380}
          className={"h-[700px] w-screen object-contain " + project.background}
        />
        <div className="w-[1200px] flex flex-col items-start p-[42px]">
          <p>{project.background}</p>
          <p className="font-semibold text-[42px]">{project.projectName}</p>
          <p className="text-[17px] opacity-50">{project.projectDetails}</p>
        </div>
      </div>
    </div>
  );
}

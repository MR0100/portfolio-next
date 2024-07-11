import WorkCardComponent from "./work_card";

export default function WorkSection() {
  let data = [
    {
      image: "/portfolio/today_quote/01.png",
      projectName: "Today Quote",
      projectDetails: "Daily Quote and Motivation Application",
      projectId: "today_quote",
    },
    {
      image: "/portfolio/careshare/01.png",
      projectName: "CareShare",
      projectDetails: "Health Care and Assistance Application",
      projectId: "careshare",
    },
    {
      image: "/portfolio/lili/01.png",
      projectName: "Lili | Fitness Assistance",
      projectDetails: "Fitness Assistance Application",
      projectId: "lili",
    },
    {
      image: "/portfolio/bookmrk/01.png",
      projectName: "BookMRK",
      projectDetails: "Book Ordering Application for schools",
      projectId: "bookmrk",
    },

    {
      image: "/portfolio/bookmrk_delivery/01.png",
      projectName: "BookMRK Delivery",
      projectDetails: "Delivery Application for BookMRK",
      projectId: "bookmrk_delivery",
    },
    {
      image: "/portfolio/foresite/01.png",
      projectName: "Foresite",
      projectDetails: "Crop Monitoring and grow assistant application",
      projectId: "foresite",
    },
    {
      image: "/portfolio/havitglam/01.png",
      projectName: "Havit Glam",
      projectDetails:
        "Personality improvement and daily engagement application",
      projectId: "havitglam",
    },

    {
      image: "/portfolio/lux_cards/01.png",
      projectName: "Lux Cards",
      projectDetails:
        "Business, Engagement, Wedding, Baby Shower and Many other Card Designing and Ordering Application",
      projectId: "lux_cards",
    },
    {
      image: "/portfolio/marline_media/01.png",
      projectName: "Marline Media",
      projectDetails: "Filter and Poster Designing and ordering Application",
      projectId: "marline_media",
    },
    {
      image: "/portfolio/physio_mobile/01.png",
      projectName: "Physio Mobile",
      projectDetails: "Fitness and Mobility Mobile Application",
      projectId: "physio_mobile",
    },
    {
      image: "/portfolio/synergy/01.png",
      projectName: "Synergy",
      projectDetails: "Match making and Dating application",
      projectId: "synergy",
    },
    {
      image: "/portfolio/tarot_cat/01.jpg",
      projectName: "Tarot Cat",
      projectDetails: "Tarot Reading and Astrology Application",
      projectId: "tarot_cat",
    },
    {
      image: "/portfolio/radio_station/01.png",
      projectName: "Radio Station",
      projectDetails: "Online Radio Station Application",
      projectId: "radio_station",
    },
  ];

  return (
    <div className="w-screen flex place-content-center p-[42px]">
      <div className="w-[1200px] flex flex-col gap-[42px] items-center">
        <p className="font-semibold text-[32px]">Recent Projects</p>
        <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[24px]">
          {data.map((item) => (
            <WorkCardComponent data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

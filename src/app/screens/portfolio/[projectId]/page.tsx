"use client";

import PageAnimationWrapper from "@/app/components/page_animation_wrapper";
import Image from "next/image";
import Link from "next/link";

import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

export default function PortfolioDetailsScreen({
  params,
}: {
  params: { projectId: string };
}) {
  let data = [
    {
      imagePath: "/portfolio/today_quote/",
      images: ["01.png", "02.png", "03.png"],
      projectName: "Today's Quote",
      skills: ["Flutter", "Dart", "Firebase", "2D-Game", "Local Storage"],
      projectDetails: "Daily Quote and Motivation Application",
      projectId: "today_quote",
      background: "bg-[#F4F4F4]",
      appStoreLink: "a",
      playStoreLink: "a",
      otherLinks: ["a", "b"],
    },
    {
      imagePath: "/portfolio/careshare/",
      images: ["01.png", "02.png", "03.png"],
      projectName: "CareShare",
      skills: [
        "Flutter",
        "Dart",
        "APIs Integration",
        "Camera",
        "FCM",
        "IAP (In-App Purchase)",
        "Local Storage",
        "Google Fit",
        "Apple Health",
        "Animations",
      ],
      projectDetails: "Health Care and Assistance Application",
      projectId: "careshare",
      background: "bg-[#E3FFF0]",
      appStoreLink: "",
      playStoreLink: "",
      otherLinks: [],
    },
    {
      imagePath: "/portfolio/lili/",
      images: ["01.png", "02.png"],
      projectName: "Lili | Fitness Assistance",
      skills: [
        "Flutter",
        "Dart",
        "APIs Integration",
        "AI",
        "Local Storage",
        "Chat",
        "Animations",
      ],
      projectDetails: "Fitness Assistance Application",
      projectId: "lili",
      background: "bg-[#ECF2FF]",
      appStoreLink: "",
      playStoreLink: "",
      otherLinks: [],
    },
    {
      imagePath: "/portfolio/bookmrk/",
      images: ["01.png", "02.png"],
      projectName: "BookMRK",
      skills: [
        "Flutter",
        "Dart",
        "APIs Integration",
        "Local Storage",
        "Live Location",
        "FCM",
        "IAP (In-App Purchase)",
        "Maps",
        "Animations",
      ],
      projectDetails: "Book Ordering Application for schools",
      projectId: "bookmrk",
      background: "bg-[#E5DBFF]",
      appStoreLink: "",
      playStoreLink: "",
      otherLinks: [],
    },

    {
      imagePath: "/portfolio/bookmrk_delivery/",
      images: ["01.png", "02.png"],
      projectName: "BookMRK Delivery",
      skills: [
        "Flutter",
        "Dart",
        "APIs Integration",
        "FCM",
        "Local Storage",
        "Live Location",
        "Maps",
      ],
      projectDetails: "Delivery Application for BookMRK",
      projectId: "bookmrk_delivery",
      background: "bg-[#F1E9FE]",
      appStoreLink: "",
      playStoreLink: "",
      otherLinks: [],
    },
    {
      imagePath: "/portfolio/foresite/",
      images: ["01.png", "02.png"],
      projectName: "Foresite",
      skills: [
        "Flutter",
        "Dart",
        "APIs Integration",
        "Local Storage",
        "Live Location",
        "FCM",
        "Maps",
        "Charts",
        "Sockets",
        "Animations",
      ],
      projectDetails: "Crop Monitoring and grow assistant application",
      projectId: "foresite",
      background: "bg-[#E4F2FD]",
      appStoreLink: "",
      playStoreLink: "",
      otherLinks: [],
    },
    {
      imagePath: "/portfolio/havitglam/",
      images: ["01.png", "02.png", "03.png"],
      projectName: "Havit Glam",
      skills: [
        "Flutter",
        "Dart",
        "Firebase",
        "Local Storage",
        "FCM",
        "Camera",
        "Sound",
        "Animations",
      ],
      projectDetails:
        "Personality improvement and daily engagement application",
      projectId: "havitglam",
      background: "bg-[#FFE8C3]",
      appStoreLink: "",
      playStoreLink: "",
      otherLinks: [],
    },

    {
      imagePath: "/portfolio/lux_cards/",
      images: ["01.png", "02.png", "03.png"],
      projectName: "Lux Cards",
      projectDetails:
        "Business, Engagement, Wedding, Baby Shower and Many other Card Designing and Ordering Application",
      skills: [
        "Flutter",
        "Dart",
        "Firebase",
        "Local Storage",
        "APIs Integration",
        "FCM",
        "IAP (In-App Purchase)",
        "Card Editor",
        "Animations",
      ],
      projectId: "lux_cards",
      background: "bg-[#FEFAFF]",
      appStoreLink: "",
      playStoreLink: "",
      otherLinks: [],
    },
    {
      imagePath: "/portfolio/marline_media/",
      images: ["01.png", "02.png", "03.png"],
      projectName: "Marline Media",
      skills: [
        "Flutter",
        "Dart",
        "Firebase",
        "FCM",
        "IAP (In-App Purchase)",
        "Local Storage",
        "APIs Integration",
        "Animations",
      ],
      projectDetails: "Filter and Poster Designing and ordering Application",
      projectId: "marline_media",
      background: "bg-[#E6DDFB]",
      appStoreLink: "",
      playStoreLink: "",
      otherLinks: [],
    },
    {
      imagePath: "/portfolio/physio_mobile/",
      images: ["01.png", "02.png", "03.png"],
      projectName: "Physio Mobile",
      projectDetails: "Fitness and Mobility Mobile Application",
      projectId: "physio_mobile",
      skills: [
        "Flutter",
        "Dart",
        "Firebase",
        "Local Storage",
        "FCM",
        "Animations",
      ],
      background: "bg-[#F3FFF3]",
      appStoreLink: "",
      playStoreLink: "",
      otherLinks: [],
    },
    {
      imagePath: "/portfolio/synergy/",
      images: ["01.png", "02.png"],
      projectName: "Synergy",
      skills: [
        "Flutter",
        "Dart",
        "Firebase",
        "Local Storage",
        "FCM",
        "IAP (In-App Purchase)",
        "APIs Integration",
        "Animations",
      ],
      projectDetails: "Match making and Dating application",
      projectId: "synergy",
      background: "bg-[#EBF6FB]",
      appStoreLink: "",
      playStoreLink: "",
      otherLinks: [],
    },
    {
      imagePath: "/portfolio/tarot_cat/",
      images: ["01.png"],
      projectName: "Tarot Cat",
      skills: ["Flutter", "Dart", "Firebase", "Local Storage", "FCM"],
      projectDetails: "Tarot Reading and Astrology Application",
      projectId: "tarot_cat",
      background: "bg-[#FEDBF0]",
      appStoreLink: "",
      playStoreLink: "",
      otherLinks: [],
    },
    {
      imagePath: "/portfolio/radio_station/",
      images: ["01.png", "02.png", "03.png"],
      projectName: "Radio Station",
      projectDetails: "Online Radio Station Application",
      skills: ["Flutter", "Dart"],
      projectId: "radio_station",
      background: "bg-[#EFE5FF]",
      appStoreLink: "",
      playStoreLink: "",
      otherLinks: [],
    },
  ];

  let project = data.find((item) => item.projectId === params.projectId);
  if (project === undefined) {
    return <div>Project not found</div>;
  }
  return (
    <PageAnimationWrapper
      children={
        <div className="w-screen flex place-content-center">
          <div className={"flex flex-col items-center w-full "}>
            <Swiper
              navigation={true}
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2000 }}
              pagination={{
                clickable: true,
              }}
              spaceBetween={50}
              slidesPerView={1}
              className={"w-full " + project.background}
            >
              {project.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={project.imagePath + image}
                    alt={project.projectName}
                    width={3368}
                    height={2380}
                    className={"h-[700px] w-full object-contain "}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="container m-auto">
              <div className="w-full flex flex-col items-start p-[42px] gap-[24px]">
                <p className="font-semibold text-[42px]">
                  {project.projectName}
                </p>
                <div className="flex flex-wrap gap-[12px]">
                  {project.skills.map((skill, index) => {
                    return (
                      <p className="text-[17px] bg-grey px-[24px] py-[6px] rounded-full content-center text-black">
                        {skill}
                      </p>
                    );
                  })}
                </div>
                <p className="text-[17px] opacity-50">
                  {project.projectDetails}
                </p>
                <div className="flex gap-4">
                  {project.appStoreLink !== "" && (
                    <Link
                      href={project.appStoreLink}
                      target="_blank"
                      className="icon-[simple-icons--appstore] h-[32px] w-[32px]"
                    />
                  )}
                  {project.playStoreLink !== "" && (
                    <Link
                      href={project.playStoreLink}
                      target="_blank"
                      className="icon-[ion--logo-google-playstore] h-[32px] w-[32px]"
                    />
                  )}
                </div>
                <div className="flex gap-4 flex-col">
                  {project.otherLinks.map((link, index) => {
                    return (
                      <Link
                        href={link}
                        target="_blank"
                        className="font-semibold text-[20px] text-[#4a9fff]"
                      >
                        //{link}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}

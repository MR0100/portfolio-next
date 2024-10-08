"use client";

import TestimonialComponent from "./testimonial_component";

import {  Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";




export default function TestimonialSection() {
  let data = [
    {
      name: "Kyo Nishikawa",
      position: "CEO & Founder of Wonderlust",
      image: "/testimonials/locket.png",
      testimonial:
        "Mitul did a great job in developing our app with careful coding. He responded immediately to our requests and for changes in specifications and modifications, which was a great relief. Of course, His work is very polite. He quickly became a responsible member of the team.",
    },
    {
      name: "Mohamed H.",
      position: "Managing Director at XSpot",
      image: "/testimonials/xspot.png",
      testimonial:
        "Mitul is a rare example of dedication yet with high quality of work. Quality is always an issue and difficult to find on freelancing websites, but Mitul proved that it's still possible to find such talents.",
    },
    {
      name: "Robin Brunner",
      position: "Enterpreneur | Physio Mobile",
      image: "/testimonials/physio.png",
      testimonial:
        "We love working with Mitul. He is a reliable and professional developer. His response time is fast and he was available all time. This was a fixed-bid project and Mitul worked very thoroughly and did not rush the project to just complete it. He cared about the success of the project beyond the development process itself. We will continue to do future work with him.",
    },
    {
      name: "Pedro Silva",
      position: "Individual | Serial Connection for TPMS System",
      image: "/testimonials/tpms.png",
      testimonial:
        "Exceptional work, beyond expectations. Mitul showed to be a commited professional. Very good job, looking forward to the next project.",
    },
    {
      name: "Daisuke Yamada",
      position: "CEO & Founder of Remody",
      image: "/testimonials/remody.png",
      testimonial:
        "His work was fast and the quality was consistently high. Communication was very smooth, and whenever there were problems, we were able to have meetings and work on solutions immediately. Thanks to him, our mobile app has become very user-friendly. Thank you!",
    },
  ];

  return (
    <div className="flex p-[42px] flex-col gap-[42px] w-full items-center">
      <p className="font-semibold text-[32px]">Testimonial</p>
      <Swiper
        navigation={true}
        modules={[ Autoplay, Pagination]}
        autoplay={{ delay: 2000 }}
        pagination={{
          clickable: true
        }}
        spaceBetween={50}
        slidesPerView={1}
        className="w-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <TestimonialComponent data={item} />
          </SwiperSlide>
        ))}
      </Swiper>

  
    </div>
  );
}

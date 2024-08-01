import PageAnimationWrapper from "@/app/components/page_animation_wrapper";
import ContactSection from "../home/sections/contact/page";
import Image from "next/image";
import { ContactForm } from "./contact_form";

export default function ContactScreen() {
  return (
    <PageAnimationWrapper>
      <div className="container m-auto px-[42px] pt-[42px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex lg:flex-row flex-col-reverse items-center">
            <div className="lg:basis-3/5 flex flex-col gap-[48px]">
              <div className="flex flex-col gap-[12px]">
                <p className="font-semibold text-[32px]">
                  Android | iOS | Web Development
                </p>

                <p className="text-[17px]">
                  👀 Are you in need of a skilled Mobile Application Developer
                  with experience 🏗️ building high-quality applications? Look no
                  further!
                  <br />
                  <br />I specialize 👔 in using{" "}
                  <b>&quot;Dart and Flutter&quot;</b> and have over{" "}
                  <b>5 years</b> of experience working on large-scale projects
                  for clients on Upwork and other platforms. I place a high
                  value on UI/UX design in all of my mobile applications 📱,
                  understanding that it can greatly impact user engagement and
                  satisfaction😌. I am well-versed in mobile app guidelines and
                  pay close attention to design layouts, ensuring{" "}
                  <b>pixel-perfect layouts</b>
                  that work seamlessly across various devices.
                </p>
              </div>
            </div>
            <div className="basis-2/5 place-content-end flex">
              <Image
                src="/images/mitul-02.png"
                alt="Hero"
                width={800}
                height={800}
                className="h-[360px] w-[auto]"
              />
            </div>
          </div>

          <p className="font-semibold text-[32px] pt-[42px]">Facts</p>
          <p className="text-[17px]">
            I am <b>Top Rated Plus Developer</b> providing my service on Upwork
            for 5+ years with have <b>100% Job Success Score</b>. It verifies my
            identity as a responsible developer who always finish the Job with
            100% Client Satisfaction.
          </p>
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[24px]">
            <FactsCard
              count="Happy Clients"
              title="Client Satisfaction is the Key of Success. and I have 25+ Satisfied Clients with 5 Star Rating."
              image="/images/01.png"
            />
            <FactsCard
              count="Projects Completed"
              title='Completion of the project is very important and I have completed 35+ Projects with "100% Job Success Score."'
              image="/images/02.png"
            />
            <FactsCard
              count="Certificates"
              title="I have achieved 10+ Certifications in Mobile|Web Development, UI/UX Designing and Job-Contracts."
              image="/images/03.png"
            />
          </div>

          {/* <div className="flex w-full mb-[42px] pb-[42px] backdrop-blur-2xl flex-col items-start">
            <p className="font-semibold text-[32px] pt-[42px]">Contact</p>
            <p className="text-[17px]">
              Please enter the details and send it. I&#39;ll get back to you as
              sooner as possible.
            </p>
            <ContactForm />
          </div> */}
        </div>
        <ContactSection />
      </div>
    </PageAnimationWrapper>
  );
}

function FactsCard({
  image,
  count,
  title,
}: {
  image: string;
  count: string;
  title: string;
}) {
  return (
    <div className="w-auto flex flex-col py-[64px] items-center">
      <Image
        src={image}
        alt=""
        width={124}
        height={124}
        className="pb-[42px] h-auto w-[124px]"
      />
      <p className="font-semibold text-[27px] text-center">{count}</p>
      <p className="text-center text-[17px] pt-[12px]">{title}</p>
    </div>
  );
}

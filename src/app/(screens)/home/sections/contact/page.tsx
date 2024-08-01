import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";

export default function ContactSection() {
  return (
    <div className={"flex place-content-center bg-[black] text-white p-[42px]"}>
      <div className="flex flex-col gap-[42px] ">
        <p className="font-semibold text-[32px] text-center md:text-start lg:text-start ">
          Let&apos;s work together
        </p>
        <div className="grid grid-flow-row  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start gap-[48px]">
          <div className="w-auto flex flex-col gap-[60px] ">
            <p className="text-[17px] text-center md:text-start lg:text-start ">
              Feel free to email me at mr.vaghasiya197@gmail.com for any
              questions or feedback. I aim to respond within 24 hours. You can
              also use the contact form on my website.
            </p>
            <p className="text-[17px] text-center md:text-start lg:text-start ">
              Thank you for your interest in getting in touch with me.
            </p>
          </div>
          <div className="w-auto text-[17px] flex flex-col gap-5">
            <div className="flex gap-[16px] group items-center">
              <div className="rounded-full p-4 bg-black group-hover:bg-grey ">
                <GoLocation className="h-auto w-[24px]  group-hover:text-black" />
              </div>
              <div className="">
                <p className="font-semibold text-[24px]">Location</p>
                <p className="text-[17px] opacity-50">
                  406, Dhara Trade Center, Surat, Gujarat, India.
                </p>
              </div>
            </div>
            <div className="flex gap-[16px] group items-center">
              <div className="rounded-full p-4 bg-black group-hover:bg-grey ">
                <HiOutlineMail className="h-auto w-[24px]  group-hover:text-black" />
              </div>
              <div className="">
                <p className="font-semibold text-[24px]">Email</p>
                <p className="text-[17px] opacity-50">
                  mr.vaghasiya197@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-[16px] group items-center">
              <div className="rounded-full p-4 bg-black group-hover:bg-grey">
                <IoCallOutline className="h-auto w-[24px]  group-hover:text-black" />
              </div>
              <div className="">
                <p className="font-semibold text-[24px]">Call</p>
                <p className="text-[17px] opacity-50">+91 63538 24140</p>
              </div>
            </div>
          </div>
        </div>
        <p className="font-semibold text-[48px] text-center md:text-start lg:text-start ">
          Thank you
        </p>
        <p className="text-[17px] text-center md:text-start lg:text-start">
          Hope you see you soon onboard to discuss the business requirements and
          start working to create optimized and beautiful mobile or web
          application.
        </p>
      </div>
    </div>
  );
}

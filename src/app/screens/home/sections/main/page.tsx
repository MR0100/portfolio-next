import Image from "next/image";

export default function MainSection() {
  return (
    <div className="flex h-auto p-[42px] w-full items-center justify-center">
      <div className="flex lg:flex-row flex-col-reverse  items-center">
        <div className="lg:basis-3/5 flex flex-col gap-[48px]">
          <div className="flex flex-col gap-[12px] items-center lg:items-start">
            <p className="font-semibold text-[14px] lg:text-[20px]">
              Android | iOS | Web Development
            </p>
            <p className="font-semibold text-[42px] lg:text-[68px]">
              Mitul Vaghasiya
            </p>
            <p className="text-[17px] text-center lg:text-start">
              I&apos;m <b>&quot;Top-Rated Plus&quot;</b> Ranked Developer on
              Upwork with
              <b> 5+ years</b> of hand&apos;s on Experience developing mobile
              and web applications for many clients and companies.
            </p>
          </div>
          <a
            href="/screens/contact/"
            className="bg-black self-center lg:self-start w-fit py-[12px] px-[64px] lg:py-[24px] font-semibold text-[20px] text-white"
          >
            Contact
          </a>
        </div>
        <div className="basis-2/5 place-content-end flex ">
          <Image
            src="/images/mitul-01.png"
            alt="Hero"
            width={800}
            height={800}
            className="h-[360px] w-[auto]"
          />
        </div>
      </div>
    </div>
  );
}

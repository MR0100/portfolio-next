import Link from "next/link";

export default function Header() {
  return (
    <div className="w-screen h-[78px]">
      <div className="w-screen h-[78px] z-50 flex place-content-center fixed bg-white md:bg-opacity-25 lg:bg-opacity-25 md:backdrop-blur-xl lg:backdrop-blur-xl">
        <div className="w-[1500px] px-10 flex justify-between items-center">
          <h1 className="font-semibold text-[20px] ">MR0100</h1>
          <nav>
            <ul className="flex gap-8 text-[17px]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/portfolio/">Portfolio</Link>
              </li>
              <li>
                <Link href="/skills/">Skills</Link>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center">
            <Link
              href="/contact/"
              className="font-semibold text-[16px] text-white flex gap-1 items-center bg-black self-center lg:self-start w-fit py-[12px] pl-[32px] pr-[24px] lg:py-[12px] "
            >
              <p>Contact</p>
              <div className=" h-[24px] w-[24px] p-1">
                <span className="icon-[solar--phone-bold] h-full w-full bg-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

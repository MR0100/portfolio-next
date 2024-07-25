import Link from "next/link";

export default function Header() {
  return (
    <div className="w-screen h-[78px] flex place-content-center">
      <div className="w-[1500px] px-10 flex justify-between items-center">
        <h1 className="font-semibold text-[20px]">LOGO</h1>
        <nav>
          <ul className="flex gap-4 text-[17px]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/portfolio/">Portfolio</Link>
            </li>
            <li>
              <Link href="/skills/">Skills</Link>
            </li>
            <li>
              <Link href="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="w-screen h-[78px] flex place-content-center">
      <div className="w-[1500px] px-10 flex justify-between items-center">
        <h1 className="font-semibold text-[20px]">LOGO</h1>
        <nav>
          <ul className="flex gap-4 text-[17px]">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/screens/portfolio/">Portfolio</a>
            </li>
            <li>
              <a href="/screens/contact/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

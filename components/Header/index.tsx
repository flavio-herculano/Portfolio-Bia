import { useTranslations } from "next-intl";
import Link from "next/link";

function Header() {
  const H = useTranslations("Header");
  return (
    <header className="container mx-auto flex flex-row justify-between py-5">
      <div className="max-md:px-2 logo text-2xl text-[#1F3041]">
        <Link href="/">Bianca Herculano UX</Link>
      </div>
      <ul className="max-md:hidden md:gap-x-5 flex text-[#65687D] flex-rol gap-x-10 font-['Inter'] font-medium items-center">
        <li className="cursor-pointer">
          <Link href="/pt" locale="pt">
            {H("pt")}
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/en" locale="en">
            {H("en")}
          </Link>
        </li>
        <li className="cursor-pointer">{H("about")}</li>
        <li className="cursor-pointer">{H("contact")}</li>
        <li className="text-white bg-[--primary-color] p-2 rounded-3xl px-8 py-2 hover:opacity-75 transition-opacity ease-in-out delay-150 duration-300 cursor-pointer">
          {H("contact me")}
        </li>
      </ul>
    </header>
  );
}

export default Header;

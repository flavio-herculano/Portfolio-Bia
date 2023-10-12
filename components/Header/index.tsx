import { useTranslations } from "next-intl";
import Link from "next/link";

function Header() {
  const H = useTranslations("Header");
  return (
    <header className="container mx-auto flex flex-row justify-between py-5">
      <div className="max-md:px-2 logo text-2xl text-[#1F3041]">
        <Link href="/">Bianca Herculano UX</Link>
      </div>
      <ul className="max-md:hidden flex text-[#65687D] flex-rol gap-x-10 font-['Inter'] font-medium items-center">
        <li>
          <Link href="/pt" locale="pt">
            {H("pt")}
          </Link>
        </li>
        <li>
          <Link href="/en" locale="en">
            {H("en")}
          </Link>
        </li>
        <li>{H("about")}</li>
        <li>{H("contact")}</li>
        <li className="text-white bg-[--primary-color] p-2 rounded-3xl px-8 py-2">
          {H("contact me")}
        </li>
      </ul>
    </header>
  );
}

export default Header;

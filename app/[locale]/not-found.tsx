import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const NotFound = useTranslations("NotFound");
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-screen-sm p-4">
        <h1 className="text-5xl">{NotFound("error")}</h1>
        <h2 className="mt-8 text-2xl">{NotFound("page")}</h2>
        <p className="my-2 text-lg font-light">{NotFound("looks")}</p>
        <div className="my-8">
          <Link
            className="button-primary text-center text-white font-bold py-4 px-16 rounded-full"
            href="/"
          >
            {NotFound("return")}
          </Link>
        </div>
      </div>
    </div>
  );
}

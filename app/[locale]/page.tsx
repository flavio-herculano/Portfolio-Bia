import { useTranslations } from "next-intl";
function Home() {
  const Home = useTranslations("Home");
  return <h1>{Home("title")}</h1>;
}

export default Home;

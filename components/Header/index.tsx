import styles from "./styles.module.css";

function Header() {
  return (
    <header className=" md:grid-cols-12 max-md:grid-cols-6 container mx-auto grid gap-4">
      <div className="md:col-span-3 max-md:col-span-2 text-left py-4">
        Bianca Herculano UX
      </div>
      <div className="md:col-span-9 max-md:col-span-4 text-right py-4 flex flex-rol justify-end gap-x-10">
        <p>Home</p>
        <p>Sobre mim</p>
        <p>Contato</p>
        <button>Contact me</button>
      </div>
    </header>
  );
}

export default Header;

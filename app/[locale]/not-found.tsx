import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-screen-sm p-4">
        <h1 className="text-5xl">Oopa! Erro 404</h1>
        <h2 className="mt-8 text-2xl">Página não encontrada,</h2>
        <p className="my-2 text-lg font-light">
          Parece que você se aventurou em território desconhecido. A página que
          você estava procurando não foi encontrada.
        </p>
        <div className="my-8">
          <Link
            className="button-primary text-center text-white font-bold py-4 px-16 rounded-full"
            href="/"
          >
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}

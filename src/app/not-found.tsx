import Link from "next/link";

export default function NotFound() {
    return(
        <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-center font-bold mt-9 text-6xl">Página 404 não encontrada</h1>
            <p>Essa página que estou tentando acessar não existe</p>

            <Link href="/">Voltar</Link>
        </div>
    )
}
import Link from "next/link";
import { PostProps } from "../../page";

export async function PostInfo({ id } : { id: string}) {
    
    await new Promise(resolve => setTimeout(resolve, 4000))

    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    const data: PostProps = await response.json();
    return (
        <div className="flex flex-col justify-center items-center bg-gray-300 p-4">
            <h1 className="bg-white w-200 p-4 text-center mt-5 mb-2 font-bold text-3xl">Detalhes do Post: {id}</h1>
            <h2 className="bg-white w-200 p-4 font-bold">Título: {data.title}</h2>
            <p className="bg-white w-200 p-4 "><b>Descrição:</b> {data.body}</p>
            <Link className="bg-blue-500 text-white px-8 py-4 rounded-xl" href={'/'}>Voltar</Link>
        </div>
    )
}
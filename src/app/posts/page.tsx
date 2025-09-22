//'use client'    //essa instrucao faz o JS renderizar no lado cliente

import Link from "next/link";

export interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export interface ResponseProps {
    posts: PostProps[];
}

// Server Component - por padrao o conteudo é renderizado no lado server
export default async function Posts() {

    const response = await fetch('https://dummyjson.com/posts');
    const data: ResponseProps = await response.json();

    console.log(data)

    return(
        <div>
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Todos os Posts</h1>
            <div className="flex flex-col gap-4 mx-2">
                {data.posts.map((post) => (
                    <div key={post.id} className="bg-gray-200 rounded-md p-2">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                        <Link className="bg-blue-500 text-white px-8 rounded-xl" href={`/posts/${post.id}`}>Detalhes</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
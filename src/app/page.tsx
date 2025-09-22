import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Aula Next JS do zero!",
  description: "Aprendendo NextJS do zero com Sujeito Programador",
  openGraph: {
    title: "Aprendendo NextJS do zero com Sujeito Programador no youtube",
    description: "Aprendendo NextJS do zero com Sujeito Programador",
    images: ["https://static.wikia.nocookie.net/ipod/images/c/cb/Jobs_hero20110329.png/revision/latest?cb=20200202110213"]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function Home() {
  return(
    <h1>Pagina Home</h1>
  )
}
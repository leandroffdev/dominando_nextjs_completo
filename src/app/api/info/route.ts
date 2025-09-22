//http://localhost:3001/api/info

export async function GET() {
    return Response.json({
        name: "Leandro Programador",
        instagram: "Leandro Programador",
        youtube: "Leandro Programador"
    })
}
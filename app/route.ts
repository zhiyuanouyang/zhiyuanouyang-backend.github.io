export async function GET() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    return Response.json(await res.json())
}
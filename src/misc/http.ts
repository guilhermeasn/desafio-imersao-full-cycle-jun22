
export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export async function findAll() : Promise<Omit<Post,'body'>[]> {

    return (await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()).map((post : Post) => ({
        userId: post.userId,
        id: post.id,
        title: post.title
    }));

}

export async function findOne(id : number) : Promise<Post> {

    return (await (await fetch('https://jsonplaceholder.typicode.com/posts/' + id.toString())).json());

}

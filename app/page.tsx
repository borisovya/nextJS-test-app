import Link from 'next/link';

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  return await res.json();
}

export default async function Home() {
  const posts = await fetchData();

  return (<div>
      <h1> Main page </h1>
      {posts.length
        ? posts.map((el: {userId: number,id: number, title: string, body: string}) => {

          return (
            <div key={el.id} className="post">
              <h3>{el.title}</h3>
              <p>{el.body}</p>
              <Link href={'/post/' + el.id}> Открыть пост</Link>
            </div>
          );
        })
        : 'Loading...'}
    </div>
  );
}

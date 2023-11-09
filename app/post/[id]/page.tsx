import PostItem, {PostData} from '@/app/ components/PostItem';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Post page',
  description: 'Post Page',
};

async function fetchData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return await res.json();
}

const Post = async ({params: {id}}: { params: { id: number } }) => {

  const post: PostData = await fetchData(id);

  return (
    <div className="post">
      <PostItem postData={post}/>
    </div>
  );
};


export default Post;

import Link from 'next/link';

export interface PostData {
  userId: number,
  id: number,
  title: string,
  body: string
}

const PostItem = (props: {postData: PostData}) => {
  return (
    <div>
      <h2>{props.postData.title}</h2>
      <p>{props.postData.body}</p>
      <strong> Author ID: {props.postData.userId}</strong> <br/>
      <Link href='/'>Назад</Link>
    </div>
  );
};

export default PostItem;
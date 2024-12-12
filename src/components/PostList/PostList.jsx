import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ listPosts, listComments, listUsers }) => (
  <div className="PostList">
    {listPosts.map(listPost => (
      <PostInfo
        key={listPost.id}
        post={listPost}
        reactComments={listComments}
        reactUsers={listUsers}
      />
    ))}
  </div>
);

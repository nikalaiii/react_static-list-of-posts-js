import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post, reactUsers, reactComments }) => {
  // Фільтрація коментарів, які належать до цього поста
  const filteredComments = reactComments.filter(
    comment => comment.postId === post.id,
  );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        {reactUsers.map(
          reactUser =>
            post.userId === reactUser.id && (
              <UserInfo user={reactUser} key={reactUser.id} />
            ),
        )}
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {/* Відображення списку коментарів */}
      {filteredComments.length > 0 ? (
        <CommentList reactComments={filteredComments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};

/* {
    "id": 1,
    "userId": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }, */

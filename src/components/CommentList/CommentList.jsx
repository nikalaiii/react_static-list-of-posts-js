import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ reactComments = [] }) => {
  if (reactComments.length === 0) {
    return <p data-cy="NoCommentsMessage">No comments available</p>;
  }

  return (
    <div className="CommentList">
      {reactComments.map(reactComment => (
        <CommentInfo comment={reactComment} key={reactComment.id} />
      ))}
    </div>
  );
};

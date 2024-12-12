import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ reactComments }) => (
  <div className="CommentList">
    {reactComments.map(reactComment => (
      <CommentInfo comment={reactComment} key={reactComment.id} />
    ))}
  </div>
);

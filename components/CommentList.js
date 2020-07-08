import Comment from "./Comment";

function CommentList({ comments }) {
  return (
    <ul className="c-comment-list">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}

      <style jsx>{`
        padding-left: 0.25em;
        list-style: none;
      `}</style>
    </ul>
  );
}

export default CommentList;

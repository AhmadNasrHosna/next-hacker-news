function Comment({ comment }) {
  const { user, content, comments: nestedComments } = comment;

  return (
    <li className="c-comment">
      <h4 className="c-comment__user">{user}</h4>
      <div
        className="c-comment__content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      {nestedComments.length > 0 && (
        <ul className="c-comment__nested">
          {nestedComments.map((nestedComment) => (
            <Comment key={nestedComment.id} comment={nestedComment} />
          ))}
        </ul>
      )}

      <style jsx>{`
        .c-comment:not(:first-child) {
          margin-top: 1.5rem;
          border-top: 2px solid hsla(0, 0%, 93%, 0.16);
          padding-top: 1.5rem;
        }

        .c-comment__user {
          background: #2bb24c;
          display: inline-block;
          padding: 0.05em 0.6em 0.065em;
          color: #fff;
          font-weight: 400;
          border-radius: 2px;
          margin: 0;
        }

        .c-comment__nested {
          border-left: 2px solid hsla(135, 61%, 43%, 0.35);
          border-top: 1px solid hsla(0, 0%, 93%, 0.06);
          padding-top: 1rem;
          padding-left: 0.85rem;
          margin-top: 1.5rem;
          list-style: none;
        }
      `}</style>

      <style jsx global>{`
        .c-comment a:hover {
          opacity: 0.75;
          text-decoration: underline;
        }
      `}</style>
    </li>
  );
}

export default Comment;

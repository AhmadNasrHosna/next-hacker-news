import Link from "next/link";

function StoryCard({ story }) {
  const { id, url, title, points, comments_count: commentsCount } = story;

  return (
    <li key={id} className="c-story">
      <Link href={`/story?id=${id}`}>
        <a>
          <h3 className="c-story__title">{title} </h3>
        </a>
      </Link>
      <div className="c-story__details">
        <span>{points || 0} points</span>{" "}
        <Link href={`/story?id=${id}`}>
          <a>
            {commentsCount == 1
              ? "1 comment"
              : (commentsCount || 0) + " comments"}
          </a>
        </Link>
      </div>
      <style jsx>{`
        .c-story {
          background: #fff;
          padding: 1em 1.2em 1.6em;
          border-radius: 7px;
          box-shadow: 0 3px 7px hsla(0, 0%, 0%, 0.2);
          display: flex;
          flex-direction: column;
          transition: all 300ms ease,
            transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
            -webkit-transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .c-story:hover {
          background: #2bb24c;
          transform: translateY(-5px);
          box-shadow: 0 6px 15px hsla(0, 0%, 0%, 0.65);
        }

        .c-story__title {
          margin: 0.3rem 0 1.75rem;
          font-size: 19px;
          letter-spacing: -0.03em;
          font-weight: 600;
          line-height: 1.45;
          transition: all 200ms ease;
        }

        .c-story:hover .c-story__title {
          color: #fff;
        }

        .c-story__details {
          margin-top: auto;
        }
        .c-story__details a,
        .c-story__details span {
          padding: 0.15em 0.6em 0.2em;
          border-radius: 3px;
          border: 1px solid transparent;
          transition: all 200ms ease;
          box-shadow: 0 1.5px 1.5px hsla(0, 0%, 0%, 0.175);
        }

        .c-story:hover .c-story__details a,
        .c-story:hover .c-story__details span {
          box-shadow: 0 3px 7px hsla(0, 0%, 0%, 0.1);
        }

        .c-story__details a {
          background: #2bb24c;
          color: #fff;
        }

        .c-story:hover .c-story__details a {
          color: #fff;
          border-color: currentColor;
        }

        .c-story:hover .c-story__details a:hover {
          background: #fff;
          color: #2bb24c;
          border-color: #fff;
        }

        .c-story__details span {
          background: hsla(0, 0%, 88%, 1);
          color: #757575;
          margin-right: 0.3rem;
        }

        .c-story:hover .c-story__details span {
          background: #fff;
        }
      `}</style>
    </li>
  );
}

export default StoryCard;

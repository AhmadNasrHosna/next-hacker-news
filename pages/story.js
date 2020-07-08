import fetch from "isomorphic-fetch";
import Layout from "../components/Layout";
import Error from "next/error";
import CommentList from "../components/CommentList";
import Router from "next/router";

function Story({ story }) {
  if (!story) return <Error statusCode={503} />;

  return (
    <Layout docTitle={story.title}>
      <button className="c-back-btn" onClick={() => Router.back()}>
        ← Back
      </button>
      <div className="c-story">
        <h1 className="c-story__title">
          <a href={story.url} target="_blank">
            {story.title}{" "}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                data-name="Layer 1"
                viewBox="0 0 100 100"
              >
                <path d="M81.303 38.53a14.018 14.018 0 10-19.826-19.823L47.003 33.179a14.03 14.03 0 000 19.822 4.801 4.801 0 01-6.79 6.79 23.643 23.643 0 010-33.402l14.474-14.472a23.62 23.62 0 0133.406 33.402l-7.17 7.168a4.801 4.801 0 01-6.789-6.79zM11.907 88.093a23.65 23.65 0 0033.406-.001L59.787 73.62a23.616 23.616 0 000-33.401 4.801 4.801 0 00-6.79 6.79 14.015 14.015 0 010 19.823L38.523 81.304a14.018 14.018 0 11-19.826-19.823l7.169-7.168a4.801 4.801 0 00-6.79-6.79l-7.169 7.168a23.645 23.645 0 000 33.403z"></path>
              </svg>
            </div>
          </a>
        </h1>
        <div className="c-story__details">
          <span>{story.points} points</span>
          <span>
            {story.comments_count == 1
              ? "1 comment"
              : (story.comments_count || 0) + " comments"}
          </span>
          <span>
            <time>{story.time_ago}</time>
          </span>
        </div>

        <div className="c-story__comments">
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              x="0"
              y="0"
              viewBox="0 0 21 21"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="#757575"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path
                  d="M14 17c-1.205.599-3.563 1-5 1a9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9 8.973 8.973 0 01-.935 4L19 19l-8-4M13 6H8M13 10H5"
                  transform="translate(-197 -446) translate(198 447)"
                ></path>
              </g>
            </svg>
            Comments:
          </h2>
          {story.comments.length ? (
            <CommentList comments={story.comments} />
          ) : (
            <p>No comments for this story..</p>
          )}
        </div>
      </div>
      <style jsx>{`
        .c-story {
          padding: 0.9rem 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          border: 3px solid hsla(0, 0%, 46%, 0.3);
          position: relative;
        }

        @media (min-width: 768px) {
          .c-story {
            padding: 1rem 1.25rem 1.6rem;
          }
        }

        .c-story__title {
          margin: 0.5rem 0 0.75rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          font-size: 28px;
        }

        .c-story__title:hover a {
          text-decoration: underline;
        }

        .c-story__title div {
          width: 22px;
          height: 22px;
          padding: 7px;
          border-radius: 50%;
          margin-left: 0.3rem;
          display: inline-flex;
          transition: all 200ms ease;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: -15px;
          right: 8px;
          pointer-events: none;
          background: #757575;
        }

        .c-story__title svg {
          fill: #fff;
          width: 100%;
          height: 100%;
          transition: all 200ms ease;
        }

        .c-story__title:hover div {
          transform: translateY(-7px);
          background: #2bb24c;
        }

        @media (min-width: 768px) {
          .c-story__title div {
            right: -15px;
          }

          .c-story__title:hover div {
            transform: translateX(7px);
          }
        }

        .c-story__title:hover svg {
          fill: #fff;
        }

        .c-story__details {
          padding-bottom: 1.75em;
        }

        .c-story__details span {
          color: hsla(0, 0%, 70%, 1);
        }

        .c-story__details span:not(:last-child):after {
          content: ".";
          margin: 0 0.5rem;
          font-size: 35px;
          line-height: 0;
          position: relative;
          top: -2px;
          color: #757575;
        }

        .c-story__comments {
          background: hsla(0, 0%, 13%, 0.6);
          padding: 0.8rem 1rem;
          margin: 0 -1rem -1.4rem;
          border-top: 3px solid hsla(0, 0%, 100%, 0.15);
          color: hsla(0, 0%, 56%, 1);
          line-height: 1.75;
          letter-spacing: 0.01em;
        }

        @media (min-width: 768px) {
          .c-story__comments {
            margin: 0 -1.25rem -1.6rem;
            padding: 1rem 1.25rem;
          }
        }

        .c-story__comments h2 {
          display: flex;
          align-items: center;
          color: #757575;
          margin: 0.5rem 0 1.35rem;
        }

        .c-story__comments h2 svg {
          margin-right: 0.5rem;
        }

        .c-back-btn {
          font-size: 16px;
          color: hsla(0, 0%, 50%, 1);
          padding: 0.2em 1em;
          border-radius: 50px;
          display: inline-block;
          margin-bottom: 2rem;
          border: 1px solid;
          background: transparent;
          cursor: pointer;
          font: inherit;
          outline: 0;
          transition: all 200ms ease, transform 0ms;
        }

        .c-back-btn:hover {
          color: #fff;
          background: hsla(0, 0%, 50%, 1);
          border-color: hsla(0, 0%, 50%, 1);
        }

        .c-back-btn:active,
        .c-back-btn:focus {
          box-shadow: 0 0 0 3px hsla(0, 0%, 100%, 0.15);
        }

        .c-back-btn:active {
          transform: translateX(-1px);
        }
      `}</style>
    </Layout>
  );
}

Story.getInitialProps = async ({ query }) => {
  const storyId = query.id;
  let story;

  try {
    const res = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
    story = await res.json();
  } catch (err) {
    console.error(err);
    story = null;
  }

  return { story };
};

export default Story;

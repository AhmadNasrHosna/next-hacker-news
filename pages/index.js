import fetch from "isomorphic-fetch";
import Error from "next/error";
import Link from "next/link";
import StoryCard from "../components/StoryCard";
import Layout from "../components/Layout";
import { useEffect } from "react";

function Home({ stories, page }) {
  if (!stories.length) return <Error statusCode={503} />;

  return (
    <Layout docTitle="Next.js Hacker News">
      <h2 className="c-pagenumber">
        Page <strong>{page}</strong>
      </h2>
      <ul className="c-stories-list">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}

        <p>
          <Link href={`/?page=${page + 1}`}>
            <a className="c-nextpage-btn">
              ← Next Page <span>{page + 1}</span>
            </a>
          </Link>
        </p>
      </ul>
      <style jsx>{`
        .c-stories-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-gap: 1rem;
        }

        @media (min-width: 600px) {
          .c-stories-list {
            grid-template-columns: 1fr 1fr;
            grid-gap: 1.5rem;
          }
        }

        @media (min-width: 992px) {
          .c-stories-list {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        .c-nextpage-btn {
          background: transparent;
          color: #fff;
          padding-left: 1.35em;
          border-radius: 50px;
          border: 3px solid #757575;
          transition: all 200ms ease, transform 0ms;
          display: inline-block;
        }

        .c-nextpage-btn span {
          display: inline-flex;
          color: #fff;
          min-width: 20px;
          justify-content: center;
          align-items: center;
          border-radius: 0 12px 12px 0;
          padding: 0.6em 1em;
          margin-left: 1.1em;
          background: #757575;
          transition: all 200ms ease, transform 0ms;
        }

        .c-nextpage-btn:hover {
          background: #2bb24c;
          color: #fff;
          border: 3px solid;
        }

        .c-nextpage-btn:hover span {
          background: #fff;
          color: #2bb24c;
        }

        .c-nextpage-btn:active {
          transform: translateX(-1px);
        }

        .c-pagenumber {
          display: flex;
          align-items: center;
          margin: 0 0 2rem;
          font-weight: 400;
          font-size: 20px;
          justify-content: flex-end;
        }

        .c-pagenumber:before,
        .c-pagenumber:after {
          content: "";
          display: block;
          height: 1px;
          background: hsla(0, 0%, 46%, 0.3);
        }

        .c-pagenumber:before {
          width: 100%;
          margin-right: 0.6rem;
          margin-left: auto;
        }

        .c-pagenumber:after {
          width: 35px;
          margin-left: 0.6rem;
        }

        .c-pagenumber strong {
          display: inline-flex;
          color: hsla(0, 0%, 100%, 0.75);
          min-width: 20px;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          padding: 0.15em 0.3em 0.15em 0.2em;
          margin-left: 0.4rem;
          font-size: 18px;
          border: 1px solid #757575;
          font-weight: 800;
        }
      `}</style>
    </Layout>
  );
}

Home.getInitialProps = async ({ query }) => {
  let stories;
  let page;

  try {
    page = Number(query.page) || 1;
    const res = await fetch(
      `https://node-hnapi.herokuapp.com/news?page=${page}`
    );
    stories = await res.json();
  } catch (err) {
    console.error(err);
    stories = [];
  }

  return { stories, page };
};
export default Home;

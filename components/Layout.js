import Link from "next/link";
import Head from "next/head";

// https://github.com/vercel/next.js/issues/1935#issuecomment-648660605

function Layout({ children, pageTitle, docTitle }) {
  return (
    <div className="o-page">
      <Head>
        <title>{docTitle || "Next Hacker"}</title>
      </Head>
      <header>
        <h1>
          <Link href="/">
            <a>Next Hacker</a>
          </Link>
        </h1>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
        </nav>
      </header>
      <main className="o-main">
        {pageTitle ? <h2 className="c-page-title">{pageTitle}</h2> : ""}
        {children}
      </main>
      <footer>
        <span>
          A Hacker News clone made with Next.js -{" "}
          <a href="http://ahmedhosna.netlify.com/" target="blank">
            {" "}
            Ahmed Hosna
          </a>{" "}
          &copy; {new Date().getFullYear()}
        </span>
      </footer>
      <style jsx global>{`
        body {
          max-width: 920px;
          margin: 0 auto;
          background: #141414 url(/static/fi.png);
          font-size: 14px;
          color: #757575;
          background-size: 260px;
          font-family: Inter, system-ui, sans-serif;
          padding: 0 1rem;
          scroll-behavior: smooth;
          background-attachment: fixed;
          min-height: 100vh;
          word-wrap: break-word;
        }

        @media (min-width: 992px) {
          body {
            padding: 0;
          }
        }

        a {
          text-decoration: none;
          color: #2bb24c;
          transition: all 250ms ease, transform 0ms;
        }

        a:active {
          transform: translateY(1px);
        }

        .o-main {
          padding: 2rem 0;
        }

        header h1 {
          font-size: 44px;
          letter-spacing: -0.04em;
          font-weight: 800;
          display: flex;
          align-items: center;
          margin: 0 0 2rem 0;
        }

        header h1 a {
          color: hsla(0, 0%, 100%, 0.9);
          transition: all 150ms ease;
        }

        header h1:hover a {
          color: #757575;
        }

        header h1:before {
          content: "Y";
          width: 50px;
          height: 50px;
          margin-right: 1rem;
          background-color: #fff;
          border-radius: 22% 22% 22% 22% / 20% 20% 20% 20%;
          color: #2bb24c;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          font-size: 70%;
          letter-spacing: 0;
          border: 14px solid #2bb24c;
        }

        @media (min-width: 768px) {
          header h1 {
            font-size: 60px;
            margin: 0;
          }
        }

        footer,
        header {
          padding: 3rem 0;
        }

        @media (min-width: 768px) {
          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }

        footer {
          font-size: 16px;
        }

        footer a:hover {
          text-decoration: underline;
        }

        nav a {
          padding: 0.2em 0.6em 0.4em;
          background: #757575;
          color: #fff;
          border-radius: 2px;
          letter-spacing: 0.014em;
          transition: all 200ms ease;
        }

        nav a:hover {
          background: #2bb24c !important;
        }

        pre {
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
}

export default Layout;

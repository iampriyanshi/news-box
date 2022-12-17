// Page to display detailed information of a selected news item
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

function Details() {
  const { topHeadlines } = useSelector((state) => state.article);
  const router = useRouter();
  const { articleId } = router.query;

  return (
    <>
      {articleId ? (
        <div>
          <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
            {topHeadlines[articleId].title}
          </h2>
          <p className="text-xl font-light leading-relaxed mt-6 mb-4">
            {topHeadlines[articleId].description}
          </p>
          <img
            src={topHeadlines[articleId].urlToImage}
            alt="Girl in a jacket"
            width="500"
            height="600"
          />
          <p className="text-xl font-light leading-relaxed mt-6 mb-4">
            {topHeadlines[articleId].content}
          </p>
          <hr />
          <div class="flex">
            <a
              target="_blank"
              href={topHeadlines[articleId].url}
              rel="noopener noreferrer"
              className="no-underline hover:underline leading-tight mt-0 mb-2 text-sky-400/100"
            >
              [Source]
            </a>
            <Link href="/">
              <h2 className="no-underline hover:underline leading-tight mt-0 mb-2 text-sky-400/100">
                [Back]
              </h2>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Details;

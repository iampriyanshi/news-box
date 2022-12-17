import Link from "next/link";
import SearchBar from "../components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { updateTopHeadline } from "../slices/articleSlice";
import React, { useEffect, useRef } from "react";
import { fetchArticles } from "./api";

export default function Home({ newsArticles }) {
  const { topHeadlines, searchText } = useSelector((state) => state.article);
  const dispatch = useRef(useDispatch());
  // dispatch.current = useDispatch();
  useEffect(() => {
    if (searchText) {
      fetchArticles({ searchText }).then((res) => {
        dispatch.current(updateTopHeadline({ topHeadlines: res.articles }));
      });
    }
  }, [searchText]);

  useEffect(() => {
    if (newsArticles.length)
      dispatch.current(updateTopHeadline({ topHeadlines: newsArticles }));
  }, [newsArticles]);

  return (
    <>
      <div className="m-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold underline">News Box</h1>
          <SearchBar />
        </div>
      </div>
      <div className="m-8">
        <div>
          {topHeadlines.map((news, index) => (
            <div key={index}>
              <Link href={`/${index + 1}`}>
                <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
                  {news.title}
                </h2>
              </Link>
              <p className="text-xl font-light leading-relaxed mt-6 mb-4">
                {news.description}
              </p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=2841471535f047cdba271c1dc7200dff`
  );
  const data = await response.json();
  return {
    props: {
      newsArticles: data.articles,
    },
    revalidate: 3600,
  };
}

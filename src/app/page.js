"use client";
import { useState } from "react";
import { FeedItem } from "@/components/feed";
import { CreateTweet } from "@/components/createTweet";

const getPostsData = async () => {
  const res = await fetch(`http://localhost:3333/tweets`);
  return res.json();
};

const getUsersData = async (userId) => {
  const res = await fetch(`http://localhost:3333/users/${userId}`);
  return res.json();
};

export default async function Home() {
  const tweets = await getPostsData();

  const tweetWithUser = [];

  for (const tweet of tweets) {
    const user = await getUsersData(tweet.userId);
    tweet.user = user;
    tweet.avatar = "https://i.pravatar.cc/100";
    tweet.comment = 13;
    tweet.retweet = 31;
    tweet.likes = 80;
    tweet.tweetImpressions = 2516;
    tweetWithUser.push(tweet);
  }

  const [currentPage, setCurrentPage] = useState(1);

  const totalPosts = tweetWithUser.length;
  const pageSize = 20;
  const pages = Math.floor(totalPosts / pageSize);

  const goToPrev = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
  };

  const goToNext = () => {
    const nextPage = Math.min(currentPage + 1, pages);
    setCurrentPage(nextPage);
  };

  const start = pageSize * (currentPage - 1);
  const end = pageSize * currentPage;
  const postsPerPage = tweetWithUser.slice(start, end);

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < pages;

  return (
    <div>
      <div className="flex flex-col space-y-6 px-2 max-h-screen overflow-scroll">
        <CreateTweet />
        {postsPerPage.map((post) => {
          return <FeedItem key={post.id} {...post} />;
        })}
      </div>
      <div className="flex">
        <button disabled={!canGoPrev} onClick={goToPrev}>
          prev
        </button>
        <p>
          {currentPage} of {pages}
        </p>
        <button disabled={!canGoNext} onClick={goToNext}>
          next
        </button>
      </div>
    </div>
  );
}

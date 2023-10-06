"use client";
import { useState, useEffect } from "react";
import { FeedItem } from "@/components/feed";
import { CreateTweet } from "@/components/createTweet";

export default function Home() {
  const [tweets, setTweets] = useState([]);
  const [users, setUsers] = useState([]);
  const [tweetWithUser, setTweetWithUser] = useState([]);

  useEffect(async function getPostsData() {
    try {
      const res = await fetch("http://localhost:3333/tweets");
      const data = await res.json();
      setTweets(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, []);

  useEffect(async function getUsersData() {
    try {
      const res = await fetch("http://localhost:3333/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, []);

  useEffect(() => {
    const updatedTweetWithUser = [];

    for (const tweet of tweets) {
      const user = users.find((u) => u.id === tweet.userId);
      const updatedTweet = {
        ...tweet,
        user,
        avatar: "https://i.pravatar.cc/100",
        comment: 13,
        retweet: 31,
        likes: 80,
        tweetImpressions: 2516,
      };
      updatedTweetWithUser.push(updatedTweet);
    }

    setTweetWithUser(updatedTweetWithUser);
  }, [tweets, users]);

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

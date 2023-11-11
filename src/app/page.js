"use client";
import { useState, useEffect } from "react";
import { FeedItem } from "@/components/feed";
import { CreateTweet } from "@/components/createTweet";
import PaginationComponent from "@/components/paginationComponents";

export const getUsersData = async () => {
  const res = await fetch(`http://localhost:3333/users`);
  const data = res.json();
  return data;
};

export const getPostsData = async (pageNumber, perPage = 20) => {
  const res = await fetch(
    `http://localhost:3333/tweets?_limit=${perPage}&_page=${pageNumber}`,
    { cache: "no-store" }
  );
  return res.json();
};

export default function Home() {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [tweets, setTweets] = useState([]);
  const [isLoading, setLoading] = useState(false);

  async function goNext() {
    setCurrentPageNumber((current) => current + 1);
  }

  async function goPrev() {
    if (currentPageNumber > 1) {
      setCurrentPageNumber((current) => current - 1);
    }
  }

  const getTweetsWithUsers = async () => {
    setLoading(true);
    const [posts, users] = await Promise.all([
      getPostsData(currentPageNumber),
      getUsersData(),
    ]);
    let tweetWithUser = [];

    tweetWithUser = posts.map((post) => {
      post.user = users.find((user) => user.id === post.userId);
      post.avatar = "https://i.pravatar.cc/100";
      post.comment = 20;
      post.retweet = 15;
      post.likes = 45;
      return post;
    });

    setTweets(tweetWithUser);
    setLoading(false);
  };

  useEffect(() => {
    console.log(currentPageNumber);
    getTweetsWithUsers();
  }, [currentPageNumber]);

  if (isLoading) {
    return (
      <div>
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col space-y-6 px-2 max-h-screen overflow-scroll">
        <CreateTweet />
        {tweets.map((post) => {
          return <FeedItem key={post.id} {...post} />;
        })}
      </div>

      <PaginationComponent goNext={goNext} goPrev={goPrev} />
    </div>
  );
}

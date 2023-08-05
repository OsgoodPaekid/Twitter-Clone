import { FeedItem } from "@/components/feed";

async function getTweets() {
  const res = await fetch("http://localhost:3333/tweets?_page=1&_limit=10");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getUsers() {
  const res = await fetch("http://localhost:3333/users?_page=1&_limit=10");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const [tweets, users] = await Promise.all([getTweets(), getUsers()]);

  let tweetsWithUser = [];
  tweetsWithUser = tweets.map((tweet) => {
    tweet.user = users.find((user) => user.id === tweet.userId);
    tweet.avatar = "https://i.pravatar.cc/100";
    tweet.comment = 20;
    tweet.retweet = 10;
    tweet.likes = 30;
    return tweet;
  });

  return (
    <div className="flex flex-col space-y-6 px-2 max-h-screen overflow-scroll">
      {tweetsWithUser.map((tweet) => {
        return <FeedItem key={tweet.id} {...tweet} />;
      })}
    </div>
  );
}

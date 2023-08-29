import { FeedItem } from "@/components/feed";
import { CreateTweet } from "@/components/createTweet";

const getPostsData = async (page, limit) => {
  const res = await fetch(
    `http://localhost:3333/tweets?_page=${page}&_limit=${limit}`
  );
  return res.json();
};

const getUsersData = async (userId) => {
  const res = await fetch(`http://localhost:3333/users/${userId}`);
  return res.json();
};

export default async function Home() {
  const tweets = await getPostsData(1, 20);

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

  return (
    <div>
      <div className="flex flex-col space-y-6 px-2 max-h-screen overflow-scroll">
        <CreateTweet />
        {tweetWithUser.map((post) => {
          return <FeedItem key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
}

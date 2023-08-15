import { FeedItem } from "@/components/feed";
import { CreateTweet } from "@/components/createTweet";

const getPostsData = async () => {
  const res = await fetch("http://localhost:3333/tweets");
  return res.json();
};

const getUsersData = async () => {
  const res = await fetch("http://localhost:3333/users");
  return res.json();
};

export default async function Home() {
  const [posts, users] = await Promise.all([getPostsData(), getUsersData()]);
  let tweetWithUser = [];

  tweetWithUser = posts.map((post) => {
    post.user = users.find((user) => user.id === post.userId);
    post.avatar = "https://i.pravatar.cc/100";
    post.comment = 20;
    post.retweet = 15;
    post.likes = 45;
    return post;
  });

  return (
    <div>
      <CreateTweet />
      <div className="flex flex-col space-y-6 px-2 max-h-screen overflow-scroll">
        {tweetWithUser.map((post) => {
          return <FeedItem key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
}

import { Follow } from "@/components/whoToFollow";

const getUsersData = async (limit) => {
  const res = await fetch(`http://localhost:3333/users?_limit=${limit}`);
  return res.json();
};

export async function WhoToFollow() {
  const usersData = await getUsersData(3);

  return (
    <div className="w-80 h-64 bg-gray-100 rounded-md mt-4 ml-4">
      <h1 className="font-bold ml-4 mb-4">Who to follow</h1>
      {usersData.map((user) => (
        <Follow
          key={user.id}
          name={user.name}
          screen_name={user.screen_name}
          avatar={"https://i.pravatar.cc/100"}
        />
      ))}
    </div>
  );
}

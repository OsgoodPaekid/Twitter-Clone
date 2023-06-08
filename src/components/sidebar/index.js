import Link from "next/link";

export function Sidebar() {
  const sidebarElements = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Explore",
      link: "/explore",
    },
    {
      title: "Notifications",
      link: "/notifications",
    },
    {
      title: "Messages",
      icon: "messages",
      link: "/messages",
    },
    {
      title: "Bookmarks",
      icon: "bookmarks",
      link: "/bookmarks",
    },
    {
      title: "Lists",
      link: "/lists",
    },
    {
      title: "Profile",
      link: "/profile",
    },
    {
      title: "More",
      link: "/more",
    },
  ];
  return (
    <div className="px-2">
      <div className="text-xl cursor-pointer">
        {sidebarElements.map((element) => (
          <Link key={element.name} href={element.link}>
            <div className="flex my-4 hover:bg-gray-200 p-4 rounded-full">
              <div>{`${element.title}`}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-blue-400 p-4 text-2xl text-white rounded-full">
        Tweet
      </div>
    </div>
  );
}

"use-client";
import Link from "next/link";
import { BiHomeAlt as BiHome } from "react-icons/bi";

export function Sidebar() {
  const defaultIconSize = 26;
  const sidebarElements = [
    {
      title: "Home",
      link: "/",
      icon: <BiHome size={defaultIconSize} />,
    },
    {
      title: "Explore",
      link: "/explore",
      icon: <BiHome size={defaultIconSize} />,
    },
    {
      title: "Notifications",
      link: "/notifications",
      icon: <BiHome size={defaultIconSize} />,
    },
    {
      title: "Messages",
      link: "/messages",
      icon: <BiHome size={defaultIconSize} />,
    },
    {
      title: "Bookmarks",
      link: "/bookmarks",
      icon: <BiHome size={defaultIconSize} />,
    },
    {
      title: "Lists",
      link: "/lists",
      icon: <BiHome size={defaultIconSize} />,
    },
    {
      title: "Profile",
      link: "/profile",
      icon: <BiHome size={defaultIconSize} />,
    },
    {
      title: "More",
      link: "/more",
      icon: <BiHome size={defaultIconSize} />,
    },
  ];
  return (
    <div className="px-2">
      <div className="text-xl cursor-pointer">
        {sidebarElements.map((element) => (
          <Link key={element.name} href={element.link}>
            <div className="flex my-4 hover:bg-gray-200 p-4 rounded-full w-fit">
              <div className="flex flex-row space-x-2 items-center">
                <div>{element.icon}</div>
                <div>
                  <p>{`${element.title}`}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-cyan-600 p-3 text-lg text-white rounded-full">
        <p className="text-center">Tweet</p>
      </div>
    </div>
  );
}

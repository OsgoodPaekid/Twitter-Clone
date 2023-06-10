"use-client";
import Link from "next/link";
import { BiHomeAlt as BiHome, BiEnvelope } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { CgProfile, CgMoreO } from "react-icons/cg";

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
      icon: <FiSearch size={defaultIconSize} />,
    },
    {
      title: "Notifications",
      link: "/notifications",
      icon: <IoNotificationsOutline size={defaultIconSize} />,
    },
    {
      title: "Messages",
      link: "/messages",
      icon: <BiEnvelope size={defaultIconSize} />,
    },
    {
      title: "Bookmarks",
      link: "/bookmarks",
      icon: <BsBookmark size={defaultIconSize} />,
    },
    {
      title: "Lists",
      link: "/lists",
      icon: <CiViewList size={defaultIconSize} />,
    },
    {
      title: "Profile",
      link: "/profile",
      icon: <CgProfile size={defaultIconSize} />,
    },
    {
      title: "More",
      link: "/more",
      icon: <CgMoreO size={defaultIconSize} />,
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

      <button className="bg-blue-500 p-3 text-lg text-white rounded-full text-center pl-12 pr-12">
        Tweet
      </button>
    </div>
  );
}

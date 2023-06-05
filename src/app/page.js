import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li class="mt-7">
          <Link href="/explore">Explore</Link>
        </li>
        <li class="mt-7">
          <Link href="/notifications">Notifications</Link>
        </li >
        <li class="mt-7">
          <Link href="/messages">Messages</Link>
        </li> 
        <li class="mt-7">
          <Link href="/lists">Lists</Link>
        </li>
        <li class="mt-7">
          <Link href="/bookmarks">Bookmarks</Link>
        </li>
        <li class="mt-7">
          <Link href="/twitter blue">Twitter Blue</Link>
        </li>
        <li class="mt-7">
          <Link href="/profile">Profile</Link>
        </li>
        <li class="mt-7">
          <Link href="/more">More</Link>
        </li>
      </ul>
      <button class="pl-6 px-6 pl-8 pr-8 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mt-7">Tweet</button>
    </div>
  );
}

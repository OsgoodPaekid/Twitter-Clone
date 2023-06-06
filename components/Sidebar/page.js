import Link from 'next/link';
import Home from '@/app/Home/page';
import Explore from '@/app/Explore/page';
import Notifications from '@/app/Notifications/page';
import Messages from '@/app/Messages/page';
import Lists from '@/app/List/page';
import TwitterBlue from '@/app/TwitterBlue/page';
import Profile from '@/app/Pofile/page';
import More from '@/app/More/page';
import Tweet from '@/app/Tweet/page';

export default function Sidebar() {
  return (
    <ul>
        <li><Link href="/Home">Home</Link></li>
        <li><Link href="/Explore">Explore</Link></li>
        <li><Link href="/Notifications">Notifications</Link></li>
        <li><Link href="/Messages">Messages</Link></li>
        <li><Link href="/Lists">Lists</Link></li>
        <li><Link href="/TwitterBlue">Twitter Blue</Link></li>
        <li><Link href="/Profile">Profile</Link></li>
        <li><Link href="/More">More</Link></li>
    </ul>
  );
}

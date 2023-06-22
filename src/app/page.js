import {FaRegComment } from "react-icons/fa"
import {AiOutlineRetweet} from "react-icons/ai"
import {MdFavoriteBorder} from "react-icons/md"
import {VscGraph} from "react-icons/vsc"
import {LuShare} from "react-icons/lu"
import Image from "next/image";
import { FeedItem } from "@/components/feed"


export default function Home() {
      const items = [{
        id: 1,
        avatar: <Image src="/profile.svg" alt="Image Description" width={80} height={30} className="rounded-full" />,
        username: "Osgood",
        handle: "osgoodpaekid",
        time: 4,
        tweet: "reasons why a lot of developers choose next js",
        comment: <FaRegComment />,
        retweet: <AiOutlineRetweet />, 
        likes: <MdFavoriteBorder />,
        tweetImpressions: <VscGraph />,
        share: <LuShare />       
    }]

    const tweetItems = items.map(item => {
      return(
        <FeedItem 
          key={item.id}
          {...item}
        />
      )
    })

    return(
      <div>
        {tweetItems}
      </div>
    )
}

import {FaRegComment } from "react-icons/fa"
import {AiOutlineRetweet} from "react-icons/ai"
import {MdFavoriteBorder} from "react-icons/md"
import {VscGraph} from "react-icons/vsc"
import {LuShare} from "react-icons/lu"
import Image from "next/image";

export function FeedItem(){

    const items = [{
        id: 1,
        avatar: <Image src="/download.png" alt="Image Description" width={80} height={30} className="rounded-full" />,
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

    return(
        <div>
            {items.map(item => (
                <div key={item.id} className="flex">
                    <div>
                        {item.avatar}
                    </div>
                    <div>
                        <div>
                            <div className="flex ">
                                <div className="font-bold pr-2">{item.username}</div>
                                <div>{item.handle}</div>
                                <span className="pl-2">{item.time}</span>
                            </div>
                            <div>{item.tweet}</div>
                        </div>
                        <div className="flex pt-8 space-x-4">
                            <span className="pr-8">{item.comment}</span>
                            <span className="pr-8">{item.retweet}</span>
                            <span className="pr-8">{item.likes}</span>
                            <span className="pr-8">{item.tweetImpressions}</span>
                            <span className="pr-8">{item.share}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
         
}
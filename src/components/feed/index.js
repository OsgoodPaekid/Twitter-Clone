import {FaRegComment } from "react-icons/fa"
import {AiOutlineRetweet} from "react-icons/ai"
import {MdFavoriteBorder} from "react-icons/md"
import {VscGraph} from "react-icons/vsc"
import {LuShare} from "react-icons/lu"


export function FeedItem(props){
   
    return(
        <div>
            <div className="flex">
                    <div>
                        <img src={props.avatar} className="h-16 rounded-full ml-4 mr-4"/>
                    </div>
                    <div>
                        <div>
                            <div className="flex ">
                                <div className="font-bold pr-2">{props.username}</div>
                                <div>{props.handle}</div>
                                <span className="pl-2">{props.time}<span>h</span></span>
                            </div>
                            <div>{props.tweet}</div>
                        </div>
                        <div className="flex pt-8 space-x-4">
                            <div><FaRegComment /></div><span className="pr-8">{props.comment}</span>
                            <div><AiOutlineRetweet /></div><span className="pr-8">{props.retweet}</span>
                            <div><MdFavoriteBorder /></div><span className="pr-8">{props.likes}</span>
                            <div><VscGraph /></div><span className="pr-8">{props.tweetImpressions}</span>
                            <div><LuShare /></div><span className="pr-8">{props.share}</span>
                        </div>
                    </div>
            </div>
        </div>
    )
         
}
import {FaRegComment } from "react-icons/fa"
import {AiOutlineRetweet} from "react-icons/ai"
import {MdFavoriteBorder} from "react-icons/md"
import {VscGraph} from "react-icons/vsc"
import {LuShare} from "react-icons/lu"
import { formatDate } from "../../../utilities/formateDate"


export function FeedItem(props){
  return(
    <div>
        <div className="flex">
                <div>
                    <img src={props.avatar} className="h-10 rounded-full ml-4 mr-4"/>
                </div>
                <div>
                    <div>
                        <div className="flex ">
                            <div className="font-bold pr-2">{props.username}</div>
                            <div>{props.handle}</div>
                            <span className="pl-2">{formatDate(props.createdAt)}</span>
                        </div>
                        <div>{props.tweet}</div>
                    </div>
                    <div>
                        <div className="flex items-center mt-4">
                            <div><FaRegComment /></div>
                            <div className="pl-2 pr-8">{props.comment}</div>
                            <div><AiOutlineRetweet /></div>
                            <div className="pl-2 pr-8">{props.retweet}</div>
                            <div><MdFavoriteBorder /></div>
                            <div className="pl-2 pr-8">{props.likes}</div>
                            <div><VscGraph /></div>
                            <div className="pl-2 pr-8">{props.tweetImpressions}</div>
                            <div><LuShare /></div>
                            <div className="pl-2 pr-8">{props.share}</div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
    
}
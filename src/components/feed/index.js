import {FaRegComment } from "react-icons/fa"
import {AiOutlineRetweet} from "react-icons/ai"
import {MdFavoriteBorder} from "react-icons/md"
import {VscGraph} from "react-icons/vsc"
import {LuShare} from "react-icons/lu"


export function FeedItem(props){
  
  function formatDate(){
    
    const past = new Date('2023-07-07');
    const now = new Date();

    const result = now - past;
    const seconds = Math.floor(result / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

      if (days > 0) {
      return (`${days}d`);
    } else if (hours > 0) {
      return (`${hours}h`);
    } else if (minutes > 0) {
      return(`${minutes}m`);
    } else {
      return(`${seconds}s`);
    }
  };

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
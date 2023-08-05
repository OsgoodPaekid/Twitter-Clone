import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { LuShare } from "react-icons/lu";
import { formatDate } from "@/utilities/formatDate";

export function FeedItem(props) {
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-20">
          {/* eslint-disable */}
          <img src={props.avatar} className="h-10 rounded-full" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="font-bold pr-2">{props.user.name}</div>
            <div className="text-grey-400">{props.user.screen_name}</div>
            <span className="text-black pl-2">
              {formatDate(props.created_at)}
            </span>
          </div>
          <p className="prose mt-2">{props.text}</p>
          <div>
            <div className="flex flex-row items-center mt-4">
              <div>
                <FaRegComment />
              </div>
              <div className="pl-2 pr-8">{props.comment ?? 0}</div>
              <div>
                <AiOutlineRetweet />
              </div>
              <div className="pl-2 pr-8">{props.retweet ?? 0}</div>
              <div>
                <MdFavoriteBorder />
              </div>
              <div className="pl-2 pr-8">{props.likes ?? 0}</div>
              <div>
                <VscGraph />
              </div>
              <div className="pl-2 pr-8">{props.tweetImpressions ?? 0}</div>
              <div>
                <LuShare />
              </div>
              <div className="pl-2 pr-8">{props.share ?? 0}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

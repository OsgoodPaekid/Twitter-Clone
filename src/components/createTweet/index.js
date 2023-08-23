import { GoFileMedia } from "react-icons/go";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

export function CreateTweet() {
  const defaultIconSize = 16;
  const defaultColor = "blue";
  return (
    <div>
      <div className="flex">
        <img
          src={"https://i.pravatar.cc/100"}
          className="h-10 rounded-full ml-4 mr-4"
        ></img>
        <textarea
          rows={3}
          cols={70}
          placeholder={`What's happening?!`}
        ></textarea>
      </div>
      <div className="flex justify-start ml-20 mt-2 mb-2 gap-4">
        <div>
          <GoFileMedia size={defaultIconSize} color={defaultColor} />
        </div>
        <div>
          <MdOutlineGifBox size={defaultIconSize} color={defaultColor} />
        </div>
        <div>
          <BiPoll size={defaultIconSize} color={defaultColor} />
        </div>
        <div>
          <BsEmojiSmile size={defaultIconSize} color={defaultColor} />
        </div>
        <div>
          <AiOutlineSchedule size={defaultIconSize} color={defaultColor} />
        </div>
        <div>
          <CiLocationOn size={defaultIconSize} color={defaultColor} />
        </div>
        <button className="bg-blue-300 p-1 text-sm text-white rounded-full text-center pl-4 pr-4 ml-64">
          Tweet
        </button>
      </div>
    </div>
  );
}

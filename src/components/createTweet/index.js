import { GoFileMedia } from "react-icons/go";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

export function CreateTweet() {
  const IconSize = 16;
  const IconColor = "blue";
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
          <GoFileMedia size={IconSize} color={IconColor} />
        </div>
        <div>
          <MdOutlineGifBox size={IconSize} color={IconColor} />
        </div>
        <div>
          <BiPoll size={IconSize} color={IconColor} />
        </div>
        <div>
          <BsEmojiSmile size={IconSize} color={IconColor} />
        </div>
        <div>
          <AiOutlineSchedule size={IconSize} color={IconColor} />
        </div>
        <div>
          <CiLocationOn size={IconSize} color={IconColor} />
        </div>
        <button className="bg-blue-300 p-1 text-sm text-white rounded-full text-center pl-4 pr-4 ml-64">
          Tweet
        </button>
      </div>
    </div>
  );
}

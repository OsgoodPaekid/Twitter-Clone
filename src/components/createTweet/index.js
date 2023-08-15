"use-client";
import { GoFileMedia } from "react-icons/go";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

export function CreateTweet() {
  return (
    <div>
      <input
        type="text"
        placeholder="What's happening"
        className="mb-10"
      ></input>
      <div className="flex justify-start ml-4 mt-10 mb-4 gap-4">
        <div>
          <GoFileMedia />
        </div>
        <div>
          <MdOutlineGifBox />
        </div>
        <div>
          <BiPoll />
        </div>
        <div>
          <BsEmojiSmile />
        </div>
        <div>
          <AiOutlineSchedule />
        </div>
        <div>
          <CiLocationOn />
        </div>
        <button className="bg-blue-300 p-1 text-sm text-white rounded-full text-center pl-8 pr-8 ml-64">
          Tweet
        </button>
      </div>
    </div>
  );
}

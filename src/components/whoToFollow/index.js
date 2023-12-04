export function WhoToFollow(props) {
  return (
    <div>
      <section>
        <div className="flex mb-4">
          <div>
            <img src={props.avatar} className="h-10 rounded-full ml-4 mr-4" />
          </div>
          <div>
            <div className="font-bold pr-2">{props.name}</div>
            <div>@{props.screen_name}</div>
          </div>
          <div>
            <button className="ml-6 rounded-full pl-1 pr-1 bg-black text-[#fff]">
              Follow
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

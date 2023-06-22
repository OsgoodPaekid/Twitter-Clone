export function FeedItem(props){
    return(
        <div>
            <div className="flex">
                    <div>
                        {props.avatar}
                    </div>
                    <div>
                        <div>
                            <div className="flex ">
                                <div className="font-bold pr-2">{props.username}</div>
                                <div>{props.handle}</div>
                                <span className="pl-2">{props.time}</span>
                            </div>
                            <div>{props.tweet}</div>
                        </div>
                        <div className="flex pt-8 space-x-4">
                            <span className="pr-8">{props.comment}</span>
                            <span className="pr-8">{props.retweet}</span>
                            <span className="pr-8">{props.likes}</span>
                            <span className="pr-8">{props.tweetImpressions}</span>
                            <span className="pr-8">{props.share}</span>
                        </div>
                    </div>
            </div>
        </div>
    )
         
}
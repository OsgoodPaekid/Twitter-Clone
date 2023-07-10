import { FeedItem } from "@/components/feed"


export default function Home() {

      const items = [{
        id: 1,
        avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
        username: "Osgood",
        handle: "@osgoodpaekid",
        createdAt: new Date('2023-07-07'),
        tweet: "reasons why a lot of developers choose next js",
        comment: 50,
        retweet: 31, 
        likes: 1000,
        tweetImpressions: 5000
    }]

    return(
      <div>
        {items.map(item => {
      return(
        <FeedItem 
          key={item.id}
          {...item}
        />
      )
    })}
      </div>
    )
}

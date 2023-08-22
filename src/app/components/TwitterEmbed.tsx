import {TwitterTweetEmbed} from "react-twitter-embed";
import React from "react";



const tweetId = process.env.NEXT_PUBLIC_TWETTER_ID || '1';

export default function TwitterEmbed() {
    return (
        <TwitterTweetEmbed
            tweetId={tweetId}
        />
    )
}
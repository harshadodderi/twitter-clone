import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';

export default function Widgets() {
  return (
    <div className='widgets'>
      <div className='widget_inputs'>
        <SearchIcon className='widget_searchIcon' />
        <input placeholder='search_twitter' text='text' />
      </div>
      <div className='widget_widgetContainer'>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId='1290951178478592001' />
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='9GAG'
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={''}
          options={{ text: '#reactjs is  awesome', via: '9gag' }}
        />
      </div>
    </div>
  );
}

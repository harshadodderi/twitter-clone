import React, { forwardRef } from 'react';
import './Post.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PublishIcon from '@material-ui/icons/Publish';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Button, Avatar } from '@material-ui/core';
const Post = forwardRef(
  (
    { displayName, username, verified, timestamp, text, image, avatar },
    ref
  ) => {
    return (
      <div className='post' ref={ref}>
        <div className='post_avatar'>
          <Avatar src={avatar} />
        </div>
        <div className='post_body'>
          <div className='post_header'>
            <div className='post_headerText'>
              <h3>
                {displayName}
                <span className='post__headerSpecial'>
                  {verified && <VerifiedUserIcon className='post_badge' />}@
                  {username}
                </span>
              </h3>
            </div>
            <div className='post_headerDescription'>
              <p>{text}</p>
            </div>
          </div>
          {image && <img src={image} alt='image' className='' />}
          <div className='post_footer'>
            <ChatBubbleOutlineIcon fontSize='small' />
            <RepeatIcon fontSize='small' />
            <FavoriteBorderIcon fontSize='small' />
            <PublishIcon fontSize='small' />
          </div>
        </div>
      </div>
    );
  }
);
export default Post;

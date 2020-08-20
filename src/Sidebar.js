import React from 'react';
import './Sidebar.css';
import Sidebaroption from './Sidebaroption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
function Sidebar() {
  return (
    <div className='sidebar'>
      <TwitterIcon className='sidebar__twitterIcon' />
      <Sidebaroption text='Home' Icon={HomeIcon} active />
      <Sidebaroption text='Explore' Icon={SearchIcon} />
      <Sidebaroption text='Notifications' Icon={NotificationsIcon} />
      <Sidebaroption text='Messages' Icon={MailOutlineIcon} />
      <Sidebaroption text='Bookmarks' Icon={BookmarkBorderIcon} />
      <Sidebaroption text='Lists' Icon={ListAltIcon} />
      <Sidebaroption text='Account' Icon={PermIdentityIcon} />
      <Sidebaroption text='More' Icon={MoreHorizIcon} />
      <Button variant='outlined' className='sidebar__tweet' fullWidth>
        Tweet
      </Button>
    </div>
  );
}
export default Sidebar;

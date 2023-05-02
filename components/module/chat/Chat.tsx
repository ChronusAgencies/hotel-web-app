import React from 'react';
import Window from './window/Window';
import ChatInput from './chatInput/ChatInput';
import Profile from './profile/Profile';

const Chat = () => {
  return (
    <>
      <Profile/>
      <Window/>
      <ChatInput/>
    </>
  )
}

export default Chat
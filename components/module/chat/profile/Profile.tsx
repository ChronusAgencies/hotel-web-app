import React from 'react';
import ProfilePic from './profilePic/ProfilePic';
import ProfileInfo from './profileInfo/ProfileInfo';
import ProfileStatus from './profileStatus/ProfileStatus';

const Profile = () => {
  return (
    <>
      <ProfilePic/>
      <ProfileInfo/>
      <ProfileStatus/>
    </>
  )
}

export default Profile
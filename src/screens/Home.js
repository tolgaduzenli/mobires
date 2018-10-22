import React from 'react';
import styled from 'styled-components/native'
import Profile from './Profile'
import profileData from '../entities/profile.json'

export default class Home extends React.Component {
  render() {
    return (
      <HomeContainer>
        <Profile {...profileData} />
      </HomeContainer>
    );
  }
}
const HomeContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
`
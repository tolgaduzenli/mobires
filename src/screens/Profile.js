import React, { Component } from 'react'
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import PropTypes from 'prop-types'
const { width: viewportWidth } = Dimensions.get('window')
const screenWidth = viewportWidth

export default class Profile extends Component {

    constructor(props) {
        super(props)
    }

    renderHeader = () => {
        const {
            avatar,
            avatarBackground,
            name,
            surname,
            city,
            country
        } = this.props

        return (
            <HeaderContainer>
                <AvatarImageBackground >
                    <ImageBackground blurRadius={10} source={{ uri: avatarBackground }}>
                        <HeaderColumn>
                            <Image source={{ uri: avatar }} />
                        </HeaderColumn>
                    </ImageBackground>
                </AvatarImageBackground>
            </HeaderContainer>
        )
    }

    render() {
        return (
            <ProfileContainer>
                {this.renderHeader()}
            </ProfileContainer>
        )
    }
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    avatarBackground: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    webpage: PropTypes.string.isRequired
}

const ProfileContainer = styled.ScrollView``

const HeaderContainer = styled.View`
    width: ${screenWidth};
    height: 250px;
`

const HeaderColumn = styled.View`
    background-color: transparent;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`
const AvatarImageBackground = styled.View`
    width: 100%;
    height: 100%;
`
const ImageBackground = styled.ImageBackground``

const Image = styled.Image`
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
`
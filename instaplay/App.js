import React, {Component} from 'react';
import { Text, View , ImageBackground, Image, StatusBar, ScrollView } from 'react-native';
import LoginButton from './src/components/LoginButton';


const colors = {
  facebook: 'rgb(59, 89, 152)',
  text: 'rgba(255, 255, 255, 0.75)',
  instagramButtonBorderColor: 'rgba(255, 255, 255, 0.35)',
  facebookButtonBordercolor: 'rgba(255, 255, 255, 0.35)'
}

const loginButtonInfo = {
  height: 45,
  pageFontSize:13,
  borderWidth: 0.8,
  borderRadius: 5
}

const urls = {
  forgotInstagramLogin: 'https://www.instagram.com/accounts/password/reset',
  twitterLogin: 'https://twitter.com/login?lang=en',
  instagramSignUp: 'https://www.instagram.com/accounts/emailsignup/?hl=en',
  instagramAuthLogin: 'https://api.instagram.com/oauth/authorize/?client_id=cda6dee7d8164a868150910407962f52&redirect_uri=http://www.kaitechconsulting.com&response_type=token&scope=basic+follower_list+comments+likes',
  instagramLogout: 'https://instagram.com/accounts/logout',
  instagramBase: 'https://www.instagram.com/',
}



export default class App extends Component {

  constructor(props){
    super(props);
  }


LoginButtonPressed = () => {
  console.log
}
    loginScreenComponent = () => {
      return (
        <ImageBackground
          source={require('./src/images/Cocoaa-Ice.jpg')}
          resizeMode={'cover'}
          style={viewstyles.container}
        >

          <StatusBar
             backgroundColor="blue"
             barStyle="light-content"
           />

           <ScrollView>


            <Image
              source={require('./src/images/instagram-text-logo.png')}
              style={viewstyles.instagramTextLogo}
              resizeMode={'contain'}
            />

              <LoginButton
                buttonViewStyle={viewstyles.instagramLoginButtonView}
                buttonTextStyle={{color: colors.text, fontWeight: '500'}}
                buttonTapped={(this.LoginButtonPressed)}
                activeOpacity={0.75}

                >
                 Login

                </LoginButton>
            </ScrollView>

         </ImageBackground>
    );
    }

  render() {
    return (
      this.loginScreenComponent()
    );
  }
}

const viewstyles = {
  container: {
    flex: 1,
    alignItems: 'center'
  },
  instagramTextLogo: {
    width: 150,
    height: 80,
    marginTop: '65%',
    marginBottom: 25
  },
  instagramLoginButtonView: {
    backgroundColor: 'transparent',
    borderColor: colors.instagramButtonBorderColor,
    borderWidth: loginButtonInfo.borderWidth,
    borderRadius:loginButtonInfo.borderRadius,
    width: '80%',
    height: loginButtonInfo.height,
    justifyContent: 'center',
    alignItems: 'center'
  }
};






const textStyles = {

};

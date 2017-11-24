import React, {Component} from 'react';
import { Text, View , ImageBackground, Image, StatusBar, ScrollView, Linking } from 'react-native';
import LoginButton from './src/components/LoginButton';
import TappableText from './src/components/TappableText';
import Dimensions from 'Dimensions';

const windowSize = Dimensions.get('window');
const standardComponetWidth = windowSize.width * 0.82;

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
  console.log("Button Pressed!!");
}

loginWithTwitterComponent = () => {
  return(
      <View style={viewstyles.twitterLoginViewStyles}>
        <Image
          source={require('./src/images/icons/twitter_bird.png')}
          style={viewstyles.twitterIcon}
          resizeMode={'contain'}
        />
        <TappableText
          textStyle= {[textStyles.forgottenLogin, textStyles.forgottenLoginBold]}
          textTapped={ () => Linking.openURL(urls.twitterLogin)}
          >
          Log In Twitter
        </TappableText>
      </View>
    );
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
                instaramButtonTouchableHeightlightStyle={viewstyles.instagramLoginButton}
                activeOpacity={0.75}
              >
                 Login (Via Instagram)
              </LoginButton>

                <LoginButton
                  buttonViewStyle={[viewstyles.instagramLoginButtonView, viewstyles.facebookLoginButtonView]}
                  buttonTextStyle={{color: colors.text, fontWeight: '500'}}
                  buttonTapped={(this.LoginButtonPressed)}
                  TouchableHeightlightStyle={viewstyles.instagramLoginButtonTouchableHeightlighStyle, viewstyles.facbookloginButtonTouchableHeightlightStyle}
                  activeOpacity={0.75}

                  >
                   facebook Login

                </LoginButton>

                  <View style= {viewstyles.forgottenLoginEncapsulationview}>
                    <Text style={textStyles.forgottenLogin}>  forgot your login details?</Text>
                    <TappableText
                      textStyle= {[textStyles.forgottenLogin, textStyles.forgottenLoginBold]}
                      textTapped={ () => Linking.openURL(urls.forgotInstagramLogin)}
                      >
                      Get Help Sigining in
                    </TappableText>
                  </View>

                  <View style={viewstyles.orSeparatorView}>
                    <View style={viewstyles.orSeparatorLine} />
                    <Text style={textStyles.orSeparatorTextStyle}>OR</Text>
                    <View style={viewstyles.orSeparatorLine} />
                  </View>

                  {this.loginWithTwitterComponent()}

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
    marginBottom: 25,
    alignSelf: 'center'
  },
  instagramLoginButtonView: {
    backgroundColor: 'transparent',
    borderColor: colors.instagramButtonBorderColor,
    borderWidth: loginButtonInfo.borderWidth,
    borderRadius:loginButtonInfo.borderRadius,
    width: standardComponetWidth,
    height: loginButtonInfo.height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  instaramButtonTouchableHeightlightStyle: {
    backgroundColor: 'transparent',
    width: standardComponetWidth,
    height: loginButtonInfo.height,
    marginTop: 5
  },
  facebookButtonTouchableHeightlightStyle: {
    backgroundColor: 'transparent',
    width: standardComponetWidth,
    height: loginButtonInfo.height,
    marginTop: 5

},
  facebookLoginButtonView: {
    backgroundColor: colors.facebook
  },
  forgottenLoginEncapsulationview: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orSeparatorView: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
    //backgroundColor: 'white',
    paddingHorizontal: 5

  },
  orSeparatorLine: {
    height: 1,
    flex: 5,
    backgroundColor: colors.instagramButtonBorderColor,
    borderColor: colors.instagramButtonBorderColor,
    borderWidth: 0.5,
    marginHorizontal: 5
  },
  twitterLoginViewStyles: {
    flexDirection:'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  twitterIcon: {
    width: 17,
    height:17,
    marginHorizontal: 4
  }

};








const textStyles = {
  forgottenLogin: {
    color: 'white',
    fontSize: loginButtonInfo.pageFontSize,
    backgroundColor: 'transparent'
  },
  forgottenLoginBold: {
    fontWeight: 'bold',
    marginLeft: 3
  },
  orSeparatorTextStyle: {
    //orSeparatorTextStyle
    color: 'white',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontSize: 13
  },

  twitterLogin:{
    fontSize:20
  }


};

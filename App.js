import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Button, View, Text ,ImageBackground} from 'react-native';
import Signup from './sign';
import LoginForm from './login-form';

 class Login extends React.Component {
  render() {
    return (
           <ImageBackground source={require('./back-image/fb9c093c0f56ddd40bac25aa7674c534.jpg')} style={{width: '100%', height: '100%'}}>  

                <View style={{marginTop:280}}>
                   <LoginForm/>
                </View>

                <View style={{marginTop:340}}>
                    <Text style={{color:'gray'}}>Don't have an account? </Text>
                </View>

                <View>
                      <Button
                            title="Sign Up"
                            type='clear'
                            onPress={() => this.props.navigation.navigate('Signup')}
                            />
                 </View>

           </ImageBackground>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

import React from 'react';
import { Button, View, Text } from 'react-native';


export default class Signup extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Signup</Text>
          <Button
            title=" go to LogIn"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      );
    }
  }
  
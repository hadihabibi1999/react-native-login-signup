import React, { Component } from "react";
 import { TouchableOpacity,Text, View, Button, TextInput, KeyboardAvoidingView ,StatusBar,StyleSheet} from "react-native";

export default class LoginForm extends Component {
render() {
    return (
        <View behavior='padding' style={{ flex: 1, flexDirection: "column", margin: 10 }}>
        <StatusBar
            barStyle="light-content"
        />
       
            <TextInput
                style={styles.input1}
                placeholder="Email address"
                underlineColorAndroid="transparent"
                placeholderTextColor='white'
                returnKeyType='next'
                onSubmitEditing={()=>this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
      
     
            <View style={{ paddingTop:35}}>
            <TextInput
                style={styles.input2}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                placeholderTextColor='white'
                returnKeyType='go'
                ref={(input)=>this.passwordInput=input}
            />
                 </View>

            <View style={{ height: 100, marginTop: 90 }}>
                <TouchableOpacity>
                    <Text style={{textAlign:'center',color:'#F5E9B0',fontSize:25}}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
   input1:{
       height: 45,
       borderColor: "#02C4F8",
       borderWidth: 0.5,
       paddingHorizontal:10,
       borderRadius:30,
       backgroundColor:"#81E1FA"
   },
    input2:{
        height: 45,
        borderColor: "#F37703",
        borderWidth: 0.5,
        paddingHorizontal:10,
        borderRadius:30,
        backgroundColor:"#F4B356"
    }
})
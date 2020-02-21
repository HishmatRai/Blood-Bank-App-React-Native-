import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, View, Card } from 'native-base';
import {
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
export default class Login extends Component {
  render() {
    return (
      <SafeAreaView >
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={{ alignItems: "center" }}>
            <Text></Text>
            <Image style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 100,
              borderRadius: 50,
            }} source={{ uri: 'http://pluspng.com/img-png/blood-donation-png-hd-blood-blood-drop-donation-hand-health-care-medical-transfusion-blood-512.png' }} />
            <Text style={{ color: "#e42c34", fontWeight: 'bold' }}>WelCome to Saylani Blood Bank </Text>
            <Content >
              <Form>
                <Item stackedLabel>
                  <Label style={{ color: "#e42c34", fontWeight: 'bold' }}>User email</Label>
                  <Input autoCapitalize="none" autoCorrect={false} placeholder="xyz@gmail.com" />
                </Item>
                <Item stackedLabel last>
                  <Label style={{ color: "#e42c34", fontWeight: 'bold' }}>Password</Label>
                  <Input secureTextEntry={true} placeholder="************" />
                </Item>
                <Text></Text>
                <View style={{ textAlign: "center" }}>
                  <TouchableOpacity rounded style={{ backgroundColor: "#e42c34", alignItems: 'center', borderRadius: 50, color: 'black', padding: 10 }}
                    onPress={() => this.props.navigation.navigate("Home")}><Text style={{ fontWeight: 'bold' }}> Login </Text></TouchableOpacity>
                  <Text></Text>
                  <Text style={{ color: "#e42c34", textAlign: 'center', fontWeight: 'bold' }}> Not a member?
 </Text>
                  <Text></Text>

                  <TouchableOpacity rounded style={{ backgroundColor: "#e42c34", borderRadius: 50, alignItems: 'center', color: '#FF00FF', padding: 10 }}
                    onPress={() => this.props.navigation.navigate("Signup")} ><Text style={{ fontWeight: 'bold' }}> Sign up </Text></TouchableOpacity >
                  <Text></Text>
                </View>
              </Form>
            </Content>
          </View>
        </ScrollView>
      </SafeAreaView>

    );
  }
}



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
})
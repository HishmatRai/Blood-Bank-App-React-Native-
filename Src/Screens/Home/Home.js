import React, { Component } from 'react';
// import { Container, Header, Content, Form, Item, Input, Label, Text ,Left,Button,Icon,Body,Title,Right
//  } from 'native-base';
import {
    View,
     ScrollView,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import ImageSlider from './../../Components/ImageSlider/ImageSlider'
import ShowPost from './../../Components/ShowPost/ShowPost'
import TopHeader from './../../Components/Header/Header'
import Profile from './../../Components/MyProfile/Myprofile'
export default class StackedLabelExample extends Component {
    render() {
        return (
            <SafeAreaView >
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                   <View style={{flex:1}}>
          <TopHeader  navigation= {this.props.navigation} />
         
         

     
          <ImageSlider />
          {/* <Profile /> */}
          <ShowPost navigation = {this.props.navigation}/>
          <ShowPost navigation = {this.props.navigation}/>
          <ShowPost navigation = {this.props.navigation}/>
          <ShowPost navigation = {this.props.navigation}/>
         
       
 

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
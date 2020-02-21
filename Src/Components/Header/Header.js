import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Text ,Left,Button,Icon,Body,Title,Right } from 'native-base';
import {
    Image,
    View,
    TouchableOpacity,
    Picker,
    ScrollView,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import {
    Colors,

} from 'react-native/Libraries/NewAppScreen';
import ImageSlider from './../../Components/ImageSlider/ImageSlider'
import ShowPost from './../../Components/ShowPost/ShowPost'
export default class StackedLabelExample extends Component {
    render() {
        console.log(this.props)
        return (
            <SafeAreaView >
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                   <View>
           
                   <Header searchBar rounded style={{backgroundColor: "#e42c34"}}> 
                  
          <Left>
            <Button transparent onPress={()=>this.props.navigation.openDrawer()}>
              <Icon name='menu'  />
            </Button>
          </Left>
          
          
          <Item >
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
          
        </Header>
 
 
      
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
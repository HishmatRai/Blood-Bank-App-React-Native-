import React, { Component } from 'react';
import { Container, Header, Content, Form, List,Thumbnail,Item, Input, Label, ListItem, Switch, Text, Left, Button, Icon, Body, Title, Right } from 'native-base';
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
import TopHeader from './../../Components/Header/Header'
export default class Notfication extends Component {
    render() {
        return (
            <SafeAreaView >
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View>
                        <TopHeader navigation={this.props.navigation} />
                        <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/1027203873335914496/_N876cQz.jpg' }} />
              </Left>
              <Body>
                <Text>Hishmat Rai</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            

            </ListItem>
          </List>

          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/1027203873335914496/_N876cQz.jpg' }} />
              </Left>
              <Body>
                <Text>Hishmat Rai</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>



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
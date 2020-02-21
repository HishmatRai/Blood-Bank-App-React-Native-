import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, List, ListItem, Thumbnail, Text, Left, Button, Icon, Body, Title, Right } from 'native-base';
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
export default class MyRequests extends Component {
    render() {
        return (
            <SafeAreaView >
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View>
                        <TopHeader navigation={this.props.navigation} />
                        <Text></Text>
                        <List>
                            <ListItem thumbnail>
                                <TouchableOpacity>

                                <Left>
                                    <Thumbnail square source={{ uri: 'https://pbs.twimg.com/profile_images/1027203873335914496/_N876cQz.jpg' }} />
                                </Left>
                                </TouchableOpacity>
                                <Body>
                                    <TouchableOpacity>

                                    <Text>Sankhadeep</Text>
                                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right>
                                    <TouchableOpacity transparent>
                                        <Text>View</Text>
                                    </TouchableOpacity>
                                </Right>
                            </ListItem>
                        </List>

                        <List>
                            <ListItem thumbnail>
                                <TouchableOpacity>

                                <Left>
                                    <Thumbnail square source={{ uri: 'https://pbs.twimg.com/profile_images/1027203873335914496/_N876cQz.jpg' }} />
                                </Left>
                                </TouchableOpacity>
                                <Body>
                                    <TouchableOpacity>

                                    <Text>Sankhadeep</Text>
                                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right>
                                    <TouchableOpacity transparent>
                                        <Text>View</Text>
                                    </TouchableOpacity>
                                </Right>
                            </ListItem>
                        </List>

                        <List>
                            <ListItem thumbnail>
                                <TouchableOpacity>

                                <Left>
                                    <Thumbnail square source={{ uri: 'https://pbs.twimg.com/profile_images/1027203873335914496/_N876cQz.jpg' }} />
                                </Left>
                                </TouchableOpacity>
                                <Body>
                                    <TouchableOpacity>

                                    <Text>Sankhadeep</Text>
                                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right>
                                    <TouchableOpacity transparent>
                                        <Text>View</Text>
                                    </TouchableOpacity>
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
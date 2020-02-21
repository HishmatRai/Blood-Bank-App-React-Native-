import React, { Component } from 'react';
import { ListItem, Switch, Text, Left, Button, Icon, Body, Right } from 'native-base';
import {
    View,
    ScrollView,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import {
    Colors,

} from 'react-native/Libraries/NewAppScreen';
import TopHeader from './../../Components/Header/Header'
export default class Settings extends Component {
    render() {
        return (
            <SafeAreaView >
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View>
                        <TopHeader navigation={this.props.navigation} />
                        <Text></Text>
                        <ListItem icon>
                            <Left>
                                <Button style={{ backgroundColor: "#FF9501" }}>
                                    <Icon active name="airplane" />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Airplane Mode</Text>
                            </Body>
                            <Right>
                                <Switch value={false} />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Button style={{ backgroundColor: "#007AFF" }}>
                                    <Icon active name="wifi" />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Wi-Fi</Text>
                            </Body>
                            <Right>
                                <Text>GeekyAnts</Text>
                                <Icon active name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Button style={{ backgroundColor: "#007AFF" }}>
                                    <Icon active name="bluetooth" />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Bluetooth</Text>
                            </Body>
                            <Right>
                                <Text>On</Text>
                                <Icon active name="arrow-forward" />
                            </Right>
                        </ListItem>
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
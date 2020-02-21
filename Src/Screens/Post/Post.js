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
import TopHeader from './../../Components/Header/Header'
export default class post extends Component {
    render() {
        return (
            <SafeAreaView >
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                   <View>
                   <TopHeader navigation= {this.props.navigation} />
                   <Content >
              <Form>

              <Item>
                                <Label style={{ color: "#e42c34", fontWeight: 'bold' }}>Select Blood Group </Label>

                                <Picker
                                        selectedValue="Hishmat"
                                        style={{ height: 50, width: '60%' }}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({ language: itemValue })
                                        }>
                                        <Picker.Item label="A+ Positive" value="A Positive" />
                                        <Picker.Item label="A - (Negative)" value="A - (Negative)" />
                                        <Picker.Item label="B + (Positive)" value="B + (Positive)" />
                                        <Picker.Item label="B - (Negative)" value="B - (Negative)" />
                                        <Picker.Item label="O + (Positive)" value="O + (Positive)" />
                                        <Picker.Item label="O - (Negative)" value="O - (Negative)" />
                                        <Picker.Item label="AB + (Positive)" value="AB + (Positive)" />
                                        <Picker.Item label="AB - (Negative)" value="AB - (Negative)" />
                                    </Picker>
                                </Item>

                              
                                <Item>
                                <Label style={{ color: "#e42c34", fontWeight: 'bold' }}>No of Units required  </Label>

                                <Picker
                                        selectedValue="Hishmat"
                                        style={{ height: 50, width: ' 56%' }}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({ language: itemValue })
                                        }>
                                        <Picker.Item label="1 Units                    " value="1" />
                                        <Picker.Item label="2 Units                    " value="2" />
                                        <Picker.Item label="3 Units                    " value="3" />
                                        <Picker.Item label="4 Units                    " value="4" />
                                        <Picker.Item label="5 Units                    " value="5" />
                                        
                                    </Picker>
                                </Item>

                                <Item>
                                <Label style={{ color: "#e42c34", fontWeight: 'bold' }}>Urgency: </Label>

                                <Picker
                                        selectedValue="Hishmat"
                                        style={{ height: 50, width: ' 80%' }}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({ language: itemValue })
                                        }>
                                        <Picker.Item label=" Urgent" value=" Urgent" />
                                        <Picker.Item label=" Within 5 hours" value=" Within 5 hours" />
                                        <Picker.Item label=" Within 12 hours" value=" Within 12 hours" />
                                        <Picker.Item label=" Within 24 hours" value=" Within 24 hours" />
                                        <Picker.Item label=" Within 2 days" value=" Within 2 days" />
                                        <Picker.Item label=" Within Week" value=" Within Week" />




                                     
                                        
                                    </Picker>
                                </Item>
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
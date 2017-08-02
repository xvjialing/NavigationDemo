import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    Button
} from 'react-native';

import {StackNavigator} from 'react-navigation';

class HomeScreen extends Component {
    static navigationOptions={
        title:'Home',

    }

    render() {
        const {navigate}=this.props.navigation;
        return (
            <View>
                <Text>home</Text>
                <Button onPress={()=>navigate('Chat',{user:'lucy',password:'123'})} title='go to chat'></Button>
            </View>
        );
    }
}

export default class ChatScreen extends Component{
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`,
        headerRight:<Button title='Info'></Button>
    });

    render(){
        const {params}=this.props.navigation.state
        return (
            <View>
                <Text>chat with {params.user} ;password:{params.password}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

const SimpleApp=StackNavigator({
    Home:{screen:HomeScreen},
    Chat:{screen:ChatScreen}
})


AppRegistry.registerComponent('NavigationDemo', () => SimpleApp);
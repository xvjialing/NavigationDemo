import React,{Component} from 'react';
import {View, Text, StyleSheet, AppRegistry,Button} from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
// import ChatScreen from './StackNavigatorDemo'

class RecentChatScreen extends Component{
    render(){
        return(
            <View>
                <Button
                    onPress={() => this.props.navigation.navigate('Chat', { user: 'jack' ,password:'456'})}
                    title='chat with jack'/>
            </View>
        );

    }
}

class AllContactsScreen extends Component{
    render(){
        return(
            <View>
                <Text>List of all contact!</Text>
            </View>
        );

    }
}

class ChatScreen extends Component{
    static navigationOptions=({navigation})=>{
        title:`Chat with ${navigation.state.params.user}`
    };

    render(){
        const {params}=this.props.navigation.state
        return (
            <View>
                <Text>chat with {params.user} ;password:{params.password}</Text>
            </View>
        );
    }
}

const MainScreenNavigator=TabNavigator({
    Home:{screen:RecentChatScreen},
    All:{screen:AllContactsScreen},
})

MainScreenNavigator.navigationOptions={
    title:'My Chat',


}

const SimpleApp=StackNavigator({
    Home:{screen:MainScreenNavigator},
    Chat:{screen:ChatScreen}
})

AppRegistry.registerComponent('NavigationDemo', () => SimpleApp);
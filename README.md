## Navigator(导航)

> 导航器通过路由对象（route)来分辨不同的场景。每个路由对象都对应一个路由组件，开发者设置什么，
导航器显示什么，所以route是导航器中重要的一个对象。

三步操作实现导航功能：
1. 设置路由对象，（告诉导航器要显示哪个页面）

创建路由对象，对象的内容自定义，但是必须包含该场景需要展示的页面组件

2. 场景渲染配置，告诉导航器需要什么样的页面跳转效果

3. 渲染场景（告诉导航器如何渲染页面）

利用第一步设置的路由对象进行渲染场景

#### Navigator传值
- 例子


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
            title:'Home'
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
    

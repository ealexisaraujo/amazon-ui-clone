import React from 'react';
import { StyleSheet, Text, View,FlatList, Platform, StatusBar } from 'react-native';
import {createDrawerNavigator} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'

import {Icon, Container, Content, Header, Left, Body, Right,List, ListItem} from 'native-base'

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator/>
    );
  }
}

const CustomDrawerContentComponent = (props)=>{
  return (
    <Container>
      <Header style={{backgroundColor: '#3a455c', height: 90}}>
        <Left style={{flex:1, flexDirection:'row', alignItems:'center'}}>
          <Icon name="person" style={{color:'white'}}></Icon>
          <Text style={{marginLeft: 5, fontSize:22, color:'white', fontStyle:'italic'}}>Hello, Alexis</Text>
        </Left>
      </Header>
        <Content>
          <FlatList
            style={{borderTopWidth: 0.5, borderTopColor: '#f0f0f0'}}
            data={[
              'Home', 'Shop by Category', "Today's Deals"
            ]}
            renderItem={({ item }) => (
              <ListItem noBorder>
                <Text>{item}</Text>
              </ListItem>
            )}
          />
          <FlatList
            style={{borderTopWidth: 0.5, borderTopColor: '#f0f0f0'}}
            data={[
              'Your Wish List', 'Your Account', "Amazon Pay", "Prime", "Sell On Amazon"
            ]}
            renderItem={({ item }) => (
              <ListItem noBorder>
                <Text>{item}</Text>
              </ListItem>
            )}
          />
          <FlatList
            data={[
              'Settings', 'Customer Service'
            ]}
            renderItem={({ item }) => (
              <ListItem noBorder>
                <Text>{item}</Text>
              </ListItem>
            )}
          />
        </Content>
    </Container>
  )
}

const AppDrawerNavigator = new createDrawerNavigator({

  HomeScreen: { screen: HomeScreen }
}, {
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'

})

const styles = StyleSheet.create({
  Container: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center'
  },
  androidHeader:{
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      }
    })
  }
});

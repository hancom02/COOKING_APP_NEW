import {View, Text, TouchableOpacity} from 'react-native';

//NAVIGATION
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//ICON
//import from 'ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

//SCREENS
import Home from './Home';
import Splash from './Splash';
import Search from './Search';
import Grocery from './Grocery';
import Calendar from './Calendar';
import RecipeAdd from './RecipeAdd';
import appStyle from '../values/appStyle';
import Group from './Group';
import DetailGroup from './DetailGroup';
import GroupMember from './GroupMember';
import SearchGroup from './SearchGroup';
import Account from './Account';
import Profile from './Profile';
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const TabIconView = ({isFocused, label, icon, index}) => {
  return <View style={appStyle.iconView}>{icon}</View>;
};

function MyBottomTab() {
  //console.log("IN BOTTOM TAB FUNCTION");

  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name="home-outline"
                size={24}
                color={focused ? 'orange' : 'black'}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name="search-outline"
                size={24}
                color={focused ? 'orange' : 'black'}
              />
            );
          },
        }}
      />
      {/* <BottomTab.Screen
        name="RecipeAdd"
        component={RecipeAdd}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  backgroundColor: 'orange',
                  borderRadius: 50,
                  height: 60,
                  width: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 30,
                }}>
                <Ionicons
                  name="add-outline"
                  size={30}
                  color={focused ? 'white' : 'white'}
                />
              </View>
            );
          },
        }}
      /> */}
      <BottomTab.Screen
        name="Group"
        component={Group}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name="people-outline"
                size={24}
                color={focused ? 'orange' : 'black'}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name="person-outline"
                size={24}
                color={focused ? 'orange' : 'black'}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

function DetailGroupStack () {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DetailGroup" component={DetailGroup}/>
      <Stack.Screen name="GroupMember" component={GroupMember}/>
      <Stack.Screen name="SearchGroup" component={SearchGroup}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Splash" component={Splash} /> */}
        <Stack.Screen name="MyBottomTab" component={MyBottomTab} />
        <Stack.Screen name="DetailGroupStack" component={DetailGroupStack}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Grocery" component={Grocery}/>
        <Stack.Screen name="Calendar" component={Calendar}/>



      </Stack.Navigator>
    </NavigationContainer>
  );
}

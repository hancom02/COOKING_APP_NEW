import { View } from "react-native";

//NAVIGATION
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native"

//SCREENS
import Home from "./Home";
import Splash from "./Splash";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>            
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={Splash}/>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>        
    )
}
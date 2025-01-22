import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../../Auth/SignUp";
import Login from "../../Auth/Login";
import ChatList from "../../Screen/ChatList";
import { Text, TouchableOpacity } from "react-native";
import MessageList from "../../Screen/MessageList";

export default function AppNavigation() {

    const Stack = createStackNavigator();

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SignUp">
                    <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
                    <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
                    <Stack.Screen name="MessageList" component={MessageList} />
                    <Stack.Screen name="ChatList" options={{ headerRight: () => <TouchableOpacity><Text style={{ marginEnd: 15 }}>LogOut</Text></TouchableOpacity> }} component={ChatList} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}
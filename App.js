<<<<<<< Updated upstream
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">{HomeScreen}</Stack.Screen>
=======
import {
  NavigationContainer
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import { navigationRef } from "./RootNavigation";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <TailwindProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{
            headerShown: false,
          }}></Stack.Screen>
          <Stack.Screen name="Restaurant" component={RestaurantScreen}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
>>>>>>> Stashed changes
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

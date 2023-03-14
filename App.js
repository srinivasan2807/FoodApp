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
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

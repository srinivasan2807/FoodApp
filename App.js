import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Provider } from "react-redux";
import { TailwindProvider } from "tailwindcss-react-native";
import { navigationRef } from "./RootNavigation";
import BasketScreen from "./screens/BasketScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import HomeScreen from "./screens/HomeScreen";
import PrepareOrderScreen from "./screens/PrepareOrderScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { store } from "./Store";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <TailwindProvider>
          <Provider store={store}>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="Restaurant"
                component={RestaurantScreen}
                options={{
                  headerShown: false,
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="Basket"
                component={BasketScreen}
                options={{
                  presentation: "modal",
                  headerShown: false,
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="PrepareOrder"
                component={PrepareOrderScreen}
                options={{
                  presentation: "fullScreenModal",
                  headerShown: false,
                }}
              ></Stack.Screen>
              <Stack.Screen
                name="Delivery"
                component={DeliveryScreen}
                options={{
                  presentation: "fullScreenModal",
                  headerShown: false,
                }}
              ></Stack.Screen>
            </Stack.Navigator>
          </Provider>
        </TailwindProvider>
      </NavigationContainer>
      <Toast />
    </>
  );
}

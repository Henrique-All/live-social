import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/components/SplashScreen";
import Home from "./src/Views/Home";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import LoginPage from "./src/Views/auth/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="splash" component={SplashScreen} />
          <Stack.Screen
            name="login"
            component={LoginPage}
            options={{
              gestureEnabled: false,
              animation: "slide_from_right",
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ gestureEnabled: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import SplashScreen from "../../components/SplashScreen";
import Home from "../../Views/Home";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import LoginPage from "../../Views/auth/LoginScreen";
import Direct from "../../Views/Direct";
import { enableScreens } from "react-native-screens";

enableScreens();

const Stack = createNativeStackNavigator();

function StackNavigations() {
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
          <Stack.Screen
            name="Direct"
            component={Direct}
            options={{
              animation: "slide_from_right",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default StackNavigations;

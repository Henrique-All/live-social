import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../Views/SearchScreen";
import { BackHandler } from "react-native";
import { useEffect } from "react";
import FeedScreen from "../Views/FeedScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function NavigationBars() {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f4f4",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Pesquisar" component={Search} />
    </Tab.Navigator>
  );
}

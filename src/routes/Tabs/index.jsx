import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../../Views/SearchScreen";
import { BackHandler, Image, View } from "react-native";
import { useEffect } from "react";
import FeedScreen from "../../Views/Home/FeedScreen";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import NewPost from "../../Views/NewPost";
import NewNotification from "../../Views/NewNotification";
import Profile from "../../Views/Profile";

const Tab = createBottomTabNavigator();

function NavigationBars() {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#6A0606",
        tabBarInactiveTintColor: "#C54F4F",
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
      <Tab.Screen
        name="Pesquisar"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Nova Publicacao"
        component={NewPost}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="pluscircleo" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notificacao"
        component={NewNotification}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={require("../../assets/icons/profile-picture.png")}
                  resizeMode="contain"
                  style={{ width: 30 }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default NavigationBars;

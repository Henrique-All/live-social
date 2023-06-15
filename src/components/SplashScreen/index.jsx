import { View, ActivityIndicator } from "react-native";
import * as Animatable from "react-native-animatable";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { styles } from "./styles";

export default function SplashScreen({ navigation }) {
  const [isLoadin, setIsLoading] = useState(false);

  const fadeIn = {
    from: {
      translateX: 100,
    },
    to: {
      translateX: -0,
    },
  };
  const opacity = {
    0: {
      opacity: 0,
      translateX: 100,
    },
    0.5: {
      opacity: 1,
    },
    1: {
      opacity: 1,
      translateX: -0,
    },
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Animatable.Image
          animation={fadeIn}
          duration={1000}
          source={Logo} // Substitua pelo caminho da sua imagem da splash screen
          resizeMode="contain"
          style={{ width: 100, height: 100 }}
        />
        <Animatable.Text animation={opacity} style={styles.textLogo}>
          LIVE SOCIAL
        </Animatable.Text>
      </View>
      {isLoadin ? (
        <View>
          <ActivityIndicator size="large" color="#6a0606" />
        </View>
      ) : null}
    </View>
  );
}

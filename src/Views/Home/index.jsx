import { useEffect } from "react";
import { BackHandler, SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <View>
        <Text>Isso ai</Text>
      </View>
    </SafeAreaView>
  );
}

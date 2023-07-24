import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import Header from "./Header";

function FeedScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <Header />
    </SafeAreaView>
  );
}

export default FeedScreen;

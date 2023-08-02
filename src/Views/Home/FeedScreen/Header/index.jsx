import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

function Header() {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("Direct");
  };

  return (
    <View style={styles.header}>
      <Image source={require("../../../../assets/Logos/logo-header.png")} />
      <View style={styles.textNotification}>
        <Text style={styles.notification}>2</Text>
      </View>
      <TouchableOpacity onPress={handleNavigate}>
        <Image source={require("../../../../assets/icons/message-icon.png")} />
      </TouchableOpacity>
    </View>
  );
}

export default Header;

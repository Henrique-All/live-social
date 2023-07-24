import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

function Header() {
  return (
    <View style={styles.header}>
      <Image source={require("../../../../assets/Logos/logo-header.png")} />
      <View style={styles.textNotification}>
        <Text style={styles.notification}>2</Text>
      </View>
      <TouchableOpacity>
        <Image source={require("../../../../assets/icons/message-icon.png")} />
      </TouchableOpacity>
    </View>
  );
}

export default Header;

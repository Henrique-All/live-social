import {
  ActivityIndicator,
  Button,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";

function LoginPage({ navigation }) {
  const [isActive, setIsActive] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.main}>
        <View style={styles.logo}>
          <Image source={require("../../../assets/logoComplete.png")} />
        </View>
        <View style={styles.form}>
          <View>
            <Text style={styles.email}>E-mail:</Text>
            <TextInput
              keyboardType="email-address"
              placeholder="Digite seu email"
              placeholderTextColor="#ffffff"
              style={{
                backgroundColor: "#6A0606",
                height: 45,
                borderRadius: 10,
                paddingHorizontal: 10,
                color: "#ffffff",
              }}
            />
          </View>
          <View>
            <Text style={styles.password}>Senha:</Text>
            <TextInput
              placeholder="Digite sua Senha"
              placeholderTextColor="#ffffff"
              secureTextEntry={showPassword}
              style={{
                backgroundColor: "#6A0606",
                height: 45,
                borderRadius: 10,
                paddingHorizontal: 10,
                color: "#ffffff",
              }}
            />

            {showPassword ? (
              <>
                <Entypo
                  name="eye-with-line"
                  size={20}
                  color="#6A0606"
                  onPress={() => setShowPassword(false)}
                  style={{ position: "absolute", right: 5, bottom: 12 }}
                />
              </>
            ) : (
              <>
                <Entypo
                  name="eye"
                  size={20}
                  color="#6A0606"
                  onPress={() => setShowPassword(true)}
                  style={{ position: "absolute", right: 5, bottom: 12 }}
                />
              </>
            )}
          </View>
          <View style={styles.buttonContent}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Home")}
            >
              {isActive ? (
                <ActivityIndicator size="large" color="#ffffff" />
              ) : (
                <Text
                  style={{ color: "#ffffff", fontWeight: "700", fontSize: 18 }}
                >
                  Fazer Login
                </Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              onPress={() => navigation.navigate("Home")}
              style={{ color: "#6A0606", fontWeight: "700", fontSize: 12 }}
            >
              Esqueceu sua senha?
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => console.log("foi")}
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                alignItems: "center",
                color: "#6A0606",
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Você e novo por aqui?
            </Text>
            <Text
              style={{
                alignItems: "center",
                color: "#6A0606",
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Crie sua conta aqui
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginPage;

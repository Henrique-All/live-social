import { Platform, StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  main: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 117,
  },
  logo: {
    marginBottom: 82,
  },
  form: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 61,
    gap: 26,
  },
  email: {
    fontSize: 18,
    fontWeight: "700",
    color: "#6A0606",
  },
  password: {
    fontSize: 18,
    fontWeight: "700",
    color: "#6A0606",
  },
  buttonContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#6A0606",
    height: 42,
    width: 181,
    justifyContent: "center",
    alignItems: "center",
  },
});

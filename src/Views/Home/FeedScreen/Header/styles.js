import { Platform, StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 15,
  },
  textNotification: {
    position: "absolute",
    right: 15,
    backgroundColor: "red",
    width: 20,
    borderRadius: 50,
    height: 15,
    zIndex: 1,
  },
  notification: {
    color: "#ffffff",
    fontSize: 10,
    textAlign: "center",
    alignSelf: "center",
  },
});

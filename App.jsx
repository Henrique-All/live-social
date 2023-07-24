import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import StackNavigations from "./src/routes/stacks";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar />
      <StackNavigations />
    </>
  );
}

export default App;

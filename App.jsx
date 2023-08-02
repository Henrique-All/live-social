import { StatusBar } from "expo-status-bar";
import StackNavigations from "./src/routes/stacks";
import 'react-native-gesture-handler';


function App() {
  return (
    <>
      <StatusBar />
      <StackNavigations />
    </>
  );
}

export default App;

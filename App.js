import { StyleSheet, SafeAreaView } from "react-native";
import Navigation from "./src/navigation";
import { React } from "react";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ccffdd",
  },
});

export default App;

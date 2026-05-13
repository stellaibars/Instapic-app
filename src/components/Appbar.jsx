import { View, Text, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#694173",
    alignItems: "center",
    justifyContent: "center",
  },
  titol: {
    fontStyle: "italic",
    fontSize: 43,
    color: "white",
    marginTop: 40,
  },
});
const Appbar = () => {
  return (
    <View style={styles.appBar}>
      <Text style={styles.titol}>Instapicapp</Text>
    </View>
  );
};

export default Appbar;

import { Image, Text, View, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  user: {
    textAlign: "center",
    fontsize: 0.9,
    color: "#333",
  },
  userImg: {
    borderRadius: 50,
    width: 75,
    height: "75%",
    marginBottom: 5,
  },
});
const User = ({ name, avatar }) => {
  return (
    <View style={styles.user}>
      <Image style={styles.userImg} source={{ uri: avatar }} alt={name} />
      <Text>{name}</Text>
    </View>
  );
};

export default User;

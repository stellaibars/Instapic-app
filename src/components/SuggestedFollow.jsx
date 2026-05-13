import { StyleSheet, View } from "react-native";
import User from "./User";
const styles = StyleSheet.create({
  suggestedFollow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    width: "80%",
    margin: 0,
    height: 90,
    marginLeft: 20,
  },
});

const SuggestedFollow = ({ users }) => {
  return (
    <View style={styles.suggestedFollow}>
      {users.map((user) => (
        <User key={user.username} name={user.username} avatar={user.avatar} />
      ))}
    </View>
  );
};

export default SuggestedFollow;

import { StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
  commentAuthor: {
    fontSize: 14,
    color: "#d34",
    fontStyle: "italic",
  },

  commentText: {
    lineHeight: 22,
    marginTop: 2,
    marginBottom: 10,
  },
});
const Comment = ({ author, text }) => {
  return (
    <View>
      <Text style={styles.commentAuthor}>{author} said:</Text>
      <Text style={styles.commentText}>{text}</Text>
    </View>
  );
};

export default Comment;

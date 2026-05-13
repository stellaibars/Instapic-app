import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  picture: {
    width: "100%",
    backgroundColor: "#333",
    paddingVertical: 4,
    paddingHorizontal: 15,
    height: 300,
  },
});
const Picture = ({ photo, author, timestamp }) => {
  const photoTime = new Date(timestamp);
  const today = new Date();
  const diffTime = Math.abs(today - photoTime);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return (
    <View>
      <Image
        style={styles.picture}
        source={{ uri: photo }}
        alt={`Uploaded by ${author}`}
      />
      <Text>
        Posted {diffDays} days ago by {author}
      </Text>
    </View>
  );
};

export default Picture;

import { Dimensions, StyleSheet, View } from "react-native";
import Story from "./Story";
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  listStories: {
    width: windowWidth * 0.8,
    alignSelf: "center",
  },
});
const ListStories = ({ stories, onAddComment }) => {
  return (
    <View style={styles.listStories}>
      {stories.map((story) => (
        <Story
          key={story.id}
          storyId={story.id}
          photo={story.picture}
          author={story.username}
          timestamp={story.timestamp}
          comments={story.comments}
          onAddComment={onAddComment}
        />
      ))}
    </View>
  );
};

export default ListStories;

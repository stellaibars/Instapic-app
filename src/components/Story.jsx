import { StyleSheet, View } from "react-native";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import Picture from "./Picture";
const styles = StyleSheet.create({
  story: {
    marginBottom: 40,
  },
});
const Story = ({
  storyId,
  photo,
  author,
  timestamp,
  comments,
  onAddComment,
}) => {
  return (
    <View style={styles.story}>
      <Picture photo={photo} author={author} timestamp={timestamp} />

      {comments.map((comment) => (
        <Comment
          author={comment.username}
          text={comment.comment}
          key={comment.id}
        />
      ))}

      <CommentForm storyId={storyId} onAddComment={onAddComment} />
    </View>
  );
};

export default Story;

import { useState } from "react";
import { Button, TextInput, View } from "react-native";

const CommentForm = ({ storyId, onAddComment }) => {
  const [text, setText] = useState("Join the conversation");

  const onSubmit = (e) => {
    if (text) {
      onAddComment(storyId, text);
      setText("");
    }
  };

  return (
    <View onSubmit={onSubmit}>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <Button title="Say it" onPress={onSubmit} />
    </View>
  );
};

export default CommentForm;

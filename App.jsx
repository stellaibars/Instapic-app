import { useState, useEffect } from "react";
import { styles } from "./common/GlobalStyles";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Appbar from "./src/components/Appbar";
import ListStories from "./src/components/ListStories";
import SuggestedFollow from "./src/components/SuggestedFollow";
import { data } from "./data/data";

const App = () => {
  const [suggestedFollows, setSuggestedFollows] = useState([]);
  const [stories, setStories] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState("");

  useEffect(() => {
    setSuggestedFollows(data.suggestedFollows);
    setStories(data.stories); //inicialitza estat
    setUserLoggedIn(data.userLoggedIn);
  }), [];

  const addComment = (storyId, comment) => {
    setStories(
      stories.map((story) => {
        if (story.id === storyId) {
          return {
            ...story,
            comments: [
              ...story.comments,
              {
                id: Date.now().toString(),
                username: userLoggedIn,
                comment: comment,
                timestamp: new Date(),
              },
            ],
          };
        } else {
          return story;
        }
      })
    );
  };

  return (
    <View style={styles.appText}>
      <View>
        <Appbar />
      </View>

      <ScrollView>
        <Text
          style={{
            fontSize: 23,
            fontWeight: "bold",
            marginBottom: 20,
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Who to follow
        </Text>
        <SuggestedFollow users={suggestedFollows} />
        <Text
          style={{
            fontSize: 23,
            fontWeight: "bold",
            marginBottom: 20,
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Latest Stories
        </Text>
        <ListStories stories={stories} onAddComment={addComment} />
      </ScrollView>
    </View>
  );
};
export default App;

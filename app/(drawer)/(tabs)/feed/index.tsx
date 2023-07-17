import { View, StyleSheet, FlatList, Pressable } from "react-native";
import Tweet from "../../../../components/Tweet";
import tweets from "../../../../assets/data/tweets";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      <Pressable>
        <Link href="/new-tweet" asChild>
          <Entypo
            name="plus"
            size={24}
            color="white"
            style={styles.floatingButton}
          />
        </Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  floatingButton: {
    backgroundColor: "#1C9BF0",
    borderRadius: 25,
    padding: 15,
    position: "absolute",
    right: 15,
    bottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    overflow: "hidden",
  },
});

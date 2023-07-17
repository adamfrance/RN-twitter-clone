import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";

const user = {
  id: 'u8',
  username: 'Giovanni_Rossi',
  name: 'Giovanni Rossi',
  image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.1zoom.me%2Fb4451%2F251%2FSicily_Italy_Coast_Houses_Boats_Sea_Scopello_Crag_518296_1920x1080.jpg&f=1&nofb=1&ipt=9979ba5b1e74938cd6ae85517112d53c1361e25cf51a7dc299c8de3bc8a9face&ipo=images',
};

export default function NewTweet() {
  const [text, setText] = useState("");
  const router = useRouter();

  const onTweetPress = () => {
    console.warn("Posting the tweet: ", text);
    setText("");
    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href="../" style={{ fontSize: 18 }}>
            Cancel
          </Link>
          <Pressable onPress={onTweetPress} style={styles.button}>
            <Text style={styles.buttonText}>Tweet</Text>
          </Pressable>
        </View>

        <View style={styles.inputContainer}>
          <Image src={user.image} style={styles.images} />
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="What's happening"
            multiline
            numberOfLines={5}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1C9BF0",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: 600,
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: "row",
  },
  images: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
});

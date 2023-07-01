import { Stack, useRouter } from "expo-router";
import { Button, FlatList, Platform, StyleSheet, Text, View } from "react-native";
import Post from "../components/Post";
import { useEffect, useState } from "react";

export default function Posts() {
    const router = useRouter();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const response = await fetch("https://expo-post-app-default-rtdb.firebaseio.com/posts.json");
            const dataObj = await response.json();
            const postsArray = Object.keys(dataObj).map(key => ({ id: key, ...dataObj[key] })); // from object to array
            postsArray.sort((postA, postB) => postB.createdAt - postA.createdAt);
            setPosts(postsArray);
        }

        getPosts();
    }, []);

    function showCreateModal() {
        router.push("/create");
    }

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerRight: () => (
                        <Button
                            title="Add New"
                            color={Platform.OS === "ios" ? "#fff" : "#264c59"}
                            onPress={showCreateModal}
                        />
                    )
                }}
            />
            <FlatList data={posts} renderItem={({ item }) => <Post post={item} />} keyExtractor={item => item.id} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    title: {
        fontSize: 64,
        fontWeight: "bold"
    },
    list: {
        flex: 1
    }
});

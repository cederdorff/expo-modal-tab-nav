import { Stack, useFocusEffect, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Button, FlatList, RefreshControl, StyleSheet, View } from "react-native";
import PostListItem from "../components/PostListItem";

export default function Posts() {
    const router = useRouter();
    const [posts, setPosts] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getPosts();
    }, []);

    // Sometimes we want to run side-effects when a screen is focused.
    // https://reactnavigation.org/docs/use-focus-effect/
    useFocusEffect(
        // If you don't wrap your effect in React.useCallback, the effect will run every render if the screen is focused.
        useCallback(() => {
            getPosts();
        }, [])
    );

    async function getPosts() {
        const response = await fetch("https://expo-post-app-default-rtdb.firebaseio.com/posts.json");
        const dataObj = await response.json();
        const postsArray = Object.keys(dataObj).map(key => ({ id: key, ...dataObj[key] })); // from object to array
        postsArray.sort((postA, postB) => postB.createdAt - postA.createdAt);
        setPosts(postsArray);
    }

    function showCreateModal() {
        router.push("/post-modal");
    }

    async function handleRefresh() {
        setRefreshing(true);
        await getPosts();
        setTimeout(() => {
            setRefreshing(false);
        }, 500);
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
            <FlatList
                data={posts}
                renderItem={({ item }) => <PostListItem post={item} reload={getPosts} />}
                keyExtractor={item => item.id}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor="#264c59" />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

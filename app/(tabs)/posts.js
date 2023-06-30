import { Stack, useRouter } from "expo-router";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import Post from "../components/Post";

export default function Posts() {
    const router = useRouter();

    const posts = [
        {
            caption: "Beautiful sunset at the beach",
            createdAt: 1687215634430,
            image: "https://images.unsplash.com/photo-1566241832378-917a0f30db2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            id: "-M1Abcdefg123"
        },
        {
            caption: "Exploring the city streets of Aarhus",
            createdAt: 1687615634430,
            image: "https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            id: "-M1Xyz987pqr"
        },
        {
            caption: "Delicious food at the restaurant",
            createdAt: 1687015634430,
            image: "https://images.unsplash.com/photo-1548940740-204726a19be3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            id: "-M2Def456stu"
        },
        {
            caption: "Exploring the city center of Aarhus",
            createdAt: 1687615704430,
            image: "https://images.unsplash.com/photo-1612624629424-ddde915d3dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            uid: "-M3Ghi789vwx"
        }
    ];

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
            <View style={styles.main}>
                <Text style={styles.title}>Posts</Text>
                <Text style={styles.subtitle}>This is the first page of your app.</Text>
                {posts.map(post => (
                    <Post post={post} />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto"
    },
    title: {
        fontSize: 64,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D"
    }
});

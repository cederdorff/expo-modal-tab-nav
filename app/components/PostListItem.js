import { Image, StyleSheet, Text, View } from "react-native";

export default function PostListItem({ post }) {
    return (
        <View style={styles.postContainer}>
            <Image style={styles.postImage} source={{ uri: post.image }} />
            <Text style={styles.postCaption}>{post.caption}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    postContainer: {
        flex: 1,
        minHeight: 320,
        paddingBottom: 30,
        borderBottomColor: "#acc6c9",
        borderBottomWidth: 0.5
    },
    postImage: {
        aspectRatio: 1,
        flex: 1
    },
    postCaption: {
        fontSize: 22,
        padding: 15
    }
});

import { View, Image, Text, StyleSheet } from "react-native";

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
        paddingBottom: 40
    },
    postImage: {
        aspectRatio: 1,
        flex: 1
    },
    postCaption: {
        fontSize: 35
    }
});

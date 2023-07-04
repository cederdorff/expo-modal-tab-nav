import { Image, StyleSheet, Text, View } from "react-native";

export default function PostListItem({ post }) {
    function formatDate(timestamp) {
        const createdAt = new Date(timestamp);
        let month = createdAt.getMonth();
        let date = createdAt.getDate();

        month++; // index 0 is January
        month = month < 10 ? "0" + month : month;
        date = date < 10 ? "0" + date : date;

        // new Date(createdAt).toISOString().split("T")[0])

        return `${createdAt.getFullYear()}-${month}-${date}`;
    }

    return (
        <View style={styles.postContainer}>
            <Image style={styles.postImage} source={{ uri: post.image }} />
            <Text style={styles.postCaption}>{post.caption}</Text>
            <Text style={styles.postDate}>{formatDate(post.createdAt)}</Text>
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
    },
    postDate: {
        fontSize: 15,
        paddingHorizontal: 15
    }
});

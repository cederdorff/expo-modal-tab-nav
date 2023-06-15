import { StyleSheet, Text, View } from "react-native";

export default function Users() {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Users</Text>
                <Text style={styles.subtitle}>This is the second page of your app.</Text>
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

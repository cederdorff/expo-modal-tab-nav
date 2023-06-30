import { Stack, useRouter } from "expo-router";
import { StyleSheet, Text, View, Button, Platform } from "react-native";

export default function Posts() {
    const router = useRouter();

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

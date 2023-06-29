import { Stack, useRouter } from "expo-router";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Create() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Create New Post",
                    headerLeft: () => (
                        <Button
                            title="Close"
                            color={Platform.OS === "ios" ? "#fff" : "#264c59"}
                            onPress={() => router.back()}
                        />
                    )
                }}
            />
            <View style={styles.main}>
                <Text style={styles.title}>Create</Text>
                <Text style={styles.subtitle}>Create a new post.</Text>
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

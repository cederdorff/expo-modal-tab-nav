import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";

export default function AppLayout() {
    const router = useRouter();
    return (
        <>
            <StatusBar style="light" />

            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen
                    name="(modals)/create"
                    options={{
                        title: "Create New Post",
                        presentation: "modal",
                        headerTintColor: "#fff",
                        headerStyle: {
                            backgroundColor: "#264c59"
                        },
                        headerLeft: () => <Button title="Close" color="#fff" onPress={() => router.back()} />
                    }}
                />
            </Stack>
        </>
    );
}

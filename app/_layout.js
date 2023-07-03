import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function AppLayout() {
    return (
        <ActionSheetProvider>
            <>
                <StatusBar style="light" />

                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen
                        name="(modals)/post-modal"
                        options={{
                            presentation: "modal",
                            headerTintColor: "#fff",
                            headerStyle: {
                                backgroundColor: "#264c59"
                            }
                        }}
                    />
                </Stack>
            </>
        </ActionSheetProvider>
    );
}

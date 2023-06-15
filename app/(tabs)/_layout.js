import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { Button } from "react-native";

export default function TabLayout() {
    const router = useRouter();

    function showCreateModal() {
        router.push("/create");
    }

    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#264c59"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold"
                },
                tabBarStyle: {
                    backgroundColor: "#264c59"
                }
            }}>
            <Tabs.Screen
                name="posts"
                options={{
                    title: "Posts",
                    tabBarActiveTintColor: "#264c59",
                    tabBarInactiveTintColor: "#fff",
                    tabBarActiveBackgroundColor: "#acc6c9",
                    tabBarIcon: () => <Ionicons name="home" size={24} color="white" />,
                    headerRight: () => <Button title="Add New" color="#fff" onPress={showCreateModal} />
                }}
            />
            <Tabs.Screen
                name="users"
                options={{
                    title: "Users",
                    tabBarActiveTintColor: "#264c59",
                    tabBarInactiveTintColor: "#fff",
                    tabBarActiveBackgroundColor: "#acc6c9",
                    tabBarIcon: () => <Ionicons name="people" size={24} color="white" />
                }}
            />
        </Tabs>
    );
}

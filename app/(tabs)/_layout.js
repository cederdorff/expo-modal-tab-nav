import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
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
                    tabBarIcon: () => <Ionicons name="home" size={24} color="white" />
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

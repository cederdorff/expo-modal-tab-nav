import * as ImagePicker from "expo-image-picker";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { Button, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Create() {
    const router = useRouter();
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(
        "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
    );
    const API_URL = "https://expo-post-app-default-rtdb.firebaseio.com";

    function handleSave() {
        if (caption && image) {
            createPost();
        }
    }

    async function createPost() {
        const createdAt = new Date().getTime();
        const post = {
            caption: caption,
            image: image,
            createdAt: createdAt,
            uid: "fTs84KRoYw5pRZEWCq2Z"
        };
        const response = await fetch(`${API_URL}/posts.json`, { method: "POST", body: JSON.stringify(post) });
        if (response.ok) {
            router.back();
        }
    }

    async function chooseImage() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            base64: true,
            allowsEditing: true,
            quality: 0.3
        });

        if (!result.canceled) {
            const base64 = "data:image/jpeg;base64," + result.assets[0].base64;
            setImage(base64);
        }
    }

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
                    ),
                    headerRight: () => (
                        <Button
                            title="Create"
                            color={Platform.OS === "ios" ? "#fff" : "#264c59"}
                            onPress={handleSave}
                        />
                    )
                }}
            />
            <Text style={styles.label}>Image</Text>
            <TouchableOpacity onPress={chooseImage}>
                <Image
                    style={styles.image}
                    source={{
                        uri: image
                    }}
                />
            </TouchableOpacity>
            <Text style={styles.label}>Caption</Text>
            <TextInput style={styles.input} onChangeText={setCaption} value={caption} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#acc6c9"
    },
    main: {
        flex: 1
    },
    image: {
        aspectRatio: 1
    },
    label: {
        fontSize: 25,
        color: "#264c59",
        marginTop: 30,
        marginBottom: 5
    },
    input: {
        height: 50,
        padding: 10,
        backgroundColor: "#ffffff",
        borderRadius: 20
    }
});

import React, { useState } from "react";

import {
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
} from "react-native";

import { darkTheme, lightTheme } from "../constants/theme";

export default function NoteEditorScreen() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1517842645767-c639042777db",
          }}
          style={styles.headerImage}
        >
          <View style={styles.overlay}>
            <Pressable
              style={[
                styles.button,
                {
                  backgroundColor: "rgba(255,255,255,0.2)",
                },
              ]}
            >
              <Text style={styles.buttonText}>Back</Text>
            </Pressable>

            <Pressable
              style={[
                styles.button,
                {
                  backgroundColor: theme.primary,
                },
              ]}
            >
              <Text style={styles.buttonText}>Save</Text>
            </Pressable>
          </View>
        </ImageBackground>

        <View style={styles.editorContainer}>
          <TextInput
            placeholder="Title"
            placeholderTextColor={theme.subText}
            value={title}
            onChangeText={setTitle}
            style={[
              styles.titleInput,
              {
                color: theme.text,
                backgroundColor: theme.input,
                borderColor: theme.border,
              },
            ]}
          />

          <TextInput
            multiline
            textAlignVertical="top"
            placeholder="Start writing..."
            placeholderTextColor={theme.subText}
            value={content}
            onChangeText={setContent}
            style={[
              styles.contentInput,
              {
                color: theme.text,
                backgroundColor: theme.input,
                borderColor: theme.border,
              },
            ]}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerImage: {
    height: 220,
    justifyContent: "flex-end",
  },

  overlay: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 24,
  },

  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 14,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  editorContainer: {
    flex: 1,
    padding: 20,
  },

  titleInput: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },

  contentInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    fontSize: 16,
    lineHeight: 26,
  },
});

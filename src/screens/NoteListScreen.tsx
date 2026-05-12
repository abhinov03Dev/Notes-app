import React, { useMemo, useState } from "react";

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";

import NoteCard from "../components/Notecard";

import { darkTheme, lightTheme } from "../constants/theme";

const NOTES = [
  {
    id: "1",
    title: "Meeting Notes",
    content: "Discuss mobile UI improvements and responsive layouts.",
    date: "May 12",
  },
  {
    id: "2",
    title: "Ideas",
    content: "Build AI-powered learning platform.",
    date: "May 10",
  },
  {
    id: "3",
    title: "Shopping",
    content: "Milk, Bread, Coffee, Fruits",
    date: "May 08",
  },
];

export default function NotesListScreen() {
  const systemTheme = useColorScheme();

  const [darkMode, setDarkMode] = useState(systemTheme === "dark");

  const [search, setSearch] = useState("");

  const theme = darkMode ? darkTheme : lightTheme;

  const { width } = useWindowDimensions();

  const isTablet = width > 768;

  const filteredNotes = useMemo(() => {
    return NOTES.filter((note) =>
      note.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text
          style={[
            styles.heading,
            {
              color: theme.text,
            },
          ]}
        >
          My Notes
        </Text>

        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{
            false: "#D1D5DB",
            true: "#6366F1",
          }}
          thumbColor={darkMode ? "#FFFFFF" : "#FFFFFF"}
        />
      </View>

      {/* Search */}
      <TextInput
        placeholder="Search notes..."
        placeholderTextColor={theme.subText}
        value={search}
        onChangeText={setSearch}
        style={[
          styles.searchInput,
          {
            backgroundColor: theme.input,
            borderColor: theme.border,
            color: theme.text,
          },
        ]}
      />

      {/* Notes List */}
      <FlatList
        data={filteredNotes}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        numColumns={isTablet ? 2 : 1}
        columnWrapperStyle={isTablet ? styles.columnWrapper : undefined}
        renderItem={({ item }) => (
          <View style={isTablet ? styles.tabletCard : styles.mobileCard}>
            <NoteCard
              title={item.title}
              content={item.content}
              date={item.date}
              theme={theme}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  heading: {
    fontSize: 32,
    fontWeight: "800",
  },

  searchInput: {
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 20,
    fontSize: 16,
  },

  listContainer: {
    paddingBottom: 30,
  },

  columnWrapper: {
    justifyContent: "space-between",
  },

  tabletCard: {
    width: "48%",
  },

  mobileCard: {
    width: "100%",
  },
});

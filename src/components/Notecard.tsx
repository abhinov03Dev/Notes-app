import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  title: string;
  content: string;
  date: string;
  theme: any;
};

export default function NoteCard({ title, content, date, theme }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: theme.card,
          opacity: pressed ? 0.85 : 1,
        },
      ]}
    >
      <Text style={[styles.title, { color: theme.text }]}>{title}</Text>

      <Text
        numberOfLines={2}
        style={[styles.content, { color: theme.subText }]}
      >
        {content}
      </Text>

      <Text style={[styles.date, { color: theme.subText }]}>{date}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },

  content: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 12,
  },

  date: {
    fontSize: 12,
  },
});

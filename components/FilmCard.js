import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function FilmCard({ film }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: film.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{film.title}</Text>
        <Text style={styles.subtitle}>{film.original_title}</Text>
        <Text style={styles.year}>Lançado em {film.release_date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f1f1f",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  image: {
    width: "100%",
    height: screenWidth * 0.6,
    resizeMode: "cover",
  },
  info: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 16,
    color: "#bbbbbb",
    marginTop: 4,
    fontStyle: "italic",
  },
  year: {
    fontSize: 14,
    color: "#ff5555",
    marginTop: 8,
  },
});

import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated"; // ✅ Importa corretamente!

const screenWidth = Dimensions.get("window").width;

export default function SkeletonCard() {
  return (
    <MotiView
      from={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{
        loop: true,
        type: "timing",
        duration: 800,
        delay: 300,
        easing: Easing.inOut(Easing.ease), // ✅ Usa o easing certo
      }}
      style={styles.card}
    >
      <View style={styles.image} />
      <View style={styles.textBlock} />
      <View style={[styles.textBlock, { width: "60%" }]} />
    </MotiView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f1f1f",
    borderRadius: 16,
    marginBottom: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  image: {
    width: "100%",
    height: screenWidth * 0.6,
    backgroundColor: "#2b2b2b",
    borderRadius: 12,
  },
  textBlock: {
    height: 16,
    backgroundColor: "#333",
    borderRadius: 8,
    marginTop: 12,
    width: "80%",
  },
});

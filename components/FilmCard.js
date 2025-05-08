import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

// Pegamos a largura da tela para ajustar a altura da imagem proporcionalmente
const screenWidth = Dimensions.get("window").width;

// O componente recebe um filme (film) como propriedade
export default function FilmCard({ film }) {
  return (
    <View style={styles.card}>
      {/* Imagem do filme (pôster vertical) */}
      <Image source={{ uri: film.image }} style={styles.image} />

      {/* Bloco com as informações do filme */}
      <View style={styles.info}>
        {/* Título principal em inglês */}
        <Text style={styles.title}>
          {film.title ?? "Título não disponível"}
        </Text>

        {/* Título original em japonês */}
        <Text style={styles.subtitle}>
          {film.original_title ?? "Título original não disponível"}
        </Text>

        {/* Título romanizado (em alfabeto latino) */}
        <Text style={styles.subtitleSmall}>
          {film.original_title_romanised ?? "Romanização não disponível"}
        </Text>

        {/* Descrição da história */}
        <Text style={styles.text}>
          📝 {film.description ?? "Descrição não disponível"}
        </Text>

        {/* Diretor e produtor */}
        <Text style={styles.text}>
          🎬 Diretor: {film.director ?? "Não informado"}
        </Text>
        <Text style={styles.text}>
          👤 Produtor: {film.producer ?? "Não informado"}
        </Text>

        {/* Data de lançamento e duração */}
        <Text style={styles.text}>
          📅 Lançamento: {film.release_date ?? "Não informado"}
        </Text>
        <Text style={styles.text}>
          ⏱️ Duração: {film.running_time ?? "Não informado"} min
        </Text>

        {/* Nota no Rotten Tomatoes */}
        <Text style={styles.text}>
          ⭐ Nota: {film.rt_score ?? "Não informado"}/100
        </Text>
      </View>
    </View>
  );
}

// Estilo visual do card e seus elementos
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f1f1f", // Fundo escuro do card
    borderRadius: 16, // Cantos arredondados
    overflow: "hidden", // Garante que a imagem respeite o card
    marginBottom: 20, // Espaço entre os cards

    // Sombra para profundidade
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4, // Android
  },
  image: {
    width: "100%", 
    height: screenWidth * 0.6, // Altura proporcional à largura da tela
    resizeMode: "cover", // Redimensiona para cobrir a área
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
  text: {
    fontSize: 14,
    color: "#e0e0e0",
    marginTop: 6,
    textAlign: "justify",
  },
  subtitleSmall: {
    fontSize: 14,
    color: "#bbbbbb",
    marginTop: 2,
    fontStyle: "italic",
  },
});

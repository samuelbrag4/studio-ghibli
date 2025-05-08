import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions, Pressable, Linking } from "react-native";

// Pegamos a largura da tela para ajustar a altura da imagem proporcionalmente
const screenWidth = Dimensions.get("window").width;

// O componente recebe uma receita (recipe) como propriedade
export default function RecipeCard({ recipe }) {
  // Estado para controlar se o cartão está pressionado
  const [isPressed, setIsPressed] = React.useState(false);
  // Estado para controlar se mostra o modo de preparo completo
  const [showInstructions, setShowInstructions] = React.useState(false);
  
  // Função para listar os ingredientes e medidas
  const getIngredients = () => {
    const ingredients = [];
    
    // A API armazena ingredientes de 1 a 20
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      
      // Se tiver um ingrediente e não for vazio
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`• ${measure} ${ingredient}`);
      }
    }
    
    // Retorna lista de ingredientes limitada a 5 para exibição no card
    return ingredients.slice(0, 5);
  };

  // Função para limitar o texto das instruções
  const getInstructions = () => {
    if (!recipe.strInstructions) return "Instruções não disponíveis";
    
    // Se showInstructions for true, mostra tudo, senão limita a 100 caracteres
    if (showInstructions) {
      return recipe.strInstructions;
    } else {
      const shortText = recipe.strInstructions.substring(0, 100);
      return recipe.strInstructions.length > 100 
        ? shortText + "..." 
        : shortText;
    }
  };

  // Função para traduzir categorias e áreas comuns
  const simpleTranslate = (text) => {
    const translationsMap = {
      "Dessert": "Sobremesa",
      "Side": "Acompanhamento",
      "Beef": "Carne bovina",
      "Chicken": "Frango",
      "Seafood": "Frutos do mar",
      "Vegetarian": "Vegetariano",
      "Breakfast": "Café da manhã",
      "Pasta": "Massa",
      "Pork": "Porco",
      "British": "Britânica",
      "Italian": "Italiana",
      "American": "Americana",
      "Chinese": "Chinesa",
      "Japanese": "Japonesa",
      "Turkish": "Turca",
      "Croatian": "Croata",
      "Tunisian": "Tunisiana",
      "Filipino": "Filipina",
      "Spanish": "Espanhola",
      "Egyptian": "Egípcia"
    };
    
    return translationsMap[text] || text;
  };

  // Função para abrir o vídeo no YouTube
  const openYoutubeVideo = () => {
    if (recipe.strYoutube) {
      Linking.openURL(recipe.strYoutube)
        .catch(err => console.error("Não foi possível abrir o YouTube:", err));
    }
  };

  return (
    <Pressable 
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[
        styles.card, 
        isPressed && styles.cardPressed
      ]}
    >
      {/* Imagem da receita */}
      <Image 
        source={{ uri: recipe.strMealThumb }} 
        style={styles.image}
        resizeMode="cover"
      />

      {/* Bloco com as informações da receita */}
      <View style={styles.info}>
        {/* Nome da receita */}
        <Text style={styles.title}>
          {recipe.strMeal ?? "Receita não disponível"}
        </Text>

        {/* Categoria e origem */}
        <View style={styles.tags}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>
              {simpleTranslate(recipe.strCategory)}
            </Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>
              {simpleTranslate(recipe.strArea)}
            </Text>
          </View>
        </View>

        {/* Ingredientes principais */}
        <Text style={styles.subtitle}>Ingredientes principais:</Text>
        {getIngredients().map((item, index) => (
          <Text key={index} style={styles.ingredientText}>
            {item}
          </Text>
        ))}
        
        {/* Modo de preparo */}
        <Text style={[styles.subtitle, {marginTop: 12}]}>Modo de preparo:</Text>
        <Text style={styles.instructionsText}>
          {getInstructions()}
        </Text>
        
        {/* Botão para mostrar mais/menos */}
        {recipe.strInstructions && recipe.strInstructions.length > 100 && (
          <Pressable
            onPress={() => setShowInstructions(!showInstructions)}
            style={styles.toggleButton}
          >
            <Text style={styles.toggleButtonText}>
              {showInstructions ? "Mostrar menos" : "Mostrar mais"}
            </Text>
          </Pressable>
        )}
        
        {/* Link para vídeo, se disponível */}
        {recipe.strYoutube && (
          <Pressable
            onPress={openYoutubeVideo}
            style={styles.videoButton}
          >
            <View style={styles.videoInfo}>
              <Text style={styles.videoText}>
                🎬 Assistir vídeo no YouTube
              </Text>
            </View>
          </Pressable>
        )}
      </View>
    </Pressable>
  );
}

// Estilo visual do card e seus elementos
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    overflow: "hidden", // Garante que a imagem respeite o card
    marginBottom: 20, // Espaço entre os cards
    
    // Sombra para profundidade
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4, // Android
  },
  cardPressed: {
    shadowOpacity: 0.4, // Aumenta a sombra ao pressionar
    shadowRadius: 8,
    elevation: 6, // Aumenta a sombra no Android
    transform: [{ scale: 0.98 }], // Diminui levemente o tamanho
  },
  image: {
    width: "100%", 
    height: screenWidth * 0.6, // Altura proporcional à largura da tela
  },
  info: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#8b5a2b", // Marrom para tema de culinária
    marginBottom: 8,
  },
  tags: {
    flexDirection: "row",
    marginBottom: 12,
  },
  tag: {
    backgroundColor: "#f3d5b5", // Bege claro
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 8,
  },
  tagText: {
    color: "#8b5a2b",
    fontSize: 12,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#8b5a2b",
    marginBottom: 6,
  },
  ingredientText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 3,
  },
  instructionsText: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
    textAlign: "justify"
  },
  toggleButton: {
    marginTop: 8,
    alignSelf: "flex-start",  // Alinha à esquerda
  },
  toggleButtonText: {
    color: "#d35400",  // Laranja para destacar
    fontWeight: "600",
    fontSize: 14,
  },
  videoButton: {
    marginTop: 12,
  },
  videoInfo: {
    padding: 10,
    backgroundColor: "#f8f4e3",
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#e74c3c",
  },
  videoText: {
    color: "#c0392b",
    fontWeight: "500",
  }
});
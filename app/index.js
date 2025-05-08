// Importa dois hooks do React:
// - useEffect: para rodar algo quando a tela carregar
// - useState: para guardar dados e controlar o estado da tela
import { useEffect, useState } from "react";

// Importa componentes da interface do React Native
import { View, FlatList, SafeAreaView, StyleSheet, Text } from "react-native";

// Importa a biblioteca axios para buscar dados da internet
import axios from "axios";

// Importa o componente que mostra o card com dados da receita
import RecipeCard from "../components/RecipeCard";

// Importa o componente que mostra o "esqueleto" animado de carregamento
import SkeletonCard from "../components/SkeletonCard";

// Função principal que representa a tela inicial
export default function Home() {
  // Cria um estado chamado recipes para guardar a lista de receitas
  const [recipes, setRecipes] = useState([]);

  // Cria um estado chamado loading para saber se os dados ainda estão carregando
  const [loading, setLoading] = useState(true);

  // useEffect é executado automaticamente assim que a tela abre
  useEffect(() => {
    // Espera 3 segundos para simular o carregamento e mostrar o SkeletonCard
    setTimeout(() => {
      // Faz uma requisição GET na API do TheMealDB para receitas aleatórias
      // Você pode alterar para outras rotas da API conforme necessário
      axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        .then((res) => setRecipes(res.data.meals)) // Se der certo, guarda os dados no estado "recipes"
        .catch((err) => console.error(err)) // Se der erro, mostra no console
        .finally(() => setLoading(false)); // Quando terminar, muda "loading" para false
    }, 3000); // Tempo de espera: 3 segundos
  }, []); // Executa só uma vez, quando a tela abrir

  return (
    // SafeAreaView evita que o conteúdo fique atrás da barra de status (notch)
    <SafeAreaView style={styles.container}>

      {/* Título da tela */}
      <Text style={styles.header}>🍲 Receitas Deliciosas</Text>

      {/* Se estiver carregando, mostra os Skeletons */}
      {loading ? (
        <FlatList
          data={[1, 2, 3, 4, 5]} // Lista fictícia para mostrar 5 Skeletons
          keyExtractor={(item) => item.toString()} // Transforma o item (número) em texto
          renderItem={() => <SkeletonCard />} // Renderiza um card de esqueleto
          contentContainerStyle={styles.list} // Aplica o estilo na lista
        />
      ) : (
        // Se já carregou os dados, mostra as receitas reais
        <FlatList
          data={recipes} // Lista vinda da API
          keyExtractor={(item) => item.idMeal} // Usa o ID da receita como chave
          renderItem={({ item }) => <RecipeCard recipe={item} />} // Renderiza um RecipeCard passando a receita
          contentContainerStyle={styles.list} // Aplica o estilo na lista
        />
      )}
    </SafeAreaView>
  );
}

// Estilos visuais para os elementos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    backgroundColor: "#f9f5eb", // Fundo claro/amarelado para tema de culinária
  },
  header: {
    fontSize: 28, // Tamanho do título
    fontWeight: "bold", // Negrito
    color: "#8b5a2b", // Marrom para tema de culinária
    textAlign: "center", // Centralizado
    marginVertical: 16, // Espaço acima e abaixo
  },
  list: {
    paddingHorizontal: 16, // Espaço nas laterais
    paddingBottom: 20, // Espaço embaixo da lista
  },
});
// app/index.tsx (Atualizado para Loading em Tela Cheia)
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
// 👈 Importado o novo componente de loading em tela cheia
import FullScreenLoading from "./components/FullScreenLoading";
const { width } = Dimensions.get("window");

export default function Home() {
  const router = useRouter();

  // 👈 Estado ÚNICO para controlar o loading de TELA CHEIA
  const [isProcessing, setIsProcessing] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(""); // Mensagem dinâmica

  // Função que simula o Login e o carregamento
  const handleLogin = () => {
    setLoadingMessage("Efetuando login..."); // Define a mensagem
    setIsProcessing(true); // Ativa o overlay

    // Simula uma chamada de API de 2 segundos
    setTimeout(() => {
      setIsProcessing(false); // Desativa o overlay
      router.push("/pages/login");
    }, 2000);
  };

  // Função que simula o Cadastro e o carregamento
  const handleRegister = () => {
    setLoadingMessage("Criando sua conta..."); // Define a mensagem
    setIsProcessing(true); // Ativa o overlay

    // Simula uma chamada de API de 3 segundos
    setTimeout(() => {
      setIsProcessing(false); // Desativa o overlay
      router.push("/pages/cadastro");
    }, 3000);
  };

  return (
    // ⚠️ Importante: O container principal precisa ter flex: 1
    <View style={styles.container}>
      <StatusBar backgroundColor="#4c4c8f" barStyle="light-content" />

      {/* Header e Conteúdo da Tela */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>BarbApp</Text>
      </View>

      <Image
        style={styles.heroImage}
        source={{
          uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu_n7TFDKfvkpVLt16rqmk1D0SRtwca02YkhQL3rb22gac0xpbcJ4UHOg4BuGtfC_UOA_sQrhHtQCbAlHaCTCVaLq2Vj8F-DC40Zhq1yJQRL_5F9-aCbUOslx0ECuhMKseiP4ZBmJB0WwhenBoRFwemglecummNjv5IrNOKudxsazOxVER4R9BZFPuxzH_HCq_g4UzHkS-PEHT90y-NG76VXSZMvLMbj6kglYwNOoesntJKZnuwp5NlCuYukgQnM0ofX9jKX2Fmfk",
        }}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Agendamento de Barbearia</Text>
        <Text style={styles.subtitle}>
          Encontre e agende seu próximo corte com facilidade ✂️
        </Text>

        <View style={styles.buttonContainer}>
          {/* BOTÃO DE LOGIN */}
          <Pressable
            style={[
              styles.button,
              isProcessing && styles.buttonDisabled, // Desabilita visualmente
            ]}
            onPress={handleLogin}
            disabled={isProcessing} // Desabilita funcionalmente
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>

          {/* BOTÃO DE CADASTRO */}
          <Pressable
            style={[
              styles.button,
              styles.secondaryButton,
              isProcessing && styles.buttonDisabled, // Desabilita visualmente
            ]}
            onPress={handleRegister}
            disabled={isProcessing} // Desabilita funcionalmente
          >
            <Text style={styles.secondaryText}>Cadastrar-se</Text>
          </Pressable>
        </View>
      </View>

      {/* 👈 COMPONENTE DE LOADING DE TELA CHEIA (Renderizado por último) */}
      <FullScreenLoading isVisible={isProcessing} message={loadingMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Crucial para o FullScreenLoading funcionar corretamente
    backgroundColor: "#221610",
  },
  header: {
    height: 80,
    backgroundColor: "#1D1D2E",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  heroImage: {
    width: 450,
    height: width * 0.9,
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 10,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#EEE",
    textAlign: "center",
    marginBottom: 30,
  },
  buttonContainer: {
    width: "100%",
    gap: 15,
  },
  button: {
    backgroundColor: "#4c4c8f",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#4c4c8f",
  },
  secondaryText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonDisabled: {
    opacity: 0.5, // Diminui a opacidade quando desabilitado
  },
});

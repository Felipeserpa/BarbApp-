// components/FullScreenLoading.tsx
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface FullScreenLoadingProps {
  isVisible: boolean;
  message?: string;
}

/**
 * Um overlay de carregamento em tela cheia.
 */
const FullScreenLoading: React.FC<FullScreenLoadingProps> = ({
  isVisible,
  message = "Processando...",
}) => {
  if (!isVisible) {
    return null; // Não renderiza nada se não estiver visível
  }

  return (
    // Usa StyleSheet.absoluteFillObject para cobrir toda a tela/container
    <View style={styles.overlay}>
      <View style={styles.spinnerBox}>
        <ActivityIndicator size="large" color="#4c4c8f" />
        <Text style={styles.messageText}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    // Garante que o overlay cubra TUDO
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Fundo semitransparente escuro
    justifyContent: "center",
    alignItems: "center",
    // O zIndex é crucial para garantir que ele fique por cima de todo o resto
    zIndex: 9999,
  },
  spinnerBox: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 150,
  },
  messageText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
});

export default FullScreenLoading;

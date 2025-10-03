// app/index.tsx
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4c4c8f" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>BarbApp</Text>
      </View>

      {/* Hero Image */}
      <Image
        style={styles.heroImage}
        source={{
          uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu_n7TFDKfvkpVLt16rqmk1D0SRtwca02YkhQL3rb22gac0xpbcJ4UHOg4BuGtfC_UOA_sQrhHtQCbAlHaCTCVaLq2Vj8F-DC40Zhq1yJQRL_5F9-aCbUOslx0ECuhMKseiP4ZBmJB0WwhenBoRFwemglecummNjv5IrNOKudxsazOxVER4R9BZFPuxzH_HCq_g4UzHkS-PEHT90y-NG76VXSZMvLMbj6kglYwNOoesntJKZnuwp5NlCuYukgQnM0ofX9jKX2Fmfk",
        }}
      />

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Agendamento de Barbearia</Text>
        <Text style={styles.subtitle}>
          Encontre e agende seu próximo corte com facilidade ✂️
        </Text>

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => router.push("/pages/login")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.secondaryButton]}
            onPress={() => router.push("/pages/register")}
          >
            <Text style={styles.secondaryText}>Cadastrar-se</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

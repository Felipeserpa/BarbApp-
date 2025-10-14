import React from "react";
import {
  Dimensions,
  GestureResponderEvent,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from "expo-router";
const { width, height } = Dimensions.get("window");

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const router = useRouter();

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Senha:", password);
    // 🔐 lógica de autenticação aqui

    router.replace("/agenda"); // Navega para a tela principal após o login

    const handleForgotPassword = () => {
      console.log("Recuperar senha");
      // 🔄 navegação ou lógica de recuperação
    };
  };
  function handleForgotPassword(event: GestureResponderEvent): void {
    throw new Error("Function not implemented.");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="light-content" backgroundColor="#221610" />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* 🖼️ Imagem de topo */}
        <Image
          style={styles.heroImage}
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu_n7TFDKfvkpVLt16rqmk1D0SRtwca02YkhQL3rb22gac0xpbcJ4UHOg4BuGtfC_UOA_sQrhHtQCbAlHaCTCVaLq2Vj8F-DC40Zhq1yJQRL_5F9-aCbUOslx0ECuhMKseiP4ZBmJB0WwhenBoRFwemglecummNjv5IrNOKudxsazOxVER4R9BZFPuxzH_HCq_g4UzHkS-PEHT90y-NG76VXSZMvLMbj6kglYwNOoesntJKZnuwp5NlCuYukgQnM0ofX9jKX2Fmfk",
          }}
          resizeMode="cover"
        />

        {/* 📦 Conteúdo */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>Faça Login na sua conta</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={handleForgotPassword}
          >
            <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#221610",
  },
  heroImage: {
    width: width,
    height: height * 0.4, // ✅ ocupa o topo da tela
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  formContainer: {
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#3e3e42",
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    color: "#FFF",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: "#FF7F50",
    fontSize: 14,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#FF7F50",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
});

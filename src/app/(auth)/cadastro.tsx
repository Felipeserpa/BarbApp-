import { router } from "expo-router";
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

// Obtém dimensões da tela
const { width, height } = Dimensions.get("window");

export default function Cadastro() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleForgotPassword = () => {
    console.log("Recuperar senha");
    // 🔄 navegação ou lógica de recuperação
  };

  function handleLogin(event: GestureResponderEvent): void {
    throw new Error("Function not implemented.");
  }

  return (
    <KeyboardAvoidingView
      style={Styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="light-content" backgroundColor="#221610" />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          style={{ width: width, height: height * 0.3 }}
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu_n7TFDKfvkpVLt16rqmk1D0SRtwca02YkhQL3rb22gac0xpbcJ4UHOg4BuGtfC_UOA_sQrhHtQCbAlHaCTCVaLq2Vj8F-DC40Zhq1yJQRL_5F9-aCbUOslx0ECuhMKseiP4ZBmJB0WwhenBoRFwemglecummNjv5IrNOKudxsazOxVER4R9BZFPuxzH_HCq_g4UzHkS-PEHT90y-NG76VXSZMvLMbj6kglYwNOoesntJKZnuwp5NlCuYukgQnM0ofX9jKX2Fmfk",
          }}
          resizeMode="cover"
        />
        <View style={Styles.formContainer}>
          <Text style={Styles.title}>Faça Cadastro na sua conta</Text>

          {/* Campos de entrada e botões de cadastro aqui */}
          <TextInput
            style={Styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#aaa"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />

          <TextInput
            style={Styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={Styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={Styles.forgotPassword}
            onPress={handleForgotPassword}
          >
            <Text style={{ color: "#FFF", marginTop: 10 }}>
              Já tem uma conta?{" "}
              <Text
                style={{ color: "#FF7F50" }}
                onPress={() => {
                  router.push("/login");
                  /* navegação para login */
                }}
              >
                Faça login
              </Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.button} onPress={handleLogin}>
            <Text style={Styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#221610",
  },
  formContainer: {
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
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

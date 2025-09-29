// index.tsx
import { useRouter } from "expo-router";
import { StatusBar, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* StatusBar para mudar a cor da barra de notificação */}
      <StatusBar backgroundColor="#1D1D2E" barStyle="light-content" />

      {/* Header customizado */}
      <View
        style={{
          height: 80,
          backgroundColor: "#1D1D2E",
          justifyContent: "center",
          paddingHorizontal: 20,
          paddingTop: 30,
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 24, fontWeight: "bold" }}>
          Home
        </Text>
      </View>

      {/* Conteúdo da tela */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Bem-vindo à Home!</Text>
      </View>
    </View>
  );
}

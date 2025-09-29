// index.tsx
import { useRouter } from "expo-router";
import { Button, Image, StatusBar, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#221610" }}>
      {/* StatusBar para mudar a cor da barra de notificação */}
      <StatusBar backgroundColor="#4c4c8f" barStyle="light-content" />

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
      <Image
        style={{
          width: 410,
          height: 410,
          alignSelf: "center",
          //marginTop: 50,
          //marginBottom: 20,
        }}
        source={{
          uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu_n7TFDKfvkpVLt16rqmk1D0SRtwca02YkhQL3rb22gac0xpbcJ4UHOg4BuGtfC_UOA_sQrhHtQCbAlHaCTCVaLq2Vj8F-DC40Zhq1yJQRL_5F9-aCbUOslx0ECuhMKseiP4ZBmJB0WwhenBoRFwemglecummNjv5IrNOKudxsazOxVER4R9BZFPuxzH_HCq_g4UzHkS-PEHT90y-NG76VXSZMvLMbj6kglYwNOoesntJKZnuwp5NlCuYukgQnM0ofX9jKX2Fmfk",
        }}
      />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 10,
            color: "#FFF",
          }}
        >
          Agendamento de Barbearia
        </Text>

        <Text style={{ fontSize: 16, color: "#FFF", textAlign: "center" }}>
          Encontre e agende seu próximo corte com facilidade{" "}
        </Text>
        <View>
          <Button title="Login" />
          <Button title="Cadastra" />
        </View>
      </View>
    </View>
  );
}

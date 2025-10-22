import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type CalendarPickerProps = {
  onChange: (date: Date | null) => void;
};

const CalendarPicker: React.FC<CalendarPickerProps> = ({ onChange }) => {
  // Simple placeholder picker: sets the current date/time when pressed.
  // Replace with a full date/time picker implementation as needed.
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#33221A",
        padding: 12,
        borderRadius: 8,
        marginTop: 8,
      }}
      onPress={() => onChange(new Date())}
    >
      <Text style={{ color: "#FFF", textAlign: "center" }}>
        Selecionar data/hora (Agora)
      </Text>
    </TouchableOpacity>
  );
};

export default function Agendamento() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [barbeiroSelecionado, setBarbeiroSelecionado] = useState<string>("");
  const [servicoSelecionado, setServicoSelecionado] = useState<string>("");

  const barbeiros = [
    { id: "1", nome: "Rafael" },
    { id: "2", nome: "Felipe" },
  ];

  const handleAgendar = () => {
    if (!servicoSelecionado || !barbeiroSelecionado || !selectedDate) {
      Alert.alert("Atenção", "Preencha todos os campos antes de agendar!");
      return;
    }

    const barbeiroNome =
      barbeiros.find((b) => b.id === barbeiroSelecionado)?.nome || "";

    Alert.alert(
      "✅ Agendamento Confirmado!",
      `Barbeiro: ${barbeiroNome}\nServiço: ${servicoSelecionado}\nData: ${selectedDate.toLocaleDateString()}\nHora: ${selectedDate.toLocaleTimeString()}`
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#221610" />
      <Text style={styles.titulo}>Agendar Serviço</Text>

      {/* Picker de Serviços */}
      <Text style={styles.label}>Selecione o Serviço</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={servicoSelecionado}
          onValueChange={(itemValue) => setServicoSelecionado(itemValue)}
          style={styles.picker}
          dropdownIconColor="#FFF"
        >
          <Picker.Item label="Selecione um Serviço" value="" />
          <Picker.Item label="Corte de Cabelo" value="Corte de Cabelo" />
          <Picker.Item label="Barba" value="Barba" />
          <Picker.Item label="Corte e Barba" value="Corte e Barba" />
        </Picker>
      </View>

      {/* Picker de Barbeiro */}
      <Text style={styles.label}>Escolha o Barbeiro</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={barbeiroSelecionado}
          onValueChange={(itemValue) => setBarbeiroSelecionado(itemValue)}
          style={styles.picker}
          dropdownIconColor="#FFF"
        >
          <Picker.Item label="Selecione um barbeiro..." value="" />
          {barbeiros.map((barbeiro) => (
            <Picker.Item
              key={barbeiro.id}
              label={barbeiro.nome}
              value={barbeiro.id}
            />
          ))}
        </Picker>
      </View>

      {/* Seletor de Data e Hora */}
      <Text style={styles.label}>Data e Hora</Text>
      <CalendarPicker onChange={(date) => setSelectedDate(date)} />

      {selectedDate && (
        <Text style={styles.selectedText}>
          {`Selecionado: ${selectedDate.toLocaleDateString()} - ${selectedDate.toLocaleTimeString()}`}
        </Text>
      )}

      {/* Botão de Agendar */}
      <TouchableOpacity style={styles.botao} onPress={handleAgendar}>
        <Text style={styles.botaoTexto}>Confirmar Agendamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#221610" },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginBottom: 20,
  },

  label: {
    fontSize: 18,
    color: "#FFF",
    marginTop: 15,
    marginBottom: 5,
  },

  pickerContainer: {
    backgroundColor: "#33221A",
    borderRadius: 8,
    overflow: "hidden",
  },

  picker: {
    color: "#FFF",
    height: 50,
    width: "100%",
  },

  selectedText: {
    color: "#FFF",
    marginTop: 10,
    textAlign: "center",
  },

  botao: {
    backgroundColor: "#C29A6B",
    padding: 14,
    borderRadius: 8,
    marginTop: 25,
    alignItems: "center",
  },

  botaoTexto: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  Alert,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// ====================================================================
// 1. Componente CalendarPicker (Personalizado)
// ====================================================================

type CalendarPickerProps = {
  onSelectDate: (date: string) => void;
  selectedDate: string | null;
};

const CalendarPicker: React.FC<CalendarPickerProps> = ({
  onSelectDate,
  selectedDate,
}) => {
  const today = new Date();
  const days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(today.getDate() + i);
    const iso = d.toISOString().slice(0, 10); // YYYY-MM-DD
    const label = d.toLocaleDateString("pt-BR", {
      weekday: "short", // Seg, Ter, Qua...
      day: "2-digit", // 01, 02, ...
    });
    return { iso, label };
  });

  return (
    <View style={pickerStyles.card}>
      <View style={pickerStyles.daysContainer}>
        {days.map((day) => {
          const isSelected = day.iso === selectedDate;
          return (
            <TouchableOpacity
              key={day.iso}
              onPress={() => onSelectDate(day.iso)}
              style={[
                pickerStyles.dayButton,
                isSelected ? pickerStyles.dayButtonSelected : null,
              ]}
            >
              <Text
                style={[
                  pickerStyles.dayText,
                  isSelected ? pickerStyles.dayTextSelected : null,
                ]}
              >
                {day.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

// ====================================================================
// 2. Componente Agendamento (Principal)
// ====================================================================

export default function Agendamento() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedHour, setSelectedHour] = useState<string>("");
  const [barbeiroSelecionado, setBarbeiroSelecionado] = useState<string>("");
  const [servicoSelecionado, setServicoSelecionado] = useState<string>("");

  const barbeiros = [
    { id: "1", nome: "Rafael" },
    { id: "2", nome: "Felipe" },
  ];

  const servicos = [
    { label: "Corte de Cabelo", value: "Corte de Cabelo" },
    { label: "Barba", value: "Barba" },
    { label: "Corte e Barba", value: "Corte e Barba" },
  ];

  const horarios = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
  ];

  const handleAgendar = () => {
    if (
      !servicoSelecionado ||
      !barbeiroSelecionado ||
      !selectedDate ||
      !selectedHour
    ) {
      Alert.alert("Atenção", "Preencha todos os campos antes de agendar!");
      return;
    }

    const barbeiroNome =
      barbeiros.find((b) => b.id === barbeiroSelecionado)?.nome || "";

    Alert.alert(
      "✅ Agendamento Confirmado!",
      `Barbeiro: ${barbeiroNome}\nServiço: ${servicoSelecionado}\nData: ${selectedDate}\nHora: ${selectedHour}`
    );
  };

  // Estilo específico para o texto do Picker.Item no iOS
  const iosPickerItemStyle = Platform.OS === "ios" ? { color: "#FFF" } : {};
  // Estilo do Picker no iOS para definir a cor do texto padrão (se necessário)
  const iosPickerStyle = Platform.OS === "ios" ? { color: "#FFF" } : {};

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#221610" />
      <Text style={styles.titulo}>Agendar Serviço</Text>

      {/* Picker de Serviço */}
      <Text style={styles.label}>Selecione o Serviço</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={servicoSelecionado}
          onValueChange={(itemValue) => setServicoSelecionado(itemValue)}
          style={[styles.picker, iosPickerStyle]}
          dropdownIconColor="#FFF"
          itemStyle={iosPickerItemStyle} // Aplica o estilo do item no iOS
        >
          <Picker.Item
            label="Selecione um Serviço"
            value=""
            style={iosPickerItemStyle}
          />
          {servicos.map((servico, index) => (
            <Picker.Item
              key={index}
              label={servico.label}
              value={servico.value}
              style={iosPickerItemStyle} // Aplica o estilo do item no iOS
            />
          ))}
        </Picker>
      </View>

      {/* Picker de Barbeiro */}
      <Text style={styles.label}>Escolha o Barbeiro</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={barbeiroSelecionado}
          onValueChange={(itemValue) => setBarbeiroSelecionado(itemValue)}
          style={[styles.picker, iosPickerStyle]}
          dropdownIconColor="#FFF"
          itemStyle={iosPickerItemStyle} // Aplica o estilo do item no iOS
        >
          <Picker.Item
            label="Selecione um barbeiro"
            value=""
            style={iosPickerItemStyle}
          />
          {barbeiros.map((barbeiro) => (
            <Picker.Item
              key={barbeiro.id}
              label={barbeiro.nome}
              value={barbeiro.id}
              style={iosPickerItemStyle} // Aplica o estilo do item no iOS
            />
          ))}
        </Picker>
      </View>

      {/* Calendário (Seu componente customizado e estilizado) */}
      <Text style={styles.label}>Escolha a Data</Text>
      <CalendarPicker
        onSelectDate={setSelectedDate}
        selectedDate={selectedDate}
      />

      {/* Picker de Horário */}
      <Text style={styles.label}>Escolha o Horário</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedHour}
          onValueChange={(itemValue) => setSelectedHour(itemValue)}
          style={[styles.picker, iosPickerStyle]}
          dropdownIconColor="#FFF"
          itemStyle={iosPickerItemStyle} // Aplica o estilo do item no iOS
        >
          <Picker.Item
            label="Selecione o horário"
            value=""
            style={iosPickerItemStyle}
          />
          {horarios.map((hora, index) => (
            <Picker.Item
              key={index}
              label={hora}
              value={hora}
              style={iosPickerItemStyle}
            />
          ))}
        </Picker>
      </View>

      {/* Resumo da seleção */}
      {selectedDate && selectedHour && (
        <View style={styles.resumo}>
          <Text style={styles.resumoTexto}>
            📅 Agendado para {selectedDate} às {selectedHour}
          </Text>
        </View>
      )}

      {/* Botão de Agendar */}
      <TouchableOpacity style={styles.botao} onPress={handleAgendar}>
        <Text style={styles.textoBotao}>Confirmar Agendamento</Text>
      </TouchableOpacity>
    </View>
  );
}

// ====================================================================
// 3. Estilos
// ====================================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#221610", // Fundo principal escuro
    padding: 15,
  },
  titulo: {
    fontSize: 26,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    color: "#FFF",
    marginTop: 15,
    marginBottom: 4,
  },
  pickerContainer: {
    backgroundColor: "#33221A", // Fundo do Picker
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#5C4B40", // Borda sutil
  },
  picker: {
    color: "#FFF", // Cor do texto do Picker no Android
    height: 50,
    width: "100%",
  },
  resumo: {
    backgroundColor: "#33221A",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  resumoTexto: {
    color: "#C29A6B", // Cor de destaque no resumo
    fontSize: 16,
    fontWeight: "bold",
  },
  botao: {
    backgroundColor: "#C29A6B",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 30,
  },
  textoBotao: {
    color: "#221610",
    fontSize: 18,
    fontWeight: "bold",
  },
});

const pickerStyles = StyleSheet.create({
  card: {
    backgroundColor: "#33221A",
    borderRadius: 10,
    padding: 10,
    marginTop: 4,
    elevation: 3,
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  dayButton: {
    backgroundColor: "transparent",
    padding: 8,
    marginVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#5C4B40",
    minWidth: "24%",
    alignItems: "center",
  },
  dayButtonSelected: {
    backgroundColor: "#C29A6B",
    borderColor: "#C29A6B",
  },
  dayText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "500",
  },
  dayTextSelected: {
    color: "#221610",
    fontWeight: "bold",
  },
});

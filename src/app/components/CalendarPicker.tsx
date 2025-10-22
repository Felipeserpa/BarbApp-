import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Button, Platform, View } from "react-native";

type Props = {
  onChange: (date: Date) => void;
};

export default function CalendarPicker({ onChange }: Props) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<"date" | "time">("date");
  const [show, setShow] = useState(false);

  const handleChange = (_event: any, selectedDate?: Date) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
      onChange(selectedDate);
    }
  };

  const showMode = (currentMode: "date" | "time") => {
    setMode(currentMode);
    setShow(true);
  };

  return (
    <View>
      <Button title="Selecionar Data" onPress={() => showMode("date")} />
      <View style={{ marginTop: 10 }} />
      <Button title="Selecionar Hora" onPress={() => showMode("time")} />

      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleChange}
        />
      )}
    </View>
  );
}

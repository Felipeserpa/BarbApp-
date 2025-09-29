import { Stack } from "expo-router";
import React from "react";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const [loading, setLoading] = React.useState(false);

  // TODO: Replace this with your actual authentication logic
  const isAuthenticated = false;

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="(app)" />
      ) : (
        <Stack.Screen name="(auth)" />
      )}
    </Stack>
  );
}

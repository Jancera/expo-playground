import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function SignInScreen() {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "(private)/(tabs)",
      params: {
        redirect: "route_to_redirect",
      },
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Navigate to private tab" onPress={handlePress} />
    </View>
  );
}

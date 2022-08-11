import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw from "./tailwind";

export default function App() {
  return (
    <View style={tw`flex flex-1 justify-center items-center`}>
      <Text style={tw`text-3xl text-primary font-semibold`}>Shakur </Text>
      <Text style={tw`text-lg text-body font-semibold`}>
        Let get it done bro{" "}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

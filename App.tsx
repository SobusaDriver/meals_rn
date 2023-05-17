import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootStackParamsList } from "./types/StackParams";
import FirstScreen from "./pages/FirstScreen";
import Home from "./pages/Home";

const Stack = createNativeStackNavigator<RootStackParamsList>();
const initialParams = { pageNumber: 2, isLastPage: false };
export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<StatusBar style="auto" />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen
					name="FirstScreen"
					component={FirstScreen}
					initialParams={initialParams}
				/>
			</NavigationContainer>
			<View style={styles.container}>
				<Text>Hello There</Text>
			</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

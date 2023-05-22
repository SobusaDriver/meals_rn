import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamsList } from "./types/StackParams";
import FirstScreen from "./pages/FirstScreen";
import Home from "./pages/Home";

const Stack = createNativeStackNavigator<RootStackParamsList>();
const Tab = createBottomTabNavigator();
const initialParams = { pageNumber: 1, isLastPage: false };
export default function App() {
	return (
		<SafeAreaProvider>
			<StatusBar style="auto" />
			<NavigationContainer>

				<Tab.Navigator initialRouteName="Home">
					<Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
					<Tab.Screen name="FirstScreen" component={FirstScreen} initialParams={initialParams} options={{ headerShown: false }} />
				</Tab.Navigator>
			</NavigationContainer>
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

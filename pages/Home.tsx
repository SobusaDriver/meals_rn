import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const Home = () => {
	const insets = useSafeAreaInsets();
	return (
		<View style={{
			flex: 1,
			justifyContent: 'space-between',
			alignItems: 'center',
			paddingTop: insets.top,
			paddingBottom: insets.bottom,
			paddingLeft: insets.left,
			paddingRight: insets.right,
			backgroundColor: "red"
		}}>
			<StatusBar style="auto" />
			<Text>Home</Text>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
	}
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
	return (
		<SafeAreaView>
			<StatusBar style="auto" />
			<Text>Home</Text>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({});

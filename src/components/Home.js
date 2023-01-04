import React from 'react';
import {
	View,
	ScrollView,
	StatusBar,
	Image,
	TouchableOpacity,
	Text,
	TextInput
} from 'react-native';
import { COLOURS } from '../database/item';
import Material from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
	return (
		<View
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: COLOURS.white,
			}}
		>
			<ScrollView>
				<View
					style={{
						width: '100%',
						height: '100%',
						backgroundColor: COLOURS.white,
						position: 'relative',
					}}
				>
					<StatusBar
						backgroundColor={COLOURS.white}
						barStyle='dark-content'
					/>
					<Image
						source={require('../database/images/background.png')}
						style={{ position: 'absolute', top: 0, left: -100 }}
					/>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							padding: 20,
						}}
					>
						<TouchableOpacity
							style={{
								width: 40,
								height: 40
							}}
						>
							<Image
								source={require('../database/images/profile.jpg')}
								style={{
									width: '100%',
									height: '100%',
									resizeMode: 'contain',
									borderRadius: 500
								}}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Material
								name='segment'
								style={{
									fontSize: 28,
									color: COLOURS.black
								}}
							/>
						</TouchableOpacity>
					</View>
					<View style={{ padding: 20 }}>
						<Text
							style={{
								fontSize: 16,
								color: COLOURS.black,
								opacity: 0.5,
								fontWeight: '400',
							}}
						>
							Food
						</Text>
						<Text
							style={{
								fontSize: 40,
								color: COLOURS.black,
								fontWeight: '600',
								letterSpacing: 2,
							}}
						>
							Delivery
						</Text>
					</View>
					<View
						style={{
							paddingHorizontal: 20,
							paddingVertical: 10,
							flexDirection: 'row',
							alignItems: 'center'
						}}
					>
						<Ionicons
							name='search'
							style={{
								fontSize: 20,
								color: COLOURS.black,
								opacity: 0.8,
							}}
						/>
						<TextInput
							placeholder='Search...'
							style={{
								fontSize: 16,
								color: COLOURS.black,
								paddingVertical: 5,
								borderBottomWidth: 1,
								borderBottomColor: COLOURS.black + 20,
								width: '90%',
								marginLeft: 10,
								letterSpacing: 1,
							}}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	)
};

export default Home;
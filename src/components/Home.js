import React, { useState } from 'react';
import {
	View,
	ScrollView,
	StatusBar,
	Image,
	TouchableOpacity,
	Text,
	TextInput,
	FlatList
} from 'react-native';
import { Categories, COLOURS } from '../database/item';
import Material from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = () => {
	const [currentSelected, setCurrentSelected] = useState(0);

	const RenderCategories = ({ index, item }) => {
		return (
			<TouchableOpacity
				activeOpacity={0.9}
				onPress={() => setCurrentSelected(index)}
			>
				<View
					style={{
						width: 120,
						height: 180,
						justifyContent: 'space-evenly',
						alignItems: 'center',
						backgroundColor:
							currentSelected == index ? COLOURS.accentPink : COLOURS.white,
						borderRadius: 20,
						margin: 10,
						elevation: 5
					}}
				>
					<View style={{ width: 60, height: 60 }}>
						<Image
							source={item.image}
							style={{
								width: '100%',
								height: '100%',
								resizeMode: 'center'
							}}
						/>
					</View>
					<Text
						style={{
							fontSize: 16,
							fontWeight: '600',
							color: COLOURS.black,
						}}
					>
						{item.name}
					</Text>
					<View
						style={{
							width: 30,
							height: 30,
							borderRadius: 100,
							backgroundColor:
								currentSelected == index ? COLOURS.white : COLOURS.accentRed,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<FontAwesome
							name='angle-right'
							style={{
								fontSize: 12,
								color: currentSelected == index ? COLOURS.black : COLOURS.white,
							}}
						/>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	const RenderItems = (data, idx) => {
		return (
			<TouchableOpacity>
				<View>
					<Text>{data.name}</Text>
				</View>
			</TouchableOpacity>
		)
	};


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
					<Text
						style={{
							paddingTop: 20,
							paddingHorizontal: 20,
							fontSize: 18,
							fontWeight: '700',
							color: COLOURS.black,
							letterSpacing: 1,
						}}
					>
						Categories
					</Text>
					<FlatList
						horizontal={true}
						data={Categories}
						renderItem={RenderCategories}
						showsHorizontalScrollIndicator={false}
					/>
					<Text
						style={{
							fontSize: 18,
							fontWeight: '700',
							paddingTop: 20,
							paddingHorizontal: 20,
							color: COLOURS.black,
						}}
					>
						Popular
					</Text>
					{Categories[currentSelected].items.map(RenderItems)}
				</View>
			</ScrollView>
		</View>
	)
};

export default Home;
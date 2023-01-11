import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	ScrollView
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { COLOURS } from '../database/item';

const Details = ({ route, navigation }) => {
	const {
		name,
		price,
		image,
		size,
		crust,
		delivery,
		ingredients,
		isTopOfTheWeek,
	} = route.params

	// const item = route.params
	// console.log('route=>', route.params);

	return (
		<View
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: COLOURS.white,
				position: 'relative',
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: 20,
				}}
			>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={{
						width: 40,
						height: 40,
						borderColor: COLOURS.lightGray,
						borderWidth: 1,
						borderRadius: 10,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<FontAwesome
						name='angle-left'
						style={{ fontSize: 16, color: COLOURS.black }}
					/>
				</TouchableOpacity>
				<View
					style={{
						width: 40,
						height: 40,
						backgroundColor: COLOURS.accent,
						borderRadius: 10,
						justifyContent: 'center',
						alignItems: 'center',
						opacity: isTopOfTheWeek ? 1 : 0.5,
					}}
				>
					<AntDesign
						name='star'
						style={{ fontSize: 15, color: COLOURS.white }}
					/>
				</View>
			</View>
			<Text
				style={{
					fontSize: 38,
					fontWeight: '800',
					color: COLOURS.black,
					paddingHorizontal: 20,
					maxWidth: 310
				}}
			>
				{name}
			</Text>
			<View
				style={{
					paddingHorizontal: 20,
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						fontSize: 20,
						fontWeight: '900',
						color: COLOURS.accentRed,
						paddingRight: 5,
						paddingBottom: 8,
					}}
				>
					฿
				</Text>
				<Text
					style={{
						fontSize: 38,
						fontWeight: '900',
						color: COLOURS.accentRed,
					}}
				>
					{price}
				</Text>
			</View>
			<View
				style={{
					width: '100%',
					flexDirection: 'row',
					alignItems: 'center',
					maxHeight: 300,
				}}
			>
				<View style={{ paddingHorizontal: 20 }}>
					<View style={{ paddingVertical: 20 }}>
						<Text
							style={{
								fontSize: 12,
								color: COLOURS.black,
								opacity: 0.5
							}}
						>
							Size
						</Text>
						<Text
							style={{
								fontSize: 18,
								color: COLOURS.black,
								fontWeight: '600'
							}}
						>
							{size}
						</Text>
					</View>
					<View style={{ paddingVertical: 20 }}>
						<Text
							style={{
								fontSize: 12,
								color: COLOURS.black,
								opacity: 0.5
							}}
						>
							Crust
						</Text>
						<Text
							style={{
								fontSize: 18,
								color: COLOURS.black,
								fontWeight: '600'
							}}
						>
							{crust}
						</Text>
					</View>
					<View style={{ paddingVertical: 20 }}>
						<Text
							style={{
								fontSize: 12,
								color: COLOURS.black,
								opacity: 0.5
							}}
						>
							Delivery
						</Text>
						<Text
							style={{
								fontSize: 18,
								color: COLOURS.black,
								fontWeight: '600'
							}}
						>
							{delivery}
						</Text>
					</View>
				</View>

				<View style={{ width: 380, height: 380 }}>
					<Image
						source={image}
						style={{
							width: '100%',
							height: '100%',
							resizeMode: 'contain'
						}}
					/>
				</View>
			</View>
			<Text
				style={{
					paddingTop: 20,
					paddingHorizontal: 20,
					fontSize: 20,
					fontWeight: '700',
					color: COLOURS.black,
				}}>
				Ingredients
			</Text>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
				{ingredients.map((data, idx) => {
					return (
						<View
							key={idx}
							style={{
								width: 80,
								height: 80,
								backgroundColor: COLOURS.white,
								borderRadius: 20,
								margin: 12,
								elevation: 5
							}}
						>
							<Image
								source={data}
								style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
							/>
						</View>
					);
				})}
			</ScrollView>
			<View
				style={{
					position: 'absolute',
					width: '100%',
					bottom: 0,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={{
						width: '90%',
						height: 80,
						backgroundColor: COLOURS.accent,
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							fontSize: 16,
							fontWeight: 'bold',
							color: COLOURS.black,
							letterSpacing: 1,
							marginRight: 10,
						}}
					>
						Place on Order
					</Text>
					<Entypo
						name='chevron-right'
						style={{ fontSize: 16, color: COLOURS.black }}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
};

export default Details;
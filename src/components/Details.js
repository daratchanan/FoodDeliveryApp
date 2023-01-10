import React from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
		</View>
	)
};

export default Details;
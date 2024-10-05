import React, { useState } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'
import mobile1 from '../assets/mobile1.png';
import mobile2 from '../assets/mobile2.png';
import mobile3 from '../assets/mobile3.png';
import mobile4 from '../assets/mobile4.png';

const ScreenOne = (props) => {
    const { navigation, route } = props
    const { navigate } = navigation

    const colorRef = route.params ? route.params.color || 'blue' : 'blue'

    const [stars] = useState([1, 2, 3, 4, 5])

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={
                        colorRef === 'white'
                            ? mobile1
                            : colorRef === 'red'
                                ? mobile2
                                : colorRef === 'black'
                                    ? mobile3
                                    : mobile4
                    }
                    style={styles.imageStyle}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.productTitle}>
                    Điện Thoại Vsmart Joy 3 - Hàng chính hãng
                </Text>
                <View style={styles.ratingContainer}>
                    <View style={styles.starsContainer}>
                        {stars.map((item) => (
                            <Image
                                key={item}
                                source={require('../assets/star.png')}
                                style={styles.starStyle}
                            />
                        ))}
                    </View>
                    <Text style={styles.reviewText}>(Xem 828 đánh giá)</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.currentPrice}>1.790.000 đ</Text>
                    <Text style={styles.originalPrice}>1.790.000 đ</Text>
                </View>
                <View style={styles.promoContainer}>
                    <Text style={styles.promoText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Image
                        source={require('../assets/help.png')}
                        style={styles.helpIcon}
                    />
                </View>
                <TouchableOpacity
                    style={styles.chooseColorButton}
                    onPress={() => navigate('Screen2')}
                >
                    <Text style={styles.chooseColorText}>4 MÀU - CHỌN MÀU</Text>
                    <Image
                        style={styles.rightArrow}
                        source={require('../assets/right.png')}
                    />
                </TouchableOpacity>
                <View style={styles.purchaseButton}>
                    <Text style={styles.purchaseButtonText}>Chọn mua</Text>
                </View>
            </View>
        </View>
    )
}

export default ScreenOne

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 0.63,
    },
    imageStyle: {
        flex: 1,
        resizeMode: 'contain',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    productTitle: {
        fontSize: 15,
        color: 'black',
        fontWeight: '500',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    starsContainer: {
        flexDirection: 'row',
    },
    starStyle: {
        marginHorizontal: 3,
        height: 30,
        width: 30,
    },
    reviewText: {
        marginHorizontal: 20,
        fontSize: 15,
        color: 'black',
        fontWeight: '500',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    currentPrice: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    originalPrice: {
        fontWeight: '500',
        textDecorationLine: 'line-through',
        color: '#5e5e5e',
        marginHorizontal: 35,
        fontSize: 16,
    },
    promoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    promoText: {
        fontWeight: '700',
        color: 'red',
    },
    helpIcon: {
        height: 20,
        width: 20,
        marginHorizontal: 15,
    },
    chooseColorButton: {
        height: 38,
        borderColor: '#7f7f7f',
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    chooseColorText: {
        fontSize: 16,
    },
    rightArrow: {
        height: 10,
        width: 10,
        position: 'absolute',
        right: 8,
    },
    purchaseButton: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'red',
        borderRadius: 8,
        width: '90%',
        height: 45,
    },
    purchaseButtonText: {
        fontSize: 17,
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
    },
})

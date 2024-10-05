import React, { useRef, useState } from 'react'
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
const ScreenTwo = (props) => {
    const { navigation } = props
    const { navigate } = navigation

    const colorRef = useRef('blue')
    const [color, setColor] = useState('blue')
    const [imageSource, setImageSource] = useState(require('../assets/mobile4.png'))

    const changeColor = (selectedColor, image) => {
        colorRef.current = selectedColor
        setColor(selectedColor)
        setImageSource(image)
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    source={imageSource}
                    style={styles.imageStyle}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3</Text>
                    <Text style={styles.productSubTitle}>Hàng chính hãng</Text>
                    <Text style={styles.colorText}>
                        Màu: <Text style={styles.selectedColor}>{color}</Text>
                    </Text>
                    <Text style={styles.providerText}>
                        Cung cấp bởi <Text style={styles.providerName}>Tiki Trading</Text>
                    </Text>
                    <Text style={styles.priceText}>1.790.000 đ</Text>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.chooseColorText}>Chọn 1 màu bên dưới</Text>

                <TouchableOpacity onPress={() => changeColor('white', require('../assets/mobile1.png'))}>
                    <View style={styles.colorOption('#c5f1fb')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => changeColor('red', require('../assets/mobile2.png'))}>
                    <View style={styles.colorOption('red')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => changeColor('black', require('../assets/mobile3.png'))}>
                    <View style={styles.colorOption('black')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => changeColor('blue', require('../assets/mobile4.png'))}>
                    <View style={styles.colorOption('#234896')} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigate('Screen1', {
                            color: colorRef.current,
                        })
                    }}
                >
                    <View style={styles.confirmButton}>
                        <Text style={styles.confirmButtonText}>XONG</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ScreenTwo

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        padding: 10,
        flex: 0.25,
    },
    imageStyle: {
        height: 140,
        width: 150,
        resizeMode: 'contain',
    },
    infoContainer: {
        flex: 0.6,
        marginHorizontal: 20,
        marginVertical: 15,
    },
    productTitle: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
    },
    productSubTitle: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
    },
    colorText: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
        marginVertical: 13,
    },
    selectedColor: {
        fontWeight: '700',
    },
    providerText: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
    },
    providerName: {
        fontWeight: '700',
    },
    priceText: {
        marginTop: 13,
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
    },
    footerContainer: {
        flex: 1,
        backgroundColor: '#c4c4c4',
        justifyContent: 'center',
    },
    chooseColorText: {
        marginHorizontal: 15,
        marginTop: 11,
        fontSize: 15,
        fontWeight: '400',
        textAlign: 'center',
    },
    colorOption: (backgroundColor) => ({
        marginTop: 11,
        height: 80,
        width: 80,
        backgroundColor: backgroundColor,
        alignSelf: 'center',
    }),
    confirmButton: {
        borderRadius: 10,
        backgroundColor: 'rgba(25, 82, 226, 0.58)',
        borderColor: '#ca1536',
        borderWidth: 1,
        height: 50,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    confirmButtonText: {
        fontSize: 20,
        color: '#f9f2f2',
        textAlign: 'center',
    },
})

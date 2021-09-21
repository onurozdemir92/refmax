import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../Theme/Colors';


const { width, height } = Dimensions.get('window');
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    image: {
        width: width,
        height: height
    },
    scrollView: {
        width: width,
        height: height
    },
    productInfoContainer: {
        position: 'absolute',
        flexDirection: 'row',
        width: width,
        bottom: 0,
        paddingVertical: 10,
        alignItems: 'center'
    },
    productInfoTextContainer: {
        marginLeft: 10,
        flex: 1
    },
    productInfoText: {
        color: 'white',
        fontSize: 17
    },
    productGoButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: Colors.MainColor,
        borderRadius: 5,
        marginRight: 10
    },
    header: {
        position: 'absolute',
        width: width,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        top: 0
    }
});

export default Styles;
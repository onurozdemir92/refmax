
import { StyleSheet } from 'react-native'
import Colors from '../../Screen/Theme/Colors';


const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loginGoButton: {
        width: '80%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.MainColor,
        borderRadius: 5,
        marginTop: 10
    },
    loginGoText: {
        fontWeight: 'bold',
        color: Colors.MainColor
    },
    alertText: {
        color: Colors.textGray
    }

});


export default Styles;

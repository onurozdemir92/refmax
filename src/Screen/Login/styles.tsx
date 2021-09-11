import { StyleSheet } from 'react-native';
import Colors from '../Theme/Colors';
import Sizes from '../Theme/Sizes';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: Sizes.MainHeader,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: Colors.borderColor,
        borderBottomWidth: 2
    },
    goBackButton: {
        height: '100%',
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        flex: 1
    },
    singInButton: {
        width: '100%',
        height: Sizes.buttonHeight,
        backgroundColor: Colors.MainColor,
        justifyContent: 'center',
        alignItems: 'center'

    },
    singInButtonText: {
        color: 'white',
        fontSize: 18,

    },
    textInputContainer: {
        borderColor: Colors.borderColor,
        borderWidth: 1,
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 10
    }

});

export default styles;
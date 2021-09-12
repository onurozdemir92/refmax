import { StyleSheet } from 'react-native';
import Colors from '../Colors';
import Sizes from '../Sizes';



const commonStyles = StyleSheet.create({
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
});

export default commonStyles;
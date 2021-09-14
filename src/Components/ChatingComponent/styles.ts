
import { StyleSheet } from 'react-native'



const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 3
    },
    rightContainer: {
        minWidth: '20%',
        maxWidth: '75%',

        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 20
    },
    leftContainer: {
        minWidth: '20%',
        maxWidth: '75%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginLeft: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    messageInfo: {
        width: '100%',
        flexDirection: 'row'
    }
});

export default Styles;

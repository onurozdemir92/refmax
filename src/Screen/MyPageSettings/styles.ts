import { StyleSheet } from 'react-native';
import Colors from '../Theme/Colors';
import Sizes from '../Theme/Sizes';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileInfoContainer: {
        width: '100%',
        backgroundColor: 'white'
    },
    profileImageContainer: {
        width: '100%',
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderColor: Colors.borderColor,
        borderWidth: 1
    },
    createdDateContainer: {
        width: '100%',
        paddingVertical: 5,
        alignItems: 'center',
        marginTop: 10
    },
    createdText: {
        color: Colors.textBlack
    },
    photoEditButtonContainer: {
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    editButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.MainColor,
        borderColor: Colors.borderColor,
        borderWidth: 1
    },
    inputContainer: {
        width: '100%'
    },
    itemItemContainer: {
        borderColor: Colors.borderColor,
        borderWidth: 1,
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        flexDirection: 'row',
        minHeight: 50,
        alignItems: 'center'
    },
    itemItemTitleText: {
        flex: 1,

    },
    itemItemCenterText: {
        color: Colors.MainColor,
        marginRight: 20
    }
});

export default styles;
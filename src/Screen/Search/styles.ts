
import { StyleSheet } from 'react-native'


const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchContainer: {
        width: '100%',
        backgroundColor: 'white',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputContainer: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#F0FAFF',
        alignItems: 'center',
        borderRadius: 10

    },
    textInput: {
        height: 40,
        flex: 1
    },
    searchIcon: {
        marginHorizontal: 3
    },
   
});

export default Styles;

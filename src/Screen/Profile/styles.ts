import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    profileContainer: {
        width: '100%',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10,
    },
    commentContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    starsContainer: {
        flexDirection: 'row',
        marginRight: 10,
    },
})

export default Styles;
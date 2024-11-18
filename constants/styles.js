import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    // Add your styles here
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        right: -0.5,
        backgroundColor: '#f4e6e6',
    },
    btn: {
        backgroundColor: '#de3555',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 20,
        borderWidth: 1.5,
        borderColor: '#fccc',
        elevation: 7,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 15 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    btnTxt: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18,
        letterSpacing: 1,
    },
    bottomContainer: {
        height: height / 3,
        justifyContent: 'flex-end',
    },
    txtINP: {
        height: 50,
        marginHorizontal: 20,
        marginVertical: 15,
        paddingLeft: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 25,
        backgroundColor: '#f9f9f9',
        color: '#333',
        // Gölge efekti (iOS için)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        // Gölge efekti (Android için)
        elevation: 4,
    },
    formBtn: {
        backgroundColor: '#de3555',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 25,
        borderWidth: 1,
        borderColor: '#ccc',
        elevation: 7,
    },
    formBtnTxt: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18,
        letterSpacing: 1,
    },
    formContainer: {
        marginBottom: 35,
        zIndex: -1,
        justifyContent: 'flex-end',
        ...StyleSheet.absoluteFill,
    },
    xContainer: {

        height: 40,
        width: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 20,
        top: -20,
    }


});

export default styles;
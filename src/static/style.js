import {
    StyleSheet,
} from 'react-native';

export default StyleSheet.create({
    col: {
        flex: 1,
        flexDirection: 'row',
    },
    flex1: {
        flex: 1,
        marginTop: 10,
    },
    lato: { fontFamily: 'lato', fontSize: 12 },
    whiteText: { color: '#fff' },
    buttonRound: {
        backgroundColor: '#222',
        borderRadius: 25,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: '#fff',
        padding: 10,
        color: '#222',
        marginTop: 10,
        fontFamily: 'lato',
    },
    errorMessage: {
        backgroundColor: 'red',
    },
    buttonSquare: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        padding: 3,
    },
    buttonSquareText: {
        fontFamily: 'lato',
        color: '#fff',
        flex: 6,
    },
    iconContainer: {
        // backgroundColor: 'rgba(255, 255, 255, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRightColor: '#888',
        borderRightWidth: 0.5,
        margin: 0,
    }
});

import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        padding: 40,
        gap:5
        
        
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: "5%",

    },
    text2: {
        color: "#848484",
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: "5%",

    },
    image:{ width: 200, height: 200, borderRadius: 10 },
    generalButtons: {
        backgroundColor: '#5F9EA0',
        alignItems: 'center',
        padding: 12,
        borderRadius: 5,

    },
    generalButtonsText: {
        fontWeight: '700',
        textTransform: 'uppercase',
        color: 'white'
    }
});

export default Styles
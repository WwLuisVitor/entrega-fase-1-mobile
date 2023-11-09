import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 40
    },
    label: {
        color: "#848484"
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "#848484",
        borderWidth: 1,
        marginTop: "3%",
        marginBottom: "5%",
        padding: 10
    },
    createAccountForgot: {
        flexDirection: "row",
        alignSelf: "flex-end",
        marginBottom: "3%"
    },
    link: {
        color: "#2196F3",
        marginLeft: "10%"
    },
    logo: {
        alignItems: "center",
        marginBottom: "10%"
    },
    text: {
        fontSize: 28,
        color: "#848484",
        marginTop: "5%"
    },
    AccountCreation: {
        alignItems: "center",
        marginBottom: "10%"

    },
    backbutton: {
        alignItems: "flex-start",
        color: "#848484"
    },
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
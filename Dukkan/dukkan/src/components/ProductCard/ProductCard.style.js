import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: '#eeeeee',
        borderColor: '#bdbdbd',
        borderWidth: 1,
        margin: 10,
        flexDirection : "row",
    },
    image:{
        width: 100,
        minHeight: 100,
        height: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    body_container: {
        flex: 1,
        padding: 5,
        justifyContent: "space-between",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
    price: {
        textAlign : "right",
        fontSize: 16,
        fontStyle: "italic",
    },
})
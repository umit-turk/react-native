import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#54b5f6',
    },
    logo_container: {
        flex: 1,
        justifyContent: "center",
    },
    body_container: {flex: 1,},
    logo: {
        width: Dimensions.get("window").width * 0.9,
        height: Dimensions.get("window").height / 3,
        resizeMode: 'contain',
        alignSelf: "center",
        tintColor: 'white',
    }


})
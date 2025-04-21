import {Platform, StatusBar} from "react-native";

const COLORS = {
    primary: "#101218",
    secondary: "#FFC5D3",
    accent: "#1F936D"
}

const SIZES = {
    padding: 19,
    borderRadius: 15,
    textBoxRadius: 25,
    h1: 24,
    h2: 20
}

const FONTS = {
    h1_semiBold: {fontSize: SIZES.h1, fontFamily: "Montserrat_Semibold"},
    h2_semiBold: {fontSize: SIZES.h2, fontFamily: "Montserrat_Semibold"}
}

const SHADOW ={
    elevation: 5,
    shadowColor: COLORS.secondary,
    shadowOffset: {width: 2, height: 12},
    shadowRadius: 12,
}

const HOMEPAGE = {
    container: {
        paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight + 10,
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: SIZES.padding
    },
    textBoxWrapper: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: SIZES.padding
    },
    textInput: {
        ...SHADOW,
        borderRadius: SIZES.textBoxRadius,
        backgroundColor: COLORS.secondary,
        paddingLeft: 15,
        paddingTop: 10,
        width: "90%",
        color: COLORS.primary,
        marginRight: 15,
        ...FONTS.h2_semiBold,
    },
    btn: {
        ...SHADOW,
        backgroundColor: COLORS.accent,
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    }
}

export{COLORS, SIZES, FONTS, SHADOW, HOMEPAGE}

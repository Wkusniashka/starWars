import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function MaleFavourites({ maleFavourites }) {
    return (
        <View style={[styles.container, styles.shadowProp]}>
            <Text style={styles.text}>Male:</Text>
            <Text style={styles.count}>{maleFavourites}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "orange",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5,
        marginRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },
    shadowProp: {
        shadowColor: "#171717",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    text: {
        fontSize: 18,
        color: "#2F4F4F",
        fontWeight: "500",
    },
    count: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#2F4F4F",
    },
});

MaleFavourites.propTypes = {
    maleFavourites: PropTypes.number.isRequired,
};

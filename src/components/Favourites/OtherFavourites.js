import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function OtherFavourites({ otherFavourites }) {
    return (
        <View style={[styles.container, styles.shadowProp]}>
            <Text style={styles.text}>Other:</Text>
            <Text style={styles.count}>{otherFavourites}</Text>
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

OtherFavourites.propTypes = {
    otherFavourites: PropTypes.number.isRequired,
};

import { TouchableOpacity } from "react-native";
import { Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function Reset({ clear }) {
    return (
        <TouchableOpacity
            style={[styles.container, styles.shadowProp]}
            onPress={clear}
        >
            <Text style={styles.text}>Clear</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1.5,
        borderColor: "orange",
        borderRadius: 15,
        alignSelf: "flex-end",
        marginTop: 10,
        backgroundColor: "white",
        width: "100%",
    },
    shadowProp: {
        shadowColor: "#171717",
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    text: {
        color: "orange",
        padding: 10,
        fontSize: 18,
        alignSelf: "center",
        fontWeight: "500",
    },
});

Reset.propTypes = {
    clear: PropTypes.func.isRequired,
};

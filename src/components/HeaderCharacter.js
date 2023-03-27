import { View, Text, StyleSheet } from "react-native";

export default function HeaderCharacter( ) {
    return (
        <View style={[styles.container, styles.shadowProp]}>
            <Text style={styles.title}>Name</Text>
            <Text style={styles.title}>Gender</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "black",
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 5,
    },
    title: {
        paddingVertical: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2F4F4F',
    },
});

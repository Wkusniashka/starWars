import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function CharacterScreen({ route }) {
    const character = route?.params?.character;
    return (
        <View style={styles.container}>
            <View style={styles.quality}>
                <Text style={styles.name}>Birth Year</Text>
                <Text style={styles.name}>{character?.birth_year}</Text>
            </View>
            <View style={styles.quality}>
                <Text style={styles.name}>Gender</Text>
                <Text style={styles.name}>{character?.gender}</Text>
            </View>
            <View style={styles.quality}>
                <Text style={styles.name}>Height</Text>
                <Text style={styles.name}>{character?.height}</Text>
            </View>
            <View style={styles.quality}>
                <Text style={styles.name}>Mass</Text>
                <Text style={styles.name}>{character?.mass}</Text>
            </View>
            <View style={styles.quality}>
                <Text style={styles.name}>Hair color</Text>
                <Text style={styles.name}>{character?.hair_color}</Text>
            </View>
            <View style={styles.quality}>
                <Text style={styles.name}>Eye color</Text>
                <Text style={styles.name}>{character?.eye_color}</Text>
            </View>
            <View style={styles.quality}>
                <Text style={styles.name}>Skin color</Text>
                <Text style={styles.name}>{character?.skin_color}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    quality: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: "#FFD580",
    },
    name: {
        fontSize: 16,
        padding: 15,
        color: '#2F4F4F',
        fontWeight: '500',
    },
});

CharacterScreen.propTypes = {
    route: PropTypes.object.isRequired,
}
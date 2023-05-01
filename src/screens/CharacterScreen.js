import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CharactersContext } from "../CharactersContext";
import { getHomeworld } from "../helper/api";

export default function CharacterScreen({ route }) {
    const [characters] = useContext(CharactersContext);
    const [homeworld, setHomeworld] = useState();

    const characterName = route?.params?.name;

    const character = characters.filter(
        (item) => item.name === characterName
    )[0];

    useEffect(() => {
        home();
    }, [character.homeworld]);

    const home = async () => {
        const home = await getHomeworld(character.homeworld);
        setHomeworld(home)
    };

    return (
        <View style={styles.container}>
            {character ? (
                <>
                    <View style={styles.quality}>
                        <Text style={styles.name}>Birth Year</Text>
                        <Text style={styles.name}>{character?.birth_year}</Text>
                    </View>
                    <View style={styles.quality}>
                        <Text style={styles.name}>Gender</Text>
                        <Text style={styles.name}>{character?.gender}</Text>
                    </View>
                    <View style={styles.quality}>
                        <Text style={styles.name}>Homeworld</Text>
                        <Text style={styles.name}>{homeworld}</Text>
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
                </>
            ) : (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" />
                </View>
            )}
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
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#FFD580",
    },
    name: {
        fontSize: 16,
        padding: 15,
        color: "#2F4F4F",
        fontWeight: "500",
    },
    loading: {
        flex: 1,
        justifyContent: "center",
    },
});

CharacterScreen.propTypes = {
    route: PropTypes.object.isRequired,
};

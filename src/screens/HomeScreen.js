import { StyleSheet, FlatList, ActivityIndicator, View } from "react-native";
import Character from "../components/Character";
import { useState, useContext } from "react";
import HeaderCharacter from "../components/HeaderCharacter";
import Favourites from "../components/Favourites/Favourites";
import { CharactersContext } from "../CharactersContext";

export default function HomeScreen({ navigation }) {
    const [maleFavourites, setMaleFavourites] = useState(0);
    const [femaleFavourites, setFemaleFavourites] = useState(0);
    const [otherFavourites, setOtherFavourites] = useState(0);
    const [resetLikes, setResetLikes] = useState(false);
    // const [isLoading, setLoading] = useState(false);

    const [characters, next, fetchMoreData, isLoading] = useContext(CharactersContext);

    const setFavourites = (like, gender) => {
        if (
            gender === "n/a" ||
            gender === "hermaphrodite" ||
            gender === "none"
        ) {
            gender = "other";
        }
        switch (gender) {
            case "male":
                {
                    like
                        ? setMaleFavourites(maleFavourites + 1)
                        : setMaleFavourites(maleFavourites - 1);
                }
                break;
            case "female":
                {
                    like
                        ? setFemaleFavourites(femaleFavourites + 1)
                        : setFemaleFavourites(femaleFavourites - 1);
                }
                break;
            case "other":
                like
                    ? setOtherFavourites(otherFavourites + 1)
                    : setOtherFavourites(otherFavourites - 1);
                break;
            default:
                like
                    ? setOtherFavourites(otherFavourites + 1)
                    : setOtherFavourites(otherFavourites - 1);
        }
    };

    const clear = () => {
        setMaleFavourites(0);
        setFemaleFavourites(0);
        setOtherFavourites(0);
        setResetLikes(!resetLikes);
    };

    const renderItem = ({ item }) => {
        return (
            <Character
                info={item}
                navigation={navigation}
                setFavourites={setFavourites}
                resetLikes={resetLikes}
            />
        );
    };

    const keyExtractor = (item) => item.url;

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    <Favourites
                        maleFavourites={maleFavourites}
                        femaleFavourites={femaleFavourites}
                        otherFavourites={otherFavourites}
                        clear={clear}
                    />
                    <HeaderCharacter />
                    <FlatList
                        data={characters}
                        renderItem={renderItem}
                        onEndReached={fetchMoreData}
                        onEndReachedThreshold={0.2}
                        keyExtractor={keyExtractor}
                        ListFooterComponent={next && <ActivityIndicator />}
                    />
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 40,
        justifyContent: "center",
    },
});

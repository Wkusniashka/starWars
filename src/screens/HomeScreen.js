import { StyleSheet, FlatList, ActivityIndicator, View } from "react-native";
import Character from "../components/Character";
import { getCharacters, getMoreCharacters } from "../helper/api";
import { useState, useEffect } from "react";
import HeaderCharacter from "../components/HeaderCharacter";
import Favourites from "../components/Favourites/Favourites";

export default function HomeScreen({
    navigation,
    maleFavourites,
    femaleFavourites,
    otherFavourites,
    setFavourites,
    clear,
    resetLikes,
}) {
    const [isLoading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [next, setNext] = useState();

    const getData = async () => {
        const data = await getCharacters();
        setCharacters(data.results);
        setNext(data.next);
        setLoading(false);
    };

    const fetchMoreData = async () => {
        if (next) {
            const moreData = await getMoreCharacters(next);
            setCharacters([...characters, ...moreData.results]);
            setNext(moreData.next);
        }
    };

    useEffect(() => {
        getData();
    }, []);

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

    const keyExtractor = (item) => item.name;

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

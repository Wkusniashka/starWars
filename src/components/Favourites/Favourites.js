import { View, StyleSheet } from "react-native";
import FemaleFavourites from "./FemaleFavourites";
import MaleFavourites from "./MaleFavourites";
import OtherFavourites from "./OtherFavourites";
import Reset from "../Reset";

export default function Favourites({
    maleFavourites,
    femaleFavourites,
    otherFavourites,
    clear,
}) {
    return (
        <>
            <View style={styles.container}>
                <FemaleFavourites femaleFavourites={femaleFavourites} />
                <MaleFavourites maleFavourites={maleFavourites} />
                <OtherFavourites otherFavourites={otherFavourites}/>
            </View>
            <Reset clear={clear}/>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
});

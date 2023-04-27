import { View, StyleSheet } from "react-native";
import FemaleFavourites from "./FemaleFavourites";
import MaleFavourites from "./MaleFavourites";
import OtherFavourites from "./OtherFavourites";
import Reset from "../Reset";
import PropTypes from "prop-types";

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

Favourites.propTypes = {
    maleFavourites: PropTypes.number.isRequired,
    femaleFavourites: PropTypes.number.isRequired,
    otherFavourites: PropTypes.number.isRequired,
    clear: PropTypes.func.isRequired,
}
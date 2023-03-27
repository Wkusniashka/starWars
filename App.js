import HomeScreen from "./src/screens/HomeScreen";
import CharacterScreen from "./src/screens/CharacterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
    const [maleFavourites, setMaleFavourites] = useState(0);
    const [femaleFavourites, setFemaleFavourites] = useState(0);
    const [otherFavourites, setOtherFavourites] = useState(0);
    const [resetLikes, setResetLikes] = useState(false);

    const setFavourites = (like, gender) => {
        if (
            gender === "n/a" ||
            gender === "hermaphrodite" ||
            gender === "none"
        ) {
            gender = "other";
        }
        if (gender === "male") {
            like
                ? setMaleFavourites(maleFavourites + 1)
                : setMaleFavourites(maleFavourites - 1);
        }
        if (gender === "female") {
            like
                ? setFemaleFavourites(femaleFavourites + 1)
                : setFemaleFavourites(femaleFavourites - 1);
        }
        if (gender === "other") {
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

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="StarWars Favourites">
                    {(props) => (
                        <HomeScreen
                            {...props}
                            maleFavourites={maleFavourites}
                            femaleFavourites={femaleFavourites}
                            otherFavourites={otherFavourites}
                            setFavourites={setFavourites}
                            clear={clear}
                            resetLikes={resetLikes}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name="CharacterScreen"
                    options={({ route }) => ({ title: route.params.name })}
                >
                    {(props) => <CharacterScreen {...props} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

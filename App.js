import HomeScreen from "./src/screens/HomeScreen";
import CharacterScreen from "./src/screens/CharacterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CharactersProvider } from "./src/CharactersContext";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="StarWars Favourites">
                    {(props) => (
                        <CharactersProvider>
                            <HomeScreen {...props} />
                        </CharactersProvider>
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

import { CreateStackNavigator } from 'react-navigation'
import PlatformSelect from './platformSelect';
import Searcharea from "./searcharea";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function appNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Platform" component={PlatformSelect} />

            <Stack.Screen name="Search" component={Searcharea} />
        </Stack.Navigator>
    )
}
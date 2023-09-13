import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Meteoro from '../screens/meteoro';
import IssLocation from '../screens/issLocation';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Isslocation" component={IssLocation} />
      <Stack.Screen name="Meteoro" component={Meteoro} />
    </Stack.Navigator>
  );
}
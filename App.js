import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Pagina1 from './screens/pagina1';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="App Renê" component={Pagina1} />
    </Stack.Navigator>
  );
}

export default function App() {
  return(
    <NavigationContainer >
      <MyStack  />
    </NavigationContainer>
  )
};

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/auth';
import MainScreen from '../screens/main';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='main' component={MainScreen} />
      <Stack.Screen name='auth' component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

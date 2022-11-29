import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateFundraisingRequest from '../screens/create-request';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='create-request'
        component={CreateFundraisingRequest}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

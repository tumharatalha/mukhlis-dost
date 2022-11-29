import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../../../assets/svgs/logo.svg';
import Back from '../../../assets/svgs/back.svg';
import { useNavigation } from '@react-navigation/native';
import LoginView from './login';
import SignupView from './signup';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AuthScreen = () => {
  const { goBack } = useNavigation();

  const [tab, setTab] = useState('login');

  const selectLogin = () => {
    setTab('login');
  };
  const selectSignup = () => {
    setTab('signup');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}
            style={{ position: 'absolute', zIndex: 9999, left: 25, top: 25 }}>
            <Back height={40} width={40} />
          </TouchableOpacity>
          <View style={styles.mukhlisDostImage}>
            <Logo width={width / 3} height={width / 3} />
          </View>
        </View>

        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{
                height: 60,
                width: width / 3,
                backgroundColor: tab === 'login' ? '#3B40A0' : 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: tab === 'login' ? 10 : 0,
                borderRadius: 10,
                borderColor: 'gray',
                borderWidth: 1,
              }}
              activeOpacity={1}
              onPress={selectLogin}>
              <Text
                style={{
                  fontFamily: 'Fredoka',
                  fontSize: 20,
                  color: tab === 'login' ? 'white' : '#3B40A0',
                }}>
                Log In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 60,
                width: width / 3,
                backgroundColor: !(tab === 'login') ? '#3B40A0' : 'white',
                zIndex: !(tab === 'login') ? 10 : 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: -20,
                borderRadius: 10,
                borderColor: 'gray',
                borderWidth: 1,
              }}
              activeOpacity={1}
              onPress={selectSignup}>
              <Text
                style={{
                  fontFamily: 'Fredoka',
                  fontSize: 20,
                  color: !(tab === 'login') ? 'white' : '#3B40A0',
                }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {tab === 'login' ? <LoginView /> : <SignupView />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { height, backgroundColor: '#E3FFFB', display: 'flex' },
  mukhlisDostImage: {},
});

export default AuthScreen;

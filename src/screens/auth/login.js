import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import signinViaEmail from '../../firebase/auth/signin';
import BottomRightElipse from '../../../assets/svgs/bottom-right-elipse.svg';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = () => {
    signinViaEmail(email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        padding: 25,
        paddingTop: 0,
        position: 'relative',
      }}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor='rgba(255, 255, 255, 0.75)'
        placeholder='Enter your email'
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor='rgba(255, 255, 255, 0.75)'
        placeholder='Enter your Password'
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={submitLogin} style={styles.submit}>
        <Text style={styles.submitText}>Sign in</Text>
      </TouchableOpacity>
      <BottomRightElipse style={styles.elipse} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#3B40A0',
    width: width / 1.3,
    borderRadius: 10,
    height: 50,
    paddingLeft: 30,
    fontSize: 20,
    fontFamily: 'Fredoka',
    color: 'white',
    marginTop: 40,
  },
  submit: {
    backgroundColor: '#3B40A0',
    width: 250,
    borderRadius: 15,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  submitText: {
    fontSize: 25,
    fontFamily: 'Fredoka',
    color: 'white',
  },
  elipse: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default LoginView;

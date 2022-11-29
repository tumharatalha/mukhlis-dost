import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import signupViaEmail from '../../firebase/auth/signup';
import BottomRightElipse from '../../../assets/svgs/bottom-right-elipse.svg';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SignupView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const submitSignup = () => {
    signupViaEmail(email, password, name, phone)
      .then((response) => {})
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
        placeholder='Enter your full name'
        onChangeText={setName}
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor='rgba(255, 255, 255, 0.75)'
        placeholder='Enter your LUMS email'
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor='rgba(255, 255, 255, 0.75)'
        placeholder='Enter your password'
        onChangeText={setPassword}
      />
      <View style={styles.phoneInputContainer}>
        <View style={styles.ext}>
          <Text style={styles.extText}>+92</Text>
        </View>
        <TextInput
          style={styles.phoneInput}
          placeholderTextColor='rgba(255, 255, 255, 0.75)'
          placeholder='3XXXXXXXXX'
          onChangeText={setPhone}
        />
      </View>
      <TouchableOpacity onPress={submitSignup} style={styles.submit}>
        <Text style={styles.submitText}>Sign up</Text>
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
    zIndex: -10,
  },
  phoneInput: {
    backgroundColor: '#3B40A0',
    borderRadius: 10,
    height: 50,
    paddingLeft: 20,
    fontSize: 20,
    fontFamily: 'Fredoka',
    color: 'white',
    flex: 1,
  },
  phoneInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width / 1.3,
    marginTop: 40,
  },
  ext: {
    backgroundColor: '#3B40A0',
    borderRadius: 10,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
    fontFamily: 'Fredoka',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  extText: {
    fontSize: 20,
    fontFamily: 'Fredoka',
    color: 'white',
  },
});

export default SignupView;

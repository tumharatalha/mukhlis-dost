import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MukhlisDostSvg from '../../../assets/svgs/mukhlis-dost.svg';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MainScreen = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.mukhlisDostImage}>
          <MukhlisDostSvg width={width} height={height / 2.5} />
        </View>
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          <View>
            <Text style={styles.text}>A Fundraising Platform</Text>
            <Text style={styles.text}>for Students, By Students.</Text>
          </View>

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: width / 2,
                height: 60,
                backgroundColor: '#3B40A0',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                navigate('auth');
              }}>
              <Text
                style={{ fontFamily: 'Fredoka', color: 'white', fontSize: 20 }}>
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { height: '100%', backgroundColor: '#E3FFFB' },
  mukhlisDostImage: {},
  text: {
    fontFamily: 'Fredoka',
    textAlign: 'center',

    fontSize: 25,
    lineHeight: 30,
    color: '#3E3689',
  },
});

export default MainScreen;

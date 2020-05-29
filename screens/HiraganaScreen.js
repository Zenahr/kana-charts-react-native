import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function HiraganaScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} data={props}>
      {data.map(element => {
        return (
          <Character
            key={element.japaneseChar}
            title={element.romajiChar}
            icon="md-play-circle"
            onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
          />
        )
      })}
    </ScrollView>
  );
}

function Character({ icon, japanese, romaji, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{japanese}</Text>
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{romaji}</Text>
        </View>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
      </View>
    </RectButton>
  );
}

const props = {
    element: {
      japaneseChar: "j",
      romajiChar: "i"
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    alignItems: "flex-end",
    marginRight: "21px"
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});

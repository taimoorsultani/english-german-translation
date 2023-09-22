import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {QuestionScreen} from '@testapp/screens';
import QuestionContextProvider from '@testapp/context/QuestionContext';

const App: React.FC = (): JSX.Element => (
  <QuestionContextProvider>
    <View style={styles.root}>
      <SafeAreaView style={styles.root}>
        <QuestionScreen />
      </SafeAreaView>
    </View>
  </QuestionContextProvider>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;

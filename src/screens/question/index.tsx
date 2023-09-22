import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {ShowQuestion} from '@testapp/components';
import {useQuestionContext} from '@testapp/context/QuestionContext';
import {style} from './style';

const QuestionScreen = () => {
  const {loading, currentQuestion, currentOption} = useQuestionContext();

  return (
    <View style={[style.root, loading ? style.center : style.end]}>
      {loading ? (
        <ActivityIndicator color={'white'} size={'large'} />
      ) : (
        <View style={style.container}>
          {currentQuestion && currentOption && (
            <ShowQuestion question={currentQuestion} option={currentOption} />
          )}
        </View>
      )}
    </View>
  );
};

export default QuestionScreen;

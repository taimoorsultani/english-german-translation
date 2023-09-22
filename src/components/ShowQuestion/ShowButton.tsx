import React from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';

import {buttonStyle} from './buttoStyle';

import {Answer} from '.';
import {FlagIcon} from '@testapp/assets';

interface IShowButton {
  correctAnswer: string;
  isCorrect: Answer;
  selectedAnswer: string;
  validateAnswer: () => void;
}

const ShowButton: React.FC<IShowButton> = ({
  correctAnswer,
  isCorrect,
  selectedAnswer,
  validateAnswer,
}) => {
  return (
    <View
      style={[
        buttonStyle.buttonWrapper,
        isCorrect === Answer.Correct && buttonStyle.wrapperCorrect,
        isCorrect === Answer.Wrong && buttonStyle.wrapperWrong,
      ]}>
      {isCorrect !== Answer.Initial && (
        <View style={buttonStyle.row}>
          {isCorrect === Answer.Correct && (
            <Text style={buttonStyle.label}>Great Job!</Text>
          )}
          {isCorrect === Answer.Wrong && (
            <Text style={buttonStyle.label}>
              Answer: <Text style={buttonStyle.answer}>{correctAnswer}</Text>
            </Text>
          )}
          <Image source={FlagIcon} style={buttonStyle.icon} />
        </View>
      )}
      <TouchableOpacity
        style={[
          buttonStyle.button,
          selectedAnswer
            ? buttonStyle.buttonEnabed
            : buttonStyle.buttonDisabled,
          isCorrect !== Answer.Initial && buttonStyle.buttonActive,
        ]}
        disabled={!selectedAnswer}
        onPress={validateAnswer}>
        <Text
          style={[
            buttonStyle.buttonText,
            isCorrect === Answer.Correct && buttonStyle.buttonTextCorrect,
            isCorrect === Answer.Wrong && buttonStyle.buttonTextWrong,
          ]}>
          {isCorrect === Answer.Initial ? 'Check Answer' : 'Continue'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShowButton;

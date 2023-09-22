import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {Option} from '@testapp/types';

import {style} from './style';
import {Answer} from '.';

type IOption = {
  isCorrect: Answer;
  selectedAnswer: string;
  option: Option;
  handleAnswer: (answer: string) => void;
};

type IShowOption = {
  isCorrect: Answer;
  selectedAnswer: string;
  item: string;
  handleAnswer: (answer: string) => void;
};

const Options: React.FC<IOption> = ({
  isCorrect,
  selectedAnswer,
  option,
  handleAnswer,
}) => (
  <View style={style.row}>
    {option.options.map((item: string) => (
      <ShowOption
        isCorrect={isCorrect}
        selectedAnswer={selectedAnswer}
        item={item}
        key={item}
        handleAnswer={handleAnswer}
      />
    ))}
  </View>
);

const ShowOption: React.FC<IShowOption> = ({
  isCorrect,
  selectedAnswer,
  item,
  handleAnswer,
}) => (
  <TouchableOpacity
    disabled={
      isCorrect !== Answer.Initial ||
      selectedAnswer.toLowerCase().trim() === item.toLowerCase().trim()
    }
    style={[
      style.option,
      selectedAnswer.toLowerCase().trim() === item.toLowerCase().trim()
        ? style.disableCurrent
        : isCorrect !== Answer.Initial
        ? style.disableAll
        : {},
    ]}
    onPress={() => handleAnswer(item)}>
    <Text style={style.optionText}>{item}</Text>
  </TouchableOpacity>
);

const ShowOptions = React.memo(Options);

export default ShowOptions;

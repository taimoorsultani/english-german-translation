import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Tooltip from 'react-native-walkthrough-tooltip';

import {style} from './style';
import {Answer} from '.';

interface IShowGermanSentence {
  isCorrect: Answer;
  selectedAnswer: string;
  sentence: string[];
  englishSentence: string[];
}

interface IShowGermanWord {
  isCorrect: Answer;
  german: string;
  english: string;
  index: number;
  selectedAnswer: string;
}

const ShowSentence: React.FC<IShowGermanSentence> = ({
  isCorrect,
  selectedAnswer,
  sentence,
  englishSentence,
}) => {
  return (
    <View style={style.row}>
      {sentence.map((word: string, index: number) => (
        <ShowGermanWord
          key={index}
          isCorrect={isCorrect}
          index={index}
          german={word}
          english={englishSentence[index]}
          selectedAnswer={selectedAnswer}
        />
      ))}
    </View>
  );
};

const ShowGermanWord: React.FC<IShowGermanWord> = ({
  isCorrect,
  german,
  english,
  index,
  selectedAnswer,
}) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const toggle = () => setShowTooltip(t => !t);

  const getStyle = () => {
    if (german) {
      return {};
    }
    if (isCorrect === Answer.Correct) {
      return style.correctAnswer;
    }
    if (isCorrect === Answer.Wrong) {
      return style.wrongAnswer;
    }
    if (selectedAnswer) {
      return style.selectedAnswer;
    }
    return {};
  };

  return (
    <Tooltip
      isVisible={showTooltip}
      content={<Text>{english}</Text>}
      placement="top"
      onClose={toggle}>
      <TouchableOpacity onPress={toggle} disabled={!german} style={getStyle()}>
        <Text
          style={[
            style.word,
            style.normal,
            index === 0 ? style.transform : {},
            !german && selectedAnswer ? style.selectedAnswerText : {},
            !german && isCorrect !== Answer.Initial
              ? style.selectedAnswerHighlight
              : {},
          ]}>
          {german ? german : selectedAnswer ? selectedAnswer : '________'}
        </Text>
        {german && <View style={style.dottedBorder} />}
      </TouchableOpacity>
    </Tooltip>
  );
};

const ShowGermanSentence = React.memo(ShowSentence);

export default ShowGermanSentence;

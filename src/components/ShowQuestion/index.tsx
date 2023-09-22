import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import {Option, Question} from '@testapp/types';

import ShowEnglishSentence from './ShowEnglishSentence';
import ShowGermanSentence from './ShowGermanSentence';
import ShowOptions from './ShowOptions';

import {style} from './style';
import ShowButton from './ShowButton';
import {useQuestionContext} from '@testapp/context/QuestionContext';

interface IShowQuestion {
  question: Question;
  option: Option;
}

export enum Answer {
  Initial,
  Correct,
  Wrong,
}

const ShowQuestion: React.FC<IShowQuestion> = ({question, option}) => {
  const {loadNextQuestion} = useQuestionContext();

  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isCorrect, setCorrect] = useState<Answer>(Answer.Initial);

  useEffect(() => {
    setSelectedAnswer('');
    setCorrect(Answer.Initial);
  }, [question, option]);

  const handleAnswer = (answer: string): void => {
    setSelectedAnswer(answer.toLowerCase().trim());
  };

  const validateAnswer = () => {
    if (isCorrect === Answer.Initial) {
      setCorrect(
        selectedAnswer === option?.answer.toLowerCase().trim()
          ? Answer.Correct
          : Answer.Wrong,
      );
      return;
    }
    loadNextQuestion();
  };

  return (
    <View style={style.root}>
      <View style={style.container}>
        <Text style={style.heading}>Fill in the missing word</Text>
        <ShowEnglishSentence
          sentence={question.sentence.english}
          wordIndex={question.wordIndex}
        />
        <ShowGermanSentence
          isCorrect={isCorrect}
          selectedAnswer={selectedAnswer}
          sentence={question.sentence.german}
          englishSentence={question.sentence.english}
        />
        <ShowOptions
          isCorrect={isCorrect}
          selectedAnswer={selectedAnswer}
          option={option}
          handleAnswer={handleAnswer}
        />
      </View>
      <ShowButton
        correctAnswer={option.answer}
        selectedAnswer={selectedAnswer}
        isCorrect={isCorrect}
        validateAnswer={validateAnswer}
      />
    </View>
  );
};

export default ShowQuestion;

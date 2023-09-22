import React from 'react';
import {View, Text} from 'react-native';

import {style} from './style';

interface IShowEnglishSentence {
  sentence: string[];
  wordIndex: number;
}

const ShowSentence: React.FC<IShowEnglishSentence> = ({
  sentence,
  wordIndex,
}) => (
  <View style={style.row}>
    {sentence.map((word: string, index: number) => (
      <Text
        key={index}
        style={[
          style.word,
          index === 0 ? style.transform : {},
          wordIndex === index ? style.highLight : style.normal,
        ]}>
        {word}
      </Text>
    ))}
  </View>
);

const ShowEnglishSentence = React.memo(ShowSentence);

export default ShowEnglishSentence;

import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    gap: 29,
    paddingHorizontal: 22,
    paddingVertical: 40,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F0F0F0',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  word: {
    color: '#F0F0F0',
    fontSize: 23,
  },
  highLight: {
    fontWeight: '800',
    fontSize: 25,
    textDecorationLine: 'underline',
  },
  normal: {
    fontWeight: '400',
  },
  transform: {
    textTransform: 'capitalize',
  },
  dottedBorder: {
    paddingTop: 2,
    flex: 1,
    borderBottomWidth: 2,
    borderColor: 'white',
    borderStyle: 'dotted',
  },
  option: {
    minWidth: 150,
    backgroundColor: '#F0F0F0',
    padding: 21,
    margin: 12,
    borderRadius: 17,
  },
  disableCurrent: {
    backgroundColor: '#717D7E',
  },
  disableAll: {
    backgroundColor: '#909497',
  },
  optionText: {
    color: '#717D7E',
    fontSize: 23,
    fontWeight: '600',
    textAlign: 'center',
  },
  selectedAnswer: {
    backgroundColor: '#F0F0F0',
    padding: 11,
    borderRadius: 12,
  },
  correctAnswer: {
    backgroundColor: '#5DADE2',
    padding: 11,
    borderRadius: 12,
  },
  wrongAnswer: {
    backgroundColor: '#E74C3C',
    padding: 11,
    borderRadius: 12,
  },
  selectedAnswerText: {
    color: '#5D6D7E',
    fontSize: 23,
    fontWeight: '600',
    textAlign: 'center',
  },
  selectedAnswerHighlight: {
    color: '#F0F0F0',
    fontSize: 23,
    fontWeight: '600',
    textAlign: 'center',
  },
});

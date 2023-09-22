import {StyleSheet, Platform} from 'react-native';

export const buttonStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingHorizontal: 4,
  },
  label: {
    fontSize: 22,
    fontWeight: '600',
    color: '#F0F0F0',
  },
  answer: {
    fontWeight: '400',
  },
  icon: {
    width: 19,
    height: 19,
  },
  buttonWrapper: {
    paddingVertical: 35,
    paddingHorizontal: 25,
  },
  wrapperCorrect: {
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    backgroundColor: '#5DADE2',
  },
  wrapperWrong: {
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    backgroundColor: '#E74C3C',
  },
  button: {
    paddingVertical: 23,
    borderRadius: 25,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  buttonDisabled: {
    backgroundColor: '#808B96',
  },
  buttonEnabed: {
    backgroundColor: '#5DADE2',
  },
  buttonActive: {
    backgroundColor: '#F0F0F0',
  },
  buttonText: {
    textAlign: 'center',
    color: '#F0F0F0',
    fontSize: 18,
  },
  buttonTextCorrect: {
    color: '#5DADE2',
  },
  buttonTextWrong: {
    color: '#E74C3C',
  },
});

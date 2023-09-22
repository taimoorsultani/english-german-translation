import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';
import {Alert} from 'react-native';

import {Option, Question} from '@testapp/types';
import FirebaseApi from '@testapp/utils/firestore';
import {COLLECTIONS} from '@testapp/utils/collections';

interface QuestionContextType {
  loading: boolean;
  currentQuestion: Question | undefined;
  currentOption: Option | undefined;
  loadNextQuestion: () => void;
}

interface QuestionContextProviderProps {
  children: ReactNode;
}

const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined,
);

export const useQuestionContext = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error(
      'useQuestionContext must be used within a QuestionContextProvider',
    );
  }
  return context;
};

const QuestionContextProvider: React.FC<QuestionContextProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [options, setOptions] = useState<Option[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [currentOption, setCurrentOption] = useState<Option>();

  const showError = () => {
    Alert.alert('Error', 'An error occurred. Please try again later.', [
      {
        text: 'OK',
      },
    ]);
  };

  useEffect(() => {
    if (options && currentQuestion) {
      const option = options.find(
        (item: Option) => item.questionId === currentQuestion.id,
      );
      if (option) {
        setCurrentOption(option);
      }
    }
  }, [currentQuestion, options]);

  const loadData = useCallback(async () => {
    try {
      const [questionList, optionList] = await Promise.all([
        FirebaseApi.GetAll<Question>(COLLECTIONS.questions),
        FirebaseApi.GetAll<Option>(COLLECTIONS.options),
      ]);
      if (Array.isArray(questionList) && questionList.length > 0) {
        setQuestions(questionList);
        setCurrentQuestion(questionList[0]);
      }
      if (Array.isArray(optionList) && optionList.length > 0) {
        setOptions(optionList);
      }
      setLoading(false);
    } catch (_err) {
      showError();
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const loadNextQuestion = () => {
    const index: number =
      questions.findIndex(
        (question: Question) => question.id === currentQuestion?.id,
      ) + 1;
    if (index < questions.length) {
      setCurrentQuestion(questions[index]);
    }
  };

  return (
    <QuestionContext.Provider
      value={{loading, currentQuestion, currentOption, loadNextQuestion}}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;

export type Question = {
  id: string;
  sentence: Sentence;
  wordIndex: number;
};

type Sentence = {
  english: string[];
  german: string[];
};

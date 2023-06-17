export type QuizQuestion = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type Quiz={
    question:string
    answer:string
    options:string[]
    correct_answer:string
}

export type questionPropsType = {
  question: string
  options: string[]
  callback: (e:React.FormEvent<EventTarget>, ans:string) => void
}





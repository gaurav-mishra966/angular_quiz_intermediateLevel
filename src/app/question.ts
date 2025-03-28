export interface Question {
  id: number;
  question: string;
  incorrectOptions: string[];
  correctAnswer: string;
}

const question: Question[] = [
  {
    id: 1,
    question: 'What is the capital of India?',
    incorrectOptions: ['Noida', 'Haridwar', 'Lucknow'],
    correctAnswer: 'New Delhi',
  },
  {
    id: 2,
    question: 'Which is the largest ocean?',
    incorrectOptions: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
    correctAnswer: 'Pacific Ocean',
  },
  {
    id: 3,
    question: 'Who developed the theory of relativity?',
    incorrectOptions: ['Isaac Newton', 'Nikola Tesla', 'Galileo Galilei'],
    correctAnswer: 'Albert Einstein',
  },
  {
    id: 4,
    question: 'What is the speed of light?',
    incorrectOptions: ['300,000 km/s', '400,000 km/s', '500,000 km/s'],
    correctAnswer: '299,792 km/s',
  },
  {
    id: 5,
    question: 'Who is known as the father of computers?',
    incorrectOptions: ['Alan Turing', 'Charles Babbage', 'Steve Jobs'],
    correctAnswer: 'Charles Babbage',
  },
  {
    id: 6,
    question: 'What is the chemical symbol for water?',
    incorrectOptions: ['CO2', 'O2', 'NaCl'],
    correctAnswer: 'H2O',
  },
  {
    id: 7,
    question: 'Which planet is known as the Red Planet?',
    incorrectOptions: ['Venus', 'Earth', 'Saturn'],
    correctAnswer: 'Mars',
  },
  {
    id: 8,
    question: 'Which is the longest river in the world?',
    incorrectOptions: ['Amazon River', 'Yangtze River', 'Mississippi River'],
    correctAnswer: 'Nile River',
  },
];

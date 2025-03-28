import { Injectable, signal, Signal } from '@angular/core';
import { Question } from './question'; // Ensure this import points to the correct file
import { SIGNAL } from '@angular/core/primitives/signals';
import { log } from 'console';

@Injectable({
  providedIn: 'root',
})
export class QuestionbankService {
  readonly questionsSignal = signal<Question[]>([]);
  private suffledOptions = signal<string[]>([]);
  constructor() {
    // Populate the questions when the service is initialized
    this.questionsSignal.set([
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
        incorrectOptions: [
          'Amazon River',
          'Yangtze River',
          'Mississippi River',
        ],
        correctAnswer: 'Nile River',
      },
    ]);
  }

  // Method to get questions
  getQuestions() {
    console.log('Getting questions...', this.questionsSignal);
    return this.questionsSignal;
  }

  // Shuffle options for a specific question by id
  shuffleOptions(id: number) {
    const questions = this.questionsSignal(); // Get the current list of questions
    const question = questions.find((q) => q.id === id);

    if (question) {
      // Shuffle the options (including the correct answer)
      const allOptions = [question.correctAnswer, ...question.incorrectOptions];
      question.incorrectOptions = this.shuffleArray(allOptions);
    }
  }

  // Helper function to shuffle the options using Fisher-Yates
  shuffleArray(arr: string[]): string[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    console.log('Shuffled options:', arr);
    return arr;
  }
}

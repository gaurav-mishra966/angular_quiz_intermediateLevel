import { Component, inject, OnInit, signal } from '@angular/core';
import { QuestionbankService } from '../questionbank.service';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions.component.html',
  // styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  private questionBankService = inject(QuestionbankService);
  questions$ = this.questionBankService.getQuestions();

  ngOnInit() {
    this.questions$ = this.questionBankService.getQuestions();
  }

  getOptions(id: number) {
    const currQuestion = this.questions$().filter((x) => x.id === id);
    let options = [
      ...currQuestion[0].incorrectOptions,
      currQuestion[0].correctAnswer,
    ];
    return this.questionBankService.shuffleArray(options);
  }

  selectAnswer(id: number, selectAnswer: string) {
    console.log('Selected answer:', selectAnswer);
    console.log('For question id:', id);
    // this.questionBankService.selectAnswer(id, selectAnswer);
  }
}

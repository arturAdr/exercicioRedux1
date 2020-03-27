import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from './reducer/counter.state';
import { increment, decrement, reset } from './reducer/counter.actions';
import { Observable } from 'rxjs';
import { selectCounter } from './reducer/counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter$: Observable<number>;

  constructor(private store: Store<counterState>) {
    this.counter$ = this.store.select(selectCounter)
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}

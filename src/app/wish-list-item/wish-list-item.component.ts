import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import events from '../../shared/services/EventService';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wish!: WishItem;
  @Input() fulfilled!: boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  removeWish() {
    events.emit('removeWish', this.wish);
  }

  get cssClasses() {
    return { 'strikeout text-muted': this.wish.isComplete };
  }

  toggleFulfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}

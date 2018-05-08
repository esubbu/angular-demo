import { Component ,OnChanges,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'star-comp',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class starComponent implements OnChanges {

  @Input() rating: number;
  starWidth: number;

  @Output() ratingClicked: EventEmitter<String> = new EventEmitter<String>();

  ngOnChanges():void{
    this.starWidth = this.rating * 86 / 5;
    //console.log(this.starWidth + "======" + this.rating);
  }

  onStar(): void {

    this.ratingClicked.emit('The Movie Rating is '+ this.rating);
  }
}

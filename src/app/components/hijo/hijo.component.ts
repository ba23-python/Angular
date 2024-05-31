import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-hijo', 
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() name: string = "hijo"
  @Input() contador: number = 0
  
  

}

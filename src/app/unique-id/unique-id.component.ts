import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';

@Component({
  selector: 'app-unique-id',
  templateUrl: './unique-id.component.html',
  styleUrls: ['./unique-id.component.scss'],
  standalone: true
})
export class UniqueIdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public readonly uuid: string = uuidv4();


  public readonly uuidv = uuidv5('uqcode2', uuidv5.URL);

}

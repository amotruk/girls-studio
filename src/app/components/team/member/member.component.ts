import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  host: {'class': 'col-lg-6 d-flex justify-content-center text-center'}
})
export class MemberComponent implements OnInit {
  @Input() name: string = "";
  @Input() photo: string = "";
  @Input() facebook: string = "";
  @Input() instagram: string = "";
  @Input() telegram: string = "";

  constructor() { }

  ngOnInit(): void {
  }
}

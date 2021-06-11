import { Component, OnInit } from '@angular/core';
import {OgrenciService} from '../../services/ogrenci.service';
import {Ogrenci} from '../../model/ogrenci';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor(private service: OgrenciService,
              private route: ActivatedRoute,
              private messageService: MessageService) { }

  ogrenci = new Ogrenci();

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = params.userId;
      this.service.getUserById(userId).subscribe(value => {
        this.ogrenci = value ;
      }, error => {
        console.log(error);
        this.messageService.errorMessage(error.toString(), 'HATA');
      });
    });
  }

}

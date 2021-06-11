import { Component, OnInit } from '@angular/core';
import {Ogrenci} from '../../model/ogrenci';
import {OgrenciService} from '../../services/ogrenci.service';
import {MessageService} from '../../services/message.service';
import {NgModel} from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';

@Component({
  selector: 'app-ogrenci-ekleme',
  templateUrl: './ogrenci-ekleme.component.html',
  styleUrls: ['./ogrenci-ekleme.component.css']
})
export class OgrenciEklemeComponent implements OnInit {

  constructor(private service: OgrenciService,
              private messageService: MessageService) { }
  employeeId = null;
  ogrenci = new Ogrenci();
  validated = false;

  ngOnInit(): void {
  }

  addEmployee(userForm: HTMLFormElement) {
    this.validated = true;
    if (!userForm.checkValidity()) {
      return;
    }
    if (this.ogrenci.firstName != null) {
      this.service.addEmployee(this.ogrenci).subscribe(value => {
          this.employeeId = value;
          if (this.employeeId == null) {
            this.messageService.errorMessage('Kullanıcı oluştururken hala aldı.', 'HATA');
          } else {
            this.messageService.successMessage('Kullanıcı oluşturuldu.', 'Kullanıcı Ekle');
          }
        },
        err => {
          this.messageService.errorMessage(err.error.message, err.error.error);
        });
    } else {
      this.messageService.errorMessage('Kayıt başarısız.','HATA');
    }
  }


  validate(ngModel: NgModel) {
    return ngModel.invalid && (ngModel.touched || this.validated);
  }
}





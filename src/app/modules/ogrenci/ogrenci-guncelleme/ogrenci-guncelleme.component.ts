import { Component, OnInit } from '@angular/core';
import {OgrenciService} from '../../services/ogrenci.service';
import {Ogrenci} from '../../model/ogrenci';
import { Router, ActivatedRoute } from '@angular/router';
import {MessageService} from '../../services/message.service';
import {NgModel} from '@angular/forms';


@Component({
  selector: 'app-ogrenci-guncelleme',
  templateUrl: './ogrenci-guncelleme.component.html',
  styleUrls: ['./ogrenci-guncelleme.component.css']
})
export class OgrenciGuncellemeComponent implements OnInit {


  constructor(private service: OgrenciService,
              private route: ActivatedRoute,
              private messageService: MessageService,
              private router: Router) {
  }

  ogrenci = new Ogrenci();
  employeeId = null  ;
  validated = false;

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const userId = params.userId;
      this.service.getUserById(userId).subscribe(value => {
        this.ogrenci = value ;
      }, error => {
        console.log(error);
      });
    });
  }


  updateEmployee(userForm: HTMLFormElement) {
    this.validated = true;
    if (!userForm.checkValidity()) {
      return;
    }
    if (this.ogrenci.firstName || this.ogrenci.lastName) {
      this.service.updateEmployee(this.ogrenci).subscribe(value => {
        this.employeeId = value;
        if (this.employeeId == null) {
          this.messageService.errorMessage('Güncelleme başarısız.', 'HATA');
        } else {
          this.messageService.successMessage('Güncelleme başarılı.', 'GÜNCELLEME');
          this.router.navigateByUrl('/ogrenci-listeleme');
        }
      });
    } else {
      this.messageService.errorMessage('Güncelleme başarısız.', 'HATA');
    }
  }

  validate(ngModel: NgModel) {
    return ngModel.invalid && (ngModel.touched || this.validated);
  }
}

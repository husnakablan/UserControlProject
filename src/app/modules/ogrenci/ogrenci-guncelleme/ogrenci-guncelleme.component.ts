import { Component, OnInit } from '@angular/core';
import {OgrenciService} from '../../services/ogrenci.service';
import {Ogrenci} from '../../model/ogrenci';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ogrenci-guncelleme',
  templateUrl: './ogrenci-guncelleme.component.html',
  styleUrls: ['./ogrenci-guncelleme.component.css']
})
export class OgrenciGuncellemeComponent implements OnInit {

  constructor(private service: OgrenciService,
              private route: ActivatedRoute) {
  }

  ogrenci = new Ogrenci();
  employeeId = null  ;


  ngOnInit(): void {
   // this.route.queryParams.subscribe(params => {
   //   console.log('asd', params.page);
   //   console.log('asd', params);
   // });

    this.route.params.subscribe(params => {
      const userId = params.userId;
      this.service.getUserById(userId).subscribe(value => {
        this.ogrenci = value ;
      }, error => {
        console.log(error);
      });
    });
  }


  updateEmployee() {
    if (this.ogrenci.firstName || this.ogrenci.firstName) {
      this.service.updateEmployee(this.ogrenci).subscribe(value => {
        this.employeeId = value;
        if (this.employeeId == null) {
          alert('kayıt başarısız1');
        } else {
          alert('kayıt başarılı3');
        }boo
      });
    } else {
      alert('kayıt başarısız2');
    }
  }


}

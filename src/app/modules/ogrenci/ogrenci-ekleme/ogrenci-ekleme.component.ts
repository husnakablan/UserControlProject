import { Component, OnInit } from '@angular/core';
import {Ogrenci} from '../../model/ogrenci';
import {OgrenciService} from '../../services/ogrenci.service';


@Component({
  selector: 'app-ogrenci-ekleme',
  templateUrl: './ogrenci-ekleme.component.html',
  styleUrls: ['./ogrenci-ekleme.component.css']
})
export class OgrenciEklemeComponent implements OnInit {

  constructor(private service: OgrenciService) { }
  employeeId = null  ;
  ogrenci = new Ogrenci();

  ngOnInit(): void {
  }

  addEmployee() {
    if (this.ogrenci.firstName != null) {
      this.service.addEmployee(this.ogrenci).subscribe(value => {
        this.employeeId = value;
        if (this.employeeId == null) {
          alert('kayıt başarısız1');
        } else {
          alert('kayıt başarılı3');
        }
      });
    } else {
      alert('kayıt başarısız2');
    }
  }



}





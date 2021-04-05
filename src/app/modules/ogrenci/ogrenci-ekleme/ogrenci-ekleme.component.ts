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

  ogrenci = new Ogrenci();

  ngOnInit(): void {
  }

  addEmployee() {
    if (  this.ogrenci.firstName != null ) {
        employeeId = number ;
        employeeId = this.service.addEmployee(this.ogrenci);
       if ( employeeId = ! null)
       {
         alert('kayıt başarılı');
       }else{
         alert('kayıt başarısız123');
       }

    } else {
      alert('kayıt başarısız123');
    }
  }



}





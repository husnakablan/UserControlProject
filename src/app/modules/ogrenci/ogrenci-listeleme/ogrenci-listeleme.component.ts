import { Component, OnInit } from '@angular/core';
import {OgrenciService} from '../../services/ogrenci.service';
import {Ogrenci} from '../../model/ogrenci';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-ogrenci-listeleme',
  templateUrl: './ogrenci-listeleme.component.html',
  styleUrls: ['./ogrenci-listeleme.component.css']
})
export class OgrenciListelemeComponent implements OnInit {

  constructor(private service: OgrenciService) { }

  ogrenciFilter = new Ogrenci ();
  ogrenciList: Ogrenci[] ;

  ngOnInit(): void {
    this.service.listele().subscribe(value => {
      console.log(value);
      this.ogrenciList = value ;
    });
  }

  public selectUsers(event: any, user: Ogrenci) {
    console.log('seçim doğru' + JSON.stringify(user));
  }

  public sorgulamaYap() {
    this.service.sorgula(this.ogrenciFilter)
      .subscribe( value => {
      this.ogrenciList = value ;
    });
  }


  public temizle() {
    this.ogrenciFilter = new Ogrenci();
  }
}

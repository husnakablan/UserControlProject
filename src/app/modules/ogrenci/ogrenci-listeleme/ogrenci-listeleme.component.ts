import { Component, OnInit } from '@angular/core';
import {OgrenciService} from '../../services/ogrenci.service';
import {Ogrenci} from '../../model/ogrenci';
import {Router} from '@angular/router';
import {ConfirmDialogComponent} from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-ogrenci-listeleme',
  templateUrl: './ogrenci-listeleme.component.html',
  styleUrls: ['./ogrenci-listeleme.component.css']
})
export class OgrenciListelemeComponent implements OnInit {

  constructor(private service: OgrenciService,
              private router: Router) { }

  ogrenciList: Ogrenci[];
  pageOfOgrenci: Array<Ogrenci>;
  ogrenciFilter = new Ogrenci();

  ngOnInit(): void {
    this.service.listele().subscribe(value => {
      console.log(value);
      this.ogrenciList = value ;
    });
  }

  onChangePage(pageOfOgrenci: Array<any>) {
    this.pageOfOgrenci = pageOfOgrenci;
  }

  selectUsers(event: any, user: Ogrenci) {
    console.log('seçim doğru' + JSON.stringify(user));
  }

  navigateForUpdate(id: number) {
    this.router.navigateByUrl('/ogrenci-guncelleme/' + id);
  }

  deleteUser(user: Ogrenci){

    // let's call our modal window
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: {
        title: 'Are you sure?',
        message: 'You are about to delete user '}
    });

    dialogRef.afterClosed().subscribe(result => {
      alert(`Dialog result: ${result}`);
    })

    this.service.deleteUser(user).subscribe(value => {
      console.log('seçim doğru' + JSON.stringify(user));
      alert('Kullanıcı başarılı bir şekilde silindi');
      this.sorgulamaYap();
    }, error => {
      alert('Kullanıcı hata aldı' + JSON.stringify(error));
    });
  }

  sorgulamaYap() {
    this.service.sorgula(this.ogrenciFilter)
      .subscribe( value => {
      this.ogrenciList = value ;
    });
  }

  temizle() {
    this.ogrenciFilter = new Ogrenci();
  }
}

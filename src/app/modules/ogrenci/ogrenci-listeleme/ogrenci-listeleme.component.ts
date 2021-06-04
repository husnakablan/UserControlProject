import { Component, OnInit } from '@angular/core';
import {OgrenciService} from '../../services/ogrenci.service';
import {Ogrenci} from '../../model/ogrenci';
import {Router} from '@angular/router';
import {ConfirmDialogComponent} from '../../components/confirm-dialog/confirm-dialog.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-ogrenci-listeleme',
  templateUrl: './ogrenci-listeleme.component.html',
  styleUrls: ['./ogrenci-listeleme.component.css']
})
export class OgrenciListelemeComponent implements OnInit {

  constructor(private service: OgrenciService,
              private router: Router,
              private modalService: NgbModal,
              private messageService: MessageService) { }

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

  navigateForView(id: number) {
    this.router.navigateByUrl('/user-view/' + id);
  }

  deleteUserConfirm(user: Ogrenci){
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.title = 'Kullanıcı Silme';
    modalRef.componentInstance.message = 'Bu kullanıcıyı silmek istediğinize emin misiniz?';
    modalRef.componentInstance.confirm.subscribe(() => {
      this.deleteUser(user);
    });
  }

   private deleteUser(user: Ogrenci){
    this.service.deleteUser(user).subscribe(value => {

    this.messageService.successMessage('Kullanıcı başarılı bir şekilde silindi', 'Kullanıcı Silme');
    this.sorgulamaYap();
    }, err => {
      this.messageService.errorMessage(err.toString(), 'Hata');
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
    this.sorgulamaYap();
  }
}

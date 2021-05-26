import { Component, OnInit, Inject } from '@angular/core';

export interface DialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  onConfirm(): void {
  }

  onDismiss(): void {
  }
}

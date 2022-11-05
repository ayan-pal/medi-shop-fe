import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-past-order-dialog',
  templateUrl: './past-order-dialog.component.html',
  styleUrls: ['./past-order-dialog.component.scss']
})
export class PastOrderDialogComponent implements OnInit {
  constructor(
    public user: UserService,
    public dialogRef: MatDialogRef<PastOrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log('Data in PastOrderDialogComponent', this.data);
  }
}

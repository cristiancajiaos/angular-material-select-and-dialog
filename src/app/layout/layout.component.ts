import { DialogContentComponent } from './../shared/dialog-content/dialog-content.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const currentDialog = this.dialog.open(DialogContentComponent);

    currentDialog.afterClosed().subscribe(result => {
      console.log(`Result: ${result}`);
    });
  }

}

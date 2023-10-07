import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {Lead} from "../../interfaces/lead";
import {LeadsService} from "../../services/leads.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-potential-duplicates-list',
  templateUrl: './potential-duplicates-list.component.html',
  styleUrls: ['./potential-duplicates-list.component.scss']
})
export class PotentialDuplicatesListComponent implements OnChanges, OnInit {
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'cell_phone', 'home_phone', 'source', 'button']
  @Input() potentialDuplicates: any = []
  dataSource: any = new MatTableDataSource<Lead>([]);
  selection = new SelectionModel<Lead>(true, []);
  @Input() lead!: Lead;

  constructor(private _leadsService: LeadsService, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<Lead>(this.potentialDuplicates);
  }


  savePotentialDuplicates(lead_id: string) {
    this.lead.duplicate_of = lead_id
    this._leadsService.saveDuplicates(this.lead.lead_id, this.lead).subscribe(res => {
      this._snackBar.open('Duplicate Of Updated Successfully!', 'close', {
        horizontalPosition: 'end',
        verticalPosition: 'top',

      });
    })
  }
}


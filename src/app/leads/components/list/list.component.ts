import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {LeadsService} from "../../services/leads.service";
import {Lead} from "../../interfaces/lead";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource: Lead[] = [];
  columnsToDisplay = ['first_name', 'last_name', 'email', 'cell_phone', 'home_phone', 'source'];
  columnsHeaders = ['First Name', 'Last Name', 'Email', 'Cell Phone', 'Home Phone', 'source'];

  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: any | null;
  potentialDuplicates: Lead[] = []

  constructor(private _leadsService: LeadsService) {
  }

  ngOnInit() {
    this.getLeads()
  }

  getLeads() {
    this._leadsService.getLeads().subscribe(res => {
      this.dataSource = res
    })
  }

  getPotentialDuplicates(lead_id: string) {
    this._leadsService.getPotentialDuplicates(lead_id).subscribe(res => {
      this.potentialDuplicates = []
      this.potentialDuplicates = this.dataSource.filter((ele: any) => {
        return res.includes(ele.lead_id)
      })
    })
  }

}



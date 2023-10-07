import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lead} from "../interfaces/lead";

@Injectable({
  providedIn: 'root'
})
export class LeadsService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  getLeads(): Observable<Lead[]> {
    return this.http.get<Lead[]>(`${this.apiBaseUrl}/leads`);
  }

  getPotentialDuplicates(leadId: string): Observable<Lead[]> {
    return this.http.get<Lead[]>(`${this.apiBaseUrl}/leads/${leadId}/potential-duplicates`);
  }

  saveDuplicates(leadId: string, duplicateIds: Lead): Observable<any> {
    return this.http.put<any>(`${this.apiBaseUrl}/leads/${leadId}`, duplicateIds);
  }
}

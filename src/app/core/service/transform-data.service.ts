import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransformDataService {
  // Private de ben ngoai ko dung toi cai  nay dc
  private data = new BehaviorSubject(null);
  public asData = this.data.asObservable();
  constructor() {}
  public transformData(thamso) {
    // next: de Truyen Tham so di
    this.data.next(thamso);
  }
}

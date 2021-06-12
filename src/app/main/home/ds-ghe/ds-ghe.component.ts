import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ds-ghe',
  templateUrl: './ds-ghe.component.html',
  styleUrls: ['./ds-ghe.component.scss'],
})
export class DsGheComponent implements OnInit {
  dsGhe: any[] = [
    { id: 1, name: 'số 1', price: 100, booked: true },
    { id: 2, name: 'số 2', price: 100, booked: true },
    { id: 3, name: 'số 3', price: 100, booked: true },
    { id: 4, name: 'số 4', price: 100, booked: false },
    { id: 5, name: 'số 5', price: 100, booked: false },
    { id: 6, name: 'số 6', price: 100, booked: false },
    { id: 7, name: 'số 7', price: 100, booked: false },
    { id: 8, name: 'số 7', price: 100, booked: false },
    { id: 9, name: 'số 9', price: 100, booked: false },
    { id: 10, name: 'số 10', price: 100, booked: false },
    { id: 11, name: 'số 11', price: 100, booked: false },
    { id: 12, name: 'số 12', price: 100, booked: true },
    { id: 13, name: 'số 13', price: 100, booked: false },
    { id: 14, name: 'số 14', price: 100, booked: false },
    { id: 15, name: 'số 15', price: 100, booked: false },
    { id: 16, name: 'số 16', price: 100, booked: true },
    { id: 17, name: 'số 17', price: 100, booked: false },
    { id: 18, name: 'số 18', price: 100, booked: false },
    { id: 19, name: 'số 19', price: 100, booked: false },
    { id: 20, name: 'số 20', price: 100, booked: false },
    { id: 21, name: 'số 21', price: 100, booked: false },
    { id: 22, name: 'số 22', price: 100, booked: false },
    { id: 23, name: 'số 23', price: 100, booked: false },
    { id: 24, name: 'số 24', price: 100, booked: false },
    { id: 25, name: 'số 25', price: 100, booked: false },
    { id: 26, name: 'số 26', price: 100, booked: false },
    { id: 27, name: 'số 27', price: 100, booked: false },
    { id: 28, name: 'số 28', price: 100, booked: false },
    { id: 29, name: 'số 29', price: 100, booked: false },
    { id: 30, name: 'số 30', price: 100, booked: true },
    { id: 31, name: 'số 31', price: 100, booked: false },
    { id: 32, name: 'số 32', price: 100, booked: false },
    { id: 33, name: 'số 33', price: 100, booked: false },
    { id: 34, name: 'số 34', price: 100, booked: false },
    { id: 35, name: 'số 35', price: 100, booked: false },
    { id: 36, name: 'số 36', price: 100, booked: false },
    { id: 37, name: 'số 37', price: 100, booked: false },
    { id: 38, name: 'số 38', price: 100, booked: false },
    { id: 39, name: 'số 39', price: 100, booked: false },
    { id: 40, name: 'số 40', price: 100, booked: false },
    { id: 41, name: 'số 41', price: 100, booked: false },
    { id: 42, name: 'số 42', price: 100, booked: false },
    { id: 43, name: 'số 43', price: 100, booked: false },
    { id: 44, name: 'số 44', price: 100, booked: false },
    { id: 45, name: 'số 45', price: 100, booked: false },
    { id: 46, name: 'số 46', price: 100, booked: false },
    { id: 47, name: 'số 47', price: 100, booked: true },
    { id: 48, name: 'số 48', price: 100, booked: false },
    { id: 49, name: 'số 49', price: 100, booked: false },
    { id: 50, name: 'số 50', price: 100, booked: false },
    { id: 51, name: 'số 51', price: 100, booked: true },
    { id: 52, name: 'số 52', price: 100, booked: false },
    { id: 53, name: 'số 53', price: 100, booked: false },
    { id: 54, name: 'số 54', price: 100, booked: false },
    { id: 55, name: 'số 55', price: 100, booked: false },
    { id: 56, name: 'số 56', price: 100, booked: false },
    { id: 57, name: 'số 57', price: 100, booked: false },
    { id: 58, name: 'số 58', price: 100, booked: false },
    { id: 59, name: 'số 59', price: 100, booked: false },
    { id: 60, name: 'số 60', price: 100, booked: false },
    { id: 61, name: 'số 61', price: 100, booked: false },
    { id: 62, name: 'số 62', price: 100, booked: false },
    { id: 63, name: 'số 63', price: 100, booked: false },
    { id: 64, name: 'số 64', price: 100, booked: false },
    { id: 65, name: 'số 65', price: 100, booked: true },
    { id: 66, name: 'số 66', price: 100, booked: false },
    { id: 67, name: 'số 67', price: 100, booked: false },
    { id: 68, name: 'số 68', price: 100, booked: false },
    { id: 69, name: 'số 69', price: 100, booked: false },
    { id: 70, name: 'số 70', price: 100, booked: false },
  ];
  soGheDaDat: number = 0;
  soGheConLai: number = 0;
  tongTien: number = 0;
  // Ghe dag dat
  dsGheDangDat: any = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    for (let ghe of this.dsGhe) {
      if (!ghe.booked) {
        this.soGheConLai++;
      }
    }
  }
  // Phuong thuc Tinh Tong Tien sau khi dat ve
  tinhTongTien() {
    for (let ghe of this.dsGheDangDat) {
      this.tongTien += ghe.price;
      return this.tongTien;
    }
  }
  // Phuong thuc xac nhan khi click btn Confirm
  xacNhanBook() {
    alert('Thanks for your Booking!');
    this.router.navigateByUrl('/');
  }
  // Su Kien Dat ghe o Chat
  datGheParent(status, ghe) {
    console.log(status, ghe);
    if (status) {
      this.soGheDaDat++;
      this.soGheConLai--;
      this.dsGheDangDat.push(ghe);
    } else {
      this.soGheDaDat--;
      this.soGheConLai++;
      for (let index in this.dsGheDangDat) {
        if (this.dsGheDangDat[index].id === ghe.id) {
          this.dsGheDangDat.splice(parseInt(index), 1);
        }
      }
    }
    console.log(this.dsGheDangDat);
  }
}

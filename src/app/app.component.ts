import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shareholder-certificate';

  shareholderData = {
    shareholderId: '2563/0001',                                 // ทะเบียนผู้ถือหุ้น
    certificateId: '2563/0002',                                 // เลขที่ใบหุ้น
    title: 'นาย',                                               // คำนำหน้า
    firstName: 'ธีรศักดิ์',                                         // ชื่อ
    lastName: 'ทับฤทธิ์',                                         // นามสกุล
    numShare: 100,                                              // จำนวนหุ้น
    valueShare: 10000,                                          // ค่าหุ้น
    registerDate: '2021-05-14T17:00:00.000+00:00'               // ISO Date
  }


  getThaiDate(date): string {
    let d = new Date(date);
    let month = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
                  'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    return `${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()+543}`
  }
}

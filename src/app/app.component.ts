import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'shareholder-certificate';

  @ViewChild('certificate') certificate: ElementRef;
  @ViewChild('canvas') canvas:ElementRef;
  @ViewChild('downloadLink') downloadLink:ElementRef;

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


  onDownload() {
    html2canvas(this.certificate.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/jpg');
      this.downloadLink.nativeElement.download = `${this.shareholderData.certificateId}_${this.shareholderData.firstName} ${this.shareholderData.lastName}.jpg`;
      this.downloadLink.nativeElement.click();
    })
  }
}

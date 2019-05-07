import { AccService } from './../service/acc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {
  emailRecovery;
  isSubmit = false;
  res;
  constructor(private accSer:AccService) { }

  ngOnInit() {
  }

  recovery() {
    this.accSer.recoveryPass(this.emailRecovery).subscribe(result => {
      this.res = result;
      this.isSubmit = true;
    })
  }

}

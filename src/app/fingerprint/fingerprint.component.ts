import {Component, Input, OnInit} from '@angular/core';
import * as Fingerprint2 from 'fingerprintjs2'
import {DataService} from "../service/data.service";
@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.component.html',
  styleUrls: ['./fingerprint.component.css']
})
export class FingerprintComponent implements OnInit {

  constructor(private data: DataService) {

  }
  options = {};
  murmur = {key: 'hash', value: ''};
  ngOnInit(): void {
    setTimeout(() => {
      Fingerprint2.get(this.options, (components) => {
        let values = components.map(function (component) { return component.value })
        this.murmur.value = Fingerprint2.x64hash128(values.join(''), 31)
        components.push(this.murmur);
        console.log(this.murmur);
        // console.log(result);
        console.log(components);
        this.data.addHash(components);
        // let info = {
        //   fingerprint: result
        // };
      //
      //   // this.processFingerprint(info);
      })
      // Fingerprint2.get(this.options, function (components) {
      //   let values = components.map(function (component) { return component.value })
      //   let murmur = Fingerprint2.x64hash128(values.join(''), 31)
      //   console.log(murmur);
      // })
    }, 500)
  }
  // processFingerprint(data) {
  //   alert(data.fingerprint);
  // }


}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  items: any;
  selected = "";

  ngOnInit(): void {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    // @ts-ignore
    fetch("https://00efe5f2-9e2d-4bf6-ae56-f22664a1143f.mock.pstmn.io/app/api/urls", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.data)
        this.items = result.data.map((item: any) => {
          return {
            actual: item.url,
            hits: item.hits,
            tiny_url: item.aliases[0].tiny_url,
            alias: item.aliases[0].alias
          }
        })
      })
      .catch(error => console.log('error', error));
  }

  copyToClipboard(item: any) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      this.selected = item.tiny_url
      e.clipboardData?.setData('text/plain', (item.tiny_url));
      e.preventDefault();
      // @ts-ignore
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }
}

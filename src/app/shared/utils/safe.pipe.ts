import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) { }

  transform(value: any, type: string): any {

    if ("url" == type) {
      return this.sanitized.bypassSecurityTrustResourceUrl(value);
    }
    return this.sanitized.bypassSecurityTrustHtml(value);
  }

}

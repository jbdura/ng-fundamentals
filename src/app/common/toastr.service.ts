import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';



// declare let toastr :any
@Injectable()
export class ToastrServiceFeature {
  private toastr: any;
  success(message: string, title?: string) {
    this.toastr.success(message, title)
  }
  info(message: string, title?: string) {
    this.toastr.info(message, title)
  }
  warning(message: string, title?: string) {
    this.toastr.warning(message, title)
  }
  error(message: string, title?: string) {
    this.toastr.error(message, title)
  }
}

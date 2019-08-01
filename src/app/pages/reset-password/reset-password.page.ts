import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/user/auth.service";
import { ToastController } from "@ionic/angular";

import { from } from "rxjs";
import { async } from "q";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.page.html",
  styleUrls: ["./reset-password.page.scss"]
})
export class ResetPasswordPage implements OnInit {
  email;
  constructor(
    private authService: AuthService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  sendPressed() {
    this.authService.resetPassword(this.email).then(async () => {
      let toast = await this.toastController.create({
        message: "Password sucessfully ressetted",
        duration: 2000
      });
      toast.present();
    });
  }
}

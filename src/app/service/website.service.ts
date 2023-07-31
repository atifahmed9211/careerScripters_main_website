import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(
    public http: HttpClient
  ) { }
  validateEmail(email) {
    return this.http.get<{ status: string }>(
      "https://isitarealemail.com/api/email/validate",
      {
        params: { email: email },
        headers: {
          Authorization: "Bearer 48369ba3-266f-4292-8d52-c288b01c85a5",
        },
      })
  }
  sendMessage(userData) {
    var headers = {
      "accept": "application/json",
      "api-key": "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",
      "content-type": "application/json"
    }
    var data = {
      sender: {
        name: userData.name,
        email: userData.email
      },
      to: [
        {
          email: 'careerscripters@gmail.com'
        },
      ],
      subject:userData.subject,
      htmlContent:userData.message + "<br/><br/>Received From CareerScripters.com"
    }
    return this.http.post('https://api.sendinblue.com/v3/smtp/email', data, { headers: headers })
  }
}

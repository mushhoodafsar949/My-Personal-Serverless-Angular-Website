import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyerverification',
  templateUrl: './buyerverification.component.html',
  styleUrls: ['./buyerverification.component.css']
})

export class BuyerverificationComponent implements OnInit {

  strikeCheckout:any = null;

  constructor() { }

  ngOnInit() {
    this.stripePaymentGateway();
  }

  checkout(amount: number) {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'sk_test_51LM768KrBY1pXr2jx3EAnX3WvYFnWwHFgV25jlS6dfuhUcGo0vPzkLbvx24Jf8moZMe2sq4IC0LDxcdAPne8B29h00Uwyvc7Rr',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });

    strikeCheckout.open({
      name: 'RemoteStack',
      description: 'Payment widgets',
      amount: amount * 100
    });
  }

  stripePaymentGateway() {
    if(!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'sk_test_51LM768KrBY1pXr2jx3EAnX3WvYFnWwHFgV25jlS6dfuhUcGo0vPzkLbvx24Jf8moZMe2sq4IC0LDxcdAPne8B29h00Uwyvc7Rr',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment via stripe successfull!');
          }
        });
      }

      window.document.body.appendChild(scr);
    }
  }

}

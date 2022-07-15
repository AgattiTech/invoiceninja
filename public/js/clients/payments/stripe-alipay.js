/*! For license information please see stripe-alipay.js.LICENSE.txt */
(()=>{var e,t,n,r;function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=i((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"setupStripe",(function(){return r.stripeConnect?r.stripe=Stripe(r.key,{stripeAccount:r.stripeConnect}):r.stripe=Stripe(r.key),r})),c(this,"handle",(function(){var e={type:"alipay",amount:document.querySelector('meta[name="amount"]').content,currency:document.querySelector('meta[name="currency"]').content,redirect:{return_url:document.querySelector('meta[name="return-url"]').content}};document.getElementById("pay-now").addEventListener("click",(function(t){document.getElementById("pay-now").disabled=!0,document.querySelector("#pay-now > svg").classList.add("hidden"),document.querySelector("#pay-now > span").classList.remove("hidden"),r.stripe.createSource(e).then((function(e){if(e.hasOwnProperty("source"))return window.location=e.source.redirect.url;document.getElementById("pay-now").disabled=!1,document.querySelector("#pay-now > svg").classList.remove("hidden"),document.querySelector("#pay-now > span").classList.add("hidden"),this.errors.textContent="",this.errors.textContent=e.error.message,this.errors.hidden=!1}))}))})),this.key=t,this.stripeConnect=n,this.errors=document.getElementById("errors")}));new u(null!==(e=null===(t=document.querySelector('meta[name="stripe-publishable-key"]'))||void 0===t?void 0:t.content)&&void 0!==e?e:"",null!==(n=null===(r=document.querySelector('meta[name="stripe-account-id"]'))||void 0===r?void 0:r.content)&&void 0!==n?n:"").setupStripe().handle()})();
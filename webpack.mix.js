const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix.js("resources/js/app.js", "public/js")
    .js(
        "resources/js/clients/payment_methods/authorize-authorize-card.js",
        "public/js/clients/payment_methods/authorize-authorize-card.js"
    )
    .js(
        "resources/js/clients/payments/authorize-credit-card-payment.js",
        "public/js/clients/payments/authorize-credit-card-payment.js"
    )
    .js(
        "resources/js/clients/payments/forte-credit-card-payment.js",
        "public/js/clients/payments/forte-credit-card-payment.js"
    )
    .js(
        "resources/js/clients/payments/forte-ach-payment.js",
        "public/js/clients/payments/forte-ach-payment.js"
    )
    .js(
        "resources/js/clients/payments/stripe-ach.js",
        "public/js/clients/payments/stripe-ach.js"
    )
    .js(
        "resources/js/clients/invoices/action-selectors.js",
        "public/js/clients/invoices/action-selectors.js"
    )
    .js(
        "resources/js/clients/purchase_orders/action-selectors.js",
        "public/js/clients/purchase_orders/action-selectors.js"
    )
    .js(
        "resources/js/clients/purchase_orders/accept.js",
        "public/js/clients/purchase_orders/accept.js"
    )
    .js(
        "resources/js/clients/invoices/payment.js",
        "public/js/clients/invoices/payment.js"
    )
    .js(
        "resources/js/clients/payments/stripe-sofort.js",
        "public/js/clients/payments/stripe-sofort.js"
    )
    .js(
        "resources/js/clients/payments/stripe-alipay.js",
        "public/js/clients/payments/stripe-alipay.js"
    )
    .js(
        "resources/js/clients/payments/checkout-credit-card.js",
        "public/js/clients/payments/checkout-credit-card.js"
    )
    .js(
        "resources/js/clients/quotes/action-selectors.js",
        "public/js/clients/quotes/action-selectors.js"
    )
    .js(
        "resources/js/clients/quotes/approve.js",
        "public/js/clients/quotes/approve.js"
    )
    .js(
        "resources/js/clients/payments/stripe-credit-card.js",
        "public/js/clients/payments/stripe-credit-card.js"
    )
    .js(
        "resources/js/setup/setup.js",
        "public/js/setup/setup.js"
    )
    .js(
        "node_modules/card-js/card-js.min.js",
        "public/js/clients/payments/card-js.min.js"
    )
    .js(
        "resources/js/clients/shared/pdf.js",
        "public/js/clients/shared/pdf.js"
    )
    .js(
        "resources/js/clients/shared/multiple-downloads.js",
        "public/js/clients/shared/multiple-downloads.js"
    )
    .js(
        "resources/js/clients/linkify-urls.js",
        "public/js/clients/linkify-urls.js"
    )
    .js(
        "resources/js/clients/payments/braintree-credit-card.js",
        "public/js/clients/payments/braintree-credit-card.js"
    )
    .js(
        "resources/js/clients/payments/braintree-paypal.js",
        "public/js/clients/payments/braintree-paypal.js"
    )
    .js(
        "resources/js/clients/payments/wepay-credit-card.js",
        "public/js/clients/payments/wepay-credit-card.js"
    )
    .js(
        "resources/js/clients/payment_methods/wepay-bank-account.js",
        "public/js/clients/payment_methods/wepay-bank-account.js"
    )
    .js(
        "resources/js/clients/payments/paytrace-credit-card.js",
        "public/js/clients/payments/paytrace-credit-card.js"
    )
    .js(
        "resources/js/clients/payments/mollie-credit-card.js",
        "public/js/clients/payments/mollie-credit-card.js"
    )
    .js(
        "resources/js/clients/payments/eway-credit-card.js",
        "public/js/clients/payments/eway-credit-card.js"
    )
    .js(
        "resources/js/clients/payment_methods/braintree-ach.js",
        "public/js/clients/payment_methods/braintree-ach.js"
    )
    .js(
        "resources/js/clients/payments/square-credit-card.js",
        "public/js/clients/payments/square-credit-card.js"
    )
    .js(
        "resources/js/clients/statements/view.js",
        "public/js/clients/statements/view.js",
    )
    .js(
        "resources/js/clients/payments/razorpay-aio.js",
        "public/js/clients/payments/razorpay-aio.js"
    )
    .js(
        "resources/js/clients/payments/stripe-sepa.js",
        "public/js/clients/payments/stripe-sepa.js"
    )
    .js(
        "resources/js/clients/payment_methods/authorize-checkout-card.js",
        "public/js/clients/payment_methods/authorize-checkout-card.js"
    )
    .js(
        "resources/js/clients/payments/stripe-giropay.js",
        "public/js/clients/payments/stripe-giropay.js"
    )
    .js(
        "resources/js/clients/payments/stripe-acss.js",
        "public/js/clients/payments/stripe-acss.js"
    )
    .js(
        "resources/js/clients/payments/stripe-bancontact.js",
        "public/js/clients/payments/stripe-bancontact.js"
    )
    .js(
        "resources/js/clients/payments/stripe-becs.js",
        "public/js/clients/payments/stripe-becs.js"
    )
    .js(
        "resources/js/clients/payments/stripe-eps.js",
        "public/js/clients/payments/stripe-eps.js"
    )
    .js(
        "resources/js/clients/payments/stripe-ideal.js",
        "public/js/clients/payments/stripe-ideal.js"
    )
    .js(
        "resources/js/clients/payments/stripe-przelewy24.js",
        "public/js/clients/payments/stripe-przelewy24.js"
    )
    .js(
        "resources/js/clients/payments/stripe-browserpay.js",
        "public/js/clients/payments/stripe-browserpay.js"
    )
    .js("resources/js/clients/payments/stripe-fpx.js",
        "public/js/clients/payments/stripe-fpx.js")

mix.copyDirectory('node_modules/card-js/card-js.min.css', 'public/css/card-js.min.css');
mix.copyDirectory('node_modules/clipboard/dist/clipboard.min.js', 'public/vendor/clipboard.min.js');

mix.sass("resources/sass/app.scss", "public/css")
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("./tailwind.config.js")]
    });
mix.version();
mix.disableNotifications();

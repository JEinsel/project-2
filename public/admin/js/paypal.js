$(document).ready(function() {
  paypal
    .Buttons({
      createOrder: function(data, actions) {
        return actions.order.create({
          // eslint-disable-next-line camelcase
          purchase_units: [
            {
              // eslint-disable-next-line camelcase
              reference_id: "TEST_PRODUCT_01",
              amount: {
                value: "0.01"
              }
            }
          ]
        });
      },
      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          alert("Transaction completed by " + details.payer.name.given_name);
          console.log(data);
          console.log(details);
          // Call your server to save the transaction
          $.post({
            url: "/paypal",
            data: {
              orderID: data.orderID,
              payerID: data.payerID,
              payerEmail: details.payer.email_address,
              amount: details.purchase_units[0].amount.value,
              status: details.status,
              referenceId: details.purchase_units[0].reference_id
            }
          }).then(() => {
            if (details.status === "COMPLETED") {
              location.href = "/success";
            } else {
              location.href = "/error";
            }
          });
        });
      }
    })
    .render("#paypal-button-container");
});

$(".payment-list").click(function() {
  $(".pkp-payment-method__group").toggleClass("pkp-payment-method__group--show");
  $(".payment-list").toggleClass("payment-list--show");
  if ($(".pkp-payment-method__group").hasClass("pkp-payment-method__group--show")) {
    $(".payment-list").text("Скрыть все методы оплаты");
    $(".pkp-payment-method").css("backgroundColor", "#f7f5f3");
    $(".pkp-payment-method").css("marginTop", "16px");
    $(".pkp-payment-method").css("paddingTop", "10px");
  } else {
    $(".payment-list").text("Показать все методы оплаты");
    $(".pkp-payment-method").css("backgroundColor", "#fff");
    $(".pkp-payment-method").css("marginTop", 0);
    $(".pkp-payment-method").css("paddingTop", "27px");
  }
});
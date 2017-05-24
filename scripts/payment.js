$(".payment-list").click(function() {
  $(".pkp-payment-method__group").toggleClass("pkp-payment-method__group--show");
  $(".payment-list").toggleClass("payment-list--show");
  if ($(".pkp-payment-method__group").hasClass("pkp-payment-method__group--show")) {
    $(".payment-list").text("Скрыть все методы оплаты");
    $(".pkp-payment-method").css("backgroundColor", "#f7f5f3");
    $(".pkp-payment-method").css("marginTop", "16px");
    $(".pkp-payment-method").css("marginBottom", "27px");
    $(".pkp-payment-method").css("paddingTop", "12px");
    $(".payment-list--bg").show();
  } else {
    $(".payment-list").text("Показать все методы оплаты");
    $(".pkp-payment-method").css("backgroundColor", "#fff");
    $(".pkp-payment-method").css("marginTop", 0);
    $(".pkp-payment-method").css("marginBottom", "17px");
    $(".pkp-payment-method").css("paddingTop", "8px");
    $(".payment-list--bg").hide();
  }
});

$(".pkp-payment-method__search-button").click(function() {
  $(".pkp-payment-method__search-form").toggleClass("pkp-payment-method__search-form--show");
});

$(".pkp-payment-method__close-button").click(function() {
  $(".pkp-payment-method__search-form").toggleClass("pkp-payment-method__search-form--show");
  $(".pkp-payment-method__search-field").val("");
});
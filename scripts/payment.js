$(".payment-list").click(function() {
  $(".pkp-payment-method__group").toggleClass("pkp-payment-method__group--show");
  $(".payment-list").toggleClass("payment-list--show");
  if ($(".pkp-payment-method__group").hasClass("pkp-payment-method__group--show")) {
    $(".payment-list").text("Скрыть все методы оплаты");
    $(".pkp-payment-method").css("backgroundColor", "#f7f5f3");
    $(".pkp-payment-method--group").css("backgroundColor", "#f7f5f3");
    $(".pkp-payment-method").css("marginTop", "16px");
    $(".pkp-payment-method").css("marginBottom", "27px");
    $(".pkp-payment-method").css("paddingTop", "12px");
    $(".payment-list--bg").show();
  } else {
    $(".payment-list").text("Показать все методы оплаты");
    $(".pkp-payment-method").css("backgroundColor", "#fff");
    $(".pkp-payment-method--group").css("backgroundColor", "#fff");
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


$(".pkp-payment-method__content").click(function() {
  if ($("#pokupo_amount").val() == "") {
    $("#pokupo_amount").css("borderColor", "#fd5656");
    $("#pokupo_amount").css("borderWidth", "2px");
    $(".pkp-form__label--amount").addClass("pkp-form__label--invalid");
  } else {
    $("#pokupo_amount").css("borderColor", "#ccc");
    $("#pokupo_amount").css("borderWidth", "1px");
    $(".pkp-form__label--amount").removeClass("pkp-form__label--invalid");
  }

  if ($("#pokupo_email").val() == "") {
    $("#pokupo_email").css("borderColor", "#fd5656");
    $("#pokupo_email").css("borderWidth", "2px");
    $(".pkp-form__label--email").addClass("pkp-form__label--invalid");
  } else {
    $("#pokupo_email").css("borderColor", "#ccc");
    $("#pokupo_email").css("borderWidth", "1px");
    $(".pkp-form__label--email").removeClass("pkp-form__label--invalid");
  }
});

$("#pokupo_amount").blur(function() {
  if ($("#pokupo_amount").val() == "") {
    $("#pokupo_amount").css("borderColor", "#fd5656");
    $("#pokupo_amount").css("borderWidth", "2px");
    $(".pkp-form__label--amount").addClass("pkp-form__label--invalid");
  } else {
    $("#pokupo_amount").css("borderColor", "#ccc");
    $("#pokupo_amount").css("borderWidth", "1px");
    $(".pkp-form__label--amount").removeClass("pkp-form__label--invalid");
  }
});

$("#pokupo_email").blur(function() {
  if ($("#pokupo_email").val() == "") {
    $("#pokupo_email").css("borderColor", "#fd5656");
    $("#pokupo_email").css("borderWidth", "2px");
    $(".pkp-form__label--email").addClass("pkp-form__label--invalid");
  } else {
    $("#pokupo_email").css("borderColor", "#ccc");
    $("#pokupo_email").css("borderWidth", "1px");
    $(".pkp-form__label--email").removeClass("pkp-form__label--invalid");
  }
});

$(".pkp-payment-method__group--item").click(function() {
  for (var i = 1; i < $(".pkp-payment-method__group--item").length + 1; i++) {
    $(".pkp-payment-method__group--item-" + i).removeClass("pkp-payment-method__group--active");
    $(".pkp-payment-method--group-" + i).hide();
  }
  $(this).addClass("pkp-payment-method__group--active");
  $(".pkp-payment-method--group-" + $(this).attr("class").substr(64, 1)).show();
});
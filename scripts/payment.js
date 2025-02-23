$(".payment-list").click(function() {
  $(".pkp-payment-method__group").toggleClass("pkp-payment-method__group--show");
  $(".payment-list").toggleClass("payment-list--show");
  if ($(".pkp-payment-method__group").hasClass("pkp-payment-method__group--show")) {
    $(".payment-list").text("Скрыть все методы оплаты");
    $(".payment-list--bg").css("width", "237px");
    if ($(".pkp_html .pkp_body #pkp-container").css("width") <= "640px") {
      $(".payment-list").text("Скрыть");
      $(".payment-list--bg").css("width", "183px");
    }
    $(".pkp-payment-method").css("backgroundColor", "#f7f5f3");
    $(".pkp-payment-method--group").css("backgroundColor", "#f7f5f3");
    $(".pkp-payment-method").css("marginTop", "16px");
    $(".pkp-payment-method").css("marginBottom", "27px");
    $(".pkp-payment-method").css("paddingTop", "12px");

    if ($(".pkp_html .pkp_body #pkp-container").css("width") <= "640px") {
      $(".pkp-payment-method").css("paddingTop", "83px");
      $(".pkp-payment-method").css("marginBottom", "47px");
    }

    if ($(".pkp_html .pkp_body #pkp-container").css("width") < "640px") {
      $(".pkp-payment-method").css("marginTop", "8px");
      $(".pkp-payment-method").css("paddingTop", "83px");
    }

    $(".payment-list--bg").show();
  } else {
    $(".payment-list").text("Показать все методы оплаты");
    if ($(".pkp_html .pkp_body #pkp-container").css("width") <= "640px") {
      $(".payment-list").text("Все методы оплаты");
    }
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

    if ($(".pkp_html .pkp_body #pkp-container").css("width") < "640px") {
      $(".pkp_html .pkp_body #pkp-container .pkp-form__label--amount .pkp-span").show();
    }

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

    if ($(".pkp_html .pkp_body #pkp-container").css("width") < "640px") {
      $(".pkp_html .pkp_body #pkp-container .pkp-form__label--email .pkp-span").show();
    }

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


$(document).ready(function() {
  $(".pkp_html .pkp_body #pkp-container .pkp-tooltip .pkp-tooltip__content").removeClass("pkp-tooltip__content_left");
  $(".pkp_html .pkp_body #pkp-container .pkp-tooltip .pkp-tooltip__content").removeClass("pkp-tooltip__content_center");
  $(".pkp_html .pkp_body #pkp-container .pkp-tooltip .pkp-tooltip__content").removeClass("pkp-tooltip__content_right");

  if ($(".pkp_html .pkp_body #pkp-container").css("width") <= "640px") {
    $(".payment-list").text("Все методы оплаты");
    $(".pkp_html .pkp_body #pkp-container.pkp-container_800 .payment-title").html("Выберите способ оплаты");
  } else {
    $(".payment-list").text("Показать все методы оплаты");
    $(".pkp_html .pkp_body #pkp-container.pkp-container_800 .payment-title").html("Выберите удобный способ оплаты");
  }
});

$(window).resize(function() {
  if ($(".pkp_html .pkp_body #pkp-container").css("width") <= "640px") {
    $(".payment-list").text("Все методы оплаты");
    $(".pkp_html .pkp_body #pkp-container.pkp-container_800 .payment-title").html("Выберите способ оплаты");
  } else {
    $(".payment-list").text("Показать все методы оплаты");
    $(".pkp_html .pkp_body #pkp-container.pkp-container_800 .payment-title").html("Выберите удобный способ оплаты");
  }

  if ($(".pkp-payment-method__group").hasClass("pkp-payment-method__group--show")) {
    if ($(".pkp_html .pkp_body #pkp-container").css("width") > "640px") {
      $(".pkp-payment-method").css("paddingTop", "12px");
      $(".pkp-payment-method").css("marginBottom", "27px");
      $(".payment-list--bg").css("width", "237px");
      $(".payment-list").text("Скрыть все методы оплаты");
    } else {
      $(".pkp-payment-method").css("paddingTop", "83px");
      $(".pkp-payment-method").css("marginBottom", "47px");
      $(".payment-list--bg").css("width", "183px");
      $(".payment-list").text("Скрыть");
    }
  }

  if ($(".pkp_html .pkp_body #pkp-container").css("width") < "640px") {
    if ($("#pokupo_amount").val() != "") {
      $(".pkp_html .pkp_body #pkp-container .pkp-form__label--amount .pkp-span").hide();
    } else {
      $(".pkp_html .pkp_body #pkp-container .pkp-form__label--amount .pkp-span").show();
    }

    if ($("#pokupo_email").val() != "") {
      $(".pkp_html .pkp_body #pkp-container .pkp-form__label--email .pkp-span").hide();
    } else {
      $(".pkp_html .pkp_body #pkp-container .pkp-form__label--email .pkp-span").show();
    }
  }

  if ($(".pkp_html .pkp_body #pkp-container").css("width") >= "640px") {
    $(".pkp_html .pkp_body #pkp-container .pkp-form__label--amount .pkp-span").show();
    $(".pkp_html .pkp_body #pkp-container .pkp-form__label--email .pkp-span").show();
  }

});

$("#pokupo_amount").focus(function() {
  if ($(".pkp_html .pkp_body #pkp-container").css("width") < "640px") {
    $(".pkp_html .pkp_body #pkp-container .pkp-form__label--amount .pkp-span").hide();
    $(".pkp-form__label--amount").removeClass("pkp-form__label--invalid");
  }
});

$("#pokupo_email").focus(function() {
  if ($(".pkp_html .pkp_body #pkp-container").css("width") < "640px") {
    $(".pkp_html .pkp_body #pkp-container .pkp-form__label--email .pkp-span").hide();
    $(".pkp-form__label--email").removeClass("pkp-form__label--invalid");
  }
});
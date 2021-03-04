$("#p1").after("<b>Hello</b><br>");

$("select")
  .change(function () {
    var str = "";
    $("select option:selected").each(function () {
      str += $(this).text() + " ";
    });
    if (str === "") {
      $("#1").text("Nothing");
    } else {
      $("#1").text(str);
    }
  })
  .change();

$("#10").click(function () {
  $("#dummy").slideUp();
  if ($("#2").css("backgroundColor") === "rgb(66, 240, 173)") {
    $("#dummy").slideDown();
    $("#2").css({ backgroundColor: "unset" });
  } else {
    $("#2").css({ backgroundColor: "rgb(66, 240, 173)" });
  }
});

$("body").find("div").eq(1).addClass("dynamic");

$("#20").click(function () {
  $("body").find("div").eq(0).css({
    backgroundColor: "#99e5f1",
    position: "relative",
    left: "10px",
    top: "40px",
  });
  $("body")
    .find("div")
    .eq(1)
    .css({ backgroundColor: "#e8637c", left: "0px", top: "0px" });
  $(this).css({ display: "none" });
  $("#30").css({ display: "block" });
});

$("#30").click(function () {
  $("body").find("div").eq(0).css({
    backgroundColor: "#99e5f1",
    position: "unset",
    left: "0px",
    top: "0px",
  });
  $("body")
    .find("div")
    .eq(1)
    .css({ backgroundColor: "#2db34a", left: "-10px", top: "40px" });
  $(this).css({ display: "none" });
  $("#20").css({ display: "block" });
});

$("#40")
  .last()
  .click(function () {
    $("#para")
      .last()
      .fadeToggle("fast", function () {
        if ($("#log").text() === "finished") {
          $("#log").text("");
        } else {
          $("#log").text("finished");
        }
      });
  });

$("#5").on("myCustomEvent", function (event) {
  $(this).text("This is the new event");
  $("span")
    .stop()
    .css("opacity", 1)
    .text("Custom event")
    .fadeIn(30)
    .fadeOut(1000);
});
$("#button").click(function () {
  $("#5").trigger("myCustomEvent");
});

$("button").on({
  click: function () {
    $(this).toggleClass("active");
  },
  mouseenter: function () {
    $(this).addClass("inside");
  },
  mouseleave: function () {
    $(this).removeClass("inside");
  },
});

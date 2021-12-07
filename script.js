$("#content").hide();

let maxSec = 1000;
let chosenColor = "#44A";
let amount = 0;


function choose() {
  const choosen = datas[Math.floor(Math.random() * datas.length)];
  $("#id").text(choosen.id);
  $("#title").text(choosen.title);
  $("#image").attr("src", `img/${choosen.id}.PNG`);
  $("#name").text(choosen.name);
  $("#desc").text(choosen.desc);
  $("#play").attr("href", choosen.play);
  $("#src").attr("href", choosen.src);
}

function roll(sec) {
  if (sec < maxSec) {
    setTimeout(() => {
      choose();
      roll(sec * 1.08);
    }, sec < 10 ? 10 : sec);
  } else {
    $("body").css("color", chosenColor);
    $("#title").css("background-color", chosenColor);
    $("#choose").prop('disabled', false);
    $("#play").show();
  }
}

$("#choose").on("click", () => {
  datas = datas.filter(e => e.id != $("#id").text() );
  $("#head").hide();
  $("#content").show();
  $("#play").hide();
  $("body").css("color", `#444`);
  $("#choose").prop('disabled', true);
  $("#title").css("background-color", `#444`);
  roll(0.5);
});


$("#kakin_menu").on("click", () => {
  $("#kakin_box").show();
});

$("#kakin").on("click", () => {
  $("#kakin_box").hide();
  maxSec = maxSec / 5;
  amount += 10000;
  $("#kakin_progress").show();
  $("#amount").text(amount);
  if (amount >= 10000) {
    chosenColor = "darkred";
  }
  if (amount >= 20000) {
    $("#choose").css("background",  "linear-gradient(-45deg, #F7DE05, #DA8E00, #EDAC06, #F7DE05, #ECB802, #DAAF08, #B67B03, #DA8E00, #EDAC06, #F7DE05, #ECB802, #EDAC06)");
    $("#kakin_progress").css("color",  "#DA8E00");
    $("#choose").css("border", "none");
    $("#choose").css("color", "white");
    $("#play").css("background",  "linear-gradient(-45deg, #F7DE05, #DA8E00, #EDAC06, #F7DE05, #ECB802, #DAAF08, #B67B03, #DA8E00, #EDAC06, #F7DE05, #ECB802, #EDAC06)").css("font-size",  "30px");
    $("#play").css("border", "none");
  }
  if (amount >= 30000) {
    $("#choose").css("background",  "linear-gradient(to right,red,orange,yellow,green,aqua,blue,purple)");
    $("#choose").css("border", "none");
    $("#play").css("background",  "linear-gradient(to right,red,orange,yellow,green,aqua,blue,purple)").css("font-size",  "30px");
  }
  if (amount >= 40000) {
    $("#choose").css("font-size", "100px");
    $("#play").css("font-size",  "60px");
  }
});

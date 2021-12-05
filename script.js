$("#content").hide();

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
  if (sec < 1000) {
    setTimeout(() => {
      choose();
      roll(sec * 1.08);
    }, sec < 10 ? 10 : sec);
  } else {
    $("body").css("color", `#44A`);
    $("#title").css("background-color", `#44A`);
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

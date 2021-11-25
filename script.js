$("#content").hide();

function choose() {
  const choosen = datas[Math.floor(Math.random() * datas.length)];
  $("#title").text(choosen.title);
  $("#image").attr("src", `img/${choosen.id}.PNG`);
  $("#name").text(choosen.name);
  $("#desc").text(choosen.desc);
  $("#play").attr("href", choosen.play);
  $("#src").attr("href", choosen.src);
  $("#choosebox").css("background-image", `url("img/${choosen.id}.PNG")`);
}

function roll(sec) {
  if (sec < 1000) {
    setTimeout(() => {
      choose();
      roll(sec * 1.08);
    }, sec < 10 ? 10 : sec);
  } else {
    $("#choosebox").css("color", `#44A`);
    $("#play").show();
  }
}

$("#chooser").on("click", () => {
  $("#content").show();
  $("#play").hide();
  $("#choosebox").css("color", `#444`);
  roll(0.5);
});

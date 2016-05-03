$(document).ready(function(){

$(".buttons > span").click(function(){
  $("#screen").append($(this).text())
  })

$("#zero").click(function(){
  $("#screen").append($(this).text())
  })

$("#cancel").click(function(){
  $("#screen").empty()
})

var evaluation = ""
$("#calc").click(function(){
  evaluation = $("#screen").text();
  evaluation = evaluation.replace("=","");
  evaluation = evaluation.replace("x","*");
  evaluation = evaluation.replace('\u00F7',"/")
  evaluation = eval(evaluation);
  $("#screen").text(evaluation)
})

})

function startTimer(){
  console.log("i am here");
  var timeleft = 7;
  var downloadTimer = setInterval(function(){
    if(timeleft < 0){
      clearInterval(downloadTimer);
    }
    document.getElementById("progressBar").value = timeleft;
    document.getElementById("timer").innerHTML = "00:"+timeleft;
    timeleft -= 1;
  }, 1000);
}


    <div class ="timer">
      <progress value="7" max ="7" id="progressBar"></progress>    
      <p id="watch"></p>
    </div>
function convertYears(years){
  let y = parseInt(years);
  let d = (years - y)*365;
  let h = d;
  d = parseInt(d)
  h = (h - d)*24
  let minutes = h;
  h = parseInt(h);
  minutes = (minutes-h)*60;
  let seconds = minutes;
  minutes = parseInt(minutes);
  seconds = Math.floor((seconds-minutes)*60);

  return [y,d,h,minutes,seconds]
}

let life = localStorage.getItem("life");
let c = convertYears(life);


let interval = setInterval(function(){
  c[4] -= 1;

  if(c[1] === 0 && c[2] === 0 && c[3] === 0 && c[4] === 0){
    c[0] -= 1;
  }else if(c[2] === 0 && c[3] === 0 && c[4] === 0){
    c[1] = c[1]!==0?c[1]-1:364;
  }else if (c[3] === 0 && c[4] === 0) {
    c[2] = c[2]!==0?c[2]-1:23;
  }else if (c[4] <= 0) {
    c[3] = c[3]!==0?c[3]-1:59;
    c[4] = 59;
  }

  document.querySelector("#clock").textContent = `${c[0]} years ${c[1]} days ${c[2]} hours ${c[3]} minutes ${c[4]} seconds left.`;

  // if(y>=0){
  //   document.querySelector("#clock").textContent = `You have ${y} years ${d} days ${h} hours ${m} minutes ${s} seconds left.`;
  // }else{
  //   document.querySelector("#clock").textContent = "You are out of time.";
  //   clearInterval(interval);
  // }
}, 1000);

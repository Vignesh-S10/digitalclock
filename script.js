function updateclock(){
  const now = new Date();
  let hour = now.getHours();
  const meridien = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12; // without this shows railway time 
  hour = hour.toString().padStart(2,0)
  const minute = now.getMinutes().toString().padStart(2,0);
  const second = now.getSeconds().toString().padStart(2,0);
  const timestring = `${hour}:${minute}:${second}:${meridien}`;
  document.getElementById("clock").textContent=timestring;
}
updateclock();
setInterval(updateclock,1000);
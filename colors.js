var Body = {
  setColor:function(color){
      document.querySelector('body').style.color=color;
  },
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor=color;
  }
}
var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
          alist[i].style.color=color;
          i++;
    }
  }

}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(document.querySelector('#night_day').value === 'night'){
    Body.setBackgroundColor('gray');
    Body.setColor('powderblue');
    self.value = 'day';
    Links.setColor(powderblue);
  }
  else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor(black);
  }
}



const randomlinegen = (day, month, year) => {
   let dayVar = Math.floor(day/4*Math.random())
   let noun = ""
   month = month.toLowerCase()
   switch (dayVar) {
    case 1:
      noun = 'You ';
      break;
    case 2:
      noun = 'Your dad ';
      break;
    case 3:
      noun = 'Your mom ';
      break;
    case 4:
      noun = 'Your best friend ';
      break;
    case 5:
      noun = 'Your significant other ';
      break;
    case 6:
      noun = 'Your future spouce ';
      break;
    case 7:
      noun = 'Your worst enemy ';
      break;
    default:
      noun = 'Your favorite person ';
      break;
   }

   let letters = [ "d", "a", "j", "o", "f", "m", "s" , "n"]
   let verblist = [ "will cry ", "will fight ", "will get hurt ", "will hurt someone ", "will play ", "will betray ", "will search " , "will work "]
   let monthVar = letters.indexOf(month[0])
   verb = verblist[Math.floor(monthVar*Math.random())]

   
    
   if (year % 3 == 0)
    adj = "crazily";
   else if (year % 4 == 0)
    adj = "horribly";
   else if (year % 5 == 0)
    adj = "recklessly";
   else if (year % 6 == 0)
    adj = "justifiably";
   else if (year % 7 == 0)
    adj = "innocently";
   else if (year % 8 == 0)
    adj = "heavily";
   else if (year % 9 == 0)
    adj = "quietly";
   else if (year % 10 == 0)
    adj = "gently";
   else{ adj = ""}


   return noun + verb + adj ;
}  

console.log(randomlinegen(5, september, 2002))
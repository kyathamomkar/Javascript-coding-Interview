const getExactTime = input => {
  
    // TODO - take string input and parse
    // into exact date/time representation  
    inputtime = input.match(/\d{1,2}/)[0];
    currenttime = new Date();
  	
  	while(true)
    {
      currenttime.setHours(currenttime.getHours()+1);
      hour = currenttime.getHours();
      hour = hour>12 ? hour-12 : hour;
      if (hour==inputtime)
      {
       return currenttime;
      }
    }
  
}


/*** TESTS ***/

const tests = [
    "I want to go at 4", /* ==>  */ 
    "I'll be leaving at 10",
    "11 is when I want to go",
    "12 please"
];

tests.forEach( test => {
  
    console.log('Test String:', test);
  
    const result = getExactTime( test ).toLocaleString();
  
    console.log('Result:', result );
    console.log('')
  
});

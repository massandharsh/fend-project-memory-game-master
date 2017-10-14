/*
 * Create a list that holds all of your cards
 */
  $('li').removeClass('match show open');



var array=['fa fa-paper-plane-o','fa fa-anchor','fa fa-bolt','fa fa-cube','fa fa-leaf','fa fa-bicycle','fa fa-diamond','fa fa-bomb','fa fa-paper-plane-o','fa fa-anchor','fa fa-bolt','fa fa-cube','fa fa-leaf','fa fa-bicycle','fa fa-diamond','fa fa-bomb'];
array=shuffle(array);
var k=$('ul').children();
for(var i=0;i<array.length;i++)
{     
	k.children().attr('class',array[i]+'');
    k=k.next();
}


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
var move=15;
var count=-1;
var count1=0;
var click=$('ul');
var arr=[];
var arr1=[];
$('.moves').text(move+'');
click.on('click','li',function()
{


	
     if( $(this).attr('class')=='card match')
     {
       
      }
	
else
{
 $(this).addClass('match');
 arr1.push($(this));
 arr.push($(this).children());

$('li').each(function()
	{
          if( $(this).attr('class')=='card match')
          {
          	
          	count1++;
         
          }

	});

 	console.log(count1);
	if(count1==16)
	{
		p(move);
		window.location.replace("index2.html");

	}
count1=0;
count++;
if(count%2!=0)
{
	

if(arr[count].attr('class')!=arr[count-1].attr('class'))
{
	arr1[count].css('background-color','red');
	arr1[count-1].css('background-color','red');
move-=1;
setTimeout(function(){
console.log(count);
arr1[count].css('background-color','');
arr1[count-1].css('background-color','');
arr1[count-1].removeClass('match'); 
arr1[count].removeClass('match');

$('.moves').text(move+'');

if(move==0)
{  

	window.location.replace("index1.html")
}
},400)
}

}
}


}

);


$('.kick').on('click',function()
{

 window.location.replace("index.html");


});
var p=function(move1)
{
$('h1').text('You won game in'+(15-move1)+' moves');
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

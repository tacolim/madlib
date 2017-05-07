function promptUser(){
  var person = prompt ("Please enter a person's name:", "Jane Doe");
  var place = prompt ("Please enter a place name:", "New York");
  var descriptor = prompt ("Please enter an adjective (color, size, etc):", "big");
  var food = prompt ("Please enter a type of food:", "apple");
  var activity = prompt ("Please enter a verb/activity:", "walking");
  var story = "Last weekend, " + person + " went to " + place + " and dined on "
+ descriptor + " " + food + " before spending all day " + activity +".";

  document.getElementById("output").innerHTML = story;
}

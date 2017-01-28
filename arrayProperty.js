//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.

  //code here

  String.prototype.reverse = function(){
    var revArray = [];
    revArray = (this.split(""));
     revArray.reverse();
    return revArray.join("");
    
  }


  var test = "this is a test";

  console.log(test.reverse());

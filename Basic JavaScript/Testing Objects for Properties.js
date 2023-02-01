//! Description ============>


//?  instruction ===============>
//? Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

//* Solve problem

function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp))
    {
      return obj[checkProp]
    } else {
      return "Not Found"
    }
  }
  
  checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");
  checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet");
  checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house");
  checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house");
  checkObj({city: "Seattle"}, "city");
  checkObj({city: "Seattle"}, "city");
  checkObj({city: "Seattle"}, "district");
  checkObj({pet: "kitten", bed: "sleigh"}, "gift");
  
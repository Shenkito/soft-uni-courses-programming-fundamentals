function rightPlace(string, char, result) {
   let res = string.replace('_', char); // тук използвам метода replace за да мога да заменя доланта черта с знака който ми е даден

   if (res === result) {
    console.log("Matched");
   } else {
    console.log("Not Matched");
   }

}

rightPlace('Str_ng', 'I', 'Strong');
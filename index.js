class Formatter {
  //add static methods here
  static capitalize(string){
  
    return [...string][0].toUpperCase() +string.slice(1)

  }
  static sanitize(string) {
    return string.replace(/[^\w\''\- ]/g, "");
  }
  static titleize(string){
    const wordsList=["the","a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const tempString=string.split(" ")
   
    return tempString.map((word,index) => {
      if (index===0) return Formatter.capitalize(word)
     
      else if(wordsList.find(substring => substring === word) === undefined) return Formatter.capitalize(word)
      
      else return word
    
    }).join(" ")
  }
}



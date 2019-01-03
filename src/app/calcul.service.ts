import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }
  
  // Méthode Calculate retour le résultat de eval(), et gère la division par 0
  calculate(userInput){
    if (userInput.includes("/0"))
      return "Err";
    if (userInput.includes("/") || userInput.includes("*") || userInput.includes("+") || userInput.includes("-")){
      try{
        return eval(userInput).toString();
      }
      catch{
        return "";
      }
    } 
  }

  // Supprime le dernier caratère de la chaine
  deleteChar(userInput){
    return userInput = userInput.substring(0, userInput.length-1)
  }

  clear(){
    return "";
  }

  // methode qui gère les suites de caractères autorisées (gestion des erreurs), et retour une chaine valide qui sera envoyé en paramètre de eval()
  input(userInput, value){
    if (("/*+-").includes(value) && ("/*+-").includes(userInput.substring(userInput.length-1))){
      if (value == "-" && userInput.substring(userInput.length-1) != "-")
        return userInput += value;
      userInput = userInput.substring(0, userInput.length-1);
      return userInput += value;
    }
    userInput += value;
    if (("/*-+").includes(userInput.substring(0,1))){
      return userInput.replace(userInput, "0"+userInput);
    }
    return userInput;
  }

  // Gère le style de la zone de saisie du calcul
  inputStyle(userInput){
    switch (true){
      case (userInput.length <= 6) : document.getElementById("displaynum").style.fontSize = "3em";
        break;
      case (userInput.length > 6 && userInput.length <= 12) : document.getElementById("displaynum").style.fontSize = "2em";
        break;
      case (userInput.length > 12) : document.getElementById("displaynum").style.fontSize = "1.5em";
        break;
    }
  }
}

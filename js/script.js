/*Elementos*/
 const inputPeople = document.querySelector("email")
 const btnSavePeople = document.querySelector("box-button")
 const result = document.querySelector("#result ol")
 
 /*Função responsável por salvar os dados*/
 btnSavePeople.addEventListener("click", _ => {
   let peoples = new Array()
 
   /*Verifica se a propriedade existe, caso exista, converte de String para Object*/
   if (localStorage.hasOwnProperty("peoples")) {
     peoples = JSON.parse(localStorage.getItem("peoples"))
   }
 
   /*Adiciona um novo valor no array criado*/
   peoples.push({name: inputPeople.value})
 
   /*Salva o item*/
   localStorage.setItem("peoples", JSON.stringify(peoples))
 
   /*Exibe o resultado*/
   result.insertAdjacentHTML('beforeend', `<li>${inputPeople.value}</li>`)
 })

 /*Função responsável por carregar o conteúdo*/
window.addEventListener("load", _ => {
  if (localStorage.hasOwnProperty("peoples")) {
    JSON.parse(localStorage.getItem("peoples")).forEach(people => {
      result.insertAdjacentHTML('beforeend', `<li>${people.name}</li>`)
    })    
  }
})
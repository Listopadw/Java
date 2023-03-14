var person = {
    "SNILS 1": ["Иванов", "Иван", "Иванович", 15, "мая", 1974,"м","исполнено"],
    "SNILS 2": ["Сидоров", "Сидор", "Сидорович", 20, "мая", 1980,"м","медотвод"],
    "SNILS 3": ["Петров", "Петров", "Петрович", 1, "июня", 1975,"ж","назначено"],
   };
   console.log(person);
   //Получаем информацию о пациенте по SNILS
   let SNILS;
   var Firstfunction = function(person,SNILS) {
   SNILS=prompt("Введите SNILS пациента", SNILS);
   infoname=person[SNILS]
   //console.log(infoname);
   alert("Информация о пациенте"+infoname);
   statusPriv = person[SNILS][7];
   console.log(statusPriv);
};
   //Извлекаем информацию о текцщем статусе прививки
   var SecondFunction = function(statusPriv,infoname){
    //statusPriv = person[SNILS][7];
   //Проверяем возможность изменения статуса
   if (statusPriv === "исполнено") {
    alert("Отказано в прививке пациенту" + infoname);
   } else if (statusPriv === "медотвод") {
    alert("Отказано в прививке пациенту" + infoname);
   } else {
    alert("Испольнить прививку пациенту" + infoname);
   }
}
ForSecond = Firstfunction(person,SNILS);
SecondFunction(statusPriv, infoname);
   //Предлагаем закончить или продолжить работу в этом окне
   while (confirm("Продолжить проверку прививочного статуса?"));{
    ForSecond = Firstfunction(person,SNILS);
SecondFunction(statusPriv, infoname);
   }
  
    console.log("Сеанс проверки прививочного статуса закончен");
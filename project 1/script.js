function App(name, age) {
 
 alert("Привет, меня зовут " + name + " мне " + age + " и это моя первая программа!");

 function showSkills() {

 	let skills = ["Я владею:","html","css","js"];
 	for (let i = 0; i < skills. length; i++) {
 				document.write(skills[i] + "</br>");
 	}
 }

 showSkills();

 function checkAge() {

 	let age = prompt("Сколько тебе лет?");
 	if (age >= 18) {
 		alert("Отлично,вы можете войти")
 	} else {
 		alert("Жаль, но я не могу вас впустить")
 	}
 }
 checkAge();



 function calcPow(a) {
 	console.log(a*a)
 };
 calcPow(5)

}

App("vladislav", 22)

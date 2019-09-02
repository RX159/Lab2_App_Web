var Lista = document.getElementById("MiLista");

var Cuantos = document.getElementsByName('todo');
var input = document.getElementById("newitem");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) 
  {

  	var Num = Cuantos.length;
  	var NewEText = document.getElementById('newitem');  
  	Num = Num+1;

  	var NewLi = document.createElement("Li");
  	var New = document.createElement("input");
  	var NewText = document.createElement("span");
  	NewText.textContent = NewEText.value;
  
  	New.attribute="type";
  	New.attribute="name";
  	New.attribute="value";

  	New.setAttribute( "onClick", "Checa()" );
  	
  	New.type = "checkbox";
  	New.name = "todo";
  	New.value = Num;

	NewLi.append(New);
  	NewLi.append(NewText);

  	Lista.appendChild(NewLi);

	NewEText.value = "";

  }

});

function Checa() 
{
	console.log('Halo')


	let buttons = document.getElementsByName('todo')
	var i;
	console.log(buttons);

	for(i=0; i<buttons.length ; i++)
	{
		if( buttons[i].checked )
		{
			buttons[i].nextSibling.style.textDecoration = "line-through";
		}
		else
		{
			buttons[i].nextSibling.style.textDecoration = "none";
		}
	}

}


const imagen=document.getElementById('imagen')

fetch('https://dog.ceo/api/breeds/list')
        .then(Response => Response.json())
        .then(razas => { 
            let select=document.getElementById('causa')
            select.innerHTML="";
            razas.message.forEach(raza => {
                select.innerHTML +=`<option value=${raza}>${raza}</option>`
            });
        });


let menu=document.getElementById('causa');
menu.addEventListener('change',()=>{
    fetch(`https://dog.ceo/api/breed/${menu.value}/images`)
    .then(Response => Response.json())
    .then(perros => {
        let perroseleccionado = perros.message
        console.log(perros)
        let imagenesContainer=document.getElementById('imagen')
        imagenesContainer.innerHTML=""
        for (let i = 0; i < 3 && i <perroseleccionado.length; i++) {
            let imgDiv = document.createElement("div");
            imgDiv.className = "image-box";

            let img = document.createElement("img");
            img.src = `${perroseleccionado[i]}`;
            img.alt = `Imagen de perro ${i}`;

            imgDiv.appendChild(img);
            imagenesContainer.appendChild(imgDiv);
        }
    })

})



function mimic(){
    fetch("https://dog.ceo/api/breeds/list")
    .then(Response => Response.json())
    .then(perros => {
        imagen.innerHTML=""
        let resultado=document.getElementById('resultado')
        let seleccion = document.getElementById('causa');
        let raza= seleccion.value
        resultado.textContent = "Has seleccionado: " + seleccion.value;
        console.log(perros)
        for (let i = 1; i <= 3; i++) {
            fetch(`https://dog.ceo/api/breed/${seleccion.value}/images`)
            .then(Response => Response.json())
            .then(perromagen => {
                let perroseleccionado = perros
                let imgDiv = document.createElement("div");
                imgDiv.className = "image-box";

                let img = document.createElement("img");
                img.src = `https://via.placeholder.com/150?text=Imagen+${i}`;
                img.alt = `Imagen ${i}`;

                imgDiv.appendChild(img);
                imagenesContainer.appendChild(imgDiv);
            })
        }
    })
    
}
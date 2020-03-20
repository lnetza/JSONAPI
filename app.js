const cargarPosts = document.querySelector('#cargar').addEventListener('click', cargarAPI);


function cargarAPI(){
    //1°Crear el objeto
    const xhr = new XMLHttpRequest();

    //2°Abrir la conexión
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts', true);

    //3°Onloand Carga y lectura de datos
    xhr.onload = function(){
        if(this.status === 200){
            //Convertimos a arreglo de objetos con JSON.parse
            const respuesta= JSON.parse(this.responseText);

            let contenido=``;
            
            respuesta.forEach((post,index) => {
                contenido +=`
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    
                    <h5>${index}</h5>
                `;
            });
            document.getElementById('listado').innerHTML=contenido;
        }
    }

    //Enviar la conexión
    xhr.send();
}
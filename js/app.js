//variables
const carrito = document.querySelector('#carrito');
const cursos = document.querySelector('#lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');

//Listeners
cargaEventListener()

function cargaEventListener(){
   //Accion realizada al precionar boton de agregar al carrito
   cursos.addEventListener('click', comprarCurso);

   //Accion que elimina un curso del carrito
   carrito.addEventListener('click', eliminarCurso);
}

//Funciones
//funcion para agregar a el carrito de compra
function comprarCurso(e){
   e.preventDefault();
   if(e.target.classList.contains('agregar-carrito')){
      let curso = e.target.parentElement.parentElement;
      leerDatosCurso(curso);
   }
}

//Funcion que lee los datos del curso
function leerDatosCurso(curso){
   const infocurso = {
      imagen: curso.querySelector('img').src,
      titulo: curso.querySelector('h4').innerText,
      precio: curso.querySelector('.precio span').innerText,
      id: curso.querySelector('a').getAttribute('data-id')
   }
   insertarCurso(infocurso)
}

//Insertar el curso en el carrito de compra
function insertarCurso(curso){
   let row = document.createElement('tr');
   row.innerHTML = `
      <td>
         <img src="${curso.imagen}" alt=""/>
      </td>
      <td>${curso.titulo}</td>
      <td>${curso.precio}</td>
      <td>
         <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
      </td>
   `;
   listaCursos.appendChild(row);
}

//Eliminar curso de el carrito de compras
function eliminarCurso(e){
   e.preventDefault();
   let curso;
   if(e.target.classList.contains('borrar-curso')){
      e.target.parentElement.parentElement.remove();
   }
}



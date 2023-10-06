
//hacemos un array de paneles con el DOM buscando los elementos con esta clase
const panels = document.querySelectorAll('.panel');


/*recorremos los elementos y asignamos el evento de click
se asigna la clase de active cuando se da clic 
y elimina la clase active a los paneles que la tengan puesta
*/ 
panels.forEach( panel => {
    panel.addEventListener('click', () =>{
        deleteClass();
        panel.classList.add('active');
        console.log('hola mundo')
    });
});


function deleteClass(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

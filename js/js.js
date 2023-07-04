'use strict'
window.addEventListener('load',()=>{
    let btn = document.querySelector('#btn');
    btn.addEventListener('click',()=>{ 
        let input = document.querySelector('#task');
        let contenedor = document.querySelector('.contenedor__right__listTask');

        let div = document.createElement('div');
        div.className = "contenedor__right__task";
        
        let chk = document.createElement('input');
        chk.type = 'checkbox';

        const lbl = document.createElement('label');
        lbl.textContent = input.value;
        
        const img = document.createElement('img');
        img.src = 'img/caneca.svg';

        /*Evento para eliminar tarea*/
        img.addEventListener('click', (e)=>{
            /*e.target, se refiere al elemento img -  parentElement es el padre de img.*/
            const item  = e.target.parentElement;
            /**Una vez tengamos el padre de la etiqueta img, lo eliminamos del contenedor padre */
            contenedor.removeChild(item);
        })
        div.appendChild(chk);
        div.appendChild(lbl);
        div.appendChild(img);

        contenedor.append(div);
        console.log(div);

        /**Una vez agragada la tarea, limpiamos el input. */
        input.value = "";
        input.focus();
    });
    

})
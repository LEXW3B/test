/*fazer o plano de fundo trocar de branco para preto */
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
});


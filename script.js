function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxwPu7bN6kb0Fob_EOdq0SBF_86OEHpwMQ3_6055JLdR-C4NTVRNqe8KMJx-ML-34Ny/exec'
const form= document.forms[ 'submit-to-google-sheet1']

form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log ('Sucess!', response))
    .catch(error => console.error('Error!' , error.message))
    form.reset();
})

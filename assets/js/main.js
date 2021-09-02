window.localStorage.setItem("dark","Y");
console.log(window.localStorage.getItem("dark"))
if(window.localStorage.getItem("dark")=="Y"){
    document.body.classList.add('dark');
}
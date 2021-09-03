window.localStorage.setItem("dark","Y");
console.log(window.localStorage.getItem("dark"))
if(window.localStorage.getItem("dark")=="Y"){
    document.body.classList.add('dark');
}

window.addEventListener('load',()=>{
    for(let i=1; i<=6; i++){
        let h = document.querySelectorAll(`h${i}`);
        h.forEach(x=>{
            let id = x.getAttribute("id");
            if(id){
                let a = document.createElement('a');
                a.href=`#${id}`;
                a.classList.add('linkpop');
                a.innerHTML = `🔗`;
                x.prepend(a);
                console.log(x)
            }
        });
    }
})
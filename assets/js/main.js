window.localStorage.setItem("dark","Y");
// console.log(window.localStorage.getItem("dark"))
if(window.localStorage.getItem("dark")=="Y"){
    document.body.classList.add('dark');
}

window.addEventListener('load',()=>{
    for(let i=1; i<=6; i++){
        let h = document.querySelectorAll(`h${i}`);
        h.forEach(x=>{
            let id = x.getAttribute("id");
            if(id){
                x.style.cssText = 'position: relative;';
                let a = document.createElement('a');
                a.href=`#${id}`;
                a.classList.add('linkpop');
                a.innerHTML = `🔗`;
                x.prepend(a);
            }
        });
    }
    if(document.querySelector('[data-value]')){
        document.querySelectorAll('span[data-value]').forEach(x=>{
            let per = x.dataset.value;
            let span = document.createElement('span');
            let span2 = document.createElement('span');
            span.classList.add('value');
            
            x.appendChild(span);
            span2.classList.add("ms-2");
            x.parentNode.appendChild(span2);
            // span2.innerHTML = `${per}%`;
            let i = 1;
            let set = setInterval(()=>{
                let num = i.toFixed(0);
                span.style.cssText = `
                    width: ${i}%;
                `;
                span2.innerHTML = `${num}%`;
                if(i==per){
                    clearInterval(set);
                }
                i+=0.5;
            }, 10);
        })
    }
});

function valid(){
    let name = document.querySelector('[name="name"]');
    let email = document.querySelector('[name="email"]');
    let phone = document.querySelector('[name="phone"]');
    let x,y,z = [false,false,false]
    let rex1 = /^[가-힣]{2,4}$/gi;
    if(rex1.test(name.value)==true){
        console.log('이름 통과');
        x=true;
    }
    let rex2 = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/gi
    if(rex2.test(email.value)==true){
        console.log('메일 통과');
        y=true;
    }
    let rex3 = /^[0-9]+$/gi
    if(rex3.test(phone.value)==true){
        console.log('번호 통과');
        z=true;
    }
    if(x && y && z){
        return true;
    } else {
        alert('이름, 번호, 이메일란을 다시 확인해주세요.');
        return false;
    }
}

if(document.getElementById('sendMail'))
document.getElementById('sendMail').addEventListener('click', function () {
    let name = document.querySelector('[name="name"]');
    let email = document.querySelector('[name="email"]');
    let message = document.querySelector('[name="message"]');
    let phone = document.querySelector('[name="phone"]');
    let type = document.querySelector('[name="type"]');
    
    if(valid()){

        $.ajax({
            data: {
                name: name.value,
                message: message.value,
                email: email.value,
                phone: phone.value,
                type: type.value==1?'질문':'제안'
            },
            url: 'https://script.google.com/macros/s/AKfycbzcKHV1ldNC0BmgldYDLEMGjqYdWCqkn-G85ptXK1Y9woc835I/exec',
            method: 'post',
            success: (data) => {
                console.log(data)
                parsing = JSON.parse(data.data);
                let r_name = parsing.name[0];
                let r_message = parsing.message[0];
                let r_email = parsing.email[0];
                if (data.result == 'success') {
                    alert(`${r_name}님의 메일이 발송되었습니다.`);
                }
                name.value='';
                email.value='';
                message.value='';
                phone.value='';
                type.value='';
                document.querySelector('.se-wrapper-inner.se-wrapper-wysiwyg.sun-editor-editable').innerHTML='';
            },
            error: (xhr, err) => {
                console.log(err);
            }
        });
    }

});
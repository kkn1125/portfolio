var path = window.location.href;
const pathnames = "/portfolio/gitrepo/";
var now = window.location.pathname.substring(pathnames.length-1);
console.log(path);
// console.log(window.location.hostname);
console.log(now);

/* 도큐먼트 로드시 link, script태그 삽입 */
var tags = document.addEventListener("DOMContentLoaded", function(){
    // blabla
});

/* 헤더와 푸터를 자동 삽입 */
window.addEventListener('load', function(){
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el){
        var includePath = el.dataset.includePath;
        if(includePath){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState==4&&this.status==200){
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});

/* 페이지별 타이들을 자동 설정 */
$(document).ready(function(e){
    let currentPath = now.split("/")[now.split("/").length-1].split(".")[0];
    document.title = `Kims ${currentPath}`; // 타이틀 페이지별 자동 변경
});

// IntersectionObserver 를 등록한다.
// ====================== 이 기능을 쓰려면 리로딩버전 포기해야함
$(document).ready(function(){
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        // 관찰 대상이 viewport 안에 들어온 경우 'tada' 클래스를 추가
        if (entry.intersectionRatio > 0) {
            entry.target.dataset.lazy='true';
        }
        // 그 외의 경우 'tada' 클래스 제거 로드된 이후에는 새로 설정하지 않겠다.
        //   else {
            //     /*delete*/ entry.target.dataset.lazy="false";
            //   }
        })
    })

    // 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
    const boxElList = document.querySelectorAll('[data-lazy]');
    
    boxElList.forEach((el) => {
        io.observe(el);
    })
})
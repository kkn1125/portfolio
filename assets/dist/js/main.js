var path = window.location.href;
const pathnames = window.location.pathname.split('/')[1];
var now = window.location.pathname.substring(pathnames.length-1);

/**
 * base path setting
 */
$('base').attr('href',window.location.origin+'/'+pathnames+'/');
console.log(window.location.origin+'/'+pathnames)

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

/* 도큐먼트 로드시 link, script태그 삽입 */
document.addEventListener("DOMContentLoaded", function(){
    kims.func.POSTLOADER.create((document.getElementById('portLoad')||'portLoad'),{
        setRoot: '/portfolio/gitrepo',
        path: 'view/portfolio', // 포트폴리오 경로
        titleSet: 'text-start text-dark',
        postDate:{ // 폴더경로를 /yyyy/mm/dd 양식으로 배열 입력하면 자동으로 내용을 pageNum개수대로 불러온다.
            2021:["/2021/06/23"]
        },
        columnList: ['title', 'author', 'time']
        // title, content, author, time 이 중 세가지
        // , pageNum: 6(default)
    });
});

/* 도큐먼트 로드시 link, script태그 삽입 */
document.addEventListener("DOMContentLoaded", function(){
    kims.func.POSTLOADER.create((document.getElementById('postLoad')||'postLoad'),{
        setRoot: '/portfolio/gitrepo',
        path: 'view/posts', // 포스트 경로
        titleSet: 'text-start text-dark',
        postDate:{ // 폴더경로를 /yyyy/mm/dd 양식으로 배열 입력하면 자동으로 내용을 pageNum개수대로 불러온다.
            2021:["/2021/06/20","/2021/06/21","/2021/06/23"]
        },
        columnList: ['title', 'author', 'time']
        // title, content, author, time 이 중 세가지
        // , pageNum: 6(default)
    });
});

window.addEventListener('load', ()=>{
    $('[data-post-show="true').append(`
        <button class="btn btn-sm btn-outline-info" onclick="window.history.back()">목록보기</button>
    `);
})

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

/**
 * 디스커스 댓글창
 */
function disqusLoad(){
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://kimsportfolio.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
    }
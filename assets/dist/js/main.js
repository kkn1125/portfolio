var path = window.location.href;
const pathnames = "/portfolio/gitrepo/";
var now = window.location.pathname.substring(pathnames.length-1);
console.log(path);
// console.log(window.location.hostname);
console.log(now);

$.ajax({ // header
    url:`${pathnames}data/header`,
    // data:{},
    method:"get",
    dataType:"text",
    success:function(data){
        console.log('success');
        $('[data-role="header"]').html(data);
    },
    error:function(request, status, error){
        console.error(error);
    }
});

$(document).ready(function(e){
    let currentPath = now.split("/")[now.split("/").length-1].split(".")[0];
    document.title = `Kims ${currentPath}`; // 타이틀 페이지별 자동 변경
});

$.ajax({
    url:`${pathnames}data/footer`,
    // data:{},
    method:"get",
    dataType:"text",
    success:function(data){
        console.log('success');
        $('[data-role="footer"]').html(data);
    },
    error:function(request, status, error){
        console.error(error);
    }
});

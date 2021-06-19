var path = window.location.href;

console.log(window.location.hostname);
console.log(window.location.pathname);

console.log(path);


$.ajax({ // header
    url:"data/header",
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
})

$.ajax({ // body
    url:"data/test.txt",
    // data:{},
    method:"get",
    dataType:"text",
    success:function(data){
        console.log('success');
        $('[data-role="body"]').html(data);
    },
    error:function(request, status, error){
        console.error(error);
    }
})

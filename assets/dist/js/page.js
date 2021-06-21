$(document).ready(function () {
    $(document).on('click', 'nav#nv a', function (event) {
      history.pushState(null, null, event.target.href);
      $('main').load(event.target.href+' main>.contents');
      event.preventDefault();
      setTimeout("reloading()", 300); 
      // ajax 로드시 변경된 코드에 한번 더 lazy속성을 변경하는 기능
    })
    $(window).on('popstate', function(event){
      $('main').load(location.href+' main>.contents');
    });
});

function reloading(){
    Array.prototype.forEach.call($('[data-lazy="false"]'), function(el){
      console.log('test');
        el.dataset.lazy = "true";
    })
}


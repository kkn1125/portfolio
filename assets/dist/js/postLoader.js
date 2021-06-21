/*
* // made by kimkyungnam
*
*/
var postDataPath = "view/posts";
var originFrontPath = "/portfolio/gitrepo"; // github 업로드때 변경 필수
// var substringPath = originFrontPath+"/"+postDataPath;
var origin = window.location.origin;
var fullPath = origin+originFrontPath+"/"+postDataPath;
// console.log(fullPath)
window.addEventListener('load', function(){
    var allElements = document.getElementsByTagName('*');
    var dataname = "data-post-in";
    Array.prototype.forEach.call(allElements, function(el){
        var subpostPath = el.dataset.postPath; // 날짜
        var postPath = postDataPath+subpostPath; // 폴더경로 풀패스
        if(subpostPath){
            $(el).load(postPath+" a", function(result){
                var obj = $(this).find(`[href]`);
                Array.prototype.forEach.call(obj, function(els){
                    if($(els).attr("href").indexOf(subpostPath+"/")>-1){
                        // var resultPath = els.href.substring(fullPath.length);
                        // resultPath = resultPath.substring(els.title.length+1)
                        $('#aa').load(els.href+" [data-title]", function(result){
                            var content = $(result).find('[data-title]');
                            console.log(content)
                            $(`[${dataname}="${subpostPath}"]`).append(
                                `<tr>
                                    <td>
                                    <span><a href="${$(els).attr("href")}">${content.html()}</a></span>
                                    <span class="float-end badge text-muted">${$(els).find('.date').html()}</span>
                                    </td>
                                </tr>`
                            );
                        });
                    }
                })
            })
        }
    });
});

$(document).ready(function () {
    $(document).on('click', '[data-fake-url="true"] a', function (event) {
    //   console.log(event)
      history.pushState(null, null, event.target.href);
      $('main').load(event.currentTarget+' main>.contents');
      event.preventDefault();
      setTimeout("delayload()", 200);
      setTimeout("reloading()", 500); 
      // ajax 로드시 변경된 코드에 한번 더 lazy속성을 변경하는 기능
    })
    $(window).on('popstate', function(event){
      $('main').load(location.href+' main>.contents');
    //   console.log(location.href)
    });
});

function reloading(){
    Array.prototype.forEach.call($('[data-lazy="false"]'), function(el){
      console.log('test');
        el.dataset.lazy = "true";
    })
}

function delayload(){
    $('#suneditor_content').attr("data-lazy", "false");
  }
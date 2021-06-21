$(document).ready(function () {
    $(document).on('click', '[data-control-tag="lazy"] a', function (event) {
      // console.log(event)
      history.pushState(null, null, event.target.href);
      $('main').load(event.target.href+' main>.contents');
      event.preventDefault();
      setTimeout("sunreload()", 100);
      setTimeout("delayload()", 100);
      setTimeout("reloading()", 100); 
      setTimeout("postload()", 100);
      
      // ajax 로드시 변경된 코드에 한번 더 lazy속성을 변경하는 기능
    })
    $(window).on('popstate', function(event){
      $('main').load(location.href+' main>.contents');
      setTimeout("postload()", 100);
      setTimeout("reloading()", 100); 
    });
});

function reloading(){
    Array.prototype.forEach.call($('[data-lazy="false"]'), function(el){
      console.log('test');
        el.dataset.lazy = "true";
    })
}

function sunreload(){
  const editor = SUNEDITOR.create((document.getElementById('content') || 'content'),{
    // All of the plugins are loaded in the "window.SUNEDITOR" object in dist/suneditor.min.js file
    // Insert options
    // Language global object (default: en)
    buttonList: [
        ['undo', 'redo'],
        ['font', 'fontSize', 'formatBlock'],
        ['paragraphStyle', 'blockquote'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        ['fontColor', 'hiliteColor', 'textStyle'],
        ['removeFormat'],
        '/', // Line break
        ['outdent', 'indent'],
        ['align', 'horizontalRule', 'list', 'lineHeight'],
        ['table', 'link', 'image', 'video', 'audio' /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
        /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
        ['fullScreen', 'showBlocks', 'codeView'],
        ['preview', 'print'],
        ['save', 'template']
    ],
    lang: SUNEDITOR_LANG['ko'],
    placeholder: 'test',
    height: 450
  });
  editor.onImageUpload = function (targetElement, index, state, info, remainingFilesCount, core) {
      console.log(`targetElement:${targetElement}, index:${index}, state('create', 'update', 'delete'):${state}`)
      console.log(`info:${info}, remainingFilesCount:${remainingFilesCount}`)
  }
}

function delayload(){
  $('#suneditor_content').attr("data-lazy", "false");
}

// <!-- sun editor -->
//     <link href="https://cdn.jsdelivr.net/npm/suneditor@latest/dist/css/suneditor.min.css" rel="stylesheet">
//     <script src="https://cdn.jsdelivr.net/npm/suneditor@latest/dist/suneditor.min.js"></script>
//     <!-- languages (Basic Language: English/en) -->
//     <script src="https://cdn.jsdelivr.net/npm/suneditor@latest/src/lang/ko.js"></script>

var postDataPath = "view/posts";
var originFrontPath = "/portfolio/gitrepo"; // github 업로드때 변경 필수
// var substringPath = originFrontPath+"/"+postDataPath;
var origin = window.location.origin;
var fullPath = origin+originFrontPath+"/"+postDataPath;
// console.log(fullPath)

function postload(){
  console.log(1)
    var allElements = document.getElementsByTagName('*');
    var dataname = "data-post-in";
    Array.prototype.forEach.call(allElements, function(el){
      // console.log(2)
        var subpostPath = el.dataset.postPath; // 날짜
        var postPath = postDataPath+subpostPath; // 폴더경로 풀패스
        console.error(el)
        if(subpostPath){
          console.log(3)
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
                                    <span data-fake-url="true"><a href="${$(els).attr("href")}">${content.html()}</a></span>
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
};
$(document).ready(function () {
    $(document).on('click', 'nav#nv a', function (event) {
      history.pushState(null, null, event.target.href);
      $('main').load(event.target.href+' main>.contents');
      event.preventDefault();
      setTimeout("sunreload()", 100);
      setTimeout("delayload()", 100);
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
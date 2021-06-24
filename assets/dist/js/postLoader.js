/**
*
* made by kimkyungnam
* ver 1.0
* 사용법은 따로 githubpage에 정리해두겠습니다.
* 현재 시험버전으로 부족한게 많으니 여러가지 피드백주시면
* 감사하겠습니다.
*
* github페이지에서 블로그를 운영하기 편하게 도와주는 기능을
* 구현한 것입니다. 감사합니다.
*
*/
var kims;
if(!kims) kims={};
if(!kims.func) kims.func={};
kims.func.POSTLOADER = {};
(function(){
    kims.func.POSTLOADER = {
        create:function(target, attr){
            const element = typeof target === 'string' ? document.getElementById(target) : target;
            if (!element) {
                if (typeof target === 'string') {
                    throw Error('[postLoader.create.fail] The element for that id was not found (ID:"' + target + '")');
                }
                throw Error('[postLoader.create.fail] postLoader requires div\'s element or id value');
            }
            this.titleSet = attr.titleSet?attr.titleSet:"";
            this.put = $(target);
            this.rootPath = window.location.origin;
            this.setRoot = attr.setRoot?attr.setRoot:"/portfolio/pageLoader_dev";
            this.path = attr.path?'/'+attr.path:"/data/posts";
            this.postPath = this.rootPath+this.setRoot+this.path;
            this.postDate = attr.postDate?attr.postDate:{
                2021:['/2021/06/23', '/2021/06/24']
            };
            this.columnList = attr.columnList?attr.columnList:['title', 'content', 'author','time'];
            this.pageNum = attr.pageNum?attr.pageNum:6;
            this.get={
                title:"[data-post-title]",
                content:"[data-post-content]",
                author:"[data-post-author]",
                time:"[data-post-time]"
            };
            this.getPost = (date, i, category)=>{
                var d = this.postPath + date + '/post-'+i+'.html';
                var result = [];
                for(var i=0; i<category.length; i++){
                    var dataType = eval(`this.get.${category[i]}`)?eval(`this.get.${category[i]}`):"";
                    if(dataType!=""){
                        $.ajax({
                            url:d,
                            async:false,
                            success:function(data){
                                if($(data).find('[data-post-show]').data('post-show')==true){
                                result.push($(data).find(dataType).html());
                                }
                            }
                        })
                    }
                    console.clear();
                }
                if(result)
                return result;
            }
            this.makeForm = (()=>{
                this.put.addClass("table text-center")
                this.put.append(` <thead>
                    <tr class="text-uppercase fw-bold">
                        <td width="60">num</td>
                        <td width="auto" class="${this.titleSet}">title</td>
                        <td width="150">author</td>
                        <td width="80">time</td>
                    </tr>
                    </thead><tbody data-target>`);
                    this.put.append(`</tbody>`);
            })();
            this.putPost = ((days)=>{
                days = this.postDate[2021].length;
                // console.log(day)
                for(var q=days-1; q>=0; q--){
                    if(this.pageNum){
                        this.put.find('[data-target').append(`
                        <tr>
                            <td colspan="4" class="text-start table-secondary text-muted">${this.postDate[2021][q].replaceAll("/",".").substring(1)}</td>
                        </tr>
                        `);
                    }
                    for(var i=this.pageNum; i>0; i--){
                        var arr = this.getPost(this.postDate[2021][q],i, this.columnList);
                        if(arr.length){
                            this.put.find('[data-target]').append(
                            `<tr class="text-muted">
                            <td>${i}</td>
                            <td class="fw-bold ${this.titleSet}"><a href="${this.postPath+this.postDate[2021][q]+ '/post-'+i+'.html'}">${arr[0]}</a></td>
                            <td>${arr[1]}</td>
                            <td>${arr[2]}</td>
                            </tr>`
                            )
                        }
                    }
                }
            })();
        }
    }
})();
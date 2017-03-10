PC_flag=1;
function isPC() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        PC_flag=0;
    }
}
function map() {
    /*var line=document.getElementsByClassName('island-line'),
        height=line[0].offsetHeight;
            line[0].style.marginLeft=height/(1.73)+'px';
            line[2].style.marginLeft=height/(-1.73)+'px';*/
    if(PC_flag==0){
        // document.getElementById('island').style.height='30%';
    }
    if(localStorage.getItem("rank_1")!=null){
    if (JSON.parse(localStorage.getItem("rank_1"))['player'].length!= 0) {
        rank_1 = localStorage.getItem("rank_1");
        rank_1 = JSON.parse(rank_1);
    }
    if(JSON.parse(localStorage.getItem("rank_1"))['player'].length == 0){
        for (var i=0;i<=9;i++)
        rank_1['player'][i]=player_score;
    }
}
if(localStorage.getItem("rank_1")==null)
{
    for (var i=0;i<=9;i++)
        rank_1['player'][i]=player_score;
}
if(localStorage.getItem("rank_2")!=null){
    if (JSON.parse(localStorage.getItem("rank_2"))['player'].length!= 0) {
        rank_2 = localStorage.getItem("rank_2");
        rank_2 = JSON.parse(rank_2);
    }
    if(JSON.parse(localStorage.getItem("rank_2"))['player'].length == 0){
        for (var i=0;i<=9;i++)
            rank_2['player'][i]=player_score;
    }
}
if(localStorage.getItem("rank_2")==null)
{
    for (var i=0;i<=9;i++)
        rank_2['player'][i]=player_score;
}

}
function hover() {
    var cube = document.getElementsByClassName('island-cube');
    for (var i = 0; i < cube.length; i++) {
        if(PC_flag==1){
            cube[i].addEventListener('mouseover',function () {
                this.style.marginTop='-50px';
            });
            cube[i].addEventListener('mouseleave',function () {
                this.style.marginTop='0';
            });
            cube[i].addEventListener('click',function () {
                move(this);
            });

        }
        else {
            cube[i].addEventListener('touchstart',function () {
                 this.style.marginTop='-50px';
            });
            cube[i].addEventListener('touchend',function () {
                this.style.marginTop='0';
                move(this);
            });
        }
    }
    map();
}

var x=0,y=0,t,cut=0,last,t1,t2,t3,t4,
    pos_x_list={'Left':0,'Center':1,'Right':2,'RRight':3,'RRRight':4,0:'Left',1:'Center',2:'Right',3:'RRight',4:'RRRight'},
    pos_y_list={'Top':0,'Middle':1,'Bottom':2,'BBottom':3,'BBBottom':4,0:'Top',1:'Middle',2:'Bottom',3:'BBottom',4:'BBBottom'},
    player=document.getElementById('player'),
    counter=0,js_file={'L':"js/l.js",
    'U':"js/u.js",
        'D':"js/d.js"},order_area=document.getElementById('order');
var rank_1 = {
    "player":[]
},rank_2={"player":[]};
var player_score={'id':'player','score':999},score_temp={'id':'player','score':0};
function move(target) {
    var tar_y=pos_y_list[target.getAttribute('id').split('-')[0]],
        tar_x=pos_x_list[target.getAttribute('id').split('-')[1]];
    if(tar_x==x){
        //player.style.marginTop=height*tar_y+'px';
        if(tar_y>y&&last!='U'){
            var old=document.getElementById('order'),
                script = document.createElement('script');
            document.body.removeChild(old);
            script.type = "text/javascript";
            script.src = js_file['D'];
            script.setAttribute('id','order');
            document.body.appendChild(script);
            for (var i=y;i<tar_y;i++) {
                var path_name = pos_y_list[i] + '-' + pos_x_list[tar_x];
                walk(path_name);
                counter++;
                document.getElementById("step").innerHTML = counter;
            }player.style.transform='scaleX(1)';
            player.style.webkitTransform='scaleX(1)';
            func='无标题2';
                        last='D';
            y=tar_y;
                t1=setInterval('init();player_fix();clearInterval(t1);',100);
        }
        else if(tar_y<y&&last!='D'){
            var old=document.getElementById('order'),
                script = document.createElement('script');
            document.body.removeChild(old);
            script.type = "text/javascript";
            script.src = js_file['U'];
            script.setAttribute('id','order');
            document.body.appendChild(script);
            for (var i=y;i>tar_y;i--) {
                var path_name = pos_y_list[i] + '-' + pos_x_list[tar_x];
                walk(path_name);
                counter++;
                document.getElementById("step").innerHTML = counter;
            }
            player.style.transform='scaleX(1)';
            player.style.webkitTransform='scaleX(1)';
            func='后面';
            last='U';
            y=tar_y;
                t2=setInterval('init();player_fix();clearInterval(t2);',100);

        }

    }
    else if(tar_y==y){
        //player.style.marginLeft=width*tar_x+'px';
        if(tar_x>x&&last!='L'){
            var old=document.getElementById('order'),
                script = document.createElement('script');
            document.body.removeChild(old);
            script.type = "text/javascript";
            script.src = js_file['L'];
            script.setAttribute('id','order');
            document.body.appendChild(script);
            for (var i=x;i<tar_x;i++) {
                var path_name = pos_y_list[tar_y] + '-' + pos_x_list[i];
                walk(path_name);
                counter++;
                document.getElementById("step").innerHTML = counter;
            }
            func="恢复_无标题1_20161220103022";
            player.style.transform='scaleX(1)';
            player.style.webkitTransform='scaleX(1)';
            last='R';
            x=tar_x;
                t3=setInterval('init();player_fix();clearInterval(t3)',100);

        }
        else if(tar_x<x&&last!='R') {
            var old=document.getElementById('order'),
                script = document.createElement('script');
            document.body.removeChild(old);
            script.type = "text/javascript";
            script.src = js_file['L'];
            script.setAttribute('id','order');
            document.body.appendChild(script);
            for (var i=x;i>tar_x;i--) {
                var path_name = pos_y_list[tar_y] + '-' + pos_x_list[i];
                walk(path_name);
                counter++;
                document.getElementById("step").innerHTML = counter;
            }
            player.style.transform='scaleX(-1)';
            player.style.webkitTransform='scaleX(-1)';
            func='恢复_无标题1_20161220103022';
            last='L';
            x=tar_x;
                t4=setInterval('init();player_fix();clearInterval(t4);',100);
        }
    }
    else if(t==null){
        player.style.animation='1s error';
        t=setInterval("player.style.animation='';t=clearInterval(t);t=null",1000);
    }
    score_temp['score']=counter;
    if(win(3)==true)
    {
        if(cut==0){
        
            rank_sort(rank_1);
            var rankstr = JSON.stringify(rank_1);
            localStorage.setItem("rank_1", rankstr);
            window.alert("Win!"+'\n'+'ID:'+score_temp['id']+'\n'+'steps:'+score_temp['score']);
            rankdiv.style.left="0";
                var cut1=cut+1;
                rank_show(eval('rank_'+cut1));

        }
    }


}
function walk(path_name) {
    var path_tf=document.getElementById(path_name).style.transform;
    if(path_tf==""||path_tf=='rotateX(0deg)'){
        document.getElementById(path_name).style.transform='rotateX(180deg)';
    }
    else{
        document.getElementById(path_name).style.transform='rotateX(0deg)';
    }
}
function player_fix() {
    var cube = document.getElementsByClassName('island-cube')[0];
    width=cube.offsetWidth;
    height=cube.offsetHeight;
    player.style.marginLeft=width*x+'px';
    player.style.marginTop=height*y+'px';
}
function rank_sort(rank) {
    if (rank['player'][0]['score']!=null)
        for (var i=0;i<=9;i++){
            if(rank['player'][i]['score']!=null){
                if(rank['player'][i]['score']>=score_temp['score']) {
                    for (var j=8;j>=i;j--)
                        rank['player'][j+1]=rank['player'][j];
                    rank['player'][i]=score_temp;
                    return;
                }
            }
        }
    else
        rank['player'][0]=score_temp;
}
function win(num) {
    var type=null;
    for (var i=0;i<num;i++){
        for (var j=0;j<num;j++){
            var flag=document.getElementById(pos_y_list[i] + '-' + pos_x_list[j]).style.transform;
            if (flag== ""||flag=='rotateX(0deg)'){
                if(type==1)
                    return false;
                else if(type==null)
                    type=0;
            }
            else if(flag=="rotateX(180deg)"){
                if(type==null)
                    type=1;
                else if(type==0)
                    return false;
            }
            else {
                return false;
            }
        }
    }
    return true;
}
function rank_show(rank) {
    rank_item=[null,null,null,null,null];
    for (var i=1;i<=5;i++){
        rank_item[i-1]=document.getElementById('rank-'+i);
        rank_item[i-1].getElementsByClassName('rank-id')[0].innerHTML=rank['player'][i-1]['id'];
        rank_item[i-1].getElementsByClassName('rank-score')[0].innerHTML=rank['player'][i-1]['score'];
    }
}

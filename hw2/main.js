var dog_images = [
    "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/128817/pexels-photo-128817.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/69372/pexels-photo-69372.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/248307/pexels-photo-248307.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/545063/pexels-photo-545063.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/594687/pexels-photo-594687.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/666870/pexels-photo-666870.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/130763/pexels-photo-130763.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/38008/pexels-photo-38008.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2853130/pexels-photo-2853130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1084165/pexels-photo-1084165.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/3523317/pexels-photo-3523317.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/69371/pexels-photo-69371.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
]
var food_images = [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1765005/pexels-photo-1765005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/3756498/pexels-photo-3756498.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/3758133/pexels-photo-3758133.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    //"https://images.pexels.com/photos/3625373/pexels-photo-3625373.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
]
var pair = {dog:dog_images,food:food_images,empty:[]};

var displayImg = document.getElementById("display");
var picSet = document.getElementById("picSet");
var number = document.getElementById("num");
var albumName = document.getElementById("name");
var bottom = document.getElementById("bottom");

var preDisplayId = "1";
var preAlbumId = "dog";

function createTable(array){
      var allDivNode = [];
      for (let i = 0; i < array.length; i++) {
        let divNode = document.createElement("div");
        let a = document.createAttribute("class"); a.value = "picture";
        divNode.setAttributeNode(a);
        let b = document.createAttribute("onclick"); b.value = "choosePic()";
        divNode.setAttributeNode(b);
        let h = document.createAttribute("oncontextmenu"); h.value = "deletePic()";
        divNode.setAttributeNode(h);
           
        let imgNode = document.createElement("img");
        let c = document.createAttribute("id"); c.value = i+1; imgNode.setAttributeNode(c);
        let d = document.createAttribute("src"); d.value = ""; imgNode.setAttributeNode(d);
        let e = document.createAttribute("alt"); e.value = ""; imgNode.setAttributeNode(e);
        let f = document.createAttribute("height"); f.value = "100%"; imgNode.setAttributeNode(f);
        let g = document.createAttribute("width"); g.value = "100%"; imgNode.setAttributeNode(g);
        divNode.appendChild(imgNode);
        allDivNode[i] = divNode;
      }
      return allDivNode;
  }

// defualt
var allDivNode = createTable(dog_images);
for(let i = 0; i < dog_images.length; i++){
    picSet.appendChild(allDivNode[i]);
}

displayImg.src = dog_images[0];

var picAmount = dog_images.length;
number.textContent = `1 / ${picAmount}`;
albumName.textContent = "Dog";

var picImg = document.getElementById("1");
picImg.classList.add("chosen");
var chosenAlb = document.getElementById("dog");
chosenAlb.classList.add("target");

for(var i = 1; i <= picAmount; i++){
    let pic = document.getElementById(`${i}`);
    pic.src = dog_images[i-1];
}

function choosePic(){
    //選取唯一性
    let prePicImg = document.getElementById(preDisplayId);
    prePicImg.classList.remove("chosen");
    preDisplayId = event.target.id;
    //定位
    picImg = document.getElementById(event.target.id);
    //display
    displayImg.src = picImg.getAttribute("src");
    //number chosen
    number.textContent = `${event.target.id} / ${picAmount}`;
    //change css when chosen
    picImg.classList.add("chosen");
}

function chooseAlbum(){
    //選取唯一性
        let prechosenAlb = document.getElementById(preAlbumId);
        if(prechosenAlb!=null)prechosenAlb.classList.remove("target");
       
        while (picSet.lastElementChild) {
            picSet.removeChild(picSet.lastElementChild);
        }
        preAlbumId = event.target.id;
        //定位
        chosenAlb = document.getElementById(event.target.id);
        //change css when chosen
        chosenAlb.classList.add("target");
        //load picture
        
            //create table
            var allDivNode = createTable(pair[preAlbumId]);
            for(let i = 0; i < pair[preAlbumId].length; i++){
                picSet.appendChild(allDivNode[i]);
            }

            for(var i = 1; i <= pair[preAlbumId].length; i++){
                let pic = document.getElementById(`${i}`);
                pic.src = pair[preAlbumId][i-1];
            }

            //pic amount
            picAmount = pair[preAlbumId].length;
            if(picAmount == 0) {
                alert("This album is empty.");
                displayImg.src = "";
                number.textContent = `0 / ${picAmount}`;
            } else{
                //default(預設為第一格且刪掉另一相簿的最後選取)
                displayImg.src = pair[preAlbumId][0];
                number.textContent = `1 / ${picAmount}`;
                picImg = document.getElementById("1");
                picImg.classList.add("chosen");
                if(preDisplayId != "1"){
                    let prePicImg = document.getElementById(preDisplayId);
                    prePicImg.classList.remove("chosen");
                    preDisplayId = "1";
                }
            }
            albumName.textContent = `${preAlbumId}`[0].toUpperCase() +  `${preAlbumId}`.slice(1);  
}

function addPhoto(){
    let albumName = document.getElementsByClassName("target")[0].textContent;
    var addUrl = prompt("請輸入想加入的照片URL","URL");
    if (addUrl != null){ 
            alert("已加入照片：" + addUrl);
            let len = pair[albumName].length;
            if(len == 0) displayImg.src = addUrl;
            pair[albumName][len] = addUrl;
            while (picSet.lastElementChild) {
                picSet.removeChild(picSet.lastElementChild);
            }
            allDivNode = createTable(pair[albumName]);
            for(let i = 0; i < pair[albumName].length; i++){
                picSet.appendChild(allDivNode[i]);
            }
            for(var i = 1; i <= pair[preAlbumId].length; i++){
                let pic = document.getElementById(`${i}`);
                pic.src = pair[preAlbumId][i-1];
            }
            //pic amount
            picAmount = pair[preAlbumId].length;

            //default(預設為第一格且刪掉另一相簿的最後選取)
            number.textContent = `1 / ${picAmount}`;
            picImg = document.getElementById("1");
            picImg.classList.add("chosen");
            if(preDisplayId != "1"){
                let prePicImg = document.getElementById(preDisplayId);
                prePicImg.classList.remove("chosen");
                preDisplayId = "1";
            }
    }else{
        alert("您取消此動作！");
    }
}

function deletePic(){
    let albumName = document.getElementsByClassName("target")[0].textContent;
    let del = confirm('您確定要刪除此照片嗎？');
    if (del) {
        alert('已刪除此照片！');
        pair[albumName].splice(event.target.id-1, 1);
        while (picSet.lastElementChild) {
            picSet.removeChild(picSet.lastElementChild);
        }
        allDivNode = createTable(pair[albumName]);
        for(let i = 0; i < pair[albumName].length; i++){
            picSet.appendChild(allDivNode[i]);
        }
        for(var i = 1; i <= pair[preAlbumId].length; i++){
            let pic = document.getElementById(`${i}`);
            pic.src = pair[preAlbumId][i-1];
        }
        //pic amount
        picAmount = pair[preAlbumId].length;

        //default(預設為第一格且刪掉另一相簿的最後選取)
        displayImg.src = pair[preAlbumId][0];
        number.textContent = `1 / ${picAmount}`;
        picImg = document.getElementById("1");
        picImg.classList.add("chosen");
        if(preDisplayId != "1"){
            let prePicImg = document.getElementById(preDisplayId);
            prePicImg.classList.remove("chosen");
            preDisplayId = "1";
        }
    } else {
        alert('您取消此動作！');
    }
}

function about(){
    var alb = [];
    var totalCnt = 0;
    var output = "相簿相關資訊\n";
    var nav = document.getElementById("nav");
    var amount = nav.getElementsByTagName("div").length;
    for(let i = 0; i < amount; i++){
        alb[i] = nav.getElementsByTagName("div")[i].textContent;
    }
    for(let i = 0; i < alb.length; i++){
        output += (alb[i] + " : " + pair[alb[i]].length + " 張照片\n");
        totalCnt += pair[alb[i]].length;
    }
    output += ("total: "+totalCnt+" 張照片");
    alert(output);
}

function addAlbum(){
    var addAlb = prompt("請輸入想加入的相簿名稱","name");
    if (addAlb != null){ 
        alert("已加入相簿： " + addAlb);
        var nav = document.getElementById("nav");
        let divNode = document.createElement("div");
        let a = document.createAttribute("class"); a.value = "button_1";
        divNode.setAttributeNode(a);
        let b = document.createAttribute("id"); b.value = addAlb;
        divNode.setAttributeNode(b);
        let c = document.createAttribute("onclick"); c.value = "chooseAlbum()";
        divNode.setAttributeNode(c);
        let d = document.createAttribute("oncontextmenu"); d.value = "deleteAlbum()";
        divNode.setAttributeNode(d);
        divNode.textContent = addAlb;
        nav.appendChild(divNode);
        pair[addAlb] = [];
    }else{
        alert("您取消此動作！"); 
    }
}

function deleteAlbum(){
    let del = confirm('您確定要刪除此相簿嗎？');
    if (del) {
        alert('已刪除此相簿！');
        let remo = document.getElementById(event.target.id);
        let nav = document.getElementById("nav");
        nav.removeChild(remo);
        while (picSet.lastElementChild) {
            picSet.removeChild(picSet.lastElementChild);
        }
        displayImg.src = "";
        number.textContent = "";
        albumName.textContent = "";
    } else {
        alert('您取消此動作！');
    }
}
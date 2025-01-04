
let tezina;
let iblock,lblock,jblock,oblock,sblock,tblock,zblock;


blokovi={

    'iblock': [
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
      ],
      'lblock': [
        [0,0,1,0],
        [1,1,1,0],
        [0,0,0,0],
        [0,0,0,0],
      ],
      'jblock': [
        [1,0,0,0],
        [1,1,1,0],
        [0,0,0,0],
        [0,0,0,0],
      ],
      
      'oblock': [
        [1,1,0,0],
        [1,1,0,0],
        [0,0,0,0],
        [0,0,0,0],
      ],
      'sblock': [
        [0,1,1,0],
        [1,1,0,0],
        [0,0,0,0],
        [0,0,0,0],
      ],
      'tblock': [
        [0,1,0,0],
        [1,1,1,0],
        [0,0,0,0],
        [0,0,0,0],
      ],
      'zblock': [
        [1,1,0,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0],
      ]
      
}

matrica=[[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],]


function popuniTetris(){
    for(let i=0;i<20;i++){
        for(let j=0;j<10;j++){
            let b;
            if(((i+j)%2==0)){
                b=true;
            }else{
                b=false;
            }

            if(b==true){
                var img = document.getElementById(i+"/"+j);
                if(img!=null){
                    img.src="assets/polje.png";
                }
                
            }else{
                var img = document.getElementById(i+"/"+j);
                if(img!=null){
                    img.src="assets/prazno.png";
                }
                
            }
            
        }
    }
}




function zapocni(){
    //document.location.href="file:///C:/Users/Radomir/Desktop/vd/lab/igra.html"
    mozeBlok=true;
    ocistiTablu();
    poeni=0;
    zapocniTajmer();
        

}

function ocistiTablu(){
    for(let i=0;i<20;i++){
        for(let j=0;j<10;j++){
            var img = document.getElementById(i+"/"+j);
            img.src="assets/prazno.png";       
        }
    }
}



let vreme;
let hendler;
let hendlerStoperica;

let poeni=0;

let mozeBlok;
let trenutniBlok;

function tajmer(){
    vreme++;
    document.getElementById("protekloVreme").innerHTML = vreme;

}



function zapocniTajmer(){
    document.getElementById("nivo").innerHTML = "Nivo " + localStorage.getItem("tezina");
    vreme=0;
    //document.getElementById("protekloVreme").innerHTML = vreme;
    hendlerStoperica = setInterval(tajmer,1000);
    hendler = setInterval(stoperica,500*(1/localStorage.getItem("tezina")));
}

function stoperica(){
    //vreme++;
    pomeriBlok();
    proveriRedove();
    iscrtaj();
    postaviSlBlok();
    document.getElementById("protekloVreme").innerHTML = vreme;
}


function postaviSlBlok(){
    var img = document.getElementById("slblok");
    switch(slRandom){
        case 0:
            img.src = "assets/iblock.png";
            break;
        case 1:
            img.src = "assets/lblock.png";
            break;
        case 2:
            img.src = "assets/jblock.png";
            break;
        case 3:
            img.src = "assets/oblock.png";
            break;
        case 4:
            img.src = "assets/sblock.png";
            break;
        case 5:
            img.src = "assets/tblock.png";
            break;
        case 6:
            img.src = "assets/zblock.png";
            break;




    }
}


function proveriRedove(){
    for(let i=0;i<20;i++){
        if(matrica[i][0] == 1 && matrica[i][1] == 1 && matrica[i][2] == 1 && matrica[i][3] == 1 &&
            matrica[i][4] == 1 && matrica[i][5] == 1  && matrica[i][6] == 1 && 
            matrica[i][7] == 1 && matrica[i][8] == 1 && matrica[i][9] == 1
        ){
            obrisiRed(i);
            poeni+=100;
            document.getElementById("poeni").innerHTML = "Poeni: " + poeni;
        }
    }



}


function obrisiRed(br){
    for(let i=0;i<10;i++){
        matrica[br][i] = 0;
    }

    for(let i=br;i>0;i--){
        for(let j=0;j<10;j++){
            matrica[i][j] = matrica[i-1][j];  
        }
    }

}


let trenutnapoz = [0,0];
let slRandom = 0 ;


function pomeriBlok(){
    if(mozeBlok){
        mozeBlok = false;
        trenutnapoz = [0,3];
        while(1){
            let random = slRandom;

            loop:
            while(true){
                slRandom = Math.floor(Math.random()*7);
                switch(slRandom){
                case 0:
                    if(localStorage.getItem('iblock') == '0') continue loop;
                    break;
                case 1:
                    if(localStorage.getItem('lblock') == '0') continue loop;
                    break;
                case 2:
                    if(localStorage.getItem('jblock') == '0') continue loop;
                    break;
                case 3:
                    if(localStorage.getItem('oblock') == '0') continue loop;
                    break;
                case 4:
                    if(localStorage.getItem('sblock') == '0') continue loop;
                    break;
                case 5:
                    if(localStorage.getItem('tblock') == '0') continue loop;
                    break;
                case 6:
                    if(localStorage.getItem('zblock') == '0') continue loop;
                    break;
                }
                break;
            }


           
            switch(random){
                case 0:
                    if(localStorage.getItem('iblock') == '0') break;
                    trenutniBlok = blokovi['iblock'];

                    return;
                case 1:
                    if(localStorage.getItem('lblock') == '0'){console.log("gg");break;} 
                    trenutniBlok = blokovi['lblock'];
                    return;
                case 2:
                    if(localStorage.getItem('jblock') == '0'){console.log("gg");break;} 
                    trenutniBlok = blokovi['jblock'];return;
                case 3:
                    if(localStorage.getItem('oblock') == '0') {console.log("gg");break;} 
                    trenutniBlok = blokovi['oblock'];return;
                case 4:
                    if(localStorage.getItem('sblock') == '0') {console.log("gg");break;} 
                    trenutniBlok = blokovi['sblock'];return;
                case 5:
                    if(localStorage.getItem('tblock') == '0') {console.log("gg");break;} 
                    trenutniBlok = blokovi['tblock'];return;
                case 6:
                    if(localStorage.getItem('zblock') == '0') {console.log("gg");break;} 
                    trenutniBlok = blokovi['zblock'];return;
            }
            //dodajBlok();
        }
    }else{
        trenutnapoz[0]++;
        proveriKraj();
    }
}



function proveriKraj(){
    if(trenutnapoz[0] == 19-donjaPoz()){
        dodajBlok();
        mozeBlok=true;
        return;
    }
    for(let i=0; i<4;i++){
        for(j=0;j<4;j++){
            if((i+trenutnapoz[0]+1)>19 || (j+trenutnapoz[1])>9) continue;
            if(trenutniBlok[i][j]==1 && matrica[i+trenutnapoz[0]+1][j+trenutnapoz[1]]==1){
                if(trenutnapoz[0]<=1){
                    console.log("KRAJ");
                    clearInterval(hendler);
                    document.getElementById("poeni").innerHTML = "Poeni: " + poeni;
                    dodajRezultat(poeni);
                    clearInterval(hendlerStoperica);
                    throw new Error();
                }
                dodajBlok();
                mozeBlok=true;
                

            }
        }
    }
}

function krajIgre(){
    for(let i=0;i<10;i++){
        if(matrica[0][i]==1){
            
        }
    }
}



function dodajBlok(){
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(i+trenutnapoz[0]<=19 && j+trenutnapoz[1]<=9 && trenutniBlok[i][j]==1){
                matrica[i+trenutnapoz[0]][j+trenutnapoz[1]] = trenutniBlok[i][j];
            }
            
        }
    }
}


function iscrtaj(){
    for(let i=0;i<20;i++){
        for(let j=0;j<10;j++){
            var img = document.getElementById(i+"/"+j);
            if(matrica[i][j]==0){
                img.src="assets/prazno.png";
            }else{
                img.src="assets/polje.png";
            }
                   
        }
    }

    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(trenutniBlok[i][j]){
                if(i+trenutnapoz[0]>19 || j+trenutnapoz[1]>9) break;
                var ii = i+trenutnapoz[0];
                var jj = j+trenutnapoz[1];
                var img = document.getElementById(ii+"/"+jj);
                img.src="assets/polje.png";

            }
        }
    }
}


function desnaPoz(){
    let max = 0;
    for(let i=0;i<4;i++){
        let max2=0;
        for(let j=0;j<4;j++){
            if(trenutniBlok[i][j]==1){
                max2=j+1;
            }
        }
        if(max2>max){
            max=max2;
        }
    }
    return max-1;

}

function donjaPoz(){
    let max = 0;

    for(let i=0;i<4;i++){
        let max2=0;
        for(let j=0;j<4;j++){
            if(trenutniBlok[i][j]==1){
                max2=i;
            }
        }
        if(max2>max){
            max=max2;
        }
    }
    return max;
}


function levaPoz(){
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(trenutniBlok[j][i]==1) return i;
        }
    }
}

document.addEventListener('keyup', (e) => {
    if (e.which === 37) {
        if(trenutnapoz[1] + levaPoz()>0 && mozeLevo()){
            trenutnapoz[1]--;
            iscrtaj();
        }
    }     
    else if (e.which === 39){
        if(trenutnapoz[1]<(9-desnaPoz()) && mozeDesno()){
            trenutnapoz[1]++;
            iscrtaj();
        }
    }else if(e.which === 38){
        if(trenutniBlok!=blokovi['oblock'] && trenutnapoz[0]>3
        ){
            if(trenutniBlok==blokovi['sblock'] && trenutnapoz[1]>=7) trenutnapoz[1]--;
            if(trenutniBlok==blokovi['iblock'] && trenutnapoz[1]>=6) trenutnapoz[1] = trenutnapoz[1]-(9-trenutnapoz[1]);
            if(trenutniBlok==blokovi['jlock'] && trenutnapoz[1]>=7) trenutnapoz[1]--;
            rotiraj();
            iscrtaj();
        }
    }      
});


function rotiraj(){
    let novi = trenutniBlok;

    for(let i=0;i<2;i++){
        for(let j=i;j<4-i-1;j++){
            let tmp=novi[i][j];
            novi[i][j]=novi[4-j-1][i];
            novi[4-j-1][i]=novi[4-i-1][4-j-1];
            novi[4-i-1][4-j-1]=novi[j][4-i-1];
            novi[j][4-i-1]=tmp;
        }
    }
    trenutniBlok = novi;
}

function ucitajParametre(){
    let lako = document.getElementById("lako").checked;
    let srednje = document.getElementById("srednje").checked;
    let tesko = document.getElementById("tesko").checked;
    if(lako){
        tezina=1;

    }else if(srednje){
        tezina=2;

    }else{
        tezina=3;
        
    }
    localStorage.setItem("tezina",tezina);


    let iblock = document.getElementById("iblock").checked;
    let jblock = document.getElementById("jblock").checked;
    let lblock = document.getElementById("lblock").checked;
    let zblock = document.getElementById("zblock").checked;
    let sblock = document.getElementById("sblock").checked;
    let tblock = document.getElementById("tblock").checked;
    let oblock = document.getElementById("oblock").checked;

    if(iblock == false && jblock == false && lblock == false && zblock == false && sblock == false && tblock==false){
        alert("Niste izabrali ni jedan blok! Molimo ucitajte paramtere ponovo!");
        return;
    } 

    localStorage.setItem("iblock",(iblock)?"1":"0");
    localStorage.setItem("lblock",(lblock)?"1":"0");
    localStorage.setItem("zblock",(zblock)?"1":"0");
    localStorage.setItem("sblock",(sblock)?"1":"0");
    localStorage.setItem("tblock",(tblock)?"1":"0");
    localStorage.setItem("oblock",(oblock)?"1":"0");
    localStorage.setItem("jblock",(jblock)?"1":"0");
    


}


function dodajRezultat(rezultat){
    let tekstRezultata = localStorage.getItem("rezultati");
    let imena = localStorage.getItem("imena");

    let ime = document.getElementById("ime").value;
    if(ime === ""){
        ime = "noname"
    }

    let rezultati;
    let imenaNiz;


    if(tekstRezultata!=null){
        rezultati = tekstRezultata.split(",");
        imenaNiz = imena.split(","); 
    }else{
        rezultati = [];
        imenaNiz = [];
    }
    
    rezultati.push(rezultat);
    imenaNiz.push(ime);


    rezultati.sort(komparator);

    localStorage.setItem("rezultati",rezultati);
    localStorage.setItem("imena",imenaNiz);

}

function komparator(a,b){
    return parseInt(b) - parseInt(a);
}

function ucitajRezultate(){
    let tekstRezultata = localStorage.getItem("rezultati");

    let mesto=1;

    let tekstImena = localStorage.getItem("imena");
    let imena = tekstImena.split(",");
    
    if(tekstRezultata!=null){
        rezultati = tekstRezultata.split(",");
        tekst="";

        let n = (rezultati.length>5)? 5 : rezultati.length;

        for(let i=0;i<n;i++){
            tekst = tekst + mesto + "."; 
            mesto++;

            tekst = tekst + imena[i] +" "+ rezultati[i];
            if(i<rezultati.length-1) tekst = tekst + "<br>";
        }
        document.getElementById("rezultati").innerHTML = tekst;
    }else{
        document.getElementById("rezultati").innerHTML = "NEMA ODIGRANIH PARTIJA";
    }




}


function mozeLevo(){

    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(trenutniBlok[i][j] == 1 && matrica[trenutnapoz[0]+i][trenutnapoz[1]+j-1]==1){
                return false;
            }
        }
    }


    return true;

}

function mozeDesno(){

    if(trenutnapoz[1] == 0 ) return true;

    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(trenutniBlok[i][j] == 1 && matrica[trenutnapoz[0]+i][trenutnapoz[1]+j+1]==1){
                return false;
            }
        }
    }


    return true;

}
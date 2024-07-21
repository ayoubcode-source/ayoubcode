let btn = document.getElementById('btn')
let card = document.getElementById('cardmenu')
let username = document.getElementById('username')
let skills = document.getElementById('skills')
let input = document.getElementById('input')
let createcard = document.getElementById('createcard')
let cardname = document.getElementById('cardname')
let cardskills = document.getElementById('cardskills')
let profilepic = document.getElementById('profile-pic')
let uploadbtn = document.getElementById('uploadbtn')
let saveBtn = document.getElementById('savebtn')
let o = document.getElementById('o')
let quote = document.getElementById('quote')
let btnvideo = document.getElementById('btn-video')
let videobox = document.getElementById('video-box')
let walp = document.getElementById('walp')
let tifo = document.getElementById('tifo')






btn.onclick = function create(){
    input.style.display = 'block'
    window.scroll({
        top: 130, 
        behavior: 'smooth'})
}

let datauser = [];

createcard.onclick = function createcard(){
    let newuser = {
        cardname:username.value,
        cardskills:skills.value,
    }
    datauser.push(newuser);
    window.scroll({
        top: 200, 
        behavior: 'smooth'})
    showdata()
    cleardata()
}

function cleardata(){
    username.value =''
    skills.value =''
}

function showdata(){
    let cards = '';
    for(let i=0; i< datauser.length; i++){
         cards = `
                <div id="cardmenu" class="row justify-content-between">
                    <div  class="col-3 ">
                        <div  class="card0" style="width: 270px;">
                            <div id="background">
                                <div >
                                    <img id="profile-pic" class="card-img-top" src="img/1.png.png" style="height: 100px;width: 100px;">
                                </div>
                                <div id="fontcard" class="card-body">
                                    <h5 id="cardname" class="card-title">${datauser[i].cardname.toUpperCase()}</h5>
                                    <p id="cardskills" class="card-text">
                                    ${datauser[i].cardskills.substring(0,150)}
                                    </p>
                                    <a href="#" id="savebtn" class="btn btn-primary">Save</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  class="col-3 ">
                        <div  class="card1" style="width: 270px;">
                            <div id="background">
                                <div >
                                    <img id="profile-pic" class="card-img-top" src="img/raja-bg2.jpg" style="height: 100px;width: 100px;">
                                </div>
                                <div id="fontcard1" class="card-body">
                                    <h5 id="cardname" class="card-title">${datauser[i].cardname.toUpperCase()}</h5>
                                    <p id="cardskills" class="card-text">
                                    ${datauser[i].cardskills.substring(0,150)}
                                    </p>
                                    <a href="#" id="savebtn" class="btn btn-primary">Save</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  class="col-3 ">
                        <div  class="card2" style="width: 270px;">
                            <div id="background">
                                <div >
                                    <img id="profile-pic" class="card-img-top" src="img/raja-bg.jpg" style="height: 100px;width: 100px;">
                                </div>
                                <div id="fontcard2" class="card-body">
                                    <h5 id="cardname" class="card-title">${datauser[i].cardname.toUpperCase()}</h5>
                                    <p id="cardskills" class="card-text">
                                    ${datauser[i].cardskills.substring(0,150)}
                                    </p>
                                    <a href="#" id="savebtn" class="btn btn-primary">Save</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                  
                </div>
         `
    }
    o.style.display = 'block'
    quote.style.display = 'none'

    document.getElementById('cardmenu').innerHTML = cards;


}

btnvideo.onclick = function (){
    var height = document.body.scrollHeight
    videobox.style.display = 'block'
    btnvideo.style.marginBottom = '50px'
    btnvideo.style.borderBottom = '3px solid whitesmoke'
    window.scroll(0,height)
    this.scrollIntoView({ 
        behavior: 'smooth' 
      });
}



walp.onclick = function (){
    window.scroll({
        top: 100, 
        behavior: 'smooth'})
}
walp.onclick = function srcrolltoTifo(){

}









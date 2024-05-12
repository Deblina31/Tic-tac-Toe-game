let allcell=Array.from(document.getElementsByClassName("cell"));
let p1=document.querySelector(".player1")
let p2=document.querySelector(".player2")
let rebtn= document.querySelector(".restartbtn")
let abtn= document.querySelector(".alertbtn")

let currplayer='X'; let nexplayer='O';
let playerturn= currplayer;

p1.textContent=`Player 1: ${currplayer}`;
p2.textContent=`Player 2: ${nexplayer}`;
//start game function
const stgame=()=>{
    
allcell.forEach(cell => {
   cell.addEventListener('click',handleclk
)}
)}
const handleclk=(e)=>{
 // console.log(e.target);
    //e.target= jekhane click korchi
    if( e.target.textContent ===''){
        e.target.textContent=playerturn //jar turn tar name show hobe
        if(check()){
            showalert(`${playerturn} is a WINNER!`)
            disablecells()
        }
        else if(checktie()){
            showalert(`TIE HOYECHE!!!!!`)
            disablecells()
        }
        else{
        changePlayerturn() //click korar por change hobe
        showalert(`${playerturn}'s turn`)
        }
}
}
//func to change player turn
const changePlayerturn=()=>{
if(playerturn === currplayer){
    playerturn=nexplayer
}
else{
    playerturn=currplayer
}

}
//func to check winner
const check=()=>{
    let wincond=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,5,8],
        [2,4,6]
    ]
    for (let i = 0; i < wincond.length; i++) {
      const [pos1, pos2,pos3]= wincond[i]
        if(allcell[pos1].textContent !== '' &&
         allcell[pos1].textContent=== allcell[pos2].textContent &&
         allcell[pos2].textContent ===allcell[pos3].textContent){
            return true;
        }
        
    }
    return false
}
const checktie=()=>{
let emptycellscount=0;
allcell.forEach(cell=>{
    if(cell.textContent == ''){
        emptycellscount++;
    }
});
if(emptycellscount === 0 && !check()){
    return true
}
}
//func to disable board game
const disablecells=()=>{
    allcell.forEach(cell=>{
        cell.removeEventListener('click', handleclk);
        cell.classList.add('disabled')
    })
}
const restartgame=()=>{
    allcell.forEach(cell=>{
        cell.textContent=''
        cell.classList.remove('disabled');
    });
    stgame();
}
rebtn.addEventListener('click',restartgame);

//func to display alert msg
const showalert=(msg)=>{
    abtn.style.display="block"
    abtn.textContent=msg;
    setTimeout(()=>{
        abtn.style.display="none"
    },3000)
}
stgame();
const inc = document.querySelector('.increase')
const res = document.querySelector('.reset')
const dec = document.querySelector('.decrease')
const count = document.querySelector('.count')
var c =0;
function render(){
    count.innerHTML=c
}

inc.addEventListener('click', () => {
    c++;
    render()
})
res.addEventListener('click', () => {
    c=0;
    render()
})
dec.addEventListener('click', () => {
    if(c>0){
        c--;
    }
    render()
})
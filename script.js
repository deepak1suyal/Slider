const slid=document.querySelectorAll(".img");
var counter=0;
console.log(slid);
slid.forEach(
    (s,i)=>{
        s.style.left=`${i*100}%`
    }
)

const slidImage=()=>{
    slid.forEach(
        (s)=>{
            s.style.transform=`translateX(-${counter*100}%)`;
        }
    )
}
const next=()=>{
   counter++;
   if( counter==5)
   counter=0;
    slidImage();
}
const pre=()=>{
    counter--;
    if( counter<=0)
   counter=4;
    slidImage();
}
setInterval(next,2000);


const task_btn1_div=document.getElementById("task_btn1_div");
const iframe1=document.getElementById("iframe1");

const task=17;

for (let i=1;i<=17;i++) {
  const btn=document.createElement("button");
  btn.innerText="task"+i;
  btn.style.display="block"
  btn.style.border="none"
  btn.style.width="90%"

  btn.style.height="35px"
  btn.style.margin="3px"
  btn.style.backgroundColor="rgb(13, 229, 245)";

  btn.onmouseover=()=>{
    btn.style.backgroundColor="rgb(16, 142, 245)";
  }

  btn.onmouseout=()=>{
    btn.style.backgroundColor="rgb(13, 229, 245)";
  }



  task_btn1_div.appendChild(btn)

  btn.addEventListener("click",()=>{
    iframe1.src=`Sharpener${i}.pdf`
    console.log("hi")
  })
}

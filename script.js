


const userpic = document.querySelector("#userpic");
const msg = document.querySelector(".msg");
const picInput = document.querySelector("#pic");

picInput.addEventListener("change", () => {
  const pic = picInput.files[0];
  const picUrl = URL.createObjectURL(pic);
  userpic.src = picUrl;
  userpic.style.opacity = 1;
  msg.innerHTML = "Picture uploaded Successfully";
});


const Name = document.querySelector("#name");
const welcome = document.querySelector(".welcome");

Name.addEventListener("input", ()=>{
  const FName = Name.value.split(" ");
  welcome.innerHTML = 'Welcome ' + FName[0];
})



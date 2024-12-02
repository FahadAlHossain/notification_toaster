const toastBox = document.getElementById("toastBox");
const successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully submitted`
const errorMsg = `<i class="fa-solid fa-circle-xmark error"></i> Please fix the error!`;
const invalidMsg = `<i class="fa-solid fa-circle-exclamation invalid"></i> Invalid input, Please check again`;

const showNotification = (msg) =>{
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add("error")
    }if(msg.includes("invalid")){
        toast.classList.add("invalid")
    }
    setTimeout(() =>{
        toast.remove();
    },5000)
}
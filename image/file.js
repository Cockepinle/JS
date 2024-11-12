const clone=() =>{
    const a = document.getElementById("first1")
    const b = a.cloneNode(true)
    const c = document.querySelector(".first")
    c.after(b)
}

const clone2=() =>{
    const a = document.getElementById("second2")
    const b = a.cloneNode(true)
    const c = document.querySelector(".second")
    c.after(b)
}

const clone3=() =>{
    const a = document.getElementById("three3")
    const b = a.cloneNode(true)
    const c = document.querySelector(".three")
    c.after(b)
}

const img1 = document.getElementById("firstpick")
const img2 = document.getElementById("secondpick")

const dobav=() =>{
    const delete11 = document.querySelector(".delete1")
    if (delete11.childElementCount % 2 != 0)
        {
            delete11.appendChild(img1.cloneNode(true))
        }
    else {
        delete11.appendChild(img2.cloneNode(true))
    }
}

const dell = () => {
    const delete11 = document.querySelector(".delete1");
    const images = delete11.querySelectorAll("img");
    const lastImage = images[images.length - 1];
    if (lastImage) {
        lastImage.remove();
    }
}
const filter_button = document.querySelectorAll(".filter_button button");
const gallery = document.querySelectorAll(".gallery .img");

const filterGallery = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    gallery.forEach(img => {
        img.classList.add("hide");
        if(img.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            img.classList.remove("hide");
        }
    });
};

filter_button.forEach(button => button.addEventListener("click", filterGallery));
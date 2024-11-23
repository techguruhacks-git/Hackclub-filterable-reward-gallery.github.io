const filterbtn = document.querySelectorAll(".filter-btn button");
const filterCard = document.querySelectorAll(".filter-cards .card");

const filterCardfun = e =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");


    filterCard.forEach(card =>{
        card.classList.add("hide");
        
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "All"){
            card.classList.remove("hide");

        }

    });
};
filterbtn.forEach(button => button.addEventListener("click", filterCardfun));
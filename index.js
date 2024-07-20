document.querySelectorAll(".container").forEach((container)=> {
 
    let section_title = document.querySelectorAll(".section-title");
    let section_body = document.querySelectorAll(".section-body");
    let plus = document.querySelectorAll(".plus-img");
    let minus = document.querySelectorAll(".minus-img");
    let content = document.querySelector(".content-box");
    section_title.forEach((title,i) => {
        title.addEventListener('click',()=>{
            
            if(section_body[i].hasAttribute("hidden")){
                section_body.forEach((body,j)=> {
                    if(!body.hasAttribute("hidden")){
                        body.setAttribute("hidden", true);
                            plus[j].removeAttribute("hidden");
                            minus[j].setAttribute("hidden",true);
                    }

                });
            
            content.classList.add("margin");
            section_body[i].removeAttribute("hidden");
            plus[i].setAttribute("hidden",true);
            minus[i].removeAttribute("hidden");}
            else{
            
            section_body[i].setAttribute("hidden",true);
            plus[i].removeAttribute("hidden");
            minus[i].setAttribute("hidden",true);
            
            section_body[section_body.length-1].classList.add("margin")
            content.classList.remove("margin");
            }

        });

    });




});
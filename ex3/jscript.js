class Rectangle{
    constructor(first_name,second_name){
        this.name =first_name;
        this.secondName = second_name;
        var lengthName=first_name.length;
        var lengthSecondName=second_name.length;
        var total= (lengthName*lengthSecondName);
        this.numOfRectangles =total;
    }
    showRectangle(){
        var element =document.getElementById("rectContainer");
        for(var i=0;i<this.numOfRectangles;i++){
            var article = document.createElement("article");
            article.classList.add("rect");
            if(i%3 == 0){
                article.style.gridColumnStart = "1";
            }
            else if(i%3 == 1){
                article.style.gridColumnStart ="2";
                article.style.left = "41px";

            }
            else{
                article.style.gridColumnStart = "3";
                article.style.left = "70px";
            }
            element.appendChild(article);
        }
    }
   changeColor(){
        var x = document.getElementsByTagName("article");
        for(var i=0;i<this.name.length;i++){
            if(x[i].style.backgroundColor == "white"){
                x[i].style.backgroundColor = "black";
            }
            else{
                x[i].style.backgroundColor = "white";
            }
        }
    }
};

var rct = new Rectangle("Martin","Mazas");
window.onload = rct.showRectangle();

function change(){
    rct.changeColor();
}
var element = document.getElementsByTagName("article")[0];
element.addEventListener("mouseover",OnMouse());
function OnMouse() {
    element.backgroundColor ="blue";
}
element += " " + "onmouseover= " + OnMouse() + "</article>";

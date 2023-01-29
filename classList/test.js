
const tilte = document.querySelector("#title"); 

const CLICKED_CLASS = "clicked"; 
 


// function handlClick(){ 
//     //.className - 특정 엘리먼트 클래스 속성의 값을 가져오거나 설정할 수 있다.
//     const currentClass = tilte.className;   


//     // !=  (다르면 true) 자료형은 검사 x
//     // !== (다르면 true) 자료형까지 다른지 엄격하게 검사
//     if(currentClass !== CLICKED_CLASS){  // 서로 다를때 참
//         tilte.className = CLICKED_CLASS // 이름을 같게 해주겠다
//         console.log(currentClass)
//     }else{ 
//         //이름이 같을때 classname을 ""로 바꾸겠다.
//         tilte.className =""
      
//         console.log("빨강이" + currentClass)
//     }
// } 
 
//💥이처럼 replace 문제를 해결하기위해 classList를 사용함 ↓
 
// function handlClick(){
//     const hasClass = tilte.classList.contains(CLICKED_CLASS);

//     if(!hasClass){
//         tilte.classList.add(CLICKED_CLASS);
//     }else {
//         tilte.classList.remove(CLICKED_CLASS)
//     }
// }



//이것도 더욱 편리하게 만들 수 있다  toggle 메소드를 이용하는 것!!!!!!
// toggle은 클래스의 유무를 체크해서 💥없으면 add, 있으면 remove를 자동으로 시켜준다.

function handlClick(){
    tilte.classList.toggle(CLICKED_CLASS);
}



    tilte.addEventListener("click", handlClick);



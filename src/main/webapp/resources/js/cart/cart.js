const delbtn = document.querySelector("#delbtn");
const del = document.querySelectorAll(".delete");
const user_id = document.getElementById("user_id");
const cart_num = document.getElementById("cart_num");
const plusbtn = document.querySelector("#plusbtn")
const plusbutton = document.querySelectorAll(".plusbutton");
const minusbtn = document.querySelector("#minusbtn");
const minusbutton = document.querySelectorAll(".minusbutton");
// const count = document.querySelector("#count");
const count = document.querySelectorAll(".count");
const acc = document.getElementById("accordion");
const cartList = document.getElementById("cartList");
const test = document.querySelectorAll(".checks");
const allcheck = document.querySelector("#allcheck");


// const checkbox = document.getElementsByClassName("css-agvwxo");
//체크박스 시발이미지 변경
for(let i = 0; i<test.length ; i++){
    
    test[i].addEventListener("click",function(){
        console.log(test[i])
        const img = document.getElementsByClassName("css-1wfsi82");
    
        let checked = {
            open:"/resources/images/member/check.svg",
            close:"/resources/images/member/checked.svg"
        }
        
        test[i].checked ?  img[i].setAttribute("src",checked.close) : img[i].setAttribute("src",checked.open)
    })
}

//체크박스 전체선택 아닌선택
allcheck.addEventListener("click",function(){
    console.log("전체선택 체크");
    console.log(allcheck.checked);
    const img2 = document.getElementsByClassName("css-1wfsi82all");
    const img = document.getElementsByClassName("css-1wfsi82");
    if(allcheck.checked){
        img2[0].setAttribute("src","/resources/images/member/checked.svg")
        for(let x=0; x<test.length; x++){
            img[x].setAttribute("src","/resources/images/member/checked.svg");
        }
    }else if(!allcheck.checked){
        img2[0].setAttribute("src","/resources/images/member/check.svg");
        for(let t=0; t<test.length; t++){
            img[t].setAttribute("src","/resources/images/member/check.svg");
        }
    }else{
        console.log("뭐야 왜안되는거임 시발");
    }
    for(let i=0; i<test.length; i++){
        test[i].checked = allcheck.checked
    }
});
//리스트 선택
for(let a=0; a<test.length; a++){
    let cartNum = test[a].getAttribute("data-cart-num");
    if(test[a].checked){
        console.log(cartNum);
      }
    test[a].addEventListener("click",function(){
        let all = document.getElementsByClassName("css-1wfsi82all");
        console.log(test[a].checked)
        let result = true;
        for(let y=0; y<test.length; y++){
            console.log(test[y].checked)
            if(!test[y].checked){
                img[y].setAttribute("src","/resources/images/member/check.svg");
                all[0].setAttribute("src","/resources/images/member/check.svg");
                result = false;
                break;
            }else{
                all[0].setAttribute("src","/resources/images/member/checked.svg");
            }
        }
        allcheck.checked = result;
    });
}

//체크된 체크박스들의 cart_num 뽑아야 됨
//cat_num을 뽑아서 그것들의 price들을 더해서..주문예상금액으로 써줘야함
// for(let i=0; i<test.length; i++){
//     if(test[i].checked){
//       console.log(test[i].getAttribute("data-cart-num"));
//     }
// }



 

let userID = user_id.value;
function getCartList(){
    //1.XMLHTTPRequest 생성
    const xhttp = new XMLHttpRequest();
    //2.Method, url
    xhttp.open("GET","./cart");
    //3.
    xhttp.send("user_id="+userID);
    //4.
    xhttp.onreadystatechange=function(){
        if(xhttp.readyState==4 && xhttp.status==200){
            console.log(xhttp.responseText);
        }
    }

}


//카트 목록삭제
// delbtn.addEventListener("click",function(){
//     console.log("삭제 가나요?");
//     let cartNum = cart_num.value;
//     console.log(cartNum);
//     //1.XMLHTTPRequest 생성
//     const xhttp = new XMLHttpRequest();
//     //2.method,url 요청정보
//     xhttp.open("POST","./DeleteCart");
//     //3.Enctype
//     xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     //4.post 파라미터 전송
//     xhttp.send("cart_num="+cartNum);
//     //5.요청발생
//     xhttp.onreadystatechange=function(){
//         if(xhttp.readyState==4 && xhttp.status==200){
//             console.log(xhttp.responseText);
//             let result = xhttp.responseText.trim();

//             if(result ==1){
//                 window.location.reload(); 
//             }
//         }
//     }
// });

    for(let i=0; i<del.length; i++){

        del[i].addEventListener("click",function(){
            console.log("hey delete");
            let cartNum = del[i].getAttribute("data-cart-num");
            console.log(cartNum);
            let check = window.confirm(cartNum+"번 상품을 장바구니에서 삭제하시겠습니까?");
            if(check){
                let cartNum = del[i].getAttribute("data-cart-num");
                console.log("cartNumber= ",cartNum);
                //1.XML 생성
                const xhttp = new XMLHttpRequest();
                //2.요청정보 
                xhttp.open("POST","./DeleteCart");
                //3.
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                //4.post 파라미터 전송
                xhttp.send("cart_num="+cartNum);
                //5.
                xhttp.onreadystatechange=function(){
                    if(xhttp.readyState==4 && xhttp.status==200){
                        console.log(xhttp.responseText);
                        let result =  xhttp.responseText.trim();
                        if(result ==1){
                            alert(cartNum+"번 삭제 성공");
                           
                        }else{
                            alert(cartNum+"번 삭제 실패");
                        }
                    }
                }
            }
        });
    }





//카트 수량변경

for(let i =0; i<plusbutton.length; i++){
    
    plusbutton[i].addEventListener("click",function(){
        console.log(plusbutton[i]);
        let cartNum = plusbutton[i].getAttribute("data-cart-num");
        console.log("cartNum==",cartNum);
        alert(cartNum+"번 수량업");
        let up = count[i].innerHTML;
        let plusup = ++up;
        console.log(up)
        console.log("되나 이게",plusup);
        //1
        const xhttp = new XMLHttpRequest();
        //2
        xhttp.open("POST","./UpdateCart");
        //3.
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //4.
        xhttp.send("cart_num="+cartNum+"&item_count=" + plusup);
        //5.
        xhttp.onreadystatechange=function(){
            if(xhttp.readyState==4 && xhttp.status==200){
                console.log(xhttp.responseText);
                let result = xhttp.responseText.trim();
    
                if(result == 1){
                    // window.location.reload(); 
                }
            }
        }
    });
}

for(let i=0; i<minusbutton.length; i++){
    minusbutton[i].addEventListener("click",function(){
        console.log("수량다아운")
        console.log(minusbutton[i]);
        let cartNum = minusbutton[i].getAttribute("data-cart-num");
        
        let minus = count[i].innerHTML;
        let minusup = --minus;
        console.log("되나 이게", minusup);
        console.log(minus)
        //1
        const xhttp = new XMLHttpRequest();
        //2
        xhttp.open("POST","./UpdateCart");
        //3.
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //4.
        xhttp.send("cart_num="+cartNum+"&item_count=" + minusup);
        //5.
        xhttp.onreadystatechange=function(){
            if(xhttp.readyState==4 & xhttp.status==200){
                console.log(xhttp.responseText);
                let result = xhttp.responseText.trim();
    
                if(result == 1){
                    // window.location.reload(); 
                }
            }
        }
    });

}


//목록 숨기기/펼치기
acc.addEventListener("click",function(){
    console.log("목록 아코디언")
})

//체크박스 해결하기
let c=1; 
const boxes = document.getElementById('parentDiv').childNodes

for(let i=0; i<boxes.length; i++){
    
    if(boxes[i].nodeName=="#text") boxes[i].remove()

}
// console.log(boxes)

boxes.forEach(function (box){
    box.addEventListener('click', handleClick);
}); 

  function handleClick(event) {
    let position= Array.from(event.target.parentNode.childNodes).indexOf(this); 
    // console.log('box clicked', event.target);
    // console.log('Div number:', position);
    const h1Box = document.createElement("h1");
    let node; 

    node = document.createTextNode("X"); 

    if(c%2!=0)
    {
      node = document.createTextNode("O"); 
    }

    if(event.target.childElementCount<1)
    {
      h1Box.appendChild(node); 
      event.target.appendChild(h1Box);
    }

    c++; 
    result(position)
  };

  function result(position)
  {
    let ans = "DRAW"
    let row=Math.floor(position/3)*3
    // console.log(row); 

    let col = position%3
    // console.log(col)

    if(boxes[row].childElementCount===1 && boxes[row+1].childElementCount===1 && boxes[row+2].childElementCount===1)
    {
        let txt1 = boxes[row].childNodes[0].innerText
        let txt2 = boxes[row+1].childNodes[0].innerText
        let txt3 = boxes[row+2].childNodes[0].innerText

        if(txt1==txt2 && txt1==txt3 && txt1=="O")
        {
            ans = "Winner O"; 

        }
        else if(txt1==txt2 && txt1==txt3 && txt1=="X")
        {
            ans = "Winner X"; 

        }

    }


    if(boxes[col].childElementCount===1 && boxes[col+3].childElementCount===1 && boxes[col+6].childElementCount===1)
    {
        let txt1 = boxes[col].childNodes[0].innerText
        let txt2 = boxes[col+3].childNodes[0].innerText
        let txt3 = boxes[col+6].childNodes[0].innerText

        if(txt1==txt2 && txt1==txt3 && txt1=="O")
        {
            ans = "Winner O"; 

        }
        else if(txt1==txt2 && txt1==txt3 && txt1=="X")
        {
            ans = "Winner X"; 

        }

    }

    if(boxes[0].childElementCount===1 && boxes[4].childElementCount===1 && boxes[8].childElementCount===1)
    {
        let txt1 = boxes[0].childNodes[0].innerText
        let txt2 = boxes[4].childNodes[0].innerText
        let txt3 = boxes[8].childNodes[0].innerText

        if(txt1==txt2 && txt1==txt3 && txt1=="O")
        {
            ans = "Winner O"; 

        }
        else if(txt1==txt2 && txt1==txt3 && txt1=="X")
        {
            ans = "Winner X"; 

        }

    }
    if(boxes[2].childElementCount===1 && boxes[4].childElementCount===1 && boxes[6].childElementCount===1)
    {
        let txt1 = boxes[2].childNodes[0].innerText
        let txt2 = boxes[4].childNodes[0].innerText
        let txt3 = boxes[6].childNodes[0].innerText

        if(txt1==txt2 && txt1==txt3 && txt1=="O")
        {
            ans = "Winner O"; 

        }
        else if(txt1==txt2 && txt1==txt3 && txt1=="X")
        {
            ans = "Winner X"; 

        }

    }

    if(c==9 || ans!="DRAW")
    {
        const res = document.getElementById("ans").innerHTML= ans; 
        boxes.forEach(box => {
            box.removeEventListener('click',handleClick); 
        })
    }
    
  }

  function reloadgame ()
  {
    for(let i=0; i<boxes.length; i++){
    
        if(boxes[i].childElementCount > 0) 
        {
            boxes[i].childNodes[0].remove();
        }
    
    }

    c=0; 

  }





let parent = document.getElementById('parentDiv');
let res = document.getElementById('result');
let btn;
let mark=0; 
let arr=[]; 

let obj0 = {
    ques: "11+2=?",
    op: ["14","10","12"],
    ans: 'option0',
    name: 'question0',
    id : 0
};
let obj1 = {
    ques: "Bangladesh Cricket team captain?",
    op: ["Tamim","Liton","Shakib"],
    ans: 'option1',
    name: 'question1',
    id : 1
};
let obj2 = {
    ques: "whats the spelling of 'Hello'?",
    op: ["Hello","Helo","Hallo"],
    ans: 'option0',
    name: 'question2',
    id : 2
};
let obj3 = {
    ques: "What is the capital if German",
    op: ["Dhaka","India","Berlin"],
    ans: 'option2',
    name: 'question3',
    id : 3
};
let obj4 = {
    ques: "How was your day?",
    op: ["Awesome","Not Bad","Like Hell"],
    ans: 'option2',
    name: 'question4',
    id : 4
};


let obj = [obj0, obj1 , obj2, obj3, obj4]

while(arr.length<4)
{
    let x = Math.floor(Math.random() * obj.length)
    if(!arr.includes(x))
    {
        arr.push(x)
    }
    

}

for (let j =0 ; j<3;j++)
{
    const childDiv = document.createElement('div')
    let para = document.createElement('p')
    let node = document.createTextNode(j+1+". "+obj[arr[j]].ques)
    para.appendChild(node);
    childDiv.appendChild(para);
    childDiv.setAttribute('id',"childDiv")

    for (let i = 0; i<3;i++)
    {
        btn = document.createElement('input')
        let lvl = document.createElement('label')
        let txt  = document.createTextNode(obj[arr[j]].op[i])
        let v = "option"+i
        let btnid = "o"+i
        
        btn.setAttribute('type' ,'radio')
        btn.setAttribute('value' , v)
        btn.setAttribute('name',obj[arr[j]].name)
        btn.setAttribute('id',btnid)
        lvl.setAttribute('for',btnid);
        lvl.appendChild(txt);
        childDiv.appendChild(btn);
        childDiv.appendChild(lvl)
        console.log(btn)
        
    }
        
        parent.appendChild(childDiv); 
}

function getOption()
{
    
    for(let i =0 ; i<3;i++)
    {
        let n = obj[arr[i]].name;
        let selected = document.querySelector(`input[name='${n}']:checked`).value;
        if(selected == obj[arr[i]].ans)
        {
            mark+=5;
        }
    }

   res.innerHTML = "Your Marks is "+mark
 
}
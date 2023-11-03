const addbtn = document.querySelector("#add")
const newbtn = document.querySelector("#new")
const delbtn = document.querySelector("#delete")
const disbtn = document.querySelector("#display")
const form = document.querySelector("#form")
const allBtn = document.querySelectorAll("button")
let id = document.querySelector("#id")
const model = document.querySelector(".modelBox1")

//Add functionality to the Add button
addbtn.addEventListener("click", function (e) {
    e.preventDefault()
    let id = document.querySelector("#id")
    let name = document.querySelector("#name")
    let no = document.querySelector("#no")
    let status = document.querySelector("#status")
    // addbtn.style="backgroundColor="
    const empData = JSON.parse(localStorage.getItem("empData")) || [];

    id = parseInt(id.value.trim())
    name = name.value.trim()
    no = parseInt(no.value.trim())
    status = status.value

    //addbtn.classList.add("active")    
    if (!isNaN(id) && name !== "" && !isNaN(no) && status !== "") {
        Data = {}

        Data.id = id;
        Data.name = name;
        Data.no = no;
        Data.status = status
        empData.push(Data)
        localStorage.setItem("empData", JSON.stringify(empData))
        model.style = "display:block"

    }
    else {
        alert("Please Enter Valid Data")
    }
})

//Add functionality to the new button
newbtn.addEventListener("click", function (e) {
    e.preventDefault()
    form.reset()
    id.focus()
})

// closing function
window.addEventListener("click", function (e) {
    let closeIcon = document.getElementsByTagName("i")[0]
    let closeBtn = document.querySelector("#close")

    if (e.target == closeBtn || e.target == closeIcon) {
        model.style = "display:none"
    }
})

//Add functionality to the Dispaly button
disbtn.addEventListener("click", function (e) {
    e.preventDefault()
    const data = JSON.parse(localStorage.getItem("empData"))||[]
    const tbody = document.querySelector("tbody")
    tbody.innerHTML=" "
    if (data.length>0) {
        data.forEach((data, index) => {
            let val = " "
            val += ` <tr>
          <td>${data.id}</td>
          <td>${data.name}</td>
          <td>${data.no}</td>
          <td>${data.status}</td>
      </tr>`
      tbody.innerHTML += val
        })
    }
    else {
        alert("There is no data in DataBase!! Please add it")
    }

})

//Add functionality to the Delete button

delbtn.addEventListener("click",function(e){
 e.preventDefault();
 const data = JSON.parse(localStorage.getItem("empData"))||[]
const msg=document.querySelector(".msgBox>div")
let id = document.querySelector("#id")
id = parseInt(id.value.trim())

if(data.length>0 && !isNaN(id)){
 if(confirm("Are you need to delete this data??"))
 {
    const Mydata = JSON.parse(localStorage.getItem("empData")) || [];
    let index=Mydata.findIndex((val)=>val.id==id)    
    Mydata.splice(index,1);
    localStorage.setItem("empData",JSON.stringify(Mydata))
    msg.innerHTML="Record Deleted Successfully"
    model.style = "display:block" 
 }
}
else{
    alert("There is no data to delete ")
}
})

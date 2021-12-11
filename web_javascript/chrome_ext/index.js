// chrome://extensions/

let myLeads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse (localStorage.getItem("leads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        console.log(tabs)
    })

    myLeads.push(tabs[0].url)
    localStorage.setItem("myleads", JSON.stringify(myLeads))
    render(myLeads)

})

function render(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${leads}'>
                ${leads}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})





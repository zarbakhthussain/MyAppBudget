let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
let date = document.getElementById("date");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const product = document.getElementById("product");
const errorMessage = document.getElementById("budget-error");
const productError = document.getElementById("product-error");
const productCostError = document.getElementById("product-Cost-Error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const List = document.getElementById("List");
let tempAmount = 0;


totalAmountButton.addEventListener("click", () => {
    tempAmount = totalAmount.value;
    if (tempAmount === "" || tempAmount < 0){
        errorMessage.classList.remove("hide");
    } else {
        errorMessage.classList.add("hide");
        amount.innerHTML = tempAmount;
        balanceValue.innerText = tempAmount - expenditureValue.innerText;
        totalAmount.Value = "";
    }
});


const disableButtons = (bool) => {
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((element) => {
        element.disabled = bool;
    });
};

const modifyElemnt = (element, edit = false) => {
    let parentDiv = element.parentElement;
    let currentBalance = balanceValue.innerText;
    let currentExpense = expenditureValue.innerText;
    let parentAmount = parentDiv.querySelector(".amount").innerText;
    if (edit) {
         let parentText = parentDiv.querySelector(".product").innerText;
         product.value = parentText;
         userAmount.value = parentAmount;
         disableButtons = (true);
    }
         balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount);
         expenditureValue.innerText = parseInt(currentExpense) - parseInt(parentAmount);

};
  

const listCreator = (expenseName, expenseValue) => {
    let subListContent = document.createElement("div");
    subListContent.classList.add("SubList-content", "flex-space");
    List.appendChild(subListContent);
    subListContent.innerHTML = `<p class = "product">${expenseName}</p>
    <p class = "amount" >${expenseValue}</p>`;
    let editButton = document.createElement("button");
    editButton.classList.add("f88d");
    editButton.addEventListener("click", () => {
        modifyElemnt(editButton, true);
    });

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("e872");
    
    deleteButton.addEventListener("click", () => {
        modifyElemnt(deleteButton);
    });
    subListContent.appendChild(editButton);
    subListContent.appendChild(deleteButton);
    document.getElementById("list").appendChild(subListContent);
};
 
checkAmountButton.addEventListener("click", () => {
    if (!userAmount.value || !product.value) {
        productError.classList.remove("hide");
        return false;
}
disableButtons(false)
let expenditure = parseInt(userAmount.value);
let sum = parseInt(expenditureValue.innerText) + expenditure;
expenditureValue.innerText = sum;
const totalBalance = tempAmount - sum;
balanceValue.innerText = totalBalance;
listCreator(product.value, userAmount.value);
product.Value = "";
userAmount.value = "";
});
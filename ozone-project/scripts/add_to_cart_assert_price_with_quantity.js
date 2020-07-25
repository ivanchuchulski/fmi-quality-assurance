function myFunction(element) {
	element.innerHTML = element.innerHTML.replace(/&nbsp;/g, "")
	element.innerText = element.innerText.replace(/[^\x20-\x7E]/gim, "")
	element.innerText = element.innerText.replace(".", "")
	element.innerText = element.innerText.replace(",", ".")
}

temp = document.querySelectorAll(".shopping-cart-items .old-price")
if (temp != null) {
	temp.forEach((element) => (element.innerHTML = ""))
}

items_price = document.querySelectorAll(".cart-row.item .cell.col2")
items_price.forEach((element) => myFunction(element))

quantities = document.getElementsByClassName("amount ui-spinner-input")
sum = 0.0

for (var i = 0; i < items_price.length; i++) {
	sum += Number(items_price[i].innerText) * Number(quantities[i].getAttribute("value"))
}

total = document.querySelector(".total-row .price")
myFunction(total)

sum = sum.toFixed(2)
total_price = Number(total.innerText)
total_price = total_price.toFixed(2)

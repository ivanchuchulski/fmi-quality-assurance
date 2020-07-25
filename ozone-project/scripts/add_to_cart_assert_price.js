function myFunction(element) {
	element.innerHTML = element.innerHTML.replace(/&nbsp;/g, "")
	element.innerText = element.innerText.replace(/[^\x20-\x7E]/gim, "")
	element.innerText = element.innerText.replace(".", "")
	element.innerText = element.innerText.replace(",", ".")
}

el = document.querySelectorAll(".cart-row.item .cell.col4")
el.forEach((element) => myFunction(element))

sum = 0.0
el.forEach((element) => (sum += Number(element.innerText)))

total = document.querySelector(".total-row .price")
myFunction(total)

sum = sum.toFixed(2)
total_price = Number(total.innerText)

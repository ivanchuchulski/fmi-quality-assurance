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

price_array = document.getElementsByClassName("regular-price")
myFunction(price_array[1])
myFunction(price_array[2])

single_price = Number(price_array[1].innerText)
single_price = single_price.toFixed(2)

expected_price = Number(price_array[2].innerText)
expected_price = expected_price.toFixed(2)

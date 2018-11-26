var products = [];
var startTd = '<td>';
var endTd = '</td>';

function addItem() {
	var name = document.getElementById('product_name').value;
	var unitPrice = document.getElementById('unit_price').value;
	var quantity = document.getElementById('product_quantity').value;

	if(validate(name, unitPrice, quantity)) {
		products.push({name: name, unitprice: unitPrice, quantity: quantity});
		addRow(name, unitPrice, quantity);
	} else {
		window.alert('Entered Data is not Valid');
	}
}

function addRow(name, price, quantity) {
	document.getElementById('product_table').innerHTML += '<tr>' + 
			startTd + name + endTd + 
			startTd + price + endTd + 
			startTd + quantity + endTd + 
			'</tr>';
}

function validate(name, unitprice , quantity) {
	return ((name == '' || isNaN(quantity) || isNaN(unitprice) || quantity < 1 || unitprice < 1) ? false : true);
}

function calculateTotal() {
	var total = 0;
	for(var i in products) {
		total += products[i].unitprice * products[i].quantity;
	}
	document.getElementById('display_total').innerHTML = 'TOTAL: ' + total;
}

function clearPage() {
	products = [];
	document.getElementById('product_table').innerHTML = '';
	document.getElementById('display_total').innerHTML = 'TOTAL: ';
	document.getElementById('product_name').value = '';
	document.getElementById('product_quantity').value = '';
	document.getElementById('unit_price').value = '';
}
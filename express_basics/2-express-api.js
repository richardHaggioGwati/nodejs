const express = require('express');
const app = express();

const { products } = require('./data');

app.get('/', (req, res) => {
	res.send('<h1>Product</h1> <a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
	const filteredProducts = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});

	// returning the json data to the client
	res.json(filteredProducts);
});

// requesting the full information about a product
app.get('/api/products/:productId', (req, res) => {
	const { productId } = req.params;
	const singleProduct = products.find(
		(product) => product.id === Number(productId),
	);

	// check if single product passed as a query does not exist
	if (!singleProduct) {
		res.status(404).send('<h1>Product not found</h1>');
	}

	return res.json(singleProduct);
});

/**
 * ? because I have set my if statements with guard clauses they is no need for a return keyword
 * ! but return keyword is very important when creating api's so that the headers are not written / 
 * ! express doesn't try to update the headers more than once because JS will keep reading the code
 * ! if they is no return statement
 */
app.get('/api/v1/query', (req, res) => {
	// receive request params passed to query
	const { search, limit } = req.query;
	let sortedProducts = [...products];

	// check if search has been provide and return the searched for products
	if (search)
		sortedProducts = sortedProducts.filter((product) =>
			product.name.startsWith(search),
		);

	// set's the limit of the response to the user
	if (limit) sortedProducts = sortedProducts.slice(0, Number(limit));

	// if we have no products that match the searched result's
	if (sortedProducts.length < 1)
		res.status(200).json([{ status: 'successful request', data: [] }]);

	res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
	console.log('listening on port 5000...');
});
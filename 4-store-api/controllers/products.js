const Products = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const products = await Products.find({}).sort('name').select('name, price').limit(10).skip(5)
    res.status(200).json({products, nbHits: products.length});
};

const getAllProducts = async (req, res) => {
    const {featured, company, name, sort, fields} = req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true'
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = {$regex: name, $options: 'i'}
    }

    // sort functionality
    let result = Products.find(queryObject)
    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    } else result = result.sort('createdAt')

    // selected fields
    if (fields) {
        const fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
    }

	// limiting number of products returned by each query
	const page = Number(req.query.page) || 1
	const limit = Number(req.query.limit) || 10
	const skip = (page -1) * limit

	result = result.skip(skip).limit(limit)
    const products = await result
    res.status(200).json({products, nbHits: products.length});
};

module.exports = {
    getAllProductsStatic,
    getAllProducts,
};

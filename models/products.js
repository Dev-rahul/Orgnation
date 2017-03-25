var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
	productName : {
		type: String,
	},
	description : {
		type: String,
	},
	price : {
		type: Number,
	},
	qty : {
		type: Number,
	},
	user_id : {
		type: String,
	}
});



var user = module.exports = mongoose.model('product', ProductSchema);


module.exports.createProduct = function(newProduct, callback){
			newProduct.save(callback);
}
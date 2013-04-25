/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



console.log('building schema for Merchant');

var mongoose = require('mongoose');
var Merchant = new mongoose.Schema({
    _id: {type: global.mongoose.Schema.ObjectId, index: true},
    name: {type: String, require: true, validate: validate('len', 5, 150)},
    desc: {type: String, require: true},
    user: {type: String, require: true},
    date: {type: Date, default: Date.now, require: true}
});


module.exports = mongoose.model('Merchant', Merchant);
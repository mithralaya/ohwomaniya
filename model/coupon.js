/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



console.log('building schema for Coupon');

var mongoose = require('mongoose');
var Coupon = new mongoose.Schema({
    _id: {type: mongoose.Schema.ObjectId, index: true},
    title: {type: String, require: true},
    desc: {type: String, require: true},
    SD: {type: Date, require: true},
    ED: {type: Date, require: true},
    merchant: {type: String, require: true, index: true},
    location: {type: [], require: true, index: true},
    date: {type: Date, default: Date.now, require: true}
});


module.exports = mongoose.model('Coupon', Coupon);
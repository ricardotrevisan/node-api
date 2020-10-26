const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const paginate = require('express-paginate');

module.exports = {
    async index(req, res, next){
        const {page = 1, limit = 5 } =  req.query;     
        try{
            const categories = await Category.find()
                .limit(limit * 1)
                .skip( (page-1) * limit)
                .exec();
            
            const count = await Category.countDocuments();
            res.json({
                categories,
                pages: Math.ceil(count/limit),
                currentPage: page
            });
        }catch(err){
            console.error(err.message);
        }
    },
    
    async show(req, res){
        const category = await Category.findById(req.params.id);
        return res.json(category);
    },

    async update(req, res){
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(category);
    },

    async store(req,res){
        const category = await Category.create(req.body);
        return res.json(category);
    },

    async destroy(req, res){
        await Category.findByIdAndDelete(req.params.id);
        return res.send();
    },
};
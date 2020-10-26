const mongoose = require('mongoose');
//const mongoosePaginate = require('mongoose-paginate');

const CategorySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    status:{
        type: String,
        required: true,
    }
});

//ProductSchema.plugin(mongoosePaginate);
mongoose.model('Category', CategorySchema);

// entrada no café ICFFUT - 26/10
// entrada 116,01
// parcial 118,01
// objetivo 131,01
// stop loss 110,14


var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    password: String,
    email: { type: String, unique:true, lowercase : true},
    profile: {
        name: {type: String, default: '' },
        pictures: {type:String , default: ''},
    },
    address: String,
    history: [{
        date : Date,
        paid : {type: Number, default: 0}
        //item : {type: Schema.Types.ObjectId, ref: ''}
    }]
});

UserSchema.pre('save', function(next){
    var user = this;
    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt, null, function(err, hash){
            if(err) return next(err);
            user.password = hash;
            next();
        });

    });

});

UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);
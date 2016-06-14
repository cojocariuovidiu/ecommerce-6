var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    password: String,
    email: { type: String, unique:true, lowercase : true},
    profile: {
        name: {type: String, default: '' },
        picture: {type:String , default: ''},
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

UserSchema.methods.gravatar = function(size){
console.log('gravatar');
    if(!this.size) size = 200;

    if(!this.email) return 'https://gravatar.com/avatar/?s' + size + '&d=retro';
console.log('after: return');
    var md5 = crypto.createHash('md5').update(this.email).digest('hex');
console.log('md5' + md5);
console.log('url' + 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro');
    return 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro';
}

module.exports = mongoose.model('User', UserSchema);
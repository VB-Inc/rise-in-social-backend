import fastifyPassport from 'fastify-passport'
import { Strategy as TwitterStrategy } from 'passport-twitter';

fastifyPassport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: "http://localhost:3000/auth/twitter/callback"
}, function (token, tokenSecret, profile, cb) {
    return cb();
    // User.findOrCreate({ twitterId: profile.id }, function (err, user) {
    //     return cb(err, user);
    // });
}));

export { fastifyPassport }
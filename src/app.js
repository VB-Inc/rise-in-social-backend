
import fastify from 'fastify';
import fastifySecureSession from 'fastify-secure-session';
import fs from 'fs';
import path from 'path';
import { fastifyPassport } from './passport';

const app = fastify({ logger: true })

// set up secure sessions for fastify-passport to store data in
app.register(fastifySecureSession, { key: fs.readFileSync(path.join(__dirname, '../secret-key')) })
app.register(fastifyPassport.initialize())
app.register(fastifyPassport.secureSession())

app.get('/auth/twitter', fastifyPassport.authenticate('twitter'));

app.get('/auth/twitter/callback',
    fastifyPassport.authenticate('twitter', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));

app.listen(3000,
    () => {
        console.log(`🚀 Server ready at: http://localhost:3000`);
    }
)

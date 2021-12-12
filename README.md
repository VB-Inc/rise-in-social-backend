## Rise in Social (Backend)

## Setup

- Install dependencies with `yarn install`
- Add `.env` file in project directory, and add following key-value pairs to it:
  - TWITTER_CONSUMER_KEY
  - TWITTER_CONSUMER_SECRET
    (Note: Both keys can be fetched from Twitter Developer. Refer to https://developer.twitter.com/en/docs/authentication/oauth-1-0a/api-key-and-secret)
- Add `secret-key` file in project directory, and run `npx fastify-secure-session > secret-key` to generate that key

Awesome 🚀, You are ready to start server with `yarn dev` OR `npm run dev` command

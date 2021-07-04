const lotion = require('lotion');

let app = lotion({
    initialState: {
      count: 0
    }
  });

  // Middleware MUST be deterministic
  app.use( (state, tx) => {
    if (state.count === tx.nonce) {
        state.count++
    }
  })

  app.start()
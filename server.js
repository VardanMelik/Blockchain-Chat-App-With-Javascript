let lotion = require('lotion')

let app = lotion({
  initialState: {
    count: 0
  }
})

app.use(function(state, tx) {
  if (state.count === tx.nonce) {
    state.count++
  }
})

app.start()

/*app.listen(3000)
  .then(genesis => {
    console.log('App listening on port 3000. You have launched your 1st blockchain!')
  });*/
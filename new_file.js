// import express from 'express'
// const app = express()
// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => console.log(`Server started on port ${PORT}...`))

import test from "ava"

const valid = {
  user: {
    address: {
      street: 'main street',
    },
  },
};

function getAddress(data) {
  return data?.user?.address?.street;
}
test('Optional returns', (t) => {
  const result = getAddress(valid);
  t.is(result, 'main street');
});

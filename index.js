const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json())

app.post('/', (req, res) => {
  const body = req.body ?? {};
  const x = parseInt(body.x ?? 0);
  const y = parseInt(body.y ?? 0);
  let result = 0;

  switch (body.operation_type) {
    case "addition":
      result = x + y;
      break;
 
    case "subtraction":
      result = x - y;
      break;

    case "multiplication":
      result = x * y;
      break;
    
    default:
      break;
  }

  return res.json({
    slackUsername: "@Kloud",
    operation_type: body.operation_type,
    result: result,
  })
})

app.listen(process.env.PORT, () => {
  console.log('Server running on port 8721');
});

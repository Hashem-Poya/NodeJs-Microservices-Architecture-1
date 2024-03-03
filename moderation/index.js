const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  const { type, data } = req.body;

  if (type === 'CommentCreated') {
    const { id, postId, content } = data;
    const status = data.content.includes('orange') ? 'rejected' : 'approved';
    const postBody = {
      type: 'CommentModerated',
      data: {
        id,
        postId,
        content,
        status,
      },
    };
    await axios.post('http://localhost:4005/events', postBody);
  }

  res.send({});
});

app.listen(4003, () => {
  ('Moderation is listening on Port 4003');
});

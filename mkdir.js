const crypto = require('crypto');
const fs = require('fs').promises;
const path = require('path');

async function sha256(pw) {
  return crypto.createHash('sha256').update(pw, 'utf8').digest('hex');
}

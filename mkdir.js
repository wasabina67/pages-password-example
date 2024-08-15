const crypto = require('crypto');
const fs = require('fs').promises;
const path = require('path');

async function sha256(pw) {
  return crypto.createHash('sha256').update(pw, 'utf8').digest('hex');
}

async function makeHashDirectory(pw) {
  try {
    const hash = await sha256(pw);
    const dirPath = path.join('docs', hash);
    try {
      await fs.access(dirPath);
      console.log(`"${dirPath}" already exists.`);
    } catch {
      await fs.mkdir(dirPath, { recursive: true });
      await fs.writeFile(path.join(dirPath, 'index.html'), 'index\n');
      console.log(`"${dirPath}" is created.`);
    }
  } catch (error) {
    console.error(error)
  }
}

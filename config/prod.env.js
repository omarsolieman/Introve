'use strict'
module.exports = {
  NODE_ENV: '"production"',
  COSMIC_BUCKET: `"${process.env.COSMIC_BUCKET || 'introve'}"`,
  COSMIC_READ_KEY: `"${process.env.COSMIC_READ_KEY || 'FbeFnCYBWBRfEAVhhDsInZNSJTc1tAejfnH9ojkyUX9ADhsLs7'}"`,
  COSMIC_WRITE_KEY: `"${process.env.COSMIC_WRITE_KEY || 'qgYzRbBbpACHlBggffGpbYBwkGfPsWOukULcaO0WSh9XRWjSEq'}"`,
  BLOG_TITLE: `"${process.env.BLOG_TITLE || 'Introve'}"`,
}

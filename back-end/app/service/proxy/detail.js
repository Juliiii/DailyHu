const config = require('./config');
const assert = require('assert');
const _ = require('lodash');
const url = require('url');
const extract = require('./extract');

const map = new Map();
for (const [key, value] of Object.entries(config)) {
  map.set(value.hostname, key);
}

const getDetail = async function (src) {
  const hostname = url.parse(src).hostname;
  const name = map.get(hostname)

  assert(name, 'invalid url.');

  const siteConfig = config[name];
  assert(siteConfig, `no such site [${name}] registered.`);

  const extracted = await extract(src, siteConfig.articleSelector);
  if (siteConfig.processArticle) {
    siteConfig.processArticle(extracted);
  }

  return extracted.html();
};

module.exports = getDetail;

let url = require('url');
let str = 'http://localhost:8080/user?id=1#top';
let urlObj = url.parse(str);
console.log(urlObj);
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:8080',
  port: '8080',
  hostname: 'localhost',
  hash: '#top',
  search: '?id=1',
  query: 'id=1',
  pathname: '/user',
  path: '/user?id=1',
  href: 'http://localhost:8080/user?id=1#top' }
*/
//如果第二个参数为true，那么query就是一个对象
let urlObj2 = url.parse(str,true);
console.log(urlObj2);
/*
 query: { id: '1' },
*/
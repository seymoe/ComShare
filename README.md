# ComShare

A simple share plug-in, share free just by using function command.

## Note

**This plugin just effect in window (browser)**

## Installation

` npm install comshare --save`

## Usage

1. With npm

For example you want share this url `http://example.com`, and the share title is **THIS IS TITLE**, content is **THIS IS DESCRIPTION**, picture path is **http://picture.png**.

Just use:

```
const ComShare = require('comshare')

let exampleShare = new ComShare({
	url: 'http://example.com',
	title: 'THIS IS TITLE',
	content: 'THIS IS DESCRIPTION',
	pic: 'http://picture.png'
})

// now, you can call the function to share

exampleShare.twitter()

```

## Share lists

1. `.twitter()`  twitter
2. `.facebook()` facebook
3. `.linkedin()`  LinkedIn
4. `.weixin()` weixin
5. `.qq()`  qq
6. `.qzone()` qq zone
7. `.weibo()`  weibo
8. `.tqq()`  tqq
9. `.renren()` renren
10. `.douban()`  douban
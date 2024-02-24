'use strict';

var config = {
  qzone: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&pics={pic}&summary={content}',
  weibo: 'http://service.weibo.com/share/share.php?url={url}&title={title}&pic={pic}&searchPic=false',
  tqq: 'http://share.v.t.qq.com/index.php?c=share&a=index&url={url}&title={title}&appkey=801cf76d3cfc44ada52ec13114e84a96',
  renren: 'http://widget.renren.com/dialog/share?resourceUrl={url}&srcUrl={url}&title={title}&description={content}',
  douban: 'http://www.douban.com/share/service?href={url}&name={title}&text={content}&image={pic}',
  facebook: 'https://www.facebook.com/sharer/sharer.php?u={url}&t={title}&pic={pic}',
  twitter: 'https://twitter.com/intent/tweet?text={title}&url={url}',
  linkedin: 'https://www.linkedin.com/shareArticle?title={title}&summary={content}&mini=true&url={url}&ro=true',
  weixin: 'http://qr.liantu.com/api.php?text={url}',
  qq: 'http://connect.qq.com/widget/shareqq/index.html?url={url}&desc={title}&pics={pic}'
};

module.exports = config;
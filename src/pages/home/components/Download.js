import React, { memo } from 'react';
import "./css/Download.css"

function Download() {
  return (
    <a href="/" className="download">
      <img className="pic" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png" alt="" />
      <div className="info">
        <h5 className="title">下载简书手机app</h5>
        <p className="desc">随时随地发现和创作内容</p>
      </div>
    </a>
  );
}

export default memo(Download);
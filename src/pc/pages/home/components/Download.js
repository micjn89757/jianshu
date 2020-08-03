import React, { memo } from 'react';
import styles from "./css/Download.module.css"

function Download() {
  return (
    <a href="/" className={styles.download}>
      <img className={styles.pic} src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png" alt="" />
      <div className={styles.info}>
        <h5 className={styles.title}>下载简书手机app</h5>
        <p className={styles.desc}>随时随地发现和创作内容</p>
      </div>
    </a>
  );
}

export default memo(Download);
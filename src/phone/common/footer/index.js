import React from "react"
import styles from "./style.module.css"

class Footer extends React.PureComponent {
  render() {
    return (
      <footer>
        <hr />
        <div className={styles.downloadGuide}>
          <button className={styles.download}>下载简书，创作你的创作</button>
        </div>
      </footer>
    )
  }
}

export default Footer
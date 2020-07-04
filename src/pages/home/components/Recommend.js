import React, { memo } from 'react';
import "./css/Recommend.css"
import { connect } from "react-redux"


function Recommend(props) {
  const { list } = props
  return (
    <div className="recommendWrapper">       
      {
        list.map((item) => {
          return <img className="recommendItem" src={item.get("imgUrl")} key={item.get("id")} alt={item.get("id")} />
        })
      }    
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "recommendList"])
  }
}

export default connect(mapStateToProps, null)(memo(Recommend));
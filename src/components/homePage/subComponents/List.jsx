import React, { useState } from "react";
import list1 from "../../../images/list1 (1).png";
import list2 from "../../../images/list1 (2).png";
import list3 from "../../../images/list1 (3).png";

// icons
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const List = () => {
  const [like1, setLike1] = useState(false);
  function handleClick1() {
    setLike1(!like1);
  }
  const [like2, setLike2] = useState(true);
  function handleClick2() {
    setLike2(!like2);
  }
  const [like3, setLike3] = useState(false);
  function handleClick3() {
    setLike3(!like3);
  }
  return (
    <div className="list-container">
    <div className="list-list">
      <div className="list">
        <div className="list-all">
          <img className="list-img" src={list3} />
          <div className="list-name-price">
            <h1 className="list-name">Ice Cream Yellow</h1>
            <div className="list-price">
              <h4 className="list-discount">$ 10,99</h4>
              <h4 className="list-not-discount">$ 5,99</h4>
            </div>
          </div>
        </div>
        {like1 === false ? (
          <HeartOutlined className="like-heart" onClick={handleClick1} />
        ) : (
          <HeartFilled
            className="like-heart"
            style={{ color: "#FA5D5D" }}
            onClick={handleClick1}
          />
        )}
      </div>
    </div>

    <div className="list-list">
      <div className="list">
        <div className="list-all2">
          <img className="list-img" src={list2} />
          <div className="list-name-price">
            <h1 className="list-name">Pink Ice</h1>
            <div className="list-price">
              <h4 className="list-discount">$ 12,99</h4>
              <h4 className="list-not-discount">$ 6,99</h4>
            </div>
          </div>
        </div>
        {like2 === false ? (
          <HeartOutlined className="like-heart" onClick={handleClick2} />
        ) : (
          <HeartFilled
            className="like-heart"
            style={{ color: "#FA5D5D" }}
            onClick={handleClick2}
          />
        )}
      </div>
      </div>


      <div className="list-list">
      <div className="list">
        <div className="list-all2">
          <img className="list-img" src={list1} />
          <div className="list-name-price">
            <h1 className="list-name">Blue Ice</h1>
            <div className="list-price">
              <h4 className="list-not-discount">$ 8,99</h4>
            </div>
          </div>
        </div>
        {like3 === false ? (
          <HeartOutlined className="like-heart" onClick={handleClick3} />
        ) : (
          <HeartFilled
            className="like-heart"
            style={{ color: "#FA5D5D" }}
            onClick={handleClick3}
          />
        )}
      </div>
      </div>
    </div>
  );
};

export default List;

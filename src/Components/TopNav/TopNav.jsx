import React, { useState, useEffect } from "react";
import "./TopNav.css";
import { useRecoilState } from "recoil";
import { groupState, orderValueState } from "../../Atom";
import down from '../../assets/down.svg'
import display from '../../assets/Display.svg'
const getGroup = () => {
  if (localStorage.getItem("group")) {
    return localStorage.getItem("group");
  } else {
    return "status";
  }
}

const getOrder = () => {
  if (localStorage.getItem("order")) {
    return localStorage.getItem("order");
  } else {
    return "priority";
  }
}

const TopNav = () => {
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const [groupValue, setGroupValue] = useRecoilState(groupState);
  const [orderValue, setOrderValue] = useRecoilState(orderValueState);
  useEffect(() => {
    setGroupValue(getGroup());
    setOrderValue(getOrder());
  }, [setGroupValue, setOrderValue]);

  const handleGroupValue = (e, valueBool) => {
    if (valueBool) {
      setGroupValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("group", e.target.value);
    } else {
      setOrderValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("order", e.target.value);
    }
  }

  return (
    <div className="top-header" style={{paddingLeft: "10px", padding: "10px"}}>
      <div className="displayButton">
        <button
          className="p-10 f-16 btn "
          onClick={() => setDisplayOnClick(!displayOnClick)}
        >
  
          <img src = {display} ></img>{"Display"}
          <img src = {down} ></img>
  
        </button>
        {displayOnClick && (
          <>
            <div className="dropOnClick flex-gap-10 p-10">
              <div className="selectGroup flex-gap-sb">
                <span>Grouping </span>
                <select value={groupValue} onChange={(e) => handleGroupValue(e, true)} className="selectStyle" name="group" id="group">
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="selectGroup flex-sb">
                <span>Ordering </span>
                <select value={orderValue} onChange={(e) => handleGroupValue(e, false)} className="selectStyle" name="order" id="order">
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopNav;
import React, { useState } from "react";
import { Svg } from "../../atoms";
import { Link } from "react-router-dom";
import "./index.css";
import home from "../../../asset/home.svg";
import event from "../../../asset/event.svg";
import press from "../../../asset/press.svg";
import notice from "../../../asset/notice.svg";
import speech from "../../../asset/speech.svg";
import account from "../../../asset/account.svg";

export const BottomBar = () => {
  const [click, setClick] = useState(false);
  const handclick = () => {
    setClick(!click);
  };
  return (
    <>
      <div className={click ? "v-down-click" : "footer"}>
        <span className="v-click" onClick={handclick}>
          v
        </span>
        <div className="foot">
          <div className="home">
            <Link to="/" className="linked">
              <Svg src={home} alt="home" />
              <div className="up">Home</div>
            </Link>
          </div>
          <div className="press">
            <Link to="/press" className="linked">
              <Svg src={press} alt="press" />
              <div className="up">Press</div>
            </Link>
          </div>
          <div className="event">
            <Link to="/event" className="linked">
              <Svg src={event} alt="event" />
              <div className="up">Event</div>
            </Link>
          </div>
          <div className="notice">
            <Link to="/#" className="linked">
              <Svg src={notice} alt="notice" />
              <div className="up">Notices</div>
            </Link>
          </div>
          <div className="speech">
            <Link to="/speech" className="linked">
              <Svg src={speech} alt="speech" />
              <div className="up">Speeches</div>
            </Link>
          </div>
          <div className="account">
            <Link to="/login" className="linked">
              <Svg src={account} alt="account" />
              <div className="up">Account</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

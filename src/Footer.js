import React from "react";
import styled from "styled-components";
function Footer(props) {
  const { posterURL, fTitle } = props;
  return (
    <Divfooter>
      <div className="footer_img">
        <div className="img">
          <img src={posterURL} alt={fTitle} />
        </div>
      </div>
      {fTitle}
    </Divfooter>
  );
}
export default Footer;
const Divfooter = styled.div`
  height: 117px;
  background: #dfe6ed;
  border: 1px solid #9eadba;
  display: flex;
  align-items: center;
  .footer_img {
  width: 64px;
  height: 89px;
  margin: 0 18px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  .img {
  width: 48px;
  height: 72px;
  left: 18px;
  bottom: 23px;
  img {
  width: 100%;
}
}
}

p {
  font-weight: 400;
  font-size: 26px;
  color: #293845;
}
`;

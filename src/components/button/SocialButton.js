import React from "react";

function SocialButton({ children }) {
  const boxShadow = `
    rgba(0, 0, 0, 0.07) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.06) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.05) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.03) 0px 2px 1px,
    rgba(0, 0, 0, 0.05) 0px 4px 2px,
    rgba(0, 0, 0, 0.05) 0px 8px 4px,
    rgba(0, 0, 0, 0.05) 0px 16px 8px,
    rgba(0, 0, 0, 0.05) 0px 32px 16px
  `;

  const style = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    boxShadow,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return <div style={style}>{children}</div>;
}

export default SocialButton;

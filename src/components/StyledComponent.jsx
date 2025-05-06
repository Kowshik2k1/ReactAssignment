// Question - 3
import React from "react";
import styled from "styled-components";

export default function StyledComponent() {
  const Style = styled.div`
    background-color: lightblue;
    color: #fff;
  `;

  return <Style>First Para</Style>;
};

export function InlineCss() {
    const style = {
        backgroundColor: "lightblue",
        color: "#fff",
        margin: "20px 0",
    };

    return (
        <div style={style}>Inline Css</div>
    )
}

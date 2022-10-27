
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";

const StyleCard = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid;
  margin-left: 300px;
`;

const Card = () => {
  const square = useRef();
  const colors = ["red", "green"];

  useEffect(() => {
    setInterval(() => {
      square.current.style.background =
        colors[Math.round(Math.random() * colors.length)];
    }, 1000);
  }, [colors]);
  return <StyleCard ref={square}></StyleCard>;
};

export default Card;

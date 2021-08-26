import styled from "styled-components";
import "./styles.css";

export default function App() {
  return <Title>On a mission</Title>;
}

const Title = styled.div`
  font-family: Lobster, sans-serif;
  font-size: 5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90vw;
  text-align: right;
`;

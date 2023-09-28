import styled from "styled-components";

export const Wrapper = styled.div`
  width: clamp(40%, 300px, 90%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 24px;
  border: 1px solid #e1e1e1;
  border-radius: 16px;
  gap: 16px;
  background-color: white;
  margin: auto;
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
`;

export const Title = styled.h1`
  margin: 0;
  font-family: "Open Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Hint = styled.p`
  margin: 0;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  flex: 2;
  padding: 12px 16px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
`;

export const FooterHint = styled.p`
  margin: 0;
  font-family: "Open Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.6;
`;

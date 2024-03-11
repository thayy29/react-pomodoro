import { styled } from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    gap: 3.5rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["gray-700"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`;
export const CountDownContainer = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["green-200"]};

  display: flex;
  gap: 1.5rem;
  flex: 1;

  span {
    background-color: ${(props) => props.theme["gray-900"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  width: 4rem;
  padding: 2rem 1rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme["gray-600"]};
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0 0.5rem;
  color: ${(props) => props.theme["gray-600"]};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["green-200"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-600"]};
    border: 0;
    margin: 0;
    padding: 0;
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

export const ButtonStart = styled.button`
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme["green-200"]};
  color: ${(props) => props.theme["white"]};

  cursor: pointer;
  font-weight: bold;

  gap: 0.5rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["green-100"]};
  }
`;

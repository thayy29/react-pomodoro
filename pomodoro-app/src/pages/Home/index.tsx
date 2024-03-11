import { Play } from "phosphor-react";
import {
  ButtonStart,
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  TaskInput,
} from "./style";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestions">
            <option value={"Projeto 1"} />
            <option value={"Projeto 2"} />
            <option value={"Projeto 3"} />
          </datalist>

          <label htmlFor="minutsAmount">durante</label>
          <MinutesAmountInput
            placeholder="00"
            type="number"
            id="minutesAmount"
            step={5}
            max={60}
            min={5}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <ButtonStart disabled type="submit">
          <Play size={24} />
          Começar
        </ButtonStart>
      </form>
    </HomeContainer>
  );
}

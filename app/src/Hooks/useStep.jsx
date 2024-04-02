import { useContext } from "react";
import { StepContextValue } from "../contexts/StepContext";

export const useStepContext = () => useContext(StepContextValue);
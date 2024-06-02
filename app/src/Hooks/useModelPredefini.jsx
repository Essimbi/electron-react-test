import { useContext } from "react";
import { ModelContext } from "../contexts/ModelPredefiniContext";

export const useNodelPredenisContext = () => useContext(ModelContext);
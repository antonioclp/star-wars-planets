import { createContext } from "react";

// Interfaces
import { IContext } from "../interfaces/IContext";

const AppContext = createContext<IContext | null>(null);

export default AppContext;
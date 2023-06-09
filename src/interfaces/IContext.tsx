export interface IContext {
    starWarsPlanets: never[],
    setPlanets: React.Dispatch<React.SetStateAction<never[]>>,
    isLoading: boolean,
    setBoolean: React.Dispatch<React.SetStateAction<boolean>>
}

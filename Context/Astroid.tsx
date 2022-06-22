import * as React from "react";
type AppContextInterface = {
  name: string;
  nasa_jpl_url: string;
  is_potentially_hazardous_asteroid: string;
};

export const AsteroidContext = React.createContext<null | null>(null);
export const Asteroids: React.FC = ({ children }: any) => {
  const [text, setText] = React.useState<any>();
  const [asteroidInfo, setasteroidInfo] = React.useState<any>();

  return (
    <AsteroidContext.Provider value={{ text, setText,asteroidInfo, setasteroidInfo}}>
      {children}
    </AsteroidContext.Provider>
  );
};

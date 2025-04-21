/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from "react";
import { ITelegramUser, IWebApp } from "src/types/telegram.type";

export interface ITelegramContext {
  webApp?: IWebApp;
  user?: ITelegramUser;
}

const initialState: ITelegramContext = {
  webApp: undefined,
  user: undefined,
};

export const TelegramContext = createContext<ITelegramContext>(initialState);

export const TelegramProvider = ({ children }: { children: React.ReactNode }) => {
  const [webApp, setWebApp] = useState<IWebApp | undefined>(initialState.webApp);

  useEffect(() => {
    const init = async () => {
      const app = (window as any).Telegram?.WebApp;
      if (app) {
        await app.ready();
        setWebApp(app);
      }
    };

    init();
  }, []);

  return (
    <TelegramContext.Provider
      value={{
        webApp,
        user: webApp?.initDataUnsafe.user,
      }}
    >
      {children}
    </TelegramContext.Provider>
  );
};

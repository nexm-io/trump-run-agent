export const config = {
  SECRET_KEY: "",
  IV_KEY: "",
  BASE_URL: import.meta.env.VITE_API_URL,
  GA_TRACKING_ID: import.meta.env.VITE_GA_TRACKING_ID,
  RUN_ENV: import.meta.env.VITE_RUN_ENV,
  SOLANA_CHAIN_ID: import.meta.env.VITE_SOLANA_CHAIN_ID,
  SOLANA_RPC: import.meta.env.VITE_SOLANA_RPC,
  SOLANA_ADDRESS_TOKEN: import.meta.env.VITE_SOLANA_ADDRESS_TOKEN,
  SHARE_LINK: import.meta.env.VITE_APP_LINK || "",
  GROUP: import.meta.env.VITE_GROUP || "",
};

export const BLOCK_ID_LIST = [
  
];

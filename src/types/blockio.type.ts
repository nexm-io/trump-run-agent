export type BlockIOType = {
  method: string;
  params: any;
};

export type BlockIOResponseType = {
  jsonrpc: string;
  result?:
    | {
        context: {
          apiVersion: string;
          slot: number;
        };
        value: number;
      }
    | undefined;
  id: string;
};

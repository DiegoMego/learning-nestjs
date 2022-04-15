declare global {
  type Filter = {
    column: {
      table: string;
      name: string | null;
    };
    value: string | number | boolean | null;
  };
}

export {};

declare global {
  type Filter = {
    column: string | null;
    value: string | number | boolean | null;
  };
}

export {};

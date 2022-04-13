declare global {
  type Filter = {
    column: string | null;
    value: string | number | null;
  };
}

export {};

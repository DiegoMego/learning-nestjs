import { Transform } from 'class-transformer';

export function ToBoolean(): (target: any, key: string) => void {
  return Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return null;
  });
}

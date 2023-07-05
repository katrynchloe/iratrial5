export default function nullthrows<T>(value: T | null | undefined): T {
  if (value === null || value === undefined) {
    throw new Error("Unexpected null");
  }
  return value;
}


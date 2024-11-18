export function objectFromParams<T>(p: URLSearchParams) {
    const entries = p.entries() as unknown as [string, string];
    const obj: any = {};
    for (const [key, value] of entries) {
      obj[key] = value;
    }
    return obj as T;
  }
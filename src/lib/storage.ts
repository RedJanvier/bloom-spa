const PREFIX = "bloom:";

export function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeStorage<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    /* quota or disabled — silently ignore */
  }
}

export function removeStorage(key: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(PREFIX + key);
  } catch {
    /* ignore */
  }
}

export type StoredCustomer = {
  name: string;
  phone: string;
  email: string;
  preferredChannel: "email" | "whatsapp" | "both";
};

export const STORAGE_KEYS = {
  customer: "customer",
  favorites: "favorites",
  recent: "recent",
} as const;

const STRAPI_URL = process.env.STRAPI_URL ?? "";

type StrapiFetchOptions = {
  method?: "GET" | "POST";
  query?: string;
  token?: string;
  cache?: RequestCache;
};

export async function strapiFetch<T>(
  path: string,
  options: StrapiFetchOptions = {},
): Promise<T> {
  if (!STRAPI_URL) {
    throw new Error("STRAPI_URL is not defined");
  }

  const url = `${STRAPI_URL}${path}${options.query ?? ""}`;

  try {
    const res = await fetch(url, {
      method: options.method ?? "GET",
      headers: {
        "Content-Type": "application/json",
        ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
      },
      cache: options.cache ?? "no-store",
    });

    if (!res.ok) {
      throw new Error(`Strapi error ${res.status}: ${res.statusText}`);
    }

    return (await res.json()) as T;
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unknown Strapi fetch error";
    throw new Error(`Strapi request failed: ${message}`);
  }
}

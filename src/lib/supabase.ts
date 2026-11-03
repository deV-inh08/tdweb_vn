export interface SupabaseConfig {
  url: string;
  anonKey: string;
  isConfigured: boolean;
}

function normalizeSupabaseUrl(raw: string): string {
  return raw.trim().replace(/\/rest\/v1\/?$/i, '').replace(/\/+$/, '');
}

export function getSupabaseConfig(): SupabaseConfig {
  const envUrl = normalizeSupabaseUrl(
    (import.meta.env.VITE_SUPABASE_URL as string | undefined) || ''
  );
  const envKey =
    (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)?.trim() || '';

  return {
    url: envUrl,
    anonKey: envKey,
    isConfigured: Boolean(envUrl && envKey),
  };
}

export async function supabaseFetch<T = unknown>(
  tableAndQuery: string,
  options: {
    method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    body?: unknown;
    prefer?: string;
  } = {}
): Promise<{ data: T | null; error: string | null }> {
  const cfg = getSupabaseConfig();
  if (!cfg.isConfigured) {
    return { data: null, error: 'Chưa cấu hình VITE_SUPABASE_URL và VITE_SUPABASE_ANON_KEY trong file .env' };
  }

  const headers: Record<string, string> = {
    apikey: cfg.anonKey,
    'Content-Type': 'application/json',
  };

  if (cfg.anonKey.startsWith('eyJ')) {
    headers['Authorization'] = `Bearer ${cfg.anonKey}`;
  }

  if (options.prefer) {
    headers['Prefer'] = options.prefer;
  }

  try {
    const res = await fetch(`${cfg.url}/rest/v1/${tableAndQuery}`, {
      method: options.method || 'GET',
      headers,
      body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
    });

    if (!res.ok) {
      const errText = await res.text();
      return { data: null, error: `HTTP ${res.status}: ${errText}` };
    }

    const text = await res.text();
    const data = text ? (JSON.parse(text) as T) : null;
    return { data, error: null };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : 'Lỗi kết nối mạng tới Supabase',
    };
  }
}

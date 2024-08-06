import { CacheProvider } from '@emotion/react';
import { createEmotionCache } from './createEmotionCache';

interface ICacheProvider {
  children: React.ReactNode;
}

const cache = createEmotionCache();

export function MuiCacheProvider({ children }: ICacheProvider) {
  return (
    <CacheProvider value={cache}>
      {children}
    </CacheProvider>
  )
}

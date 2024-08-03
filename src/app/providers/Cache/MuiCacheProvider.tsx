import { CacheProvider } from '@emotion/react';
import { clientSideEmotionCache } from './createEmotionCache';

interface ICacheProvider {
  children: React.ReactNode;
}


export function MuiCacheProvider({ children }: ICacheProvider) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      {children}
    </CacheProvider>
  )
}

import createCache from '@emotion/cache';


function createEmotionCache() {
  return createCache({ key: 'css' });
}

const clientSideEmotionCache = createEmotionCache();

export { clientSideEmotionCache, createEmotionCache };

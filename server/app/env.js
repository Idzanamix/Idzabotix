/* eslint-disable no-undef */
const IS_PROD = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || 5173
const BASE = process.env.BASE || '/'
const DOMAIN = process.env.DOMAIN || 'idzabotix.local'
const TOKEN = process.env.TOKEN || '';

export { IS_PROD, PORT, BASE, DOMAIN, TOKEN }




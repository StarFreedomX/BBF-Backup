import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..', '..');

export const config = {
  /** Server port */
  port: Number(process.env.PORT) || 3456,

  /** Dev mode (BBF_DEV=true or NODE_ENV=development) */
  isDev: process.env.BBF_DEV === 'true' || process.env.NODE_ENV === 'development',

  /** Root directory of the project */
  rootDir: ROOT,

  /** Public static files directory */
  publicDir: resolve(ROOT, 'public'),

  /** Site base URL for reference */
  siteUrl: 'https://ohashiayaka.com',

  /** File extensions to try for clean URLs */
  indexExtensions: ['.html', '.htm'],

  /** Paths that should redirect to index */
  rootPaths: ['/', '/index', '/index.html'],
} as const;

export function imgAlt(src: string): string {
  return src
    .replace(/^\/images\//, '')
    .replace(/\.\w+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

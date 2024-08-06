import { JSDOM } from 'jsdom';

export function extractStyleTags(htmlString: string) {
  const dom = new JSDOM(htmlString);

  const { document } = dom.window;

  const styleElements = document.querySelectorAll('style');

  const styleTags = Array.from(styleElements).map(element => element.outerHTML).join('');


  return styleTags;
}

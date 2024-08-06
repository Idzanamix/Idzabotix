import { JSDOM } from 'jsdom';

export function removeStyleTags(htmlString: string) {
  const dom = new JSDOM(htmlString);

  const { document } = dom.window;

  const styleElements = document.querySelectorAll('style');

  styleElements.forEach(styleElement => {
    styleElement.parentNode?.removeChild(styleElement);
  });

  const bodyContent = document.body.innerHTML;

  return bodyContent
}

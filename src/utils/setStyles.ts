export type StylesType = {
  [key in keyof CSSStyleDeclaration]?: string;
};

const setStyles = (element: HTMLElement, styles: StylesType) => {
  for (let s in styles) {
    element.style[s] = styles[s] || "";
  }
};

export default setStyles;

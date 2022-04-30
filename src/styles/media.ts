import {
  css,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components';

type Breakpoints = { [device: string]: number };

const sizes: Breakpoints = {
  desktop: 1200,
  tabletXL: 1024,
  tablet: 768,
  phablet: 600,
  phoneXL: 480,
  phone: 375,
};

type Template<T> = Record<
  keyof T,
  (
    literals: TemplateStringsArray,
    ...args: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation
>;

const media = Object.keys(sizes).reduce(
  (template, label) => ({
    ...template,
    [label]: (literals, ...args) => css`
      @media (min-width: ${sizes[label] / 16}em) {
        ${css(literals, ...args)};
      }
    `,
  }),
  {} as Template<Breakpoints>,
);

export default media;

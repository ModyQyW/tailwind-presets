# @modyqyw/tailwind-presets

[English](./README.md) | 简体中文

**WIP**

开箱即用的 TailwindCSS v3 预设。也提供了 TailwindCSS v3 和不同 UI 库的适配。

## Usage

```sh
npm install @modyqyw/tailwind-presets
```

然后更新你的 TailwindCSS 配置。

### base

这个预设扩展了 TailwindCSS 的默认配置。[查看预设](./src/base.ts)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [basePreset],
};
```

<details>
  <summary>我可能会在什么时候用到这个预设？</summary>
  <p>TailwindCSS 默认配置已经满足了绝大部分情况。但在 <strong>需要高度定制的情景</strong> 下，大量使用 <code>[xxx]</code> 会分散注意力并降低代码整洁程度。</p>
  <p>这个预设考虑了该情景。使用这个预设后，你应该可以减少 <code>[xxx]</code> 的使用量。</p>
  <p>如果你不是非使用 Tailwind 不可，建议使用 <a href="https://windicss.org/" target="_blank">WindiCSS</a> 和 <a href="https://github.com/unocss/unocss" target="_blank">UnoCSS</a>。</p>
</details>

<details>
  <summary>我想知道这个预设大概做了什么。</summary>
  <ul>
    <li>扩展了 <code>columns</code>。</li>
    <li>扩展了 <code>spacing</code>。</li>
    <li>扩展了 <code>blur</code>。</li>
    <li>扩展了 <code>brightness</code>。</li>
    <li>扩展了 <code>borderRadius</code>。</li>
    <li>扩展了 <code>borderWidth</code>。</li>
    <li>扩展了 <code>contrast</code>。</li>
    <li>扩展了 <code>hueRotate</code>。</li>
    <li>扩展了 <code>flexBasis</code>。</li>
    <li>扩展了 <code>flexGrow</code>。</li>
    <li>扩展了 <code>flexShrink</code>。</li>
    <li>扩展了 <code>fontSize</code>。</li>
    <li>扩展了 <code>fontWeight</code>。</li>
    <li>扩展了 <code>gridColumn</code>。</li>
    <li>扩展了 <code>gridColumnEnd</code>。</li>
    <li>扩展了 <code>gridColumnStart</code>。</li>
    <li>扩展了 <code>gridRow</code>。</li>
    <li>扩展了 <code>gridRowStart</code>。</li>
    <li>扩展了 <code>gridRowEnd</code>。</li>
    <li>扩展了 <code>gridTemplateColumns</code>。</li>
    <li>扩展了 <code>gridTemplateRows</code>。</li>
    <li>扩展了 <code>height</code>。</li>
    <li>扩展了 <code>inset</code>。</li>
    <li>扩展了 <code>lineHeight</code>。</li>
    <li>扩展了 <code>maxHeight</code>。</li>
    <li>扩展了 <code>maxWidth</code>。</li>
    <li>扩展了 <code>minHeight</code>。</li>
    <li>扩展了 <code>minWidth</code>。</li>
    <li>扩展了 <code>opacity</code>。</li>
    <li>扩展了 <code>order</code>。</li>
    <li>扩展了 <code>outlineOffset</code>。</li>
    <li>扩展了 <code>outlineWidth</code>。</li>
    <li>扩展了 <code>ringOffsetWidth</code>。</li>
    <li>扩展了 <code>ringWidth</code>。</li>
    <li>扩展了 <code>rotate</code>。</li>
    <li>扩展了 <code>saturate</code>。</li>
    <li>扩展了 <code>scale</code>。</li>
    <li>扩展了 <code>skew</code>。</li>
    <li>扩展了 <code>textDecorationThickness</code>。</li>
    <li>扩展了 <code>textUnderlineOffset</code>。</li>
    <li>扩展了 <code>transitionDelay</code>。</li>
    <li>扩展了 <code>transitionDuration</code>。</li>
    <li>扩展了 <code>translate</code>。</li>
    <li>扩展了 <code>width</code>。</li>
    <li>扩展了 <code>zIndex</code>。</li>
  </ul>
</details>

### ant-design

这个预设提供了 `Ant Design` 相关的配置。[查看预设](./src/ant-design.ts)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;
const getAntDesignPreset = require('@modyqyw/tailwind-presets/ant-design').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [
    basePreset,
    getAntDesignPreset({
      /** Base */
      baseSelectors = [':root'],
      baseMediaQuery = '',

      basePrimary = '#1890ff',
      baseSecondary = '#666666',
      baseSuccess = '#52c41a',
      baseWarning = '#faad14',
      baseError = '#f5222d',
      baseDanger = '#f5222d',
      baseInfo = '#1890ff',

      baseBg = '#ffffff',
      baseMaskBg = 'rgba(0, 0, 0, 0.45)',
      baseDisabledBg = '#f5f5f5',

      baseBorder = '#d9d9d9',

      baseText = 'rgba(0, 0, 0, 0.85)',
      basePrimaryText = 'rgba(0, 0, 0, 0.85)',
      baseSecondaryText = 'rgba(0, 0, 0, 0.45)',
      baseDisabledText = 'rgba(0, 0, 0, 0.25)',

      baseBoxShadow = '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',

      /** Dark */
      darkSelectors = ['.dark'],
      darkMediaQuery = '',

      darkPrimary = '#177ddc',
      darkSecondary = '#5a5a5a',
      darkSuccess = '#49aa19',
      darkWarning = '#d89614',
      darkError = '#d32029',
      darkDanger = '#d32029',
      darkInfo = '#177ddc',

      darkBg = '#141414',
      darkMaskBg = 'rgba(0, 0, 0, 0.45)',
      darkDisabledBg = 'rgba(255, 255, 255, 0.08)',

      darkBorder = '#434343',

      darkText = 'rgba(255, 255, 255, 0.85)',
      darkPrimaryText = 'rgba(255, 255, 255, 0.85)',
      darkSecondaryText = 'rgba(255, 255, 255, 0.45)',
      darkDisabledText = 'rgba(255, 255, 255, 0.3)',

      darkBoxShadow = '0 3px 6px -4px rgba(0, 0, 0, 0.48), 0 6px 16px 0 rgba(0, 0, 0, 0.32), 0 9px 28px 8px rgba(0, 0, 0, 0.2)',
    }),
  ],
};
```

<details>
  <summary>我可能会在什么时候用到这个预设？</summary>
  <p>如果你在使用遵循 <code>Ant Design</code> 规范相关的样式库，比如 <code>antd</code> 和 <code>ant-design-vue</code>，又想使用 TailwindCSS，这个预设很有用。</p>
</details>

<details>
  <summary>我想知道这个预设大概做了什么。</summary>
  <ul>
    <li>设置 <code>darkMode</code> 为 <code>class</code>。</li>
    <li>设置 <code>safelist</code> 为 <code>['dark']</code>。</li>
    <li>替换了 <code>screens</code>。</li>
    <li>扩展了 <code>colors</code>。</li>
    <li>扩展了 <code>backgroundColor</code>。</li>
    <li>扩展了 <code>borderColor</code>。</li>
    <li>扩展了 <code>fontFamily</code>。</li>
    <li>扩展了 <code>textColor</code>。</li>
    <li>扩展了 <code>boxShadow</code>。</li>
  </ul>
</details>

#### 额外配置

在使用这个预设时，需要自行控制何时在页面容器元素添加 `class="dark"`。推荐使用 [usehooks-ts useDarkMode](https://usehooks-ts.com/react-hook/use-dark-mode) 或 [VueUse useDark](https://vueuse.org/core/usedark/)。

TailwindCSS 的 `preflight` 可能会和 `Ant Design` 规范相关的样式冲突，你需要做一些简单的调整。

√ 推荐：使用 TailwindCSS 的 `preflight`。

```ts
// 项目入口文件，如 main.ts

// 额外的 preflight
import 'modern-normalize';

// TailwindCSS base 和自定义 preflight
import './styles/preflight.css';

// antd 样式
import 'antd/dist/antd.min.css';
// import 'antd/dist/antd.variable.min.css';

// ant-design-vue 样式
import 'ant-design-vue/dist/antd.min.css';
// import 'ant-design-vue/dist/antd.variable.min.css';

// TailwindCSS components + utilities
import './styles/tailwind.css';

// 其它你需要的全局样式
import './styles/global.css';
```

```css
/* styles/preflight.css */
@tailwind base;

html {
  font-size: var(--font-size, 16px);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

```css
/* styles/tailwind.css */
@tailwind components;
@tailwind utilities;
```

× 不推荐：不使用 TailwindCSS 的 `preflight`。

```ts
// 项目入口文件，如 main.ts

// 额外的 preflight
import 'modern-normalize';

// TailwindCSS base 和自定义 preflight
import './styles/preflight.css';

// antd 样式
import 'antd/dist/antd.min.css';
// import 'antd/dist/antd.variable.min.css';

// ant-design-vue 样式
import 'ant-design-vue/dist/antd.min.css';
// import 'ant-design-vue/dist/antd.variable.min.css';

// TailwindCSS components + utilities
import './styles/tailwind.css';

// 其它你需要的全局样式
import './styles/global.css';
```

```css
/* styles/preflight.css */
*,
::before,
::after {
  box-sizing: border-box;
  border-color: rgb(var(--border-color));
  border-style: solid;
  border-width: 0;
}

::before,
::after {
  --tw-content: '';
}

@tailwind base;

html {
  font-size: var(--font-size, 16px);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

```css
/* styles/tailwind.css */
@tailwind components;
@tailwind utilities;
```

```js
// tailwind.config.js
const basePreset = require('@modyqyw/tailwind-presets/base').default;
const getAntDesignPreset = require('@modyqyw/tailwind-presets/ant-design').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  corePlugins: {
    preflight: false,
  },
  presets: [
    basePreset,
    getAntDesignPreset({ ... }),
  ],
};
```

### element-plus

这个预设提供了 `element-plus` 相关的配置。[查看预设](./src/element-plus.ts)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;
const getElementPlusPreset = require('@modyqyw/tailwind-presets/element-plus').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [
    basePreset,
    getElementPlusPreset({
      /** Base */
      baseSelectors = [':root'],
      baseMediaQuery = '',

      basePrimary = '#409eff',
      baseSecondary = '#909399',
      baseSuccess = '#67c23a',
      baseWarning = '#e6a23c',
      baseError = '#f56c6c',
      baseDanger = '#f56c6c',
      baseInfo = '#909399',

      baseFill = '#f0f2f5',
      baseDarkerFill = '#e6e8eb',
      baseDarkFill = '#ebedf0',
      baseLightFill = '#f5f7fa',
      baseLighterFill = '#fafafa',
      baseExtraLightFill = '#fafcff',
      baseBlankFill = '#ffffff',

      baseText = '#303133',
      basePrimaryText = '#303133',
      baseRegularText = '#606266',
      baseSecondaryText = '#909399',
      basePlaceholderText = '#a8abb2',
      baseDisabledText = '#c0c4cc',

      baseBg = '#ffffff',
      basePageBg = '#f2f3f5',
      baseOverlayBg = '#ffffff',
      baseMaskBg = 'rgba(0, 0, 0, 0.5)',
      baseDisabledBg = '#f5f7fa',

      baseBorder = '#dcdfe6',
      baseDarkerBorder = '#cdd0d6',
      baseDarkBorder = '#d4d7de',
      baseLightBorder = '#e4e7ed',
      baseLighterBorder = '#ebeef5',
      baseExtraLightBorder = '#f2f6fc',

      baseBoxShadow = '0px 12px 32px 4px rgba(0, 0, 0, 0.04), 0px 8px 20px rgba(0, 0, 0, 0.08)',

      /** Dark */
      darkSelectors = ['.dark'],
      darkMediaQuery = '',

      darkPrimary = '#409eff',
      darkSecondary = '#909399',
      darkSuccess = '#67c23a',
      darkWarning = '#e6a23c',
      darkError = '#f56c6c',
      darkDanger = '#f56c6c',
      darkInfo = '#909399',

      darkFill = '#303030',
      darkDarkerFill = '#424243',
      darkDarkFill = '#39393a',
      darkLightFill = '#262727',
      darkLighterFill = '#1d1d1d',
      darkExtraLightFill = '#191919',
      darkBlankFill = 'transparent',

      darkText = '#e5eaf3',
      darkPrimaryText = '#e5eaf3',
      darkRegularText = '#cfd3dc',
      darkSecondaryText = '#a3a6ad',
      darkPlaceholderText = '#8d9095',
      darkDisabledText = '#6c6e72',

      darkBg = '#141414',
      darkPageBg = '#0a0a0a',
      darkOverlayBg = '#1d1e1f',
      darkMaskBg = 'rgba(0, 0, 0, 0.5)',
      darkDisabledBg = 'transparent',

      darkBorder = '#4c4d4f',
      darkDarkerBorder = '#636466',
      darkDarkBorder = '#58585b',
      darkLightBorder = '#414243',
      darkLighterBorder = '#363637',
      darkExtraLightBorder = '#2b2b2c',

      darkBoxShadow = '0px 12px 32px 4px rgba(0, 0, 0, 0.36), 0px 8px 20px rgba(0, 0, 0, 0.72)',
    }),
  ],
};
```

<details>
  <summary>我可能会在什么时候用到这个预设？</summary>
  <p>如果你在使用 <code>element-plus</code>，又想使用 TailwindCSS，这个预设很有用。</p>
</details>

<details>
  <summary>我想知道这个预设大概做了什么。</summary>
  <ul>
    <li>设置 <code>darkMode</code> 为 <code>class</code>。</li>
    <li>设置 <code>safelist</code> 为 <code>['dark']</code>。</li>
    <li>替换了 <code>screens</code>。</li>
    <li>扩展了 <code>colors</code>。</li>
    <li>扩展了 <code>backgroundColor</code>。</li>
    <li>扩展了 <code>borderColor</code>。</li>
    <li>扩展了 <code>textColor</code>。</li>
    <li>扩展了 <code>fontFamily</code>。</li>
    <li>扩展了 <code>boxShadow</code>。</li>
  </ul>
</details>

#### 额外配置

在使用这个预设时，需要自行控制何时在页面容器元素添加 `class="dark"`。推荐使用 [VueUse useDark](https://vueuse.org/core/usedark/)。

TailwindCSS 的 `preflight` 可能会和 `element-plus` 样式冲突，你需要做一些简单的调整。

√ 推荐：使用 TailwindCSS 的 `preflight`。

```ts
// 项目入口文件，如 main.ts

// 额外的 preflight
import 'modern-normalize';

// TailwindCSS base 和自定义 preflight
import './styles/preflight.css';

// element-plus 样式
import 'element-plus/dist/index.css';

// TailwindCSS components + utilities
import './styles/tailwind.css';

// 其它你需要的全局样式
import './styles/global.css';
```

```css
/* styles/preflight.css */
@tailwind base;

html {
  font-size: var(--font-size, 16px);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

```css
/* styles/tailwind.css */
@tailwind components;
@tailwind utilities;
```

× 不推荐：不使用 TailwindCSS 的 `preflight`。

```ts
// 项目入口文件，如 main.ts

// 额外的 preflight
import 'modern-normalize';

// TailwindCSS base 和自定义 preflight
import './styles/preflight.css';

// element-plus 样式
import 'element-plus/dist/index.css';

// TailwindCSS components + utilities
import './styles/tailwind.css';

// 其它你需要的全局样式
import './styles/global.css';
```

```css
/* styles/preflight.css */
*,
::before,
::after {
  box-sizing: border-box;
  border-color: rgb(var(--border-color));
  border-style: solid;
  border-width: 0;
}

::before,
::after {
  --tw-content: '';
}

@tailwind base;

html {
  font-size: var(--font-size, 16px);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

```css
/* styles/tailwind.css */
@tailwind components;
@tailwind utilities;
```

```js
// tailwind.config.js
const basePreset = require('@modyqyw/tailwind-presets/base').default;
const getAntDesignPreset = require('@modyqyw/tailwind-presets/ant-design').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  corePlugins: {
    preflight: false,
  },
  presets: [
    basePreset,
    getAntDesignPreset({ ... }),
  ],
};
```

### miniprogram

这个预设提供了小程序相关的配置。[查看预设](./src/miniprogram.ts)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;
// const getAntDesignPreset = require('@modyqyw/tailwind-presets/ant-design').default;
// const getElementPlusPreset = require('@modyqyw/tailwind-presets/element-plus').default;
const miniprogramPreset = require('@modyqyw/tailwind-presets/miniprogram').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [
    basePreset,
    // getAntDesignPreset({ ... }),
    // getElementPlusPreset({ ... }),
    miniprogramPreset,
  ],
};
```

<details>
  <summary>我可能会在什么时候用到这个预设？</summary>
  <p>如果你在开发小程序，又想使用 TailwindCSS，这个预设很有用。</p>
</details>

<details>
  <summary>我想知道这个预设大概做了什么。</summary>
  <ul>
    <li>禁用了 <code>preflight</code>。</li>
    <li>替换了 <code>separator</code>。</li>
    <li>扩展了 <code>spacing</code>。</li>
    <li>扩展了 <code>borderRadius</code>。</li>
    <li>扩展了 <code>borderWidth</code>。</li>
    <li>扩展了 <code>flexBasis</code>。</li>
    <li>扩展了 <code>height</code>。</li>
    <li>扩展了 <code>inset</code>。</li>
    <li>扩展了 <code>translate</code>。</li>
    <li>扩展了 <code>width</code>。</li>
  </ul>
</details>

#### 额外配置

小程序平台不支持 TailwindCSS 的 `base`（包括 `preflight`）生成的样式代码。请直接使用 [miniprogram-base.css](./miniprogram-base.css) 以替代 TailwindCSS 的 `base`（包括 `preflight`）。

### easy

这个预设提供了关怀模式相关的配置。[查看预设](./src/easy.ts)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;
// const getAntDesignPreset = require('@modyqyw/tailwind-presets/ant-design').default;
// const getElementPlusPreset = require('@modyqyw/tailwind-presets/element-plus').default;
// const miniprogramPreset = require('@modyqyw/tailwind-presets/miniprogram').default;
const getEasyPreset = require('@modyqyw/tailwind-presets/easy').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [
    basePreset,
    // getAntDesignPreset({ ... }),
    // getElementPlusPreset({ ... }),
    // miniprogramPreset,
    getEasyPreset({
      selectors: ['.easy'],
      mediaQuery: '',
      fontSize: '24px',
    }),
  ],
};
```

<details>
  <summary>我可能会在什么时候用到这个预设？</summary>
  <p>如果你在开发关怀模式，又想使用 TailwindCSS，这个预设很有用。</p>
</details>

<details>
  <summary>我想知道这个预设大概做了什么。</summary>
  <ul>
    <li>扩展了 <code>fontSize</code>。</li>
  </ul>
</details>

#### 额外配置

在使用这个预设时，需要自行控制何时在页面容器元素添加 `class="easy"`，并需要为页面容器元素添加 `font-size` 相应样式。

假定页面容器元素是 `html`，代码如下所示。

```html
<html class="easy">
  ...
</html>
```

```css
html {
  font-size: var(--font-size, 16px);
}
```

如果调整了默认配置，请自行做相应调整。

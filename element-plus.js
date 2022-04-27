/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  theme: {
    screens: {
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1920px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--el-color-primary, #409eff)',
          hover: 'var(--el-color-primary-light-3, #79bbff)',
          active: 'var(--el-color-primary-dark-2, #337ecc)',
          'lighten-1': 'var(--el-color-primary-light-1, #53a8ff)',
          'light-1': 'var(--el-color-primary-light-1, #53a8ff)',
          'darken-1': 'var(--el-color-primary-dark-1, #3a8ee6)',
          'dark-1': 'var(--el-color-primary-dark-1, #3a8ee6)',
          'lighten-2': 'var(--el-color-primary-light-2, #66b1ff)',
          'light-2': 'var(--el-color-primary-light-2, #66b1ff)',
          'darken-2': 'var(--el-color-primary-dark-2, #337ecc)',
          'dark-2': 'var(--el-color-primary-dark-2, #337ecc)',
          'lighten-3': 'var(--el-color-primary-light-3, #79bbff)',
          'light-3': 'var(--el-color-primary-light-3, #79bbff)',
          'darken-3': 'var(--el-color-primary-dark-3, #2d6fb3)',
          'dark-3': 'var(--el-color-primary-dark-3, #2d6fb3)',
          'lighten-4': 'var(--el-color-primary-light-4, #8cc5ff)',
          'light-4': 'var(--el-color-primary-light-4, #8cc5ff)',
          'darken-4': 'var(--el-color-primary-dark-4, #265f99)',
          'dark-4': 'var(--el-color-primary-dark-4, #265f99)',
          'lighten-5': 'var(--el-color-primary-light-5, #a0cfff)',
          'light-5': 'var(--el-color-primary-light-5, #a0cfff)',
          'darken-5': 'var(--el-color-primary-dark-5, #204f80)',
          'dark-5': 'var(--el-color-primary-dark-5, #204f80)',
          'lighten-6': 'var(--el-color-primary-light-6, #b3d8ff)',
          'light-6': 'var(--el-color-primary-light-6, #b3d8ff)',
          'darken-6': 'var(--el-color-primary-dark-6, #1a3f66)',
          'dark-6': 'var(--el-color-primary-dark-6, #1a3f66)',
          'lighten-7': 'var(--el-color-primary-light-7, #c6e2ff)',
          'light-7': 'var(--el-color-primary-light-7, #c6e2ff)',
          'darken-7': 'var(--el-color-primary-dark-7, #132f4d)',
          'dark-7': 'var(--el-color-primary-dark-7, #132f4d)',
          'lighten-8': 'var(--el-color-primary-light-8, #d9ecff)',
          'light-8': 'var(--el-color-primary-light-8, #d9ecff)',
          'darken-8': 'var(--el-color-primary-dark-8, #0d2033)',
          'dark-8': 'var(--el-color-primary-dark-8, #0d2033)',
          'lighten-9': 'var(--el-color-primary-light-9, #ecf5ff)',
          'light-9': 'var(--el-color-primary-light-9, #ecf5ff)',
          'darken-9': 'var(--el-color-primary-dark-9, #061019)',
          'dark-9': 'var(--el-color-primary-dark-9, #061019)',
        },

        success: {
          DEFAULT: 'var(--el-color-success, #67c23a)',
          hover: 'var(--el-color-success-light-3, #95d475)',
          active: 'var(--el-color-success-dark-2, #529b2e)',
          'lighten-1': 'var(--el-color-success-light-1, #76c84e)',
          'light-1': 'var(--el-color-success-light-1, #76c84e)',
          'darken-1': 'var(--el-color-success-dark-1, #5daf34)',
          'dark-1': 'var(--el-color-success-dark-1, #5daf34)',
          'lighten-2': 'var(--el-color-success-light-2, #85ce61)',
          'light-2': 'var(--el-color-success-light-2, #85ce61)',
          'darken-2': 'var(--el-color-success-dark-2, #529b2e)',
          'dark-2': 'var(--el-color-success-dark-2, #529b2e)',
          'lighten-3': 'var(--el-color-success-light-3, #95d475)',
          'light-3': 'var(--el-color-success-light-3, #95d475)',
          'darken-3': 'var(--el-color-success-dark-3, #488829)',
          'dark-3': 'var(--el-color-success-dark-3, #488829)',
          'lighten-4': 'var(--el-color-success-light-4, #a4da89)',
          'light-4': 'var(--el-color-success-light-4, #a4da89)',
          'darken-4': 'var(--el-color-success-dark-4, #3e7423)',
          'dark-4': 'var(--el-color-success-dark-4, #3e7423)',
          'lighten-5': 'var(--el-color-success-light-5, #b3e19d)',
          'light-5': 'var(--el-color-success-light-5, #b3e19d)',
          'darken-5': 'var(--el-color-success-dark-5, #34611d)',
          'dark-5': 'var(--el-color-success-dark-5, #34611d)',
          'lighten-6': 'var(--el-color-success-light-6, #c2e7b0)',
          'light-6': 'var(--el-color-success-light-6, #c2e7b0)',
          'darken-6': 'var(--el-color-success-dark-6, #294e17)',
          'dark-6': 'var(--el-color-success-dark-6, #294e17)',
          'lighten-7': 'var(--el-color-success-light-7, #d1edc4)',
          'light-7': 'var(--el-color-success-light-7, #d1edc4)',
          'darken-7': 'var(--el-color-success-dark-7, #1f3a11)',
          'dark-7': 'var(--el-color-success-dark-7, #1f3a11)',
          'lighten-8': 'var(--el-color-success-light-8, #e1f3d8)',
          'light-8': 'var(--el-color-success-light-8, #e1f3d8)',
          'darken-8': 'var(--el-color-success-dark-8, #15270c)',
          'dark-8': 'var(--el-color-success-dark-8, #15270c)',
          'lighten-9': 'var(--el-color-success-light-9, #f0f9eb)',
          'light-9': 'var(--el-color-success-light-9, #f0f9eb)',
          'darken-9': 'var(--el-color-success-dark-9, #0a1306)',
          'dark-9': 'var(--el-color-success-dark-9, #0a1306)',
        },

        warning: {
          DEFAULT: 'var(--el-color-warning, #e6a23c)',
          hover: 'var(--el-color-warning-light-3, #eebe77)',
          active: 'var(--el-color-warning-dark-2, #b88230)',
          'lighten-1': 'var(--el-color-warning-light-1, #e9ab50)',
          'light-1': 'var(--el-color-warning-light-1, #e9ab50)',
          'darken-1': 'var(--el-color-warning-dark-1, #cf9236)',
          'dark-1': 'var(--el-color-warning-dark-1, #cf9236)',
          'lighten-2': 'var(--el-color-warning-light-2, #ebb563)',
          'light-2': 'var(--el-color-warning-light-2, #ebb563)',
          'darken-2': 'var(--el-color-warning-dark-2, #b88230)',
          'dark-2': 'var(--el-color-warning-dark-2, #b88230)',
          'lighten-3': 'var(--el-color-warning-light-3, #eebe77)',
          'light-3': 'var(--el-color-warning-light-3, #eebe77)',
          'darken-3': 'var(--el-color-warning-dark-3, #a1712a)',
          'dark-3': 'var(--el-color-warning-dark-3, #a1712a)',
          'lighten-4': 'var(--el-color-warning-light-4, #f0c78a)',
          'light-4': 'var(--el-color-warning-light-4, #f0c78a)',
          'darken-4': 'var(--el-color-warning-dark-4, #8a6124)',
          'dark-4': 'var(--el-color-warning-dark-4, #8a6124)',
          'lighten-5': 'var(--el-color-warning-light-5, #f3d19e)',
          'light-5': 'var(--el-color-warning-light-5, #f3d19e)',
          'darken-5': 'var(--el-color-warning-dark-5, #73511e)',
          'dark-5': 'var(--el-color-warning-dark-5, #73511e)',
          'lighten-6': 'var(--el-color-warning-light-6, #f5dab1)',
          'light-6': 'var(--el-color-warning-light-6, #f5dab1)',
          'darken-6': 'var(--el-color-warning-dark-6, #5c4118)',
          'dark-6': 'var(--el-color-warning-dark-6, #5c4118)',
          'lighten-7': 'var(--el-color-warning-light-7, #f8e3c5)',
          'light-7': 'var(--el-color-warning-light-7, #f8e3c5)',
          'darken-7': 'var(--el-color-warning-dark-7, #453112)',
          'dark-7': 'var(--el-color-warning-dark-7, #453112)',
          'lighten-8': 'var(--el-color-warning-light-8, #faecd8)',
          'light-8': 'var(--el-color-warning-light-8, #faecd8)',
          'darken-8': 'var(--el-color-warning-dark-8, #2e200c)',
          'dark-8': 'var(--el-color-warning-dark-8, #2e200c)',
          'lighten-9': 'var(--el-color-warning-light-9, #fdf6ec)',
          'light-9': 'var(--el-color-warning-light-9, #fdf6ec)',
          'darken-9': 'var(--el-color-warning-dark-9, #171006)',
          'dark-9': 'var(--el-color-warning-dark-9, #171006)',
        },

        error: {
          DEFAULT: 'var(--el-color-error, #f56c6c)',
          hover: 'var(--el-color-error-light-3, #f89898)',
          active: 'var(--el-color-error-dark-2, #c45656)',
          'lighten-1': 'var(--el-color-error-light-1, #f67b7b)',
          'light-1': 'var(--el-color-error-light-1, #f67b7b)',
          'darken-1': 'var(--el-color-error-dark-1, #dd6161)',
          'dark-1': 'var(--el-color-error-dark-1, #dd6161)',
          'lighten-2': 'var(--el-color-error-light-2, #f78989)',
          'light-2': 'var(--el-color-error-light-2, #f78989)',
          'darken-2': 'var(--el-color-error-dark-2, #c45656)',
          'dark-2': 'var(--el-color-error-dark-2, #c45656)',
          'lighten-3': 'var(--el-color-error-light-3, #f89898)',
          'light-3': 'var(--el-color-error-light-3, #f89898)',
          'darken-3': 'var(--el-color-error-dark-3, #ac4c4c)',
          'dark-3': 'var(--el-color-error-dark-3, #ac4c4c)',
          'lighten-4': 'var(--el-color-error-light-4, #f9a7a7)',
          'light-4': 'var(--el-color-error-light-4, #f9a7a7)',
          'darken-4': 'var(--el-color-error-dark-4, #934141)',
          'dark-4': 'var(--el-color-error-dark-4, #934141)',
          'lighten-5': 'var(--el-color-error-light-5, #fab6b6)',
          'light-5': 'var(--el-color-error-light-5, #fab6b6)',
          'darken-5': 'var(--el-color-error-dark-5, #7b3636)',
          'dark-5': 'var(--el-color-error-dark-5, #7b3636)',
          'lighten-6': 'var(--el-color-error-light-6, #fbc4c4)',
          'light-6': 'var(--el-color-error-light-6, #fbc4c4)',
          'darken-6': 'var(--el-color-error-dark-6, #622b2b)',
          'dark-6': 'var(--el-color-error-dark-6, #622b2b)',
          'lighten-7': 'var(--el-color-error-light-7, #fcd3d3)',
          'light-7': 'var(--el-color-error-light-7, #fcd3d3)',
          'darken-7': 'var(--el-color-error-dark-7, #4a2020)',
          'dark-7': 'var(--el-color-error-dark-7, #4a2020)',
          'lighten-8': 'var(--el-color-error-light-8, #fde2e2)',
          'light-8': 'var(--el-color-error-light-8, #fde2e2)',
          'darken-8': 'var(--el-color-error-dark-8, #311616)',
          'dark-8': 'var(--el-color-error-dark-8, #311616)',
          'lighten-9': 'var(--el-color-error-light-9, #fef0f0)',
          'light-9': 'var(--el-color-error-light-9, #fef0f0)',
          'darken-9': 'var(--el-color-error-dark-9, #180b0b)',
          'dark-9': 'var(--el-color-error-dark-9, #180b0b)',
        },

        danger: {
          DEFAULT: 'var(--el-color-danger, #f56c6c)',
          hover: 'var(--el-color-danger-light-3, #f89898)',
          active: 'var(--el-color-danger-dark-2, #c45656)',
          'lighten-1': 'var(--el-color-danger-light-1, #f67b7b)',
          'light-1': 'var(--el-color-danger-light-1, #f67b7b)',
          'darken-1': 'var(--el-color-danger-dark-1, #dd6161)',
          'dark-1': 'var(--el-color-danger-dark-1, #dd6161)',
          'lighten-2': 'var(--el-color-danger-light-2, #f78989)',
          'light-2': 'var(--el-color-danger-light-2, #f78989)',
          'darken-2': 'var(--el-color-danger-dark-2, #c45656)',
          'dark-2': 'var(--el-color-danger-dark-2, #c45656)',
          'lighten-3': 'var(--el-color-danger-light-3, #f89898)',
          'light-3': 'var(--el-color-danger-light-3, #f89898)',
          'darken-3': 'var(--el-color-danger-dark-3, #ac4c4c)',
          'dark-3': 'var(--el-color-danger-dark-3, #ac4c4c)',
          'lighten-4': 'var(--el-color-danger-light-4, #f9a7a7)',
          'light-4': 'var(--el-color-danger-light-4, #f9a7a7)',
          'darken-4': 'var(--el-color-danger-dark-4, #934141)',
          'dark-4': 'var(--el-color-danger-dark-4, #934141)',
          'lighten-5': 'var(--el-color-danger-light-5, #fab6b6)',
          'light-5': 'var(--el-color-danger-light-5, #fab6b6)',
          'darken-5': 'var(--el-color-danger-dark-5, #7b3636)',
          'dark-5': 'var(--el-color-danger-dark-5, #7b3636)',
          'lighten-6': 'var(--el-color-danger-light-6, #fbc4c4)',
          'light-6': 'var(--el-color-danger-light-6, #fbc4c4)',
          'darken-6': 'var(--el-color-danger-dark-6, #622b2b)',
          'dark-6': 'var(--el-color-danger-dark-6, #622b2b)',
          'lighten-7': 'var(--el-color-danger-light-7, #fcd3d3)',
          'light-7': 'var(--el-color-danger-light-7, #fcd3d3)',
          'darken-7': 'var(--el-color-danger-dark-7, #4a2020)',
          'dark-7': 'var(--el-color-danger-dark-7, #4a2020)',
          'lighten-8': 'var(--el-color-danger-light-8, #fde2e2)',
          'light-8': 'var(--el-color-danger-light-8, #fde2e2)',
          'darken-8': 'var(--el-color-danger-dark-8, #311616)',
          'dark-8': 'var(--el-color-danger-dark-8, #311616)',
          'lighten-9': 'var(--el-color-danger-light-9, #fef0f0)',
          'light-9': 'var(--el-color-danger-light-9, #fef0f0)',
          'darken-9': 'var(--el-color-danger-dark-9, #180b0b)',
          'dark-9': 'var(--el-color-danger-dark-9, #180b0b)',
        },

        info: {
          DEFAULT: 'var(--el-color-info, #909399)',
          hover: 'var(--el-color-info-light-3, #b1b3b8)',
          active: 'var(--el-color-info-dark-2, #73767a)',
          'lighten-1': 'var(--el-color-info-light-1, #9b9ea3)',
          'light-1': 'var(--el-color-info-light-1, #9b9ea3)',
          'darken-1': 'var(--el-color-info-dark-1, #82848a)',
          'dark-1': 'var(--el-color-info-dark-1, #82848a)',
          'lighten-2': 'var(--el-color-info-light-2, #a6a9ad)',
          'light-2': 'var(--el-color-info-light-2, #a6a9ad)',
          'darken-2': 'var(--el-color-info-dark-2, #73767a)',
          'dark-2': 'var(--el-color-info-dark-2, #73767a)',
          'lighten-3': 'var(--el-color-info-light-3, #b1b3b8)',
          'light-3': 'var(--el-color-info-light-3, #b1b3b8)',
          'darken-3': 'var(--el-color-info-dark-3, #65676b)',
          'dark-3': 'var(--el-color-info-dark-3, #65676b)',
          'lighten-4': 'var(--el-color-info-light-4, #bcbec2)',
          'light-4': 'var(--el-color-info-light-4, #bcbec2)',
          'darken-4': 'var(--el-color-info-dark-4, #56585c)',
          'dark-4': 'var(--el-color-info-dark-4, #56585c)',
          'lighten-5': 'var(--el-color-info-light-5, #c8c9cc)',
          'light-5': 'var(--el-color-info-light-5, #c8c9cc)',
          'darken-5': 'var(--el-color-info-dark-5, #484a4d)',
          'dark-5': 'var(--el-color-info-dark-5, #484a4d)',
          'lighten-6': 'var(--el-color-info-light-6, #d3d4d6)',
          'light-6': 'var(--el-color-info-light-6, #d3d4d6)',
          'darken-6': 'var(--el-color-info-dark-6, #3a3b3d)',
          'dark-6': 'var(--el-color-info-dark-6, #3a3b3d)',
          'lighten-7': 'var(--el-color-info-light-7, #dedfe0)',
          'light-7': 'var(--el-color-info-light-7, #dedfe0)',
          'darken-7': 'var(--el-color-info-dark-7, #2b2c2e)',
          'dark-7': 'var(--el-color-info-dark-7, #2b2c2e)',
          'lighten-8': 'var(--el-color-info-light-8, #e9e9eb)',
          'light-8': 'var(--el-color-info-light-8, #e9e9eb)',
          'darken-8': 'var(--el-color-info-dark-8, #1d1d1f)',
          'dark-8': 'var(--el-color-info-dark-8, #1d1d1f)',
          'lighten-9': 'var(--el-color-info-light-9, #f4f4f5)',
          'light-9': 'var(--el-color-info-light-9, #f4f4f5)',
          'darken-9': 'var(--el-color-info-dark-9, #0e0f0f)',
          'dark-9': 'var(--el-color-info-dark-9, #0e0f0f)',
        },

        fill: {
          DEFAULT: 'var(--el-fill-color, #f0f2f5)',
          light: 'var(--el-fill-color-light, #f5f7fa)',
          lighter: 'var(--el-fill-color-lighter, #fafafa)',
          'extra-light': 'var(--el-fill-color-extra-light, #fafcff)',
          dark: 'var(--el-fill-color-dark, #ebedf0)',
          darker: 'var(--el-fill-color-darker, #e6e8eb)',
          blank: 'var(--el-fill-color-blank, #ffffff)',
        },

        text: {
          primary: 'var(--el-text-color-primary, #303133)',
          regular: 'var(--el-text-color-regular, #606266)',
          secondary: 'var(--el-text-color-secondary, #909399)',
          placeholder: 'var(--el-text-color-placeholder, #a8abb2)',
          disabled: 'var(--el-text-color-disabled, #c0c4cc)',
        },

        bg: {
          DEFAULT: '#ffffff',
          'popup-modal': 'var(--el-color-black, #000000)',
          disabled: 'var(--el-fill-color-light, #f5f7fa)',
        },

        border: {
          DEFAULT: 'var(--el-border-color, #dcdfe6)',
          light: 'var(--el-border-color-light, #e4e7ed)',
          lighter: 'var(--el-border-color-lighter, #ebeef5)',
          'extra-light': 'var(--el-border-color-extra-light, #f2f6fc)',
          dark: 'var(--el-border-color-dark, #d4d7de)',
          darker: 'var(--el-border-color-darker, #cdd0d6)',
          hover: 'var(--el-border-color-hover, #c0c4cc)',
          disabled: 'var(--el-border-color-light, #e4e7ed)',
        },

        overlay: {
          DEFAULT: 'var(--el-overlay-color, rgba(0, 0, 0, .8))',
          light: 'var(--el-overlay-color-light, rgba(0, 0, 0, .7))',
          lighter: 'var(--el-overlay-color-lighter, rgba(0, 0, 0, .5))',
        },

        mask: {
          DEFAULT: 'var(--el-mask-color, rgba(255, 255, 255, .9))',
          'extra-light': 'var(--el-mask-color-extra-light, rgba(255, 255, 255, .3))',
        },
      },
      fontFamily: {
        font: "var(--el-font-family, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif)",
      },
      fontSize: {
        'loading-spinner': 'var(--el-loading-spinner-size), 42px',
        'loading-fullscreen-spinner': 'var(--el-loading-fullscreen-spinner-size), 50px',
      },
      borderRadius: {
        round: 'var(--el-border-radius-round, 20px)',
        circle: 'var(--el-border-radius-circle, 100%)',
      },
      boxShadow: {
        base: 'var(--el-box-shadow, 0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08))',
        light: 'var(--el-box-shadow-light, 0px 0px 12px rgba(0, 0, 0, .12))',
        lighter: 'var(--el-box-shadow-lighter, 0px 0px 6px rgba(0, 0, 0, .12))',
        dark: 'var(--el-box-shadow-dark, 0px 16px 48px 16px rgba(0, 0, 0, .08), 0px 12px 32px rgba(0, 0, 0, .12), 0px 8px 16px -8px rgba(0, 0, 0, .16))',
      },
      opacity: {
        'popup-modal': 'var(--el-popup-modal-opacity, .5)',
      },
    },
  },
};

/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  theme: {
    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px',
      '2xl': '1600px',
    },
    extend: {
      colors: {
        primary: '#1890ff',
        'primary-1': '#e6f7ff',
        'primary-2': '#bae7ff',
        'primary-3': '#91d5ff',
        'primary-4': '#69c0ff',
        'primary-5': '#40a9ff',
        'primary-6': '#1890ff',
        'primary-7': '#096dd9',
        'primary-8': '#0050b3',
        'primary-9': '#003a8c',
        'primary-10': '#002766',
        'primary-hover': '#40a9ff',
        'primary-active': '#096dd9',
        'primary-lighten-1': '#40a9ff',
        'primary-light-1': '#40a9ff',
        'primary-lighten-2': '#69c0ff',
        'primary-light-2': '#69c0ff',
        'primary-lighten-3': '#91d5ff',
        'primary-light-3': '#91d5ff',
        'primary-lighten-4': '#bae7ff',
        'primary-light-4': '#bae7ff',
        'primary-lighten-5': '#e6f7ff',
        'primary-light-5': '#e6f7ff',
        'primary-darken-1': '#096dd9',
        'primary-dark-1': '#096dd9',
        'primary-darken-2': '#0050b3',
        'primary-dark-2': '#0050b3',
        'primary-darken-3': '#003a8c',
        'primary-dark-3': '#003a8c',
        'primary-darken-4': '#002766',
        'primary-dark-4': '#002766',

        success: '#52c41a',
        'success-1': '#f6ffed',
        'success-2': '#d9f7be',
        'success-3': '#b7eb8f',
        'success-4': '#95de64',
        'success-5': '#73d13d',
        'success-6': '#52c41a',
        'success-7': '#389e0d',
        'success-8': '#237804',
        'success-9': '#135200',
        'success-10': '#092b00',
        'success-hover': '#73d13d',
        'success-active': '#389e0d',
        'success-lighten-1': '#73d13d',
        'success-light-1': '#73d13d',
        'success-lighten-2': '#95de64',
        'success-light-2': '#95de64',
        'success-lighten-3': '#b7eb8f',
        'success-light-3': '#b7eb8f',
        'success-lighten-4': '#d9f7be',
        'success-light-4': '#d9f7be',
        'success-lighten-5': '#f6ffed',
        'success-light-5': '#f6ffed',
        'success-darken-1': '#389e0d',
        'success-dark-1': '#389e0d',
        'success-darken-2': '#237804',
        'success-dark-2': '#237804',
        'success-darken-3': '#135200',
        'success-dark-3': '#135200',
        'success-darken-4': '#092b00',
        'success-dark-4': '#092b00',

        warning: '#faad14',
        'warning-1': '#fffbe6',
        'warning-2': '#fff1b8',
        'warning-3': '#ffe58f',
        'warning-4': '#ffd666',
        'warning-5': '#ffc53d',
        'warning-6': '#faad14',
        'warning-7': '#d48806',
        'warning-8': '#ad6800',
        'warning-9': '#874d00',
        'warning-10': '#613400',
        'warning-hover': '#ffc53d',
        'warning-active': '#d48806',
        'warning-lighten-1': '#ffc53d',
        'warning-light-1': '#ffc53d',
        'warning-lighten-2': '#ffd666',
        'warning-light-2': '#ffd666',
        'warning-lighten-3': '#ffe58f',
        'warning-light-3': '#ffe58f',
        'warning-lighten-4': '#fff1b8',
        'warning-light-4': '#fff1b8',
        'warning-lighten-5': '#fffbe6',
        'warning-light-5': '#fffbe6',
        'warning-darken-1': '#d48806',
        'warning-dark-1': '#d48806',
        'warning-darken-2': '#0050b3',
        'warning-dark-2': '#ad6800',
        'warning-darken-3': '#874d00',
        'warning-dark-3': '#874d00',
        'warning-darken-4': '#613400',
        'warning-dark-4': '#613400',

        error: '#f5222d',
        'error-1': '#fff1f0',
        'error-2': '#ffccc7',
        'error-3': '#ffa39e',
        'error-4': '#ff7875',
        'error-5': '#ff4d4f',
        'error-6': '#f5222d',
        'error-7': '#cf1322',
        'error-8': '#a8071a',
        'error-9': '#820014',
        'error-10': '#5c0011',
        'error-hover': '#ff4d4f',
        'error-active': '#cf1322',
        'error-lighten-1': '#ff4d4f',
        'error-light-1': '#ff4d4f',
        'error-lighten-2': '#ff7875',
        'error-light-2': '#ff7875',
        'error-lighten-3': '#ffa39e',
        'error-light-3': '#ffa39e',
        'error-lighten-4': '#ffccc7',
        'error-light-4': '#ffccc7',
        'error-lighten-5': '#fff1f0',
        'error-light-5': '#fff1f0',
        'error-darken-1': '#cf1322',
        'error-dark-1': '#cf1322',
        'error-darken-2': '#a8071a',
        'error-dark-2': '#a8071a',
        'error-darken-3': '#820014',
        'error-dark-3': '#820014',
        'error-darken-4': '#5c0011',
        'error-dark-4': '#5c0011',

        danger: '#f5222d',
        'danger-1': '#fff1f0',
        'danger-2': '#ffccc7',
        'danger-3': '#ffa39e',
        'danger-4': '#ff7875',
        'danger-5': '#ff4d4f',
        'danger-6': '#f5222d',
        'danger-7': '#cf1322',
        'danger-8': '#a8071a',
        'danger-9': '#820014',
        'danger-10': '#5c0011',
        'danger-hover': '#ff4d4f',
        'danger-active': '#cf1322',
        'danger-lighten-1': '#ff4d4f',
        'danger-light-1': '#ff4d4f',
        'danger-lighten-2': '#ff7875',
        'danger-light-2': '#ff7875',
        'danger-lighten-3': '#ffa39e',
        'danger-light-3': '#ffa39e',
        'danger-lighten-4': '#ffccc7',
        'danger-light-4': '#ffccc7',
        'danger-lighten-5': '#fff1f0',
        'danger-light-5': '#fff1f0',
        'danger-darken-1': '#cf1322',
        'danger-dark-1': '#cf1322',
        'danger-darken-2': '#a8071a',
        'danger-dark-2': '#a8071a',
        'danger-darken-3': '#820014',
        'danger-dark-3': '#820014',
        'danger-darken-4': '#5c0011',
        'danger-dark-4': '#5c0011',

        info: '#1890ff',
        'info-1': '#e6f7ff',
        'info-2': '#bae7ff',
        'info-3': '#91d5ff',
        'info-4': '#69c0ff',
        'info-5': '#40a9ff',
        'info-6': '#1890ff',
        'info-7': '#096dd9',
        'info-8': '#0050b3',
        'info-9': '#003a8c',
        'info-10': '#002766',
        'info-hover': '#40a9ff',
        'info-active': '#096dd9',
        'info-lighten-1': '#40a9ff',
        'info-light-1': '#40a9ff',
        'info-lighten-2': '#69c0ff',
        'info-light-2': '#69c0ff',
        'info-lighten-3': '#91d5ff',
        'info-light-3': '#91d5ff',
        'info-lighten-4': '#bae7ff',
        'info-light-4': '#bae7ff',
        'info-lighten-5': '#e6f7ff',
        'info-light-5': '#e6f7ff',
        'info-darken-1': '#096dd9',
        'info-dark-1': '#096dd9',
        'info-darken-2': '#0050b3',
        'info-dark-2': '#0050b3',
        'info-darken-3': '#003a8c',
        'info-dark-3': '#003a8c',
        'info-darken-4': '#002766',
        'info-dark-4': '#002766',

        red: '#f5222d',
        'red-1': '#fff1f0',
        'red-2': '#ffccc7',
        'red-3': '#ffa39e',
        'red-4': '#ff7875',
        'red-5': '#ff4d4f',
        'red-6': '#f5222d',
        'red-7': '#cf1322',
        'red-8': '#a8071a',
        'red-9': '#820014',
        'red-10': '#5c0011',
        'red-lighten-1': '#ff4d4f',
        'red-light-1': '#ff4d4f',
        'red-lighten-2': '#ff7875',
        'red-light-2': '#ff7875',
        'red-lighten-3': '#ffa39e',
        'red-light-3': '#ffa39e',
        'red-lighten-4': '#ffccc7',
        'red-light-4': '#ffccc7',
        'red-lighten-5': '#fff1f0',
        'red-light-5': '#fff1f0',
        'red-darken-1': '#cf1322',
        'red-dark-1': '#cf1322',
        'red-darken-2': '#a8071a',
        'red-dark-2': '#a8071a',
        'red-darken-3': '#820014',
        'red-dark-3': '#820014',
        'red-darken-4': '#5c0011',
        'red-dark-4': '#5c0011',

        volcano: '#fa541c',
        'volcano-1': '#fff2e8',
        'volcano-2': '#ffd8bf',
        'volcano-3': '#ffbb96',
        'volcano-4': '#ff9c6e',
        'volcano-5': '#ff7a45',
        'volcano-6': '#fa541c',
        'volcano-7': '#d4380d',
        'volcano-8': '#ad2102',
        'volcano-9': '#871400',
        'volcano-10': '#610b00',
        'volcano-lighten-1': '#ff7a45',
        'volcano-light-1': '#ff7a45',
        'volcano-lighten-2': '#ff9c6e',
        'volcano-light-2': '#ff9c6e',
        'volcano-lighten-3': '#ffbb96',
        'volcano-light-3': '#ffbb96',
        'volcano-lighten-4': '#ffd8bf',
        'volcano-light-4': '#ffd8bf',
        'volcano-lighten-5': '#fff2e8',
        'volcano-light-5': '#fff2e8',
        'volcano-darken-1': '#d4380d',
        'volcano-dark-1': '#d4380d',
        'volcano-darken-2': '#ad2102',
        'volcano-dark-2': '#ad2102',
        'volcano-darken-3': '#871400',
        'volcano-dark-3': '#871400',
        'volcano-darken-4': '#610b00',
        'volcano-dark-4': '#610b00',

        orange: '#fa8c16',
        'orange-1': '#fff7e6',
        'orange-2': '#ffe7ba',
        'orange-3': '#ffd591',
        'orange-4': '#ffc069',
        'orange-5': '#ffa940',
        'orange-6': '#fa8c16',
        'orange-7': '#d46b08',
        'orange-8': '#ad4e00',
        'orange-9': '#873800',
        'orange-10': '#612500',
        'orange-lighten-1': '#ffa940',
        'orange-light-1': '#ffa940',
        'orange-lighten-2': '#ffc069',
        'orange-light-2': '#ffc069',
        'orange-lighten-3': '#ffd591',
        'orange-light-3': '#ffd591',
        'orange-lighten-4': '#ffe7ba',
        'orange-light-4': '#ffe7ba',
        'orange-lighten-5': '#fff7e6',
        'orange-light-5': '#fff7e6',
        'orange-darken-1': '#d46b08',
        'orange-dark-1': '#d46b08',
        'orange-darken-2': '#ad4e00',
        'orange-dark-2': '#ad4e00',
        'orange-darken-3': '#873800',
        'orange-dark-3': '#873800',
        'orange-darken-4': '#612500',
        'orange-dark-4': '#612500',

        gold: '#faad14',
        'gold-1': '#fffbe6',
        'gold-2': '#fff1b8',
        'gold-3': '#ffe58f',
        'gold-4': '#ffd666',
        'gold-5': '#ffc53d',
        'gold-6': '#faad14',
        'gold-7': '#d48806',
        'gold-8': '#ad6800',
        'gold-9': '#874d00',
        'gold-10': '#613400',
        'gold-lighten-1': '#ffc53d',
        'gold-light-1': '#ffc53d',
        'gold-lighten-2': '#ffd666',
        'gold-light-2': '#ffd666',
        'gold-lighten-3': '#ffe58f',
        'gold-light-3': '#ffe58f',
        'gold-lighten-4': '#fff1b8',
        'gold-light-4': '#fff1b8',
        'gold-lighten-5': '#fffbe6',
        'gold-light-5': '#fffbe6',
        'gold-darken-1': '#d48806',
        'gold-dark-1': '#d48806',
        'gold-darken-2': '#0050b3',
        'gold-dark-2': '#ad6800',
        'gold-darken-3': '#874d00',
        'gold-dark-3': '#874d00',
        'gold-darken-4': '#613400',
        'gold-dark-4': '#613400',

        yellow: '#fadb14',
        'yellow-1': '#feffe6',
        'yellow-2': '#ffffb8',
        'yellow-3': '#fffb8f',
        'yellow-4': '#fff566',
        'yellow-5': '#ffec3d',
        'yellow-6': '#fadb14',
        'yellow-7': '#d4b106',
        'yellow-8': '#ad8b00',
        'yellow-9': '#876800',
        'yellow-10': '#614700',
        'yellow-lighten-1': '#ffec3d',
        'yellow-light-1': '#ffec3d',
        'yellow-lighten-2': '#fff566',
        'yellow-light-2': '#fff566',
        'yellow-lighten-3': '#fffb8f',
        'yellow-light-3': '#fffb8f',
        'yellow-lighten-4': '#ffffb8',
        'yellow-light-4': '#ffffb8',
        'yellow-lighten-5': '#feffe6',
        'yellow-light-5': '#feffe6',
        'yellow-darken-1': '#d4b106',
        'yellow-dark-1': '#d4b106',
        'yellow-darken-2': '#ad8b00',
        'yellow-dark-2': '#ad8b00',
        'yellow-darken-3': '#876800',
        'yellow-dark-3': '#876800',
        'yellow-darken-4': '#614700',
        'yellow-dark-4': '#614700',

        lime: '#a0d911',
        'lime-1': '#fcffe6',
        'lime-2': '#f4ffb8',
        'lime-3': '#eaff8f',
        'lime-4': '#d3f261',
        'lime-5': '#bae637',
        'lime-6': '#a0d911',
        'lime-7': '#7cb305',
        'lime-8': '#5b8c00',
        'lime-9': '#3f6600',
        'lime-10': '#254000',
        'lime-lighten-1': '#bae637',
        'lime-light-1': '#bae637',
        'lime-lighten-2': '#d3f261',
        'lime-light-2': '#d3f261',
        'lime-lighten-3': '#eaff8f',
        'lime-light-3': '#eaff8f',
        'lime-lighten-4': '#f4ffb8',
        'lime-light-4': '#f4ffb8',
        'lime-lighten-5': '#fcffe6',
        'lime-light-5': '#fcffe6',
        'lime-darken-1': '#7cb305',
        'lime-dark-1': '#7cb305',
        'lime-darken-2': '#5b8c00',
        'lime-dark-2': '#5b8c00',
        'lime-darken-3': '#3f6600',
        'lime-dark-3': '#3f6600',
        'lime-darken-4': '#254000',
        'lime-dark-4': '#254000',

        green: '#52c41a',
        'green-1': '#f6ffed',
        'green-2': '#d9f7be',
        'green-3': '#b7eb8f',
        'green-4': '#95de64',
        'green-5': '#73d13d',
        'green-6': '#52c41a',
        'green-7': '#389e0d',
        'green-8': '#237804',
        'green-9': '#135200',
        'green-10': '#092b00',
        'green-lighten-1': '#73d13d',
        'green-light-1': '#73d13d',
        'green-lighten-2': '#95de64',
        'green-light-2': '#95de64',
        'green-lighten-3': '#b7eb8f',
        'green-light-3': '#b7eb8f',
        'green-lighten-4': '#d9f7be',
        'green-light-4': '#d9f7be',
        'green-lighten-5': '#f6ffed',
        'green-light-5': '#f6ffed',
        'green-darken-1': '#389e0d',
        'green-dark-1': '#389e0d',
        'green-darken-2': '#237804',
        'green-dark-2': '#237804',
        'green-darken-3': '#135200',
        'green-dark-3': '#135200',
        'green-darken-4': '#092b00',
        'green-dark-4': '#092b00',

        cyan: '#13c2c2',
        'cyan-1': '#e6fffb',
        'cyan-2': '#b5f5ec',
        'cyan-3': '#87e8de',
        'cyan-4': '#5cdbd3',
        'cyan-5': '#36cfc9',
        'cyan-6': '#13c2c2',
        'cyan-7': '#08979c',
        'cyan-8': '#006d75',
        'cyan-9': '#00474f',
        'cyan-10': '#002329',
        'cyan-lighten-1': '#36cfc9',
        'cyan-light-1': '#36cfc9',
        'cyan-lighten-2': '#5cdbd3',
        'cyan-light-2': '#5cdbd3',
        'cyan-lighten-3': '#87e8de',
        'cyan-light-3': '#87e8de',
        'cyan-lighten-4': '#b5f5ec',
        'cyan-light-4': '#b5f5ec',
        'cyan-lighten-5': '#e6fffb',
        'cyan-light-5': '#e6fffb',
        'cyan-darken-1': '#08979c',
        'cyan-dark-1': '#08979c',
        'cyan-darken-2': '#006d75',
        'cyan-dark-2': '#006d75',
        'cyan-darken-3': '#00474f',
        'cyan-dark-3': '#00474f',
        'cyan-darken-4': '#002329',
        'cyan-dark-4': '#002329',

        blue: '#1890ff',
        'blue-1': '#e6f7ff',
        'blue-2': '#bae7ff',
        'blue-3': '#91d5ff',
        'blue-4': '#69c0ff',
        'blue-5': '#40a9ff',
        'blue-6': '#1890ff',
        'blue-7': '#096dd9',
        'blue-8': '#0050b3',
        'blue-9': '#003a8c',
        'blue-10': '#002766',
        'blue-lighten-1': '#40a9ff',
        'blue-light-1': '#40a9ff',
        'blue-lighten-2': '#69c0ff',
        'blue-light-2': '#69c0ff',
        'blue-lighten-3': '#91d5ff',
        'blue-light-3': '#91d5ff',
        'blue-lighten-4': '#bae7ff',
        'blue-light-4': '#bae7ff',
        'blue-lighten-5': '#e6f7ff',
        'blue-light-5': '#e6f7ff',
        'blue-darken-1': '#096dd9',
        'blue-dark-1': '#096dd9',
        'blue-darken-2': '#0050b3',
        'blue-dark-2': '#0050b3',
        'blue-darken-3': '#003a8c',
        'blue-dark-3': '#003a8c',
        'blue-darken-4': '#002766',
        'blue-dark-4': '#002766',

        geekblue: '#2f54eb',
        'geekblue-1': '#f0f5ff',
        'geekblue-2': '#d6e4ff',
        'geekblue-3': '#adc6ff',
        'geekblue-4': '#85a5ff',
        'geekblue-5': '#597ef7',
        'geekblue-6': '#2f54eb',
        'geekblue-7': '#1d39c4',
        'geekblue-8': '#10239e',
        'geekblue-9': '#061178',
        'geekblue-10': '#030852',
        'geekblue-lighten-1': '#597ef7',
        'geekblue-light-1': '#597ef7',
        'geekblue-lighten-2': '#85a5ff',
        'geekblue-light-2': '#85a5ff',
        'geekblue-lighten-3': '#adc6ff',
        'geekblue-light-3': '#adc6ff',
        'geekblue-lighten-4': '#d6e4ff',
        'geekblue-light-4': '#d6e4ff',
        'geekblue-lighten-5': '#f0f5ff',
        'geekblue-light-5': '#f0f5ff',
        'geekblue-darken-1': '#1d39c4',
        'geekblue-dark-1': '#1d39c4',
        'geekblue-darken-2': '#10239e',
        'geekblue-dark-2': '#10239e',
        'geekblue-darken-3': '#061178',
        'geekblue-dark-3': '#061178',
        'geekblue-darken-4': '#030852',
        'geekblue-dark-4': '#030852',

        purple: '#722ed1',
        'purple-1': '#f9f0ff',
        'purple-2': '#efdbff',
        'purple-3': '#d3adf7',
        'purple-4': '#b37feb',
        'purple-5': '#9254de',
        'purple-6': '#722ed1',
        'purple-7': '#531dab',
        'purple-8': '#391085',
        'purple-9': '#22075e',
        'purple-10': '#120338',
        'purple-lighten-1': '#9254de',
        'purple-light-1': '#9254de',
        'purple-lighten-2': '#b37feb',
        'purple-light-2': '#b37feb',
        'purple-lighten-3': '#d3adf7',
        'purple-light-3': '#d3adf7',
        'purple-lighten-4': '#efdbff',
        'purple-light-4': '#efdbff',
        'purple-lighten-5': '#f9f0ff',
        'purple-light-5': '#f9f0ff',
        'purple-darken-1': '#531dab',
        'purple-dark-1': '#531dab',
        'purple-darken-2': '#391085',
        'purple-dark-2': '#391085',
        'purple-darken-3': '#22075e',
        'purple-dark-3': '#22075e',
        'purple-darken-4': '#120338',
        'purple-dark-4': '#120338',

        magenta: '#eb2f96',
        'magenta-1': '#fff0f6',
        'magenta-2': '#ffd6e7',
        'magenta-3': '#ffadd2',
        'magenta-4': '#ff85c0',
        'magenta-5': '#f759ab',
        'magenta-6': '#eb2f96',
        'magenta-7': '#c41d7f',
        'magenta-8': '#9e1068',
        'magenta-9': '#780650',
        'magenta-10': '#520339',
        'magenta-lighten-1': '#f759ab',
        'magenta-light-1': '#f759ab',
        'magenta-lighten-2': '#ff85c0',
        'magenta-light-2': '#ff85c0',
        'magenta-lighten-3': '#ffadd2',
        'magenta-light-3': '#ffadd2',
        'magenta-lighten-4': '#ffd6e7',
        'magenta-light-4': '#ffd6e7',
        'magenta-lighten-5': '#fff0f6',
        'magenta-light-5': '#fff0f6',
        'magenta-darken-1': '#c41d7f',
        'magenta-dark-1': '#c41d7f',
        'magenta-darken-2': '#9e1068',
        'magenta-dark-2': '#9e1068',
        'magenta-darken-3': '#780650',
        'magenta-dark-3': '#780650',
        'magenta-darken-4': '#520339',
        'magenta-dark-4': '#520339',

        gray: '#8c8c8c',
        'gray-1': '#ffffff',
        'gray-2': '#fafafa',
        'gray-3': '#f5f5f5',
        'gray-4': '#f0f0f0',
        'gray-5': '#d9d9d9',
        'gray-6': '#bfbfbf',
        'gray-7': '#8c8c8c',
        'gray-8': '#595959',
        'gray-9': '#434343',
        'gray-10': '#262626',
        'gray-11': '#1f1f1f',
        'gray-12': '#141414',
        'gray-13': '#000000',
        'gray-lighten-1': '#bfbfbf',
        'gray-light-1': '#bfbfbf',
        'gray-lighten-2': '#d9d9d9',
        'gray-light-2': '#d9d9d9',
        'gray-lighten-3': '#f0f0f0',
        'gray-light-3': '#f0f0f0',
        'gray-lighten-4': '#f5f5f5',
        'gray-light-4': '#f5f5f5',
        'gray-lighten-5': '#fafafa',
        'gray-light-5': '#fafafa',
        'gray-lighten-6': '#ffffff',
        'gray-light-6': '#ffffff',
        'gray-darken-1': '#595959',
        'gray-dark-1': '#595959',
        'gray-darken-2': '#434343',
        'gray-dark-2': '#434343',
        'gray-darken-3': '#262626',
        'gray-dark-3': '#262626',
        'gray-darken-4': '#1f1f1f',
        'gray-dark-4': '#1f1f1f',
        'gray-darken-5': '#141414',
        'gray-dark-5': '#141414',
        'gray-darken-6': '#000000',
        'gray-dark-6': '#000000',

        'text-primary': 'rgba(0, 0, 0, .85)',
        'text-secondary': 'rgba(0, 0, 0, .45)',
        'text-disabled': 'rgba(0, 0, 0, .25)',

        bg: '#ffffff',
        'bg-disabled': '#f5f5f5',

        border: '#d9d9d9',

        mask: 'rgba(0, 0, 0, .45)',
      },
      fontFamily: {
        font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      },
      boxShadow: {
        'shadow-1':
          '0 1px 2px -2px rgba(0, 0, 0, .16), 0 3px 6px 0 rgba(0, 0, 0, .12), 0 5px 12px 4px rgba(0, 0, 0, .09)',
        'shadow-2':
          '0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)',
        'shadow-3':
          '0 6px 16px -8px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)',
      },
    },
  },
};

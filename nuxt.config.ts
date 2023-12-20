// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	srcDir: 'src/',
    ssr: true,
    devtools: { enabled: true },
	typescript: {
		shim: false
	},
	imports: {
		dirs: [
		  // 扫描顶级模块
		  'composables',
		  // ... 或扫描带有特定名称和文件扩展名的一级嵌套模块
		  'composables/*/index.{ts,js,mjs,mts}',
		  // ... 或扫描给定目录中的所有模块
		  'composables/**'
		]
	},
	postcss: {
		plugins: {
		  	"postcss-px-to-viewport-8-plugin": {
				unitToConvert: 'px',
				viewportWidth: (file: string)=> file.indexOf('van')>0 ? 375 : 750,
				unitPrecision: 5, // 单位转换后保留的精度
				propList: ['*'], // 能转化为vw的属性列表
				viewportUnit: 'vw', // 希望使用的视口单位
				fontViewportUnit: 'vw', // 字体使用的视口单位
				selectorBlackList: ['ignore-'], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
				minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
				mediaQuery: true, // 媒体查询里的单位是否需要转换单位
				replace: true, //  是否直接更换属性值，而不添加备用属性
		  },
		},
	},
	modules: ['@vant/nuxt','@pinia/nuxt','@vueuse/nuxt','@pinia-plugin-persistedstate/nuxt'],
	css: ['vant/lib/index.css','@/assets/styles/variable.less','@/assets/styles/defalut.less'],
	vite: {
		css: {
		  preprocessorOptions: {
			less: {
			  	additionalData: '@import "~/assets/styles/variable.less";'
			}
		  }
		},
		esbuild: {
			drop: process.env.NUXT_API_ENV !== 'dev' ? ['console', 'debugger'] : [], //移除console与debugger
		},
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width,initial-scale=1',
			title: '51家庭管家',
			meta: [
				{ name: 'keywords', content: '主要描述' },
        		{ name: 'description', content: '主要描述' },
			]
		},
		// baseURL: '/portal/m/'
	},
	devServer: {
		port: 8383,
		host: '10.0.16.235'
	},
	runtimeConfig: {
		// 只在服务端可以访问的配置项
		apiSecret: '123',
		// 可以暴露给客户端使用的配置项
		public: {
		  apiBase: process.env.development,
		},
	},
	nitro: {
		devProxy: {
			"/portal_api": {
				target: "http://10.0.16.45",//配置Api链接
				changeOrigin: true
			},
		}
	}
})
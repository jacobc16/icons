import { ThemeBuilder } from '@steeze-ui/icons'

const builder = new ThemeBuilder({
	sources: {
		inputRaw: './node_modules/heroicons',
		collectFromDir: {
			'24/outline': 'default',
			'24/solid': 'solid',
			'20/solid': 'mini',
			'16/solid': 'micro'
		}
	},
	lib: {
		excludeSvgAttributes: ['xmlns', 'data-slot']
	}
})

builder.build()

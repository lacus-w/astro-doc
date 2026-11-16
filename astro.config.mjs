// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			
			plugins: [
                lucode({
                    navLinks: [
                        { label: 'Docs', link: '/guides/example/' },
                        { label: 'Reference', link: '/reference/example/' },
                    ],
                }),
            ],
		}),
	],
});

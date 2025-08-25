// rehype plugin to wrap all <img> tags with a <div class="image-wrapper">
import type { Root, Element, Parent } from 'hast';

export default function rehypeWrapImages() {
	return (tree: Root) => {
		function visit(node: any, parent: Parent | null = null) {
			if (node && node.type === 'element' && node.tagName === 'img' && parent && Array.isArray(parent.children)) {
				const index = parent.children.indexOf(node);
				if (index !== -1) {
					const wrapper: Element = {
						type: 'element',
						tagName: 'div',
						properties: { className: ['image-wrapper'] },
						children: [node]
					};
					parent.children[index] = wrapper;
				}
			}
			if (node && node.children && Array.isArray(node.children)) {
				node.children.forEach((child: any) => visit(child, node));
			}
		}
		visit(tree, null);
	};
}

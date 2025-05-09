export const sanitizeContent = (content) =>
	content.replaceAll('<br>', `\n`).replaceAll('<div>', '').replaceAll('</div>', '')

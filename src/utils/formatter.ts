export const dateFormatter = new Intl.DateTimeFormat('en-US')

export const priceFormatter = new Intl.NumberFormat(undefined, {
	currency: 'CAD',
	style: 'currency',
})

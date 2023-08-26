const CURRENCY_FOTMATTER = new Intl.NumberFormat(undefined, {
    currency: "EUR",
    style: "currency"
})


export function formatCurrency(number: number)  {
    return CURRENCY_FOTMATTER.format(number)
}
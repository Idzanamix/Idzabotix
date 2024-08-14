export function shortFormatNumber(value?: number) {
    if (!value) return
    
    let fractionDigits = 1;

    if (value > 100000) fractionDigits = 0

    return new Intl.NumberFormat('en-GB', {
        notation: "compact",
        maximumFractionDigits: fractionDigits
    }).format(value).replace('K', 'k')
};

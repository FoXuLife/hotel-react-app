export const sortHotelHelper = (items, kind) => {
    return [...items.sort(function (a, b,) {
        return parseFloat(b[kind]) - parseFloat(a[kind])
    })]
}
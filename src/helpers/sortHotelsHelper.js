export const sortHotelHelper = (items, kind, number) => {
    return [...items.sort(function (a, b,) {
        return number > 0 ? parseFloat(b[kind]) - parseFloat(a[kind])
            : number !== 0 ? parseFloat(a[kind]) - parseFloat(b[kind]) : -1;

    })]
}
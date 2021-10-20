
const coordinateArray = [
    { name: 'Nha Trang', latitude: 12.233452055029435, longitude: 109.19688507074402 },
    { name: 'Sài Gòn', latitude: 10.767104350321423, longitude: 106.69244873619347 },
    { name: 'Cần Thơ', latitude: 10.03849180093032, longitude: 105.7912723775759 },
    { name: 'Vũng Tàu', latitude: 10.3267235820733, longitude: 107.08457333120631 },
    { name: 'Kiên Giang', latitude: 10.311154414147904, longitude: 103.99170296351961 },
    { name: 'Đà Nẵng', latitude: 16.07236855191082, longitude: 108.2272325988897 },
    { name: 'Đà Lạt', latitude: 11.939335949191431, longitude: 108.44516215263735 },
    { name: 'Hội An', latitude: 15.877359257766841, longitude: 108.326095156342 },

];

export const formMoney = (money) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(money)
}

export const findCenterCoordinate = (locationName) => {
    return coordinateArray.find((location) => location.name === locationName)
};


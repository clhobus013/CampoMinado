import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, //Proporção do painel superior
    difficultLevel: 0.1, //Qauntidade de campOS COM Minas
    getColumnsAmount() {
        const width = Dimensions.get('window').width -15
        return Math.floor(width/this.blockSize)
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height - 30
        const borderHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(borderHeight / this.blockSize)
    }
}

export default params
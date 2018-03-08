export class HelperService {
    static selector = 'helperService';


    average(arr: number[]) {
        return arr.reduce( ( p:number, c:number ) => p + c, 0 ) / arr.length;
    }

    getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

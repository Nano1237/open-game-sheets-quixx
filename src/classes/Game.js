export class Game {
    static fieldList = {};

    static addField(row, number) {
        if (typeof this.fieldList[row] === 'undefined') {
            this.fieldList[row] = [];
        }
        this.fieldList[row].push(number);
        console.log(this.fieldList);
    }

    static getFieldList(row) {
        return this.fieldList[row] || [];
    }

    static isFieldSelectable(row, number) {
        const list = this.getFieldList(row);
        if (this.df(row)) {
            return number < Math.min(...list);
        } else {
            return number > Math.max(...list);
        }
    }

    static df(row) {
        return row === 'green' || row === 'blue';
    }

    static getPoints() {
        let sum = 0;
        for (let name in this.fieldList) {
            sum += this.pointsByLength(this.fieldList[name].length);
        }
        return sum;
    }

    static pointsByLength(length) {
        switch (length) {
            case 1:
                return 1;
            case 2:
                return 3;
            case 3:
                return 6;
            case 4:
                return 10;
            case 5:
                return 15;
            case 6:
                return 21;
            case 7:
                return 28;
            case 8:
                return 36;
            case 9:
                return 45;
            case 10:
                return 55;
            case 11:
                return 66;
            case 12:
                return 78;
        }
        return 0;
    }

    static restart() {
        this.fieldList = {};
    }
}

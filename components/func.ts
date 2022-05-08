export type funcDataType = {
    func: {
        tax: {
            caption: string,
            function: string,
        },
        tax2: {
            caption: string,
            function: string,
        },
        total: {
            caption: string,
            function: string,
        },
        factorial: {
            caption: string,
            function: string
        }
    }
}


const data:funcDataType = {
    "func": {
        "tax" : {
            "caption": "入力した金額から消費税（10%）価格を計算します。",
            "function": "(...param) => { return Math.floor(param[0] * 1.1); }"
        },
        "tax2": {
            "caption": "入力した金額から軽減税率（8%）による税込価格を計算します。",
            "function": "(...param) => { return Math.floor(param[0] * 1.08); }"
        },
        "total": {
            "caption": "10,20.30...というようにカンマで区切った数字の合計を計算します。",
            "function": "(...param) => { return param.reduce((p, c) => p + c, 0); }"
        },
        "factorial" : {
            "caption": "ゼロから入力値までの合計を計算します。",
            "function": "(...param) => { return Array(param[0] + 1).fill().map((v, k) => k).reduce((p, c) => p + c, 0) };"
        }
    }
}

export default data;
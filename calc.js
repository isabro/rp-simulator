

// Rakuten Super Point Up Condition
const spu_rate = {
    "lastdate": "2019/11/28",
    "card": 2,
    "pcard": 2,
    "bank": 1,
    "insurance": 1,
    "electricity": 0.5,
    "securities": 1,
    "mobile": 2,
    "travel": 1,
    "app": 0.5,
    "books": 0.5,
    "kobo": 0.5,
    "pasha": 0.5,
    "fashion": 0.5,
    "tv": 1,
    "beauty": 1
}

// Other Point Up Condition
const other_rate = {
    "win": 2,
    "fiveday": 2
}

// Rakuten Member Rank Condition
const member_rank = {
    "diamond": {
        "once": 500000,
        "month": 500000
        "maxget": 15000,
    },
    "platinum": {
        "once": 30000,
        "month": 100000
        "maxget": 12000,
    },
    "gold": {
        "once": 30000,
        "month": 100000
        "maxget": 9000,
    },
    "silver": {
        "once": 30000,
        "month": 100000
        "maxget": 7000,
    },
    "regular":  {
        "once": 30000,
        "month": 100000
        "maxget": 5000,
    }
}

// Calculation a rate of Rakuten Super Point Up
function total_spu_rate() {

    for (var cond in spu_rate) {
        if (cond === "lastdate") {
            continue;
        }
    }

    return rate;
}

// Calculation a rate of other Point Up Condition
function total_other_pu_rate() {

    return rate;
}

// Calculation a rate of puchase until now and now
function total_purchase_rate() {

    return rate;
}



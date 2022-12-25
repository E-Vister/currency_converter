type InitialStateType = {
    defaultCurrency: string,
    firstCurrency: object,
    secondCurrency: object,
    list: Array<object>
}

let initialState = {
    defaultCurrency: 'USD',
    firstCurrency: {
        key: 'USD',
        amount: 5,
        convert: {
            to: 'BYN',
            quote: 2.523431,
            result: 12.617155
        }
    },
    secondCurrency: {
        key: 'BYN',
        amount: 5,
        convert: {
            to: 'USD',
            quote: 0.396286,
            result: 1.98143
        }
    },
    list: [
        {
            key: "AFN",
            label: "Afghan Afghani"
        }, {
            key: "ALL",
            label: "Albanian Lek"
        }, {
            key: "DZD",
            label: "Algerian Dinar"
        }, {
            key: "AOA",
            label: "Angolan Kwanza"
        }, {
            key: "ARS",
            label: "Argentine Peso"
        }, {
            key: "AMD",
            label: "Armenian Dram"
        }, {
            key: "AWG",
            label: "Aruban Florin"
        }, {
            key: "AUD",
            label: "Australian Dollar"
        }, {
            key: "AZN",
            label: "Azerbaijani Manat"
        }, {
            key: "BSD",
            label: "Bahamian Dollar"
        }, {
            key: "BHD",
            label: "Bahraini Dinar"
        }, {
            key: "BDT",
            label: "Bangladeshi Taka"
        }, {
            key: "BBD",
            label: "Barbadian Dollar"
        }, {
            key: "BYR",
            label: "Belarusian Ruble"
        }, {
            key: "BZD",
            label: "Belize Dollar"
        }, {
            key: "BMD",
            label: "Bermudan Dollar"
        }, {
            key: "BTN",
            label: "Bhutanese Ngultrum"
        }, {
            key: "BTC",
            label: "Bitcoin"
        }, {
            key: "BOB",
            label: "Bolivian Boliviano"
        }, {
            key: "BAM",
            label: "Bosnia-Herzegovina Convertible Mark"
        }, {
            key: "BWP",
            label: "Botswanan Pula"
        }, {
            key: "BRL",
            label: "Brazilian Real"
        }, {
            key: "GBP",
            label: "British Pound Sterling"
        }, {
            key: "BND",
            label: "Brunei Dollar"
        }, {
            key: "BGN",
            label: "Bulgarian Lev"
        }, {
            key: "BIF",
            label: "Burundian Franc"
        }, {
            key: "KHR",
            label: "Cambodian Riel"
        }, {
            key: "CAD",
            label: "Canadian Dollar"
        }, {
            key: "CVE",
            label: "Cape Verdean Escudo"
        }, {
            key: "KYD",
            label: "Cayman Islands Dollar"
        }, {
            key: "XOF",
            label: "CFA Franc BCEAO"
        }, {
            key: "XAF",
            label: "CFA Franc BEAC"
        }, {
            key: "XPF",
            label: "CFP Franc"
        }, {
            key: "CLP",
            label: "Chilean Peso"
        }, {
            key: "CLF",
            label: "Chilean Unit of Account (UF)"
        }, {
            key: "CNY",
            label: "Chinese Yuan"
        }, {
            key: "COP",
            label: "Colombian Peso"
        }, {
            key: "KMF",
            label: "Comorian Franc"
        }, {
            key: "CDF",
            label: "Congolese Franc"
        }, {
            key: "CRC",
            label: "Costa Rican Colón"
        }, {
            key: "HRK",
            label: "Croatian Kuna"
        }, {
            key: "CUC",
            label: "Cuban Convertible Peso"
        }, {
            key: "CUP",
            label: "Cuban Peso"
        }, {
            key: "CZK",
            label: "Czech Republic Koruna"
        }, {
            key: "DKK",
            label: "Danish Krone"
        }, {
            key: "DJF",
            label: "Djiboutian Franc"
        }, {
            key: "DOP",
            label: "Dominican Peso"
        }, {
            key: "XCD",
            label: "East Caribbean Dollar"
        }, {
            key: "EGP",
            label: "Egyptian Pound"
        }, {
            key: "ERN",
            label: "Eritrean Nakfa"
        }, {
            key: "ETB",
            label: "Ethiopian Birr"
        }, {
            key: "EUR",
            label: "Euro"
        }, {
            key: "FKP",
            label: "Falkland Islands Pound"
        }, {
            key: "FJD",
            label: "Fijian Dollar"
        }, {
            key: "GMD",
            label: "Gambian Dalasi"
        }, {
            key: "GEL",
            label: "Georgian Lari"
        }, {
            key: "GHS",
            label: "Ghanaian Cedi"
        }, {
            key: "GIP",
            label: "Gibraltar Pound"
        }, {
            key: "XAU",
            label: "Gold (troy ounce)"
        }, {
            key: "GTQ",
            label: "Guatemalan Quetzal"
        }, {
            key: "GGP",
            label: "Guernsey Pound"
        }, {
            key: "GNF",
            label: "Guinean Franc"
        }, {
            key: "GYD",
            label: "Guyanaese Dollar"
        }, {
            key: "HTG",
            label: "Haitian Gourde"
        }, {
            key: "HNL",
            label: "Honduran Lempira"
        }, {
            key: "HKD",
            label: "Hong Kong Dollar"
        }, {
            key: "HUF",
            label: "Hungarian Forint"
        }, {
            key: "ISK",
            label: "Icelandic Króna"
        }, {
            key: "INR",
            label: "Indian Rupee"
        }, {
            key: "IDR",
            label: "Indonesian Rupiah"
        }, {
            key: "IRR",
            label: "Iranian Rial"
        }, {
            key: "IQD",
            label: "Iraqi Dinar"
        }, {
            key: "ILS",
            label: "Israeli New Sheqel"
        }, {
            key: "JMD",
            label: "Jamaican Dollar"
        }, {
            key: "JPY",
            label: "Japanese Yen"
        }, {
            key: "JEP",
            label: "Jersey Pound"
        }, {
            key: "JOD",
            label: "Jordanian Dinar"
        }, {
            key: "KZT",
            label: "Kazakhstani Tenge"
        }, {
            key: "KES",
            label: "Kenyan Shilling"
        }, {
            key: "KWD",
            label: "Kuwaiti Dinar"
        }, {
            key: "KGS",
            label: "Kyrgystani Som"
        }, {
            key: "LAK",
            label: "Laotian Kip"
        }, {
            key: "LVL",
            label: "Latvian Lats"
        }, {
            key: "LBP",
            label: "Lebanese Pound"
        }, {
            key: "LSL",
            label: "Lesotho Loti"
        }, {
            key: "LRD",
            label: "Liberian Dollar"
        }, {
            key: "LYD",
            label: "Libyan Dinar"
        }, {
            key: "LTL",
            label: "Lithuanian Litas"
        }, {
            key: "MOP",
            label: "Macanese Pataca"
        }, {
            key: "MKD",
            label: "Macedonian Denar"
        }, {
            key: "MGA",
            label: "Malagasy Ariary"
        }, {
            key: "MWK",
            label: "Malawian Kwacha"
        }, {
            key: "MYR",
            label: "Malaysian Ringgit"
        }, {
            key: "MVR",
            label: "Maldivian Rufiyaa"
        }, {
            key: "IMP",
            label: "Manx pound"
        }, {
            key: "MRO",
            label: "Mauritanian Ouguiya"
        }, {
            key: "MUR",
            label: "Mauritian Rupee"
        }, {
            key: "MXN",
            label: "Mexican Peso"
        }, {
            key: "MDL",
            label: "Moldovan Leu"
        }, {
            key: "MNT",
            label: "Mongolian Tugrik"
        }, {
            key: "MAD",
            label: "Moroccan Dirham"
        }, {
            key: "MZN",
            label: "Mozambican Metical"
        }, {
            key: "MMK",
            label: "Myanma Kyat"
        }, {
            key: "NAD",
            label: "Namibian Dollar"
        }, {
            key: "NPR",
            label: "Nepalese Rupee"
        }, {
            key: "ANG",
            label: "Netherlands Antillean Guilder"
        }, {
            key: "BYN",
            label: "New Belarusian Ruble"
        }, {
            key: "TWD",
            label: "New Taiwan Dollar"
        }, {
            key: "NZD",
            label: "New Zealand Dollar"
        }, {
            key: "NIO",
            label: "Nicaraguan Córdoba"
        }, {
            key: "NGN",
            label: "Nigerian Naira"
        }, {
            key: "KPW",
            label: "North Korean Won"
        }, {
            key: "NOK",
            label: "Norwegian Krone"
        }, {
            key: "OMR",
            label: "Omani Rial"
        }, {
            key: "PKR",
            label: "Pakistani Rupee"
        }, {
            key: "PAB",
            label: "Panamanian Balboa"
        }, {
            key: "PGK",
            label: "Papua New Guinean Kina"
        }, {
            key: "PYG",
            label: "Paraguayan Guarani"
        }, {
            key: "PEN",
            label: "Peruvian Nuevo Sol"
        }, {
            key: "PHP",
            label: "Philippine Peso"
        }, {
            key: "PLN",
            label: "Polish Zloty"
        }, {
            key: "QAR",
            label: "Qatari Rial"
        }, {
            key: "RON",
            label: "Romanian Leu"
        }, {
            key: "RUB",
            label: "Russian Ruble"
        }, {
            key: "RWF",
            label: "Rwandan Franc"
        }, {
            key: "SHP",
            label: "Saint Helena Pound"
        }, {
            key: "SVC",
            label: "Salvadoran Colón"
        }, {
            key: "WST",
            label: "Samoan Tala"
        }, {
            key: "SAR",
            label: "Saudi Riyal"
        }, {
            key: "RSD",
            label: "Serbian Dinar"
        }, {
            key: "SCR",
            label: "Seychellois Rupee"
        }, {
            key: "SLL",
            label: "Sierra Leonean Leone"
        }, {
            key: "SLE",
            label: "Sierra Leonean Leone"
        }, {
            key: "XAG",
            label: "Silver (troy ounce)"
        }, {
            key: "SGD",
            label: "Singapore Dollar"
        }, {
            key: "SBD",
            label: "Solomon Islands Dollar"
        }, {
            key: "SOS",
            label: "Somali Shilling"
        }, {
            key: "ZAR",
            label: "South African Rand"
        }, {
            key: "KRW",
            label: "South Korean Won"
        }, {
            key: "VES",
            label: "Sovereign Bolivar"
        }, {
            key: "XDR",
            label: "Special Drawing Rights"
        }, {
            key: "LKR",
            label: "Sri Lankan Rupee"
        }, {
            key: "SDG",
            label: "Sudanese Pound"
        }, {
            key: "SRD",
            label: "Surinamese Dollar"
        }, {
            key: "SZL",
            label: "Swazi Lilangeni"
        }, {
            key: "SEK",
            label: "Swedish Krona"
        }, {
            key: "CHF",
            label: "Swiss Franc"
        }, {
            key: "SYP",
            label: "Syrian Pound"
        }, {
            key: "STD",
            label: "São Tomé and Príncipe Dobra"
        }, {
            key: "TJS",
            label: "Tajikistani Somoni"
        }, {
            key: "TZS",
            label: "Tanzanian Shilling"
        }, {
            key: "THB",
            label: "Thai Baht"
        }, {
            key: "TOP",
            label: "Tongan Paʻanga"
        }, {
            key: "TTD",
            label: "Trinidad and Tobago Dollar"
        }, {
            key: "TND",
            label: "Tunisian Dinar"
        }, {
            key: "TRY",
            label: "Turkish Lira"
        }, {
            key: "TMT",
            label: "Turkmenistani Manat"
        }, {
            key: "UGX",
            label: "Ugandan Shilling"
        }, {
            key: "UAH",
            label: "Ukrainian Hryvnia"
        }, {
            key: "AED",
            label: "United Arab Emirates Dirham"
        }, {
            key: "USD",
            label: "United States Dollar"
        }, {
            key: "UYU",
            label: "Uruguayan Peso"
        }, {
            key: "UZS",
            label: "Uzbekistan Som"
        }, {
            key: "VUV",
            label: "Vanuatu Vatu"
        }, {
            key: "VEF",
            label: "Venezuelan Bolívar Fuerte"
        }, {
            key: "VND",
            label: "Vietnamese Dong"
        }, {
            key: "YER",
            label: "Yemeni Rial"
        }, {
            key: "ZMW",
            label: "Zambian Kwacha"
        }, {
            key: "ZMK",
            label: "Zambian Kwacha (pre-2013)"
        }, {
            key: "ZWL",
            label: "Zimbabwean Dollar"
        }],
}

const currenciesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default currenciesReducer;
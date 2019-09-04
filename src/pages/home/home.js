import React, { Component } from 'react'
import { Button, Collapse, Spin   } from 'antd'
import './home.less'
import http from '../../utils/axios_improve';

const { Panel } = Collapse;


export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product_type: '',
            product_type_key: -1,
            product_category: '',
            product_category_key: -1,
            product_category_inner_key: -1,
            product_tags: '',
            product_tags_key: -1,
            product_tags_inner_key: -1,
            brand: 'maybelline',
            price_greater_than: '',
            price_less_than: '',
            rating_greater_than: '',
            rating_less_than: '',


            tag_list: [
                {name: "Canadian", border: 'dashed',value: "Canadian", key: 1},
                {name: "CertClean", border: 'dashed',value: "CertClean", key: 2},
                {name: "Chemical Free", border: 'dashed',value: "Chemical Free", key: 3},
                {name: "Dairy Free", border: 'dashed',value: "Dairy Free", key: 4},
                {name: "EWG Verified", border: 'dashed',value: "EWG Verified", key: 5},
                {name: "EcoCert", border: 'dashed',value: "EcoCert", key: 6},
                {name: "Fair Trade", border: 'dashed',value: "Fair Trade", key: 7},
                {name: "Gluten Free", border: 'dashed',value: "Gluten Free", key: 8},
                {name: "Hypoallergenic", border: 'dashed',value: "Hypoallergenic", key: 9},
                {name: "Natural", border: 'dashed',value: "Natural", key: 10},
                {name: "No Talc", border: 'dashed',value: "No Talc", key: 11},
                {name: "Non-GMO", border: 'dashed',value: "Non-GMO", key: 12},
                {name: "Organic", border: 'dashed',value: "Organic", key: 13},
                {name: "Peanut Free Product", border: 'dashed',value: "Peanut Free Product", key: 14},
                {name: "Sugar Free", border: 'dashed',value: "Sugar Free", key: 15},
                {name: "USDA Organic", border: 'dashed',value: "USDA Organic", key: 16},
                {name: "Vegan", border: 'dashed',value: "Vegan", key: 17},
                {name: "alcohol free", border: 'dashed',value: "alcohol free", key: 18},
                {name: "cruelty free", border: 'dashed',value: "cruelty free", key: 19},
                {name: "oil free", border: 'dashed',value: "oil free", key: 20},
                {name: "purpicks", border: 'dashed',value: "purpicks", key: 21},
                {name: "silicone free", border: 'dashed',value: "silicone free", key: 22},
                {name: "water free", border: 'dashed',value: "water free", key: 23}
            ],
            brand_list: [
                {
                    name: "almay",
                    border: 'dashed',value: "almay",
                    key: 1
                }, {
                    name: "alva",
                    border: 'dashed',value: "alva",
                    key: 2
                }, {
                    name: "anna sui",
                    border: 'dashed',value: "anna sui",
                    key: 3
                }, {
                    name: "annabelle",
                    border: 'dashed',value: "annabelle",
                    key: 4
                }, {
                    name: "benefit",
                    border: 'dashed',value: "benefit",
                    key: 5
                }, {
                    name: "boosh",
                    border: 'dashed',value: "boosh",
                    key: 6
                }, {
                    name: "burt's bees",
                    border: 'dashed',value: "burt's bees",
                    key: 7
                }, {
                    name: "butter london",
                    border: 'dashed',value: "butter london",
                    key: 8
                }, {
                    name: "c'est moi",
                    border: 'dashed',value: "c'est moi",
                    key: 9
                }, {
                    name: "cargo cosmetics",
                    border: 'dashed',value: "cargo cosmetics",
                    key: 10
                }, {
                    name: "china glaze",
                    border: 'dashed',value: "china glaze",
                    key: 11
                }, {
                    name: "clinique",
                    border: 'dashed',value: "clinique",
                    key: 12
                }, {
                    name: "coastal classic creation",
                    border: 'dashed',value: "coastal classic creation",
                    key: 13
                }, {
                    name: "colourpop",
                    border: 'dashed',value: "colourpop",
                    key: 14
                }, {
                    name: "covergirl",
                    border: 'dashed',value: "covergirl",
                    key: 15
                }, {
                    name: "dalish",
                    border: 'dashed',value: "dalish",
                    key: 16
                }, {
                    name: "deciem",
                    border: 'dashed',value: "deciem",
                    key: 17
                }, {
                    name: "dior",
                    border: 'dashed',value: "dior",
                    key: 18
                }, {
                    name: "dr. hauschka",
                    border: 'dashed',value: "dr. hauschka",
                    key: 19
                }, {
                    name: "e.l.f.",
                    border: 'dashed',value: "e.l.f.",
                    key: 20
                }, {
                    name: "essie",
                    border: 'dashed',value: "essie",
                    key: 21
                }, {
                    name: "fenty",
                    border: 'dashed',value: "fenty",
                    key: 22
                }, {
                    name: "glossier",
                    border: 'dashed',value: "glossier",
                    key: 23
                }, {
                    name: "green people",
                    border: 'dashed',value: "green people",
                    key: 24
                }, {
                    name: "iman",
                    border: 'dashed',value: "iman",
                    key: 25
                }, {
                    name: "l'oreal",
                    border: 'dashed',value: "l'oreal",
                    key: 26
                }, {
                    name: "lotus cosmetics usa",
                    border: 'dashed',value: "lotus cosmetics usa",
                    key: 27
                }, {
                    name: "maia's mineral galaxy",
                    border: 'dashed',value: "maia's mineral galaxy",
                    key: 28
                }, {
                    name: "marcelle",
                    border: 'dashed',value: "marcelle",
                    key: 29
                }, {
                    name: "marienatie",
                    border: 'dashed',value: "marienatie",
                    key: 30
                }, {
                    name: "maybelline",
                    border: 'dashed',value: "maybelline",
                    key: 31
                }, {
                    name: "milani",
                    border: 'dashed',value: "milani",
                    key: 32
                }, {
                    name: "mineral fusion",
                    border: 'dashed',value: "mineral fusion",
                    key: 33
                }, {
                    name: "misa",
                    border: 'dashed',value: "misa",
                    key: 34
                }, {
                    name: "mistura",
                    border: 'dashed',value: "mistura",
                    key: 35
                }, {
                    name: "moov",
                    border: 'dashed',value: "moov",
                    key: 36
                }, {
                    name: "nudus",
                    border: 'dashed',value: "nudus",
                    key: 37
                }, {
                    name: "nyx",
                    border: 'dashed',value: "nyx",
                    key: 38
                }, {
                    name: "orly",
                    border: 'dashed',value: "orly",
                    key: 39
                }, {
                    name: "pacifica",
                    border: 'dashed',value: "pacifica",
                    key: 40
                }, {
                    name: "penny lane organics",
                    border: 'dashed',value: "penny lane organics",
                    key: 41
                }, {
                    name: "physicians formula",
                    border: 'dashed',value: "physicians formula",
                    key: 42
                }, {
                    name: "piggy paint",
                    border: 'dashed',value: "piggy paint",
                    key: 43
                }, {
                    name: "pure anada",
                    border: 'dashed',value: "pure anada",
                    key: 44
                }, {
                    name: "rejuva minerals",
                    border: 'dashed',value: "rejuva minerals",
                    key: 45
                }, {
                    name: "revlon",
                    border: 'dashed',value: "revlon",
                    key: 46
                }, {
                    name: "sally b's skin yummies",
                    border: 'dashed',value: "sally b's skin yummies",
                    key: 47
                }, {
                    name: "salon perfect",
                    border: 'dashed',value: "salon perfect",
                    key: 48
                }, {
                    name: "sante",
                    border: 'dashed',value: "sante",
                    key: 49
                }, {
                    name: "sinful colours",
                    border: 'dashed',value: "sinful colours",
                    key: 50
                }, {
                    name: "smashbox",
                    border: 'dashed',value: "smashbox",
                    key: 51
                }, {
                    name: "stila",
                    border: 'dashed',value: "stila",
                    key: 52
                }, {
                    name: "suncoat",
                    border: 'dashed',value: "suncoat",
                    key: 53
                }, {
                    name: "w3llpeople",
                    border: 'dashed',value: "w3llpeople",
                    key: 54
                }, {
                    name: "wet n wild",
                    border: 'dashed',value: "wet n wild",
                    key: 55
                }, {
                    name: "zorah",
                    border: 'dashed',value: "zorah",
                    key: 56
                }, {
                    name: "zorah biocosmetiques",
                    border: 'dashed',value: "zorah biocosmetiques",
                    key: 57
                }
            ],

            type: [
                {
                    name: 'Blush',
                    border: 'dashed',
                    value: 'Blush',
                    key:1
                },
                {
                    name: 'Bronzer',
                    border: 'dashed',
                    value: 'Bronzer',
                    key:2
                },
                {
                    name: 'Eyebrow',
                    border: 'dashed',
                    value: 'Eyebrow',
                    key:3
                },
                {
                    name: 'Eyeliner',
                    border: 'dashed',
value: 'Eyeliner',
                    key:4
                },
                {
                    name: 'Eyeshadow',
                    border: 'dashed',
                    value: 'Eyeshadow',
                    key:5
                },
                {
                    name: 'Foundation',
                    border: 'dashed',
                    value: 'Foundation',
                    key:6
                },
                {
                    name: 'Lip liner',
                    border: 'dashed',
                    value: 'Lip liner',
                    key:7
                },
                {
                    name: 'Lipstick',
                    border: 'dashed',
                    value: 'Lipstick',
                    key:8
                },
                {
                    name: 'Mascara',
                    border: 'dashed',
                    value: 'Mascara',
                    key:9
                },
                {
                    name: 'Nail polish',
                    border: 'dashed',
                    value: 'Nail polish',
                    key:10
                }
            ],
            category: {
                0: {
                    type: [
                        {name: "Powder", border: 'dashed',value: "Powder", key: 1},
                        {name: "Cream", border: 'dashed',value: "Cream", key: 2}
                    ],
                    tags: [
                        {name: "Vegan", border: 'dashed',value: "Vegan", key: 1},
                        {name: "Gluten free", border: 'dashed',value: "Gluten free", key: 2},
                        {name: "Canadian", border: 'dashed',value: "Canadian", key: 3},
                        {name: "Natural", border: 'dashed',value: "Natural", key: 4},
                        {name: "Non-gmo", border: 'dashed',value: "Non-gmo", key: 5},
                        {name: "Organic", border: 'dashed',value: "Organic", key: 6},
                        {name: "Usda organic", border: 'dashed',value: "Usda organic", key: 7},
                        {name: "Purpicks", border: 'dashed',value: "Purpicks", key: 8},
                        {name: "Certclean", border: 'dashed',value: "Certclean", key: 9},
                        {name: "No talc", border: 'dashed',value: "No talc", key: 10},
                        {name: "Hypoallergenic", border: 'dashed',value: "Hypoallergenic", key: 11},
                        {name: "Ewg verified", border: 'dashed',value: "Ewg verified", key: 12}
                    ]
                },
                1: {
                    type: [
                        {name: "Powder", border: 'dashed',value: "Powder", key: 1}
                    ],
                    tags: [
                        {name: "Gluten free", border: 'dashed',value: "Gluten free", key: 1},
                        {name: "Canadian", border: 'dashed',value: "Canadian", key: 2},
                        {name: "Natural", border: 'dashed',value: "Natural", key: 3},
                        {name: "Organic", border: 'dashed',value: "Organic", key: 4},
                        {name: "Vegan", border: 'dashed',value: "Vegan", key: 5},
                        {name: "Ewg verified", border: 'dashed',value: "Ewg verified", key: 6},
                        {name: "Purpicks", border: 'dashed',value: "Purpicks", key: 7}
                    ],
                },
                2: {
                    type: [
                        {name: "Pencil", border: 'dashed',value: "Pencil", key: 1}
                    ],
                    tags: [
                        {name: "Ewg verified", border: 'dashed',value: "Ewg verified", key: 1},
                        {name: "Purpicks", border: 'dashed',value: "Purpicks", key: 2}
                    ],
                },
                3: {
                    type: [
                        {name: "Liquid", border: 'dashed',value: "Liquid", key: 1},
                        {name: "Pencil", border: 'dashed',value: "Pencil", key: 2},
                        {name: "Gel", border: 'dashed',value: "Gel", key: 3},
                        {name: "Cream", border: 'dashed',value: "Cream", key: 4}
                    ],
                    tags: [
   {name: "Vegan", border: 'dashed',value: "Vegan", key: 1},
   {name: "Canadian", border: 'dashed',value: "Canadian", key: 2},
   {name: "Natural", border: 'dashed',value: "Natural", key: 3},
   {name: "Gluten free", border: 'dashed',value: "Gluten free", key: 4},
   {name: "Organic", border: 'dashed',value: "Organic", key: 5},
   {name: "Certclean", border: 'dashed',value: "Certclean", key: 6},
   {name: "Purpicks", border: 'dashed',value: "Purpicks", key: 7},
   {name: "No talc", border: 'dashed',value: "No talc", key: 8},
   {name: "Hypoallergenic", border: 'dashed',value: "Hypoallergenic", key: 9},
   {name: "Ewg verified", border: 'dashed',value: "Ewg verified", key: 10},
   {name: "Ecocert", border: 'dashed',value: "Ecocert", key: 11}
                    ],
                },
                4: {
                    type: [
                        {name: "Palette", border: 'dashed',value: "Palette", key: 1},
                        {name: "Pencil", border: 'dashed',value: "Pencil", key: 2},
                        {name: "Cream", border: 'dashed',value: "Cream", key: 3}
                    ],
                    tags: [
                        {name: "Vegan", border: 'dashed',value: "Vegan", key: 1},
                        {name: "Canadian", border: 'dashed',value: "Canadian", key: 2},
                        {name: "Gluten free", border: 'dashed',value: "Gluten free", key: 3},
                        {name: "Natural", border: 'dashed',value: "Natural", key: 4},
                        {name: "Non-gmo", border: 'dashed',value: "Non-gmo", key: 5},
                        {name: "Certclean", border: 'dashed',value: "Certclean", key: 6},
                        {name: "Purpicks", border: 'dashed',value: "Purpicks", key: 7},
                        {name: "Organic", border: 'dashed',value: "Organic", key: 8},
                        {name: "Ewg verified", border: 'dashed',value: "Ewg verified", key: 9},
                        {name: "Usda organic", border: 'dashed',value: "Usda organic", key: 10},
                        {name: "No talc", border: 'dashed',value: "No talc", key: 11},
                        {name: "Hypoallergenic", border: 'dashed',value: "Hypoallergenic", key: 12},
                        {name: "Ecocert", border: 'dashed',value: "Ecocert", key: 13}
                    ],
                },
                5: {
                    type: [
                        {name: "Liquid", border: 'dashed',value: "Liquid", key: 1},
                        {name: "Contour", border: 'dashed',value: "Contour", key: 2},
                        {name: "Bb cc", border: 'dashed',value: "Bb cc", key: 3},
                        {name: "Concealer", border: 'dashed',value: "Concealer", key: 4},
                        {name: "Cream", border: 'dashed',value: "Cream", key: 5},
                        {name: "Mineral", border: 'dashed',value: "Mineral", key: 6},
                        {name: "Powder", border: 'dashed',value: "Powder", key: 7},
                        {name: "Highlighter", border: 'dashed',value: "Highlighter", key: 8}
                    ],
                    tags: [
                        {name: "Vegan", border: 'dashed',value: "Vegan", key: 1},
                        {name: "Canadian", border: 'dashed',value: "Canadian", key: 2},
                        {name: "Natural", border: 'dashed',value: "Natural", key: 3},
                        {name: "Gluten free", border: 'dashed',value: "Gluten free", key: 4},
                        {name: "Certclean", border: 'dashed',value: "Certclean", key: 5},
                        {name: "Purpicks", border: 'dashed',value: "Purpicks", key: 6},
                        {name: "No talc", border: 'dashed',value: "No talc", key: 7},
                        {name: "Hypoallergenic", border: 'dashed',value: "Hypoallergenic", key: 8},
                        {name: "Ewg verified", border: 'dashed',value: "Ewg verified", key: 9},
                        {name: "Silicone free", border: 'dashed',value: "Silicone free", key: 10},
                        {name: "Oil free", border: 'dashed',value: "Oil free", key: 11},
                        {name: "Alcohol free", border: 'dashed',value: "Alcohol free", key: 12},
                        {name: "Cruelty free", border: 'dashed',value: "Cruelty free", key: 13},
                        {name: "Water free", border: 'dashed',value: "Water free", key: 14}
                    ],
                },
                6: {
                    type: [
                        {name: "Pencil", border: 'dashed',value: "Pencil", key: 1}
                    ],
                    tags: [
                        {name: "Natural", border: 'dashed',value: "Natural", key: 1},
                        {name: "Vegan", border: 'dashed',value: "Vegan", key: 2},
                        {name: "Gluten free", border: 'dashed',value: "Gluten free", key: 3},
                        {name: "Canadian", border: 'dashed',value: "Canadian", key: 4},
                        {name: "No talc", border: 'dashed',value: "No talc", key: 5},
                        {name: "Hypoallergenic", border: 'dashed',value: "Hypoallergenic", key: 6},
                        {name: "Ewg verified", border: 'dashed',value: "Ewg verified", key: 7},
                        {name: "Purpicks", border: 'dashed',value: "Purpicks", key: 8},
                        {name: "Cruelty free", border: 'dashed',value: "Cruelty free", key: 9}
                    ]
                },
                7: {
                    type: [
                        {name: "Lipstick", border: 'dashed',value: "Lipstick", key: 1},
                        {name: "Lip gloss", border: 'dashed',value: "Lip gloss", key: 2},
                        {name: "Liquid", border: 'dashed',value: "Liquid", key: 3},
                        {name: "Lip stain", border: 'dashed',value: "Lip stain", key: 4}
                    ],
                    tags: [
                        {name: "Canadian", border: 'dashed',value: "Canadian", key: 1},
                        {name: "Natural", border: 'dashed',value: "Natural", key: 2},
                        {name: "Peanut free product", border: 'dashed',value: "Peanut free product", key: 3},
                        {name: "Non-gmo", border: 'dashed',value: "Non-gmo", key: 4},
                        {name: "Gluten free", border: 'dashed',value: "Gluten free", key: 5},
                        {name: "Vegan", border: 'dashed',value: "Vegan", key: 6},
                        {name: "Organic", border: 'dashed',value: "Organic", key: 7},
                        {name: "Certclean", border: 'dashed',value: "Certclean", key: 8},
                        {name: "Purpicks", border: 'dashed',value: "Purpicks", key: 9},
                        {name: "No talc", border: 'dashed',value: "No talc", key: 10},
                        {name: "Hypoallergenic", border: 'dashed',value: "Hypoallergenic", key: 11},
                        {name: "Ewg verified", border: 'dashed',value: "Ewg verified", key: 12},
                        {name: "Chemical free", border: 'dashed',value: "Chemical free", key: 13},
                        {name: "Cruelty free", border: 'dashed',value: "Cruelty free", key: 14}
                    ],
                },
                8: {
                    type: [],
                    tags: [
                        {name: "Gluten free", border: 'dashed',value: "Gluten free", key: 1},
                        {name: "Natural", border: 'dashed',value: "Natural", key: 2},
                        {name: "Vegan", border: 'dashed',value: "Vegan", key: 3},
                        {name: "Canadian", border: 'dashed',value: "Canadian", key: 4},
                        {name: "Organic", border: 'dashed',value: "Organic", key: 5},
                        {name: "No talc", border: 'dashed',value: "No talc", key: 6},
                        {name: "Hypoallergenic", border: 'dashed',value: "Hypoallergenic", key: 7},
                        {name: "Ewg verified", border: 'dashed',value: "Ewg verified", key: 8},
                        {name: "Purpicks", border: 'dashed',value: "Purpicks", key: 9},
                        {name: "Ecocert", border: 'dashed',value: "Ecocert", key: 10},
                        {name: "Usda organic", border: 'dashed',value: "Usda organic", key: 11},
                        {name: "Certclean", border: 'dashed',value: "Certclean", key: 12}
                    ],
                },
                9: {
                    type: [],
                    tags: [
                        {name: "Vegan", border: 'dashed',value: "Vegan", key: 1},
                        {name: "Canadian", border: 'dashed',value: "Canadian", key: 2},
                        {name: "Natural", border: 'dashed',value: "Natural", key: 3},
                        {name: "Dairy free", border: 'dashed',value: "Dairy free", key: 4},
                        {name: "Non-gmo", border: 'dashed',value: "Non-gmo", key: 5},
                        {name: "Sugar free", border: 'dashed',value: "Sugar free", key: 6},
                        {name: "Fair trade", border: 'dashed',value: "Fair trade", key: 7},
                        {name: "Gluten free", border: 'dashed',value: "Gluten free", key: 8}
                    ],
                }
            },
            currentType:-1,
            currentBrand:-1,
            loading:true,
            tableData:[]
        }
    }

    componentDidMount() {
        this.getData()

    }
    brandChange = k => {
        let data = this.state.brand_list
        for (var i = 0; i < data.length; i++) {
            if( i == k){
                data[k].border = (data[k].border == 'primary' ? 'dashed' : 'primary')
            }else{
                data[i].border = 'dashed'
            }
        }
        if(data[k].border == 'dashed'){
            this.setState({
                brand_list: data,
                currentBrand:-1,
                brand:'',
               
            })
        }else{
            this.setState({
                brand_list: data,
                currentBrand:k,
                brand:data[k].value
            })
        }
        setTimeout(()=>{
            this.getData()
        },0)
    }

    typeChange = k => {
        let data = this.state.type
        for (var i = 0; i < data.length; i++) {
            if( i == k){
                data[k].border = (data[k].border == 'primary' ? 'dashed' : 'primary')
            }else{
                data[i].border = 'dashed'
            }
        }
        console.log((data))
        if(data[k].border == 'dashed'){
            // 取消选择时要清空tag
            console.log(this.state.product_type_key,this.state.product_category_inner_key,this.state.product_tags_inner_key)
            var temp = this.state.category
            if([this.state.product_category_inner_key] != -1){ // 选了类别
                temp[this.state.product_type_key]['type'][this.state.product_category_inner_key]['border'] = 'dashed'
            }
            if(this.state.product_tags_inner_key != -1){  // 选letag
                temp[this.state.product_type_key]['tags'][this.state.product_tags_inner_key]['border'] = 'dashed'
            }
            // 取消选择
            this.setState({
                type: data,
                category:temp,
                currentType:-1,
                product_type:'',
                product_type_key:-1,
                product_category_key: -1,
                product_category_inner_key: -1,
                product_tags_key: -1,
                product_tags_inner_key: -1
            })
        }else{
            // 选择某项要清空tag
            console.log(this.state.product_type_key,this.state.product_category_inner_key,this.state.product_tags_inner_key)
            this.setState({
                type: data,
                currentType:k,
                product_type:data[k].value,
                product_type_key:k,
                product_tags: '',
                product_category: ''
            })
        }
        setTimeout(()=>{
            this.getData()
        },0)
    }

    categoryChange = k => {
        if(this.state.currentType == -1){
            var data = this.state.tag_list
        }else{
            var data = this.state.category[this.state.currentType]["type"]
        }
        for (var i = 0; i < data.length; i++) {
            if( i == k){
                data[k].border = (data[k].border == 'primary' ? 'dashed' : 'primary')
            }else{
                data[i].border = 'dashed'
            }
        }
        console.log((data))
        if(this.state.currentType == -1){
            if(data[k].border == 'dashed'){
                this.setState({
                    tag_list: data,
                    product_category:'',
                    product_category_key:-1,
                    product_category_inner_key:-1,
                })
            }else{
                this.setState({
                    tag_list: data,
                    product_category:data[k].value,
                    product_category_key:k,
                    product_category_inner_key:-1,
                })
            }
        }else{
            let temp = this.state.category
            temp[this.state.currentType]["type"] = data
            if(data[k].border == 'dashed'){
                this.setState({
                    category: temp,
                    product_category:'',
                    product_category_inner_key:-1,
                    product_category_key:-1,
                })
            }else{
                this.setState({
                    category: temp,
                    product_category:data[k].value,
                    product_category_inner_key:k,
                    product_category_key:-1,
                })
            }
        }
        setTimeout(()=>{
            this.getData()
        },0)
    }
    tagChange = k => {
        if(this.state.currentType == -1){
            var data = this.state.tag_list
        }else{
            var data = this.state.category[this.state.currentType]["tags"]
        }
        for (var i = 0; i < data.length; i++) {
            if( i == k){
                data[k].border = (data[k].border == 'primary' ? 'dashed' : 'primary')
            }else{
                data[i].border = 'dashed'
            }
        }
        console.log((data))
        if(this.state.currentType == -1){
            if(data[k].border == 'dashed'){
                this.setState({
                    product_tags:'',
                    product_tags_key: -1,
                    product_tags_inner_key:-1,
                })
            }else{
                this.setState({
                    tag_list: data,
                    product_tags:data[k].value,
                    product_tags_key: k,
                    product_tags_inner_key:-1,
                })
            }
        }else{
            let temp = this.state.category
            temp[this.state.currentType]["tags"] = data
            if(data[k].border == 'dashed'){
                this.setState({
                    category: temp,
                    product_tags:'',
                    product_tags_key: -1,
                    product_tags_inner_key:-1,
                })
            }else{
                this.setState({
                    category: temp,
                    product_tags:data[k].value,
                    product_tags_key: -1,
                    product_tags_inner_key:k,
                })
            }
        }
        setTimeout(()=>{
            this.getData()
        },0)
    }
    collapseChange = key => {
        console.log(key)
    }
    getData = () => {
        this.setState({
            loading:true
        })

        http.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${this.state.brand}&product_type=${this.state.product_type}&product_category=${this.state.product_category}&product_tags=${this.state.product_tags}`).then(res => {
            console.log(res.data)
            this.setState({
                loading:false,
                tableData:res.data
            })
        })
        // console.log(res)
        // axios.get(`/products.json?brand=${this.state.brand}&product_type=lipstick`)
        // .then(res => {
        //     console.log(res.data)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }
    render() {
        return ( 
            <div className = "home" >
                <div className = "condition" >
                    <Collapse expandIconPosition='right' defaultActiveKey={['1']} onChange={this.collapseChange} bordered={false}>
   <Panel header="Tpye" key="1">
       {
           this.state.type.map((v, k) => {
               return <Button key={k} type={v.border} onClick={this.typeChange.bind(this, k)} size="small" style={{margin: 2,fontSize:12}}>{ v.name }</Button>
           })
       }
   </Panel>
   <Panel header="Brand" key="2">
       {
           this.state.brand_list.map((v, k) => {
               return <Button key={k} type={v.border} onClick={ this.brandChange.bind(this, k) } size="small" style={{margin: 2,fontSize:12}}>{ v.name }</Button>
           })
       }
   </Panel>
   <Panel header="Category" key="3">
       {
           this.state.currentType == -1 ? [].map((v, k) => {
                   return <Button key={k} type={v.border} onClick={ this.categoryChange.bind(this, k) } size="small" style={{margin: 2,fontSize:12}}>{ v.name }1</Button>
               })
               :
               this.state.category[this.state.currentType]["type"].map((v, k) => {
                   return <Button key={k} type={v.border} size="small" style={{margin: 2,fontSize:12}} onClick={ this.categoryChange.bind(this, k) }>{ v.name }2</Button>
               })
       }
   </Panel>
   <Panel header="Tags" key="4">
       {
           this.state.currentType == -1 ? this.state.tag_list.map((v, k) => {
                   return <Button key={k} type={v.border} onClick={ this.tagChange.bind(this, k) } size="small" style={{margin: 2,fontSize:12}}>{ v.name }1</Button>
               })
               :
               this.state.category[this.state.currentType]["tags"].map((v, k) => {
                   return <Button key={k} type={v.border} onClick={ this.tagChange.bind(this, k) }  size="small" style={{margin: 2,fontSize:12}}>{ v.name }2</Button>
               })
       }
   </Panel>
                    </Collapse>
                </div>

                <div className="table">
                    {
                        this.state.loading? <div style={{width: '100%', height: 100, textAlign: 'center', lineHeight: '100px'}}><Spin /></div>: ''
                    }
                    
                    {
                        this.state.tableData.map((v,k) => {
                            return (
                                <div key={k} className="tableContent">
                                    <div className="img">
                                        <img src={v.api_featured_image}  alt={v.name} title={v.name}/>
                                    </div>
                                    <div className="info">
                                        <div className="name">{v.name}</div>
                                        <div className="brandAndType">
                                            <div className="brand：">brand：{v.brand}</div>
                                            <div className="product_type">type：{v.product_type}</div>
                                        </div>
                                        <div className="price">${v.price}</div>
                                    </div>
                                
                                </div>
                            )
                        })
                    }
                
                </div>
            </div>
        )
    }
}

export default Home
import {faker} from '@faker-js/faker'

export const offers = [...Array(5).keys()].map(()=>({
    id : faker.string.uuid(),
    title : faker.food.dish(),
    discount : faker.number.int({min:10,max:30}),
    image : `https://cdn.dummyjson.com/recipe-images/${faker.number.int({min:4,max:30})}.webp`,
    price : faker.number.int({min:10,max:50}),
    rating : faker.number.float({min:1,max:5}),
    background : faker.color.rgb({format:'hex'})
}))
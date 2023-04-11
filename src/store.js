import { reactive } from 'vue';
import bootstrapBundle from 'bootstrap/dist/js/bootstrap.bundle'

export const store = reactive(
    {
        products: [
            {
                name: 'Choco chip Cookies',
                type: ['Cookies', 'Pastries'],
                imgurl: 'asd',
                minPrice: 19.00,
                maxPrice: 39.00,
            },
            {
                name: 'Strawberry Jam Cookies',
                type: ['Cookies', 'Pastries'],
                imgurl: 'asd',
                minPrice: 24.00,
                maxPrice: 62.00,
            },
            {
                name: 'Strawberry Donut',
                type: ['Donut', 'Pastries'],
                imgurl: 'asd',
                minPrice: 24.00,
                maxPrice: 42.00,
            },
            {
                name: 'Perfect Macarons',
                type: ['Cookies','Pastries'],
                imgurl: 'asd',
                minPrice: 18.00,
                maxPrice: 52.00,
            }
        ]
    }
);
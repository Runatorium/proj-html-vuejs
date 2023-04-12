import { reactive } from 'vue';
import bootstrapBundle from 'bootstrap/dist/js/bootstrap.bundle'

export const store = reactive(
    {
        menuvoices: [
            'Home',
            'Shop',
            'About',
            'Gallery',
            'Locations',
            'Journal',
            'Contact',
            'MyAccount'
        ],

        products: [
            {
                name: 'Choco chip Cookies',
                type: ['Cookies', 'Pastries'],
                imgurl: '../public/img/choco-chip-cookies-400x510.jpg',
                minPrice: 19.00,
                maxPrice: 39.00,
            },
            {
                name: 'Strawberry Jam Cookies',
                type: ['Cookies', 'Pastries'],
                imgurl: '../public/img/strawberry-donut-400x510.jpg',
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
        ],
        
        events: [
            {
                name: 'Internation Bakery',
                imgurl: '../public/img/corporate-bg.jpg',
                imgurlhover: '../public/img/corporate-hover-bg.jpg',
                type: 'Corporate Events', 
            },
            {
                name: 'Wedding & Parties',
                imgurl: '../public/img/wedding-bg.jpg',
                imgurlhover: '../public/img/wedding-hover-bg.jpg',
                type: 'Private Dining Hall',
            },
        ],

        process: [
            {
                name: 'Tell us what you have in mind',
                number: '01', 
                subtitle: 'Manual Ingredient Selection',
                imgurl: 'asd',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Provident ea nihil repellendus consequatur libero, distinctio aut corporis laborum, nisi numquam ratione est illo quis officia.'
            },
            {
                name: 'We Start Baking',
                number: '02', 
                subtitle: 'Sweet & Delicious',
                imgurl: 'asd',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ea nihil repellendus consequatur libero, distinctio aut corporis laborum, nisi numquam ratione est illo quis officia.'
            },
            {
                name: 'Delivered to your home',
                number: '03', 
                subtitle: 'Baked to order & gift wrapped',
                imgurl: 'asd',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ea nihil repellendus consequatur libero, distinctio aut corporis laborum, nisi numquam ratione est illo quis officia.'
            },
        ],

        locations: [
            {
                city: 'New York',
                imgurl: 'asd',
                Pnumber: '1.800.458.556',
                openinghour: '9:00 AM',
                closinghour: '6:00 PM',
                mapslocation: '#'
            },

            {
                city: 'London',
                imgurl: 'asd',
                Pnumber: '1.800.458.556',
                openinghour: '9:00 AM',
                closinghour: '6:00 PM',
                mapslocation: '#'
            },
        ],


    }
);
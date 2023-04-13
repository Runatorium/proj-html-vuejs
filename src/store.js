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
        products:[
            {
                name: 'Choco chip Cookies',
                type: ['Cookies', 'Pastries'],
                imgurl: '/img/choco-chip-cookies-500x638.jpg',
                minPrice: 19.00,
                maxPrice: 39.00,
            },
            {
                name: 'Strawberry Jam Cookies',
                type: ['Cookies', 'Pastries'],
                imgurl: '/img/strawberry-jam-cookies-500x638.jpg',
                minPrice: 24.00,
                maxPrice: 62.00,
            },
        ],

        allProducts: [
            {
                name: 'Choco chip Cookies',
                type: ['Cookies', 'Pastries'],
                imgurl: '/img/choco-chip-cookies-400x510.jpg',
                minPrice: 19.00,
                maxPrice: 39.00,
            },
            {
                name: 'Strawberry Jam Cookies',
                type: ['Cookies', 'Pastries'],
                imgurl: '/img/strawberry-jam-cookies-400x510.jpg',
                minPrice: 24.00,
                maxPrice: 62.00,
            },
            {
                name: 'Strawberry Donut',
                type: ['Donut', 'Pastries'],
                imgurl: '/img/strawberry-donut-400x510.jpg',
                minPrice: 24.00,
                maxPrice: 42.00,
            },
            {
                name: 'Perfect Macarons',
                type: ['Cookies','Pastries'],
                imgurl: '/img/perfect-macarons-400x510.jpg',
                minPrice: 18.00,
                maxPrice: 52.00,
            }
        ],
        
        events: [
            {
                name: 'Internation Bakery',
                imgurl: '/img/corporate-bg.jpg',
                imgurlhover: '/img/corporate-hover-bg.jpg',
                type: 'Corporate Events', 
            },
            {
                name: 'Wedding & Parties',
                imgurl: '/img/wedding-bg.jpg',
                imgurlhover: '/img/wedding-hover-bg.jpg',
                type: 'Private Dining Hall',
            },
        ],

        process: [
            {
                name: 'Tell us what you have in mind',
                number: '01', 
                id: 'nmb1',
                subtitle: 'Manual Ingredient Selection',
                imgurl: '/img/bakery-process-1.jpg',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Provident ea nihil repellendus consequatur libero, distinctio aut corporis laborum, nisi numquam ratione est illo quis officia. nisi numquam ratione est illo quis officia nisi numquam ratione est illo quis officia'
            },
            {
                name: 'We Start Baking',
                number: '02', 
                id: 'nmb2',
                subtitle: 'Sweet & Delicious',
                imgurl: '/img/bakery-process-2.jpg',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ea nihil repellendus consequatur libero, distinctio aut corporis laborum, nisi numquam ratione est illo quis officia.'
            },
            {
                name: 'Finally found an alternative to the mass produced products. Something that incorporates real organic ingredients, nutrient dense wellness while promoting sustainability and activity.', 
                id: 'nmb3',
                subtitle: 'Dont Just take our word for it',
                text: 'Rachel Cooper, Founder'
            },
            {
                name: 'Delivered to your home',
                number: '03',
                id: 'nmb4',
                subtitle: 'Baked to order & gift wrapped',
                imgurl: '/img/bakery-process-3.jpg',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ea nihil repellendus consequatur libero, distinctio aut corporis laborum, nisi numquam ratione est illo quis officia.'
            },
        ],

        locations: [
            {
                city: 'New York',
                locnumber: 'nmb1',
                imgurl: '/img/new-york-bk-1200x794.jpg',
                Pnumber: '1.800.458.556',
                hour: '9:00 AM-6:00 PM',
                mapslocation: '#'
            },

            {
                city: 'London',
                locnumber: 'nmb2',
                imgurl: '/img/london-bk-1200x794.jpg',
                Pnumber: '1.800.458.556',
                hour: '9:00 AM-6:00 PM',
                mapslocation: '#'
            },
        ],
        socialmediaimgs:[
            {
                url: '/img/social-1.jpg',
                mbr: 'nmb1'
            },
            {
                url: 'None',
                mbr: 'nmb2',
                subtitle: 'Made for Sharing',
                title: 'Lets stay in touch',
            },
            {
                url: '/img/social-2.jpg',
                mbr: 'nmb3'
            },
            {
                url: '/img/social-3.jpg',
                mbr: 'nmb4'
            },
            {
                url: '/img/social-4.jpg',
                mbr: 'nmb5'
            },
            {
                url: '/img/social-5.jpg',
                mbr: 'nmb6'
            },
            {
                url: '/img/social-6.jpg',
            },
        ]


    }
);
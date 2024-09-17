import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';


export const pageLinks = [
    {id:1, href:'#home',text:'home'},
    {id:2, href:'#About',text:'About'},
    {id:3, href:'#services',text:'services'},
    {id:4, href:'#tours',text:'tours'},
    
]

export const socialLinks = [
    {id:1, href:'https://www.twitter.com', icon: 'fab fa-twitter'},
    {id:2, href:'https://www.facebook.com', icon: 'fab fa-facebook'},
    {id:3, href:'https://www.squarespace.com', icon: 'fab fa-squarespace'},
]

export const services = [
    {   id:1,
        icon:'fas fa-wallet fa-fw',
        title:'saving money',
        text:' Lorem ipsum dolor sit amet consectetur adipisicing elit',
              
    },
    {   id:2,
        icon:'fas fa-tree fa-fw',
        title:'saving money',
        text:' Lorem ipsum dolor sit amet consectetur adipisicing elit',
              
    },
    {   id:1,
        icon:'fas fa-socks fa-fw',
        title:'saving money',
        text:' Lorem ipsum dolor sit amet consectetur adipisicing elit',
              
    },
];

export const tours = [
    {    
         id:1,
         image: tour1,
         date: 'august 26th, 2020',
         title:'Tibet Adventure',
         info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Cumque vitae',
         location:'china',
         duration: 6,
         cost:2100    
    },
    {    
         id:2,
         image: tour2,
         date: 'august 30th, 2020',
         title:'Best of java',
         info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Cumque vitae',
         location:'china',
         duration: 11,
         cost:4000   
    },
    {    
         id:3,
         image: tour3,
         date: 'august 28th, 2020',
         title:'Tibet Adventure',
         info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Cumque vitae',
         location:'Indonesia',
         duration: 8,
         cost:3000    
    },
    {    
         id:4,
         image: tour4,
         date: 'august 29th, 2020',
         title:'Tibet Adventure',
         info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Cumque vitae',
         location:'kenya',
         duration: 8,
         cost:3000    
    },

]
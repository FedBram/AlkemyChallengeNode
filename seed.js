import { sequelize } from "./src/db/config/sequelizeConfig.js";
import { genre, movie, character} from './src/db/modelExports.js';

const genres = [
    { name: "Animation", img: 'https://www.filmsite.org/images/animated-genre.jpg' },
    { name: "Comedy", img: '' },
    { name: "Sport", img: '' }
];


const movies = [
    { title: 'The Lion King', date: '1994', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/The_Lion_King_poster.jpg/220px-The_Lion_King_poster.jpg', rate: '5', genreId: '1' },
    { title: 'Beauty and the Beast', date: '1991', img: 'https://static.wikia.nocookie.net/disney/images/0/0b/Beauty_and_the_Beast_theatrical_poster.jpg/revision/latest/scale-to-width-down/516?cb=20160715084901', rate: '4', genreId: '1' },
    { title: 'Honey, I Shrunk the Kids', date: '1989', img: 'https://static.wikia.nocookie.net/disney/images/8/86/Honey%2C_I_Shrunk_the_Kids_poster.jpg/revision/latest/scale-to-width-down/516?cb=20120219003506', rate: '3', genreId: '2' },
    { title: 'The Parent Trap', date: '1961', img: 'https://static.wikia.nocookie.net/disney/images/8/8b/Parent_trap_%281961%29.jpg/revision/latest/scale-to-width-down/516?cb=20210611005805', rate: '4', genreId: '2' },
    { title: 'Remember the Titans', date: '2000', img: 'https://static.wikia.nocookie.net/disney/images/d/d1/Remember_the_titansposter.jpg/revision/latest/scale-to-width-down/338?cb=20210807032849', rate: '3', genreId: '3' },
    { title: 'Toy Story', date: '1995', img: 'https://static.wikia.nocookie.net/disney/images/1/13/Toy_Story.jpg/revision/latest/scale-to-width-down/516?cb=20151003163558', rate: '5', genreId: '1' },
    { title: 'Tarzan', date: '1999', img: 'https://static.wikia.nocookie.net/disney/images/d/d2/Tarzan_Second_Poster.jpg/revision/latest/scale-to-width-down/516?cb=20140316164818', rate: '4', genreId: '1' },
    { title: 'Mary Poppins', date: '1964', img: 'https://static.wikia.nocookie.net/disney/images/f/ff/Mary_Poppins_1964_poster.jpg/revision/latest/scale-to-width-down/516?cb=20210411011028', rate: '5', genreId: '2' }
];


const characters = [
    { name: 'Simba', age: '5', weigth: '190', story: 'He is the son of Mufasa and Sarabi, who was destined to rule the Pride Lands, as king. When Mufasa was murdered by his treacherous brother, Scar, Simba was exiled from the Pride Lands after his uncle tricked him into taking the blame for his fathers death.', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Simba_%28_Disney_character_-_adult%29.png/220px-Simba_%28_Disney_character_-_adult%29.png', movieId: '1' },
    { name: 'Belle', age: '18', weigth: '60', story: 'She is the only daughter of Maurice, an inventor with whom she resides in a small, French village. The townsfolk labeled Belle an outcast because of her free spirit. She is also a proud bibliophile, her favorite genres being fantasy and adventure. Belles passion for fantastical stories, coupled with her outcast status, left her yearning for a life of adventure outside her small village. ', img: 'https://static.wikia.nocookie.net/disney/images/1/1b/Profile_-_Belle.jpeg/revision/latest/scale-to-width-down/516?cb=20190312024430', movieId: '2' },
    { name: 'Beast', age: '20', weigth: '130', story: 'A prince by birth, he was cursed into becoming a monster by a mysterious Enchantress as punishment for his selfish and cruel manners. Only loving another and earning their love in return can free the Beast and those affected by the spell before time runs out.', img: 'https://static.wikia.nocookie.net/disney/images/8/84/Profile_-_Beast.jpeg/revision/latest/scale-to-width-down/516?cb=20190312024919', movieId: '2' },
    { name: 'Wayne Szalinski', age: '40', weigth: '65', story: 'Wayne is an inventor who is struggling to get his shrinking machine to work. He tests it out on an apple, but rather than shrinking it, it blows it up instead.', img: 'https://static.wikia.nocookie.net/disney/images/2/24/Wayne_Szalinski_HWSO.png/revision/latest/scale-to-width-down/350?cb=20150503065207', movieId: '3' },
    { name: 'Susan Evers', age: '11', weigth: '30', story: 'She lives with her divorced father, Mitch, in California. Shes also the aunt of Nikki Ferris.', img: 'https://static.wikia.nocookie.net/disney/images/1/1b/Susan_Evers.jpg/revision/latest/scale-to-width-down/516?cb=20160622084619', movieId: '4' },
    { name: 'Coach Herman Boone', age: '36', weigth: '80', story: 'American high school football coach who coached the 1971 T. C. Williams High School football team', img: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Herman-Boone.Remember-the-Titans.webp', movieId: '5' },
    { name: 'Woody', age: '30', weigth: '.5', story: 'He is a vintage cowboy doll that originally belonged to a boy named Andy Davis. As Andys favorite since kindergarten, Woody served as the leader of Andys toys', img: 'https://static.wikia.nocookie.net/disney/images/2/22/Profile_-_Woody.jpeg/revision/latest/scale-to-width-down/516?cb=20200711052417', movieId: '6' },
    { name: 'Buzz Lightyear', age: '0', weigth: '0.8', story: 'He is a spaceman action figure originally belonging to Andy Davis based on the fictitious character of the same name.', img: 'https://static.wikia.nocookie.net/disney/images/7/74/Profile_-_Buzz_Lightyear.jpeg/revision/latest/scale-to-width-down/516?cb=20190623020017', movieId: '6' },
    { name: 'Tarzan ', age: '21', weigth: '75', story: 'Commonly known as the Ape Man, Tarzan was rescued and raised by a colony of apes after his parents were killed by the bloodthirsty Sabor. With help from his childhood friends Terk and Tantor, Tarzan would grow to become the valiant protector of the apes and the jungle at large—all the while never knowing the outside world.', img: 'https://static.wikia.nocookie.net/disney/images/2/2e/Profile_-_Tarzan.png/revision/latest/scale-to-width-down/516?cb=20190821020257', movieId: '7' },
    { name: 'Mary Poppins', age: '33', weigth: '61', story: 'She is a nanny who uses her magical powers to help the Banks family. Since her debut, she has become one of Disneys most iconic and endearing characters.', img: 'https://static.wikia.nocookie.net/disney/images/5/5c/Mary_Poppins_-_Julie_Andrews.jpg/revision/latest/scale-to-width-down/515?cb=20160212083150', movieId: '8' },
];


sequelize.sync({force: true}).then(() => {
    genres.forEach((i) => {genre.create(i)})
}).then(() => {
    movies.forEach((i) => {movie.create(i)})
}).then(() => {
    characters.forEach((i) => {character.create(i)})
})
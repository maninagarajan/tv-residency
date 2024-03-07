import React, { useState } from 'react';
import Navbar from '../../components/TopNavBar/navBar';
import './aroundUs.css';
import TopImg from '../../assets/images/AroundUs/Around_Top.png'
import DirectionIcon from '../../assets/images/AroundUs/Direction.png'
import KethuImg from '../../assets/images/AroundUs/Spiritual/Kethu.png'
import BudhanImg from '../../assets/images/AroundUs/Spiritual/Budhan.png'
import SaneeswaranImg from '../../assets/images/AroundUs/Spiritual/Saneeswaran.png'
import ChevvaiImg from '../../assets/images/AroundUs/Spiritual/Chevvai.png'
import SukkuranImg from '../../assets/images/AroundUs/Spiritual/Sukkuran.png'
import SuriyanImg from '../../assets/images/AroundUs/Spiritual/Suriyan.png'
import RaahuImg from '../../assets/images/AroundUs/Spiritual/Raahu.png'
import ChandranImg from '../../assets/images/AroundUs/Spiritual/Chandran.png'
import GuruImg from '../../assets/images/AroundUs/Spiritual/Guru.png'
import DanishFortImg from '../../assets/images/AroundUs/Entertainment/Danish Fort.png'
import ZiegenbalgMuseumComplexImg from '../../assets/images/AroundUs/Entertainment/Ziegenbalg Museum Complex.png'
import PoompuharBeachImg from '../../assets/images/AroundUs/Entertainment/Poompuhar Beach.png'
import NagoreDargahImg from '../../assets/images/AroundUs/Entertainment/Nagore Dargah.png'
import VelankanniChurchImg from '../../assets/images/AroundUs/Entertainment/Velankanni Church.png'
import PichavaramMangroveForestImg from '../../assets/images/AroundUs/Entertainment/Pichavaram Mangrove Forest.png'
import { Card } from '@mui/material';
import { ModalComponent } from './DetailsModal';

const spiritualList = [
    {
        name: 'Keezhaperumpallam',
        subName: 'Kethu',
        distance: '13.9',
        img: KethuImg,
        gMap: 'https://maps.app.goo.gl/wnsabjLEPvNKBFzz6',
        description: "The temple is one of the nine Navagraha temples of Tamil Nadu and is a part of the popular Navagraha pilgrimage in the state - it houses the image of Ketu. The planets are believed to influence the horoscope computed based on time of one's birth and subsequently influence the course of life. Each of the planets are believed to move from a star to another during a predefined period and thus sway over an individual's fortunes. The Navagrahas, as per Hindu customs, are believed to provide both good and bad effects for any individual and the bad effects are mitigated by prayers. As in other Navagraha temples, the common worship practises of the devotees include offering of cloth, grains, flowers and jewels specific to the planet deity. Lighting a set of lamps is also commonly followed in the temple. As per contemporary Saivite belief, the energies distributed cyclically by Navagrahas can be channeled based on remedial measures. As per local legends, Shiva, the overlord of the nine planetary deities, allowed them to freely grant wishes based on devotion of the devotees.",
        morningTime: '6:00am to 12:30pm',
        eveningTime: '3:00pm to 8:30pm'
    },
    {
        name: 'Thiruvenkadu',
        subName: 'Budhan',
        distance: '14.8',
        img: BudhanImg,
        gMap: 'https://maps.app.goo.gl/tnbrJzWRHXKi2CnG8',
        description: "The temple is one of the nine Navagraha temples of Tamil Nadu and is a part of the popular Navagraha pilgrimage in the state - it houses the image of Budha (Mercury). The planets are believed to influence the horoscope computed based on time of one's birth and subsequently influence the course of life. Each of the planets are believed to move from a star to another during a predefined period and thus sway over an individual's fortunes. The Navagrahas, as per Hindu customs, are believed to provide both good and bad effects for any individual and the bad effects are mitigated by prayers. As in other Navagraha temples, the common worship practises of the devotees include offering of cloth, grains, flowers and jewels specific to the planet deity. Lighting a set of lamps is also commonly followed in the temple. As per contemporary Saivite belief, the energies distributed cyclically by Navagrahas can be channeled based on remedial measures. As per local legends, Shiva, the overlord of the nine planetary deities, allowed them to freely grant wishes based on devotion of the devotees.",
        morningTime: '6:00am to 12:30pm',
        eveningTime: '4:30pm to 8:30pm'
    },
    {
        name: 'Thirunallar Temple',
        subName: 'Saneeswaran',
        distance: '22',
        img: SaneeswaranImg,
        gMap: 'https://maps.app.goo.gl/vSZUdPH3axMuSWe96',
        description: "Sambandar, the 7th century nayanar and Tamil saivite poet has revered the deity with four hymns, in one of which he refers to a contest with Jains, and his victory. Appar and Sundarar, the other Nayanars have glorified the temple with their hymns. Arunagirinathar, a 15th-century poet and staunch devoteet of Lord Muruga has composed hymns on the deity and this temple is attributed to Murugan worship as well. Tirugnana Sambandar, a 7th-century Tamil Saivite poet, venerated Naganathar in ten verses in Tevaram, compiled as the First Tirumurai. Appar, a contemporary of Sambandar, also venerated Dharbaranyeswarar in 10 verses in Tevaram, compiled as the Fifth Tirumurai. As the temple is revered in Tevaram, it is classified as Paadal Petra Sthalam, one of the 275 temples that find mention in the Saiva canon. The temple is one of the nine Navagraha temples of Tamil Nadu and is a part of the popular Navagraha pilgrimage in the state - it houses the image of Shani (Saturn).",
        morningTime: '5:30am to 12:30pm',
        eveningTime: '4:00pm to 8:30pm'
    },
    {
        name: 'Vaitheeswaran Kovil',
        subName: 'Chevvai',
        distance: '22.8',
        img: ChevvaiImg,
        gMap: 'https://maps.app.goo.gl/eXfqfUbN3tENL2Ym8',
        description: "The temple is revered by Tevaram hymns of saint poets Thirunavukkarasar and sambandar belonging to the 7th century. The poets name the towns where they found the temple in their hymns and Pullirukkuvelur finds a mention in their verses, corresponding to the temple. The hymns appear to recognise the function of the mantras (sacred text) as invocation of Shiva. In addition the hymns from Thirunavukkarasar likens Shiva to luminous objects - a flame, a pearl, a diamond and pure gold. He also indicates wasting lot of days not worshipping Shiva at this temple. Those who have no perception of the golden feet of deity in Pullirukku Velur on whose matted hairs cobra and white yarcum flowers are mingled, staying in their minds. will be in the centre of the hollow of the hell",
        morningTime: '6:00am to 1:00pm',
        eveningTime: '4:00pm to 8:00pm'
    },
    {
        name: 'Kanjanur Temple',
        subName: 'Sukkuran',
        distance: '42.2',
        img: SukkuranImg,
        gMap: 'https://maps.app.goo.gl/FP67hz96VBiqjanJA',
        description: "Legend is that Siva blessed Parasara muni (sage) here with cosmic dance. It is believed that Shiva appeared in the form of Sukra to propitiate himself off the dosha of Sukran.The Agniswarar Temple in Kanjanur has a rich history dating back many centuries. It is one of the prominent Navagraha temples, each associated with a celestial body in Hindu astrology. The temple is particularly linked to the planet Sukran (Venus). Devotees visit the Agniswarar Temple to participate in rituals, offer prayers, and seek divine blessings. The historical and cultural context of the temple adds to its spiritual significance for those who visit and worship there. The temple is counted as one of the temples built on the northern banks of River Kaveri.",
        morningTime: '6:30am to 12:30pm',
        eveningTime: '4:00pm to 9:00pm'
    },
    {
        name: 'Suryanar Temple',
        subName: 'Suriyan',
        distance: '43.8',
        img: SuriyanImg,
        gMap: 'https://maps.app.goo.gl/9AnKAnFcHfzVttpF8',
        description: "The temple is one of the nine Navagraha temples of Tamil Nadu and is a part of the popular Navagraha pilgrimage in the state - it houses the image of Surya (Sun). The planets are believed to influence the horoscope computed based on time of one's birth and subsequently influence the course of life. Each of the planets are believed to move from a star to another during a predefined period and thus sway over an individual's fortunes. Kol vinay theertha Vinayagar is an important deity inside the temple and should be worshiped first before worshiping Lord Suriyan and other planets. As in other Navagraha temples, the common worship practises of the devotees include offering of cloth, grains, flowers and jewels specific to the planet deity. Lighting a set of lamps is also commonly followed in the temple. As per contemporary Saivite belief, the energies distributed cyclically by Navagrahas can be channeled based on remedial measures. As per local legends, Shiva, the overlord of the nine planetary deities, allowed them to freely grant wishes based on devotion of the devotees.",
        morningTime: '7:00am to 12:30pm',
        eveningTime: '4:00pm to 8:30pm'
    },
    {
        name: 'Thirunageshwaram',
        subName: 'Raahu',
        distance: '51.7',
        img: RaahuImg,
        gMap: 'https://maps.app.goo.gl/YhNxGrVLUaFZC8wM7',
        description: "The presiding deity is believed to have been worshipped by many serpent deities like Adiseshan, Dakshan and Karkotaka. As per Hindu belief, people troubled by Sarpa-dosha or Malefic effects Rahu-Kethu seek a relief by offering prayers in a single day to Kudanthai or Kumbakonam Nageshwarar in the morning, Thirunageshwaram Naganathar at the noon, Thirupamburam Pambureswarar in the evening and Nagoor Nageshwarar or Naganathar temple at night. Tirugnana Sambandar, a 7th-century Tamil Saivite poet, venerated Naganathar in ten verses in Tevaram, compiled as the First Tirumurai. Appar, a contemporary of Sambandar, also venerated Annamalaiyar in 10 verses in Tevaram, compiled as the Fifth Tirumurai. As the temple is revered in Tevaram, it is classified as Paadal Petra Sthalam, one of the 275 temples that find mention in the Saiva canon. The temple is one of the most visited temples in the district. The temple is counted as one of the temples built on the banks of River Kaveri.",
        morningTime: '6:00am to 1:00pm',
        eveningTime: '4:00pm to 9:00pm'
    },
    {
        name: 'Thingalur',
        subName: 'Chandran',
        distance: '87.8',
        img: ChandranImg,
        gMap: 'https://maps.app.goo.gl/TznhtW3J283rn36b8',
        description: "The temple is one of the nine Navagraha temples of Tamil Nadu and is a part of the popular Navagraha pilgrimage in the state - it houses the image of Moon (called Thingal locally). The planets are believed to influence the horoscope computed based on time of one's birth and subsequently influence the course of life. Each of the planets is believed to move from one star to another during a predefined period and thus sway over an individual's fortunes. The Navagrahas, as per Hindu customs, are believed to provide both good and bad effects for any individual and the bad effects are mitigated by prayers. As in other Navagraha temples, the common worship practices of the devotees include an offering of cloth, grains, flowers and jewels specific to the planetary deity. Lighting a set of lamps is also commonly followed in the temple. As per contemporary Saivite belief, the energies distributed cyclically by Navagrahas can be channelled based on remedial measures.",
        morningTime: '7:00am to 1:00pm',
        eveningTime: '4:00pm to 9:00pm'
    },
    {
        name: 'Alangudi',
        subName: 'Guru',
        distance: '157.6',
        img: GuruImg,
        gMap: 'https://maps.app.goo.gl/eCoesT56fAz2aQRUA',
        description: "The temple is counted as one of the Navagraha Temples for planet Guru (Jupiter). Tirugnana Sambandar, a 7th-century Tamil Saivite poet, venerated Apathsaheswarar in ten verses in Tevaram, compiled as the First Tirumurai. Appar, a contemporary of Sambandar, also venerated Annamalaiyar in 10 verses in Tevaram, compiled as the Fifth Tirumurai. As the temple is revered in Tevaram, it is classified as Paadal Petra Sthalam, one of the 275 temples that find mention in the Saiva canon. The temple is one of the most visited temples in the district.According to a Hindu legend, Mahalingaswamy at Thiruvidaimarudur is the centre of all Shiva temples in the region and the Saptha Vigraha moorthis (seven prime consorts in all Shiva temples) are located at seven cardinal points around the temple, located in various parts of the state.",
        morningTime: '6:00am to 12:30pm',
        eveningTime: '4:00pm to 9:00pm'
    },
]

const entertainmentList = [
    {
        name: 'Danish Fort',
        subName: '',
        distance: '9.2',
        img: DanishFortImg,
        gMap: 'https://maps.app.goo.gl/SEXVMuygShJH6QU5A',
        description: "Fort Dansborg (Danish: Dansborg), locally called Danish Fort, is a Danish fort located in the shores of Bay of Bengal in Tharangambadi in the South Indian state of Tamil Nadu. Fort Dansborg was built in the land ceded by Thanjavur king Ragunatha Nayak in an agreement with Danish Admiral Ove Gjedde in 1620 and acted as the base for Danish settlement in the region during the early 17th century. The fort is the second largest Danish fort after Kronborg. The fort was sold to the British in 1845 and along with Tranquebar, the fort lost its significance as the town was not an active trading post for the British. After India's independence in 1947, the fort was used as an inspection bungalow by the state government until 1978 when its archaeology department took control of the fort. The fort is now used as a museum where the major artifacts of the fort and the Danish empire are displayed.",
        morningTime: '10:00am to 5:45pm',
    },
    {
        name: 'Ziegenbalg House',
        subName: '',
        distance: '9.4',
        img: ZiegenbalgMuseumComplexImg,
        gMap: 'https://maps.app.goo.gl/qDPv53qiHcDvrR477',
        description: "The Ziegenbalg House in Tharangambadi (Tamil Nadu) is a joint project of the Francke Foundations in Halle, the Evangelical Lutheran Missionary Organisation in Lower Saxony and the Tamil Evangelical Lutheran Church (TELC) with the help of many partners. It is a place of exchange between the inhabitants (Hindus, Christians, Muslims) of the rural area and visitors from India and Europe.The starting point for the project is the encounters between the Halle missionaries of the first Protestant mission and Tamil society. Extensive written as well as material sources have survived in India and Europe. In the Francke Foundations, they are now accessible to all interested parties in the cultural-historical archive and in the Cabinet of Artefacts and Natural Curiosities.",
        morningTime: '10:00am to 6:00pm',
    },
    {
        name: 'Poompuhar Beach',
        subName: '',
        distance: '16.4',
        img: PoompuharBeachImg,
        gMap: 'https://maps.app.goo.gl/gYKMMooyC84RGHSy8',
        description: "A coastline blessed abundantly by Nature, a land famed for its rich history, sun-kissed sands that entice every visitor with its charming beauty – the Poompuhar Beach is one among the finest beaches in Tamil Nadu for a number of reasons. It is not often that you would come across a coastal destination that is filled with history and abundant natural beauty. The rare combination of these two aspects is what makes the Poompuhar Beach so special. Once a legendary port city that witnessed many historic events, the town of Poompuhar is today one of the most visited tourism destinations in the region – thanks to the impeccable beauty of the Poompuhar beach that leaves a lasting impression in the minds of visitors. One of the most important days that is celebrated on this beach is the “Chitra Pournami”, around the April-May season. People gather on the beach to take a dip and celebrate the day in great joy."
    },
    {
        name: 'Nagore Dargah',
        subName: '',
        distance: '34.6',
        img: NagoreDargahImg,
        gMap: 'https://maps.app.goo.gl/Kj92hpZLNb8ZMbWb7',
        description: "Nagore Dargah (also called Nagoor Dargah or Syed Shahul Hameed Dargah or Nagore Andavar dargah) is a dargah built over the tomb of the Sufi saint Shahul Hameed (1490–1579 CE). It is located in Nagore, a coastal town in the South Indian state of Tamil Nadu. The outer doors of the dargah are kept open always, while the internal doors are open from 4:30 am to 07:00 am and from 6:25 pm to 9:30 pm. On Fridays, the doors are additionally kept open between 12:00 and 2:30 pm. Shahul Hamid is believed to have performed many miracles in Nagore, and cured the physical affliction of king Achuthappa Nayak, a 16th-century Hindu ruler of Thanjavur. He is locally referred to as Nagore Andavar, meaning the 'Ruler of Nagore'. Nagore dargah as it stands now, is believed to have been built by ardent devotees of Shahul Hamid, with major contribution from Hindus. There are five minarets in the dargah, with the Hindu Maratha ruler of Thanjavur Pratap Singh (1739–1763 CE), building the tallest minaret. The dargah is a major pilgrimage centre that attracts pilgrims from both Islam and Hinduism, symbolizing peaceful coexistence between the two religions.",
        morningTime: '4:00am to 10:00pm',
    },
    {
        name: 'Velankanni Church',
        subName: '',
        distance: '51.7',
        img: VelankanniChurchImg,
        gMap: 'https://maps.app.goo.gl/wH9fPprXVNHVe9iJA',
        description: "Vailankanni is fondly known as the 'Lourdes of the East' because like Lourdes in France, millions of pilgrims visit the Shrine throughout the year, praying to Our Lady for various needs and thanking her for the favors received through her intercession. Tradition recounts that Mother Mary appeared with the Infant Jesus in this small hamlet at the end of the 16th or in the early 17th century. Ever since, Vailankanni is the most important destination and almost the synthesis of all Marian Sanctuaries for the pilgrims of the world. The crowds of pilgrims come here regardless of creeds and languages.  Our Lady of Vailankanni devotions down through the centuries have proved the Shrine to be of divine origin and has assumed international character. Mary, the focus of unity at Vailankanni, is a clear proof of international, multicultural, and religious harmony.",
        morningTime: '5:00am to 9:00pm'
    },
    {
        name: 'Pichavaram Mangrove Forest',
        subName: '',
        distance: '54.1',
        img: PichavaramMangroveForestImg,
        gMap: 'https://maps.app.goo.gl/ERXxHmjjPjR4ecif8',
        description: "Pichavaram consists of a number of islands interspersing a vast expanse of water covered with mangrove forest. The Pichavaram mangrove Forest is one of the largest mangrove forests in India covering about 45 sqkm of area (as of 2019). The biotope consists of species like Avicennia and Rhizophora. It also supports the existence of rare varieties of economically important shells and fishes.The mangroves also attract migrant and local birds including snipes, cormorants, egrets, storks, herons, spoonbills and pelicans. About 177 species of birds belonging to 15 orders and 41 families have been recorded. The high population of birds could be seen from November to January due to the high availability of prey, the coincidence of the time of arrival of true migrants from foreign countries and local migrants from their breeding grounds across India. The availability of different habitat types such as channels, creeks, gullies, mudflats and sand flats and adjacent seashore offers ideal habitats for different species of birds and animals.",
        morningTime: ''
    },
]

const AroundItem = ({ item, setModalVisible, setModalContent }) => {
    return <Card className='aroundCard'>
        <img src={item.img} alt={item.name} className='aroundImg' />
        <div className='aroundBottomDiv'>
            <h3>{item.name}{item.subName ? ` - ${item.subName}` : ''}</h3>
            <p>{item.distance}km(from hotel)</p>

            <div className='buttonContainer'>
                <button className='directionButton' onClick={() => window.open(item.gMap)}>
                    <span>View Direction</span>
                    <img src={DirectionIcon} alt="direction" />
                </button>

                <button onClick={() => {
                    setModalVisible(true)
                    setModalContent(item)
                }}>
                    <span>View Details</span>
                </button>
            </div>
        </div>
    </Card>
}

const renderCard = (list, setModalVisible, setModalContent) => {
    return <div className='aroundListContainer'>
        {list.map((item) => <AroundItem
            key={item.name}
            item={item}
            setModalVisible={setModalVisible}
            setModalContent={setModalContent}
        />)}
    </div>
}

export const AroundUsComponent = () => {
    const [selectedTab, setSelectedTab] = useState('Spiritual')
    const [modalVisible, setModalVisible] = useState(false)
    const [modalContent, setModalContent] = useState(null)

    return (
        <div className='container'>
            <Navbar />
            <div className='screenTop'>
                <img src={TopImg} alt='Around-Us' />
                <div>
                    <h2>Around us</h2>
                </div>
            </div>
            <div className='aroundUsDiv'>
                <div className='transportTab'>
                    <h4
                        onClick={() => setSelectedTab('Spiritual')}
                        className={selectedTab == 'Spiritual' ? 'transportText' : ''}>Spiritual</h4>
                    <h4
                        onClick={() => setSelectedTab('Entertainment')}
                        className={selectedTab == 'Entertainment' ? 'transportText' : ''}
                    >Entertainment</h4>
                </div>
            </div>

            {renderCard(selectedTab === 'Spiritual' ? spiritualList : entertainmentList, setModalVisible, setModalContent)}

            <ModalComponent
                modalVisible={modalVisible}
                handleClose={() => {
                    setModalVisible(false)
                    setModalContent(null)
                }}
                modalContent={modalContent}
            />

        </div>
    )
}
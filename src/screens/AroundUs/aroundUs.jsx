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

const spiritualList = [
    {
        name: 'Keezhaperumpallam',
        subName: 'Kethu',
        distance: '13.9',
        img: KethuImg,
        gMap: 'https://maps.app.goo.gl/wnsabjLEPvNKBFzz6'
    },
    {
        name: 'Thiruvengadu',
        subName: 'Budhan',
        distance: '14.8',
        img: BudhanImg,
        gMap: 'https://maps.app.goo.gl/tnbrJzWRHXKi2CnG8'
    },
    {
        name: 'Thirunallar Temple',
        subName: 'Saneeswaran',
        distance: '22',
        img: SaneeswaranImg,
        gMap: 'https://maps.app.goo.gl/vSZUdPH3axMuSWe96'
    },
    {
        name: 'Vaitheeswaran Kovil',
        subName: 'Chevvai',
        distance: '22.8',
        img: ChevvaiImg,
        gMap: 'https://maps.app.goo.gl/eXfqfUbN3tENL2Ym8'
    },
    {
        name: 'Kanchanur Temple',
        subName: 'Sukkuran',
        distance: '42.2',
        img: SukkuranImg,
        gMap: 'https://maps.app.goo.gl/FP67hz96VBiqjanJA'
    },
    {
        name: 'Suryanar Temple',
        subName: 'Suriyan',
        distance: '43.8',
        img: SuriyanImg,
        gMap: 'https://maps.app.goo.gl/9AnKAnFcHfzVttpF8'
    },
    {
        name: 'Thirunageshwaram',
        subName: 'Raahu',
        distance: '51.7',
        img: RaahuImg,
        gMap: 'https://maps.app.goo.gl/YhNxGrVLUaFZC8wM7'
    },
    {
        name: 'Thingalur',
        subName: 'Chandran',
        distance: '87.8',
        img: ChandranImg,
        gMap: 'https://maps.app.goo.gl/TznhtW3J283rn36b8'
    },
    {
        name: 'Alangudi',
        subName: 'Guru',
        distance: '157.6',
        img: GuruImg,
        gMap: 'https://maps.app.goo.gl/eCoesT56fAz2aQRUA'
    },
]

const entertainmentList = [
    {
        name: 'Danish Fort',
        subName: '',
        distance: '9.2',
        img: DanishFortImg,
        gMap: 'https://maps.app.goo.gl/SEXVMuygShJH6QU5A'
    },
    {
        name: 'Ziegenbalg House',
        subName: '',
        distance: '9.4',
        img: ZiegenbalgMuseumComplexImg,
        gMap: 'https://maps.app.goo.gl/qDPv53qiHcDvrR477'
    },
    {
        name: 'Poompuhar Beach',
        subName: '',
        distance: '16.4',
        img: PoompuharBeachImg,
        gMap: 'https://maps.app.goo.gl/gYKMMooyC84RGHSy8'
    },
    {
        name: 'Nagore Dargah',
        subName: '',
        distance: '34.6',
        img: NagoreDargahImg,
        gMap: 'https://maps.app.goo.gl/Kj92hpZLNb8ZMbWb7'
    },
    {
        name: 'Velankanni Church',
        subName: '',
        distance: '51.7',
        img: VelankanniChurchImg,
        gMap: 'https://maps.app.goo.gl/wH9fPprXVNHVe9iJA'
    },
    {
        name: 'Pichavaram Mangrove Forest',
        subName: '',
        distance: '54.1',
        img: PichavaramMangroveForestImg,
        gMap: 'https://maps.app.goo.gl/ERXxHmjjPjR4ecif8'
    },
]

const AroundItem = ({ item }) => {
    return <Card className='aroundCard'>
        <img src={item.img} alt='item.name' className='aroundImg' />
        <div className='aroundBottomDiv'>
            <h3>{item.name}{item.subName ? ` - ${item.subName}` : ''}</h3>
            <p>{item.distance}km(from hotel)</p>

            <div className='buttonContainer'>
                <button className='directionButton' onClick={() => window.open(item.gMap)}>
                    <span>View Direction</span>
                    <img src={DirectionIcon} alt="direction" />
                </button>

                <button>
                    <span>View Details</span>
                </button>
            </div>
        </div>
    </Card>
}

const renderCard = (list) => {
    return <div className='aroundListContainer'>
        {list.map((item) => <AroundItem key={item.name} item={item} />)}
    </div>
}

export const AroundUsComponent = () => {
    const [selectedTab, setSelectedTab] = useState('Spiritual')

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

            {renderCard(selectedTab === 'Spiritual' ? spiritualList : entertainmentList)}
        </div>
    )
}
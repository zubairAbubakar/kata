'use client';

import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { FaSkiing } from 'react-icons/fa';
import {
    GiWindmill,
    GiBoatFishing,
    GiCastle,
    GiCaveEntrance,
    GiForestCamp,
    GiIsland,
    GiCactus,
    GiBarn,
} from 'react-icons/gi';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { MdOutlineVilla } from 'react-icons/md';

import Container from '../Container';
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This Property is near the beach',
    },
    {
        label: 'Windmill',
        icon: GiWindmill,
        description: 'This Property is near windmills',
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This Property has morden looks',
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This Property has a swimming pool',
    },
    {
        label: 'Isand',
        icon: GiIsland,
        description: 'This Property is on an Island',
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This Property has skiing activities',
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This Property is in castle',
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This Property is in a camp',
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This Property is on an artic region',
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This Property is in a cave',
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This Property is on a desert',
    },
    {
        label: 'Barn',
        icon: GiBarn,
        description: 'This Property is in a barn',
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This Property is a luxurious property',
    },
];

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';
    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    );
};

export default Categories;

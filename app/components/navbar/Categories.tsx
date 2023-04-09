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

const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'Properties new the near',
    },
    {
        label: 'Windmill',
        icon: GiWindmill,
        description: 'Properties with windmills',
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'Properties with morden looks',
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'Properties with swimming pool',
    },
    {
        label: 'Isand',
        icon: GiIsland,
        description: 'Properties on an Island',
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'Properties with skiing activities',
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'Properties on in castle',
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'Properties in a camp',
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'Properties on an artic region',
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'Properties in a cave',
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'Properties on a desert',
    },
    {
        label: 'Barn',
        icon: GiBarn,
        description: 'Properties in a barn',
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'luxurious properties',
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

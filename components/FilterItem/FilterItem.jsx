// core
import React, { useState } from 'react'

// library
import classNames from "classnames";
import Link from "next/link";

// components
import { routes } from "../../constants/routes";

// library
import styles from "./FilterItem.module.scss";


export const FilterItem = ({filter}) => {
    const [currentFilter, setCurrentFilter] = useState(0);

    return (
        <div key={filter} className={styles.filterItem}>
            <h6>{filter.title}</h6>
            <ul>
                {filter.items.map((item, index) => (
                    <li key={item}
                        className={classNames(currentFilter === index ? [styles.active] : '')}
                        onClick={() => setCurrentFilter(index)}>
                        {item}
                    </li>
                ))}
            </ul>
            {filter.link && <Link href={routes.marketplace}><a>View all 36 brands</a></Link>}

        </div>
    )
};

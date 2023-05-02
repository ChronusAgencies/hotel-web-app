import NavMenu from '@/components/reusable/navMenu/NavMenu';
import { TGeneralProps } from '@/utils/types/types';
import React from 'react';
import style from './HeadNav.module.scss';
import Route from '@/components/reusable/route/Route';
import { type } from 'os';
import Container from '@/components/reusable/container/Container';

type THeadNavProps = {
    isActive : boolean
}

const HeadNav = ({isActive} : THeadNavProps) => {
  return (
    <>
        <Container classname={`${style.container} ${isActive && style.isActive}`}>
            <NavMenu
                classname={style.nav}
            >
                <div className={style.nav_links}>
                    <Route
                        href={'/accomodation/accomodation'}
                        classname={style.main_link}
                    >
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 2C20.5 1.17157 19.8284 0.500001 19 0.500001L5.5 0.500001C4.67157 0.500001 4 1.17157 4 2C4 2.82843 4.67157 3.5 5.5 3.5H17.5V15.5C17.5 16.3284 18.1716 17 19 17C19.8284 17 20.5 16.3284 20.5 15.5L20.5 2ZM3.06066 20.0607L20.0607 3.06066L17.9393 0.939341L0.93934 17.9393L3.06066 20.0607Z" fill="#232323"/>
                        </svg>
                        <p>ACCOMODATIONS</p>
                    </Route>
                    <Route
                        href={'/accomodation/dining'}
                        classname={style.sec_link}
                    >
                        <p>dinings</p>
                    </Route>
                </div>
                <div className={style.nav_links}>
                    <Route
                        href={'/accomodation/accomodation'}
                        classname={style.main_link}
                    >
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 2C20.5 1.17157 19.8284 0.500001 19 0.500001L5.5 0.500001C4.67157 0.500001 4 1.17157 4 2C4 2.82843 4.67157 3.5 5.5 3.5H17.5V15.5C17.5 16.3284 18.1716 17 19 17C19.8284 17 20.5 16.3284 20.5 15.5L20.5 2ZM3.06066 20.0607L20.0607 3.06066L17.9393 0.939341L0.93934 17.9393L3.06066 20.0607Z" fill="#232323"/>
                        </svg>
                        <p>EVENTS</p>
                    </Route>
                    <Route
                        href={'/accomodation/dining'}
                        classname={style.sec_link}
                    >
                        <p>weddings</p>
                    </Route>
                </div>
                <div className={style.nav_links}>
                    <Route
                        href={'/accomodation/accomodation'}
                        classname={style.main_link}
                    >
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 2C20.5 1.17157 19.8284 0.500001 19 0.500001L5.5 0.500001C4.67157 0.500001 4 1.17157 4 2C4 2.82843 4.67157 3.5 5.5 3.5H17.5V15.5C17.5 16.3284 18.1716 17 19 17C19.8284 17 20.5 16.3284 20.5 15.5L20.5 2ZM3.06066 20.0607L20.0607 3.06066L17.9393 0.939341L0.93934 17.9393L3.06066 20.0607Z" fill="#232323"/>
                        </svg>
                        <p>ACTIVITIES</p>
                    </Route>
                    <Route
                        href={'/accomodation/dining'}
                        classname={style.sec_link}
                    >
                        <p>tours</p>
                    </Route>
                </div>
                <div className={style.nav_links}>
                    <Route
                        href={'/accomodation/accomodation'}
                        classname={style.main_link}
                    >
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 2C20.5 1.17157 19.8284 0.500001 19 0.500001L5.5 0.500001C4.67157 0.500001 4 1.17157 4 2C4 2.82843 4.67157 3.5 5.5 3.5H17.5V15.5C17.5 16.3284 18.1716 17 19 17C19.8284 17 20.5 16.3284 20.5 15.5L20.5 2ZM3.06066 20.0607L20.0607 3.06066L17.9393 0.939341L0.93934 17.9393L3.06066 20.0607Z" fill="#232323"/>
                        </svg>
                        <p>MULIA PRIVILAGE</p>
                    </Route>
                    <Route
                        href={'/accomodation/dining'}
                        classname={style.sec_link}
                    >
                        <p>mulia gifts</p>
                    </Route>
                </div>
                <div className={style.nav_links}>
                    <Route
                        href={'/accomodation/accomodation'}
                        classname={style.main_link}
                    >
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 2C20.5 1.17157 19.8284 0.500001 19 0.500001L5.5 0.500001C4.67157 0.500001 4 1.17157 4 2C4 2.82843 4.67157 3.5 5.5 3.5H17.5V15.5C17.5 16.3284 18.1716 17 19 17C19.8284 17 20.5 16.3284 20.5 15.5L20.5 2ZM3.06066 20.0607L20.0607 3.06066L17.9393 0.939341L0.93934 17.9393L3.06066 20.0607Z" fill="#232323"/>
                        </svg>
                        <p>SPECIAL OFFER</p>
                    </Route>
                    <Route
                        href={'/accomodation/dining'}
                        classname={style.sec_link}
                    >
                        <p>blogs</p>
                    </Route>
                </div>
            </NavMenu>
        </Container>
    </>
  )
}

export default HeadNav
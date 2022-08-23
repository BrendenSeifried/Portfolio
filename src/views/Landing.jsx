import React, { useState } from 'react';
import About from '../components/About';
import FMM from '../components/FMM';
import Forage from '../components/Forage';
import { CollapsedCards } from '../Styles/CollapsedCards';
import {
  GridContainer,
  CardOne,
  CardTwo,
  CardThree,
  CardFour,
  Welcome,
  Bio,
  WholeSpace,
  ContactResume,
  Links,
} from '../Styles/GridTwo';
import { FaParking, FaUserSecret } from 'react-icons/fa';
import { GiMagicShield } from 'react-icons/gi';
import { BsShopWindow } from 'react-icons/bs';

export default function Landing() {
  const [expandOne, setExpandOne] = useState(true);
  const [expandTwo, setExpandTwo] = useState(true);
  const [expandThree, setExpandThree] = useState(true);
  const [expandFour, setExpandFour] = useState(true);
  const [blur, setBlur] = useState(false);
  // const [tag, setTag] = useState('');

  // {
  //   expandOne || expandTwo || expandThree || expandFour
  //     ? setBlur(false)
  //     : setBlur(true);
  // }

  return (
    <>
      <GridContainer>
        {blur && <WholeSpace />}
        {/* // {blur ? <WholeSpace /> : ''} */}

        <Welcome>Welcome</Welcome>
        <Links></Links>
        <ContactResume>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </ContactResume>

        <Bio>
          <About />
        </Bio>

        {expandOne ? (
          <CardOne
            onClick={() => [
              setExpandOne(!expandOne),
              setBlur(!blur),
              // setTag('FMMpic.PNG'),
            ]}
          >
            <CollapsedCards>
              <h1>Full-Metal-Messenger</h1>
              {''}
              <h2>
                <GiMagicShield size={200} />
              </h2>
              <h3>React | SupaBase | Chakra-UI | Netlify | 3-Person Team</h3>
            </CollapsedCards>
          </CardOne>
        ) : (
          <FMM expandOne={expandOne} setExpandOne={setExpandOne} />
        )}

        <CardTwo
          onClick={() => {
            setExpandTwo(!expandTwo), setBlur(!blur);
          }}
        >
          {expandTwo ? (
            <CollapsedCards>
              <h1>Forage Parking App</h1>
              {''}
              <h2>
                <FaParking size={200} />
              </h2>
              <h3>React | SupaBase | Netlify | 4-Person Team</h3>
            </CollapsedCards>
          ) : (
            <Forage />
          )}
        </CardTwo>

        <CardThree
          onClick={() => {
            setExpandThree(!expandThree), setBlur(!blur);
          }}
        >
          {expandThree ? (
            <CollapsedCards>
              <h1>Mark-It</h1>
              {''}
              <h2>
                <BsShopWindow size={200} />
              </h2>
              <h3>React | SupaBase | MapBox | Netlify | 4-Person Team</h3>
            </CollapsedCards>
          ) : (
            <Forage />
          )}
        </CardThree>

        <CardFour
          onClick={() => {
            setExpandFour(!expandFour), setBlur(!blur);
          }}
        >
          {expandFour ? (
            <CollapsedCards>
              <h1>Top-Secrets</h1>
              {''}
              <h2>
                <FaUserSecret size={200} />
              </h2>
              <h3>React | SQL | Heroku</h3>
            </CollapsedCards>
          ) : (
            <Forage />
          )}
        </CardFour>
        {/* </LandingBackground> */}
      </GridContainer>
    </>
  );
}

import React from 'react';
import Card from './card';
import Cdata from './Cdata'

// function Ncard(alam) {
//     return(
//     <Card
//             img={alam.img}
//             title={alam.title}
//             name={alam.name}
//             link={alam.link}
            
//     /> )

// };


function Cards() {
    return (
        <>
            
            <h1 className="heading">Top netfilix series</h1>
            {/* <Card
                      img={Cdata[0].img}
                      title={Cdata[0].title}
                      name={Cdata[0].name}
                      link={Cdata[0].link}
                /> */}
            {/* <Card
                      img={Cdata[1].img}
                      title={Cdata[1].title}
                      name={Cdata[1].name}
                      link={Cdata[1].link}
                
                      />
            <Card
                      img={Cdata[2].img}
                      title={Cdata[2].title}
                      name={Cdata[2].name}
                      link={Cdata[2].link}
                
            />
            <Card
                      img={Cdata[3].img}
                      title={Cdata[3].title}
                      name={Cdata[3].name}
                      link={Cdata[3].link}
            />
            <Card
                      img={Cdata[4].img}
                      title={Cdata[4].title}
                      name={Cdata[4].name}
                      link={Cdata[4].link}
            /> */}
            {/* {Cdata.map(Ncard)}
            {Cdata.map(  const Ncard=(alam)=> {
                return(
    <Card
            img={alam.img}
            title={alam.title}
            name={alam.name}
            link={alam.link}
            
    /> );
            })} */}


            {Cdata.map((alam)=> {
                return(
    <Card
            img={alam.img}
            title={alam.title}
            name={alam.name}
            link={alam.link}
            
    /> );
            })}
        </>



    );
} export default Cards;
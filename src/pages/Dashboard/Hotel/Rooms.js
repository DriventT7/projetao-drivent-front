import Icons from './Icons';
import { useState } from 'react';
import { Content, Room, Container } from '../../../components/Hotel/Rooms';

export default function Rooms({ rooms }) {
  const [choosedRoom, setChoosedRoom] = useState('');

  function Rooms({ item, index, choosedRoom }) { 
    let single = '';
    let double = '';
    let triple = '';

    function renderIcons(item) {
      if(item.capacity === 1) {
        item.Booking.length === 1 ? single = 1 : single = 0;
      }

      if(item.capacity === 2) {
        item.Booking.length === 1 ? double = 1 : item.Booking.length === 2 ? double = 2 : double = 0;
      }

      if(item.capacity === 3) {
        item.Booking.length === 1 ? triple = 1 : item.Booking.length === 2 ? triple = 2 : item.Booking.length === 3 ? triple = 3 : triple = 0;
      }
    }

    return (
      <Room 
        key={index} 
        onClick={() => { setChoosedRoom(index); }} 
        index={index} 
        choosedRoom={choosedRoom}
      >

        <h1>{item.name}</h1>
        <Container>
          {renderIcons(item)}

          <Icons 
            index={index} 
            choosedRoom={choosedRoom}
            single={single}
            double={double}
            triple={triple}
          />
        </Container>
            
      </Room>
    );
  }

  return (
    <>
      <Content>
        {rooms.map((item, index) => <Rooms key={index} item={item} index={index} choosedRoom={choosedRoom}/>)}
      </Content>
    </>
  );
}

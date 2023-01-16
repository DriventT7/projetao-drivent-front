import Icons from './Icons';
import { useState, useContext } from 'react';
import { Button, Label } from '../../../components/Hotel/Rooms';
import { Content, Room, Container } from '../../../components/Hotel/Rooms';
import { createBooking } from '../../../services/bookingsApi';
import UserContext from '../../../contexts/UserContext';

export default function Rooms({ rooms, token }) {
  const [choosedRoom, setChoosedRoom] = useState('');
  const [roomId, setRoomId] = useState('');

  console.log(choosedRoom);

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

    console.log(choosedRoom);
    return (
      <Room 
        key={index} 
        onClick={() => { setChoosedRoom(index); setRoomId(item.id); }} 
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

  function reserveRoom(roomId) { 
    const promise = createBooking(roomId, token);
    promise.then(res => {
      console.log(res);
    });
  
    promise.catch(err => {
      console.log(err);
    });

    return null;
  }

  return (
    <>
      <Label>Ótima pedida! Agora escolha seu quarto:</Label>
      <Content> 
        {rooms.map((item, index) => <Rooms key={index} item={item} index={index} choosedRoom={choosedRoom}/>)}
      </Content>
      <Button onClick={() => reserveRoom(roomId)}>RESERVAR QUARTO</Button>
    </>
  );
}

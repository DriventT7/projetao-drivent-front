
import { useState } from 'react';
import { Content, Room, Container } from '../../../components/Hotel/Rooms';

export default function Rooms(rooms) {
  const [choosedRoom, setChoosedRoom] = useState(0);
  const [choosedVacancy, setChoosedVacancy] = useState(0);
  const hotelRooms = rooms.rooms;
  const single = [1];
  const double = [1, 2];
  const triple = [1, 2, 3];

  function Icons(item, index) {
    return (
      <ion-icon name='person-outline' color={choosedRoom !== 0 ? '#FF4791' : '#EBEBEB'}></ion-icon>
    );
  }

  return (
    <>
      <Content>
        {hotelRooms.map((item, index) => 
          <Room key={index} onClick={() => setChoosedRoom(index)} index={index} choosedRoom={choosedRoom}>
            <h1>{item.name}</h1>
            <Container>
              {
                item.capacity === 1 ? <Icons /> : 
                  item.capacity === 2 ? double.map ((value, index) => <Icons index={index}/>): 
                    triple.map((value, index) => <Icons index={index} />)
              }
            </Container>
            
          </Room>)}
      </Content>
    </>
  );
}

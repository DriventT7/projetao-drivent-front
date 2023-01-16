import { Icon } from '../../../components/Hotel/Rooms';

export default function Icons({
  index, 
  choosedRoom,
  single,
  double,
  triple
}) {
  const iconType = choosedRoom === index ? 'person' : 'person-outline';

  if(single === 0) {
    return (
      <>
        <Icon choosedRoom={choosedRoom} index={index}>
          <ion-icon name={`${iconType}`} ></ion-icon>
        </Icon>
      </>
    );
  }

  if (double === 0) {
    return (
      <>
        <ion-icon name='person-outline' ></ion-icon>
        <Icon choosedRoom={choosedRoom} index={index}>
          <ion-icon name={`${iconType}`} ></ion-icon>
        </Icon>
      </> 
    );
  }

  if(double === 1) {
    return(
      <>
        <Icon choosedRoom={choosedRoom} index={index}>
          <ion-icon name={`${iconType}`} ></ion-icon>
        </Icon>
        <ion-icon name='person' ></ion-icon>
      </> 
    );
  }

  if(double === 2) {
    return (
      <>
        <ion-icon name='person' ></ion-icon>
        <ion-icon name='person' ></ion-icon>
      </>
    );
  }

  if(triple === 0) {
    return (
      <>
        <ion-icon name='person-outline' ></ion-icon>
        <ion-icon name='person-outline' ></ion-icon>
        <Icon choosedRoom={choosedRoom} index={index}>
          <ion-icon name={`${iconType}`} ></ion-icon>
        </Icon>
      </>
    );
  }

  if(triple === 1) {
    return (
      <>
        <ion-icon name='person-outline' ></ion-icon>
        <Icon choosedRoom={choosedRoom} index={index}>
          <ion-icon name={`${iconType}`} ></ion-icon>
        </Icon>
        <ion-icon name='person' ></ion-icon>
      </>
    );
  }

  if(triple === 3) {
    return (
      <>
        <ion-icon name='person' ></ion-icon>
        <ion-icon name='person' ></ion-icon>
        <ion-icon name='person' ></ion-icon>
      </>
    );
  }

  return null;
}

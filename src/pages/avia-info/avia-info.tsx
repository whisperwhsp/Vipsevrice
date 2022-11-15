import React from 'react';
import { AviaFormContext } from '../../App';
import AviaTicket from '../../components/avia-ticket/avia-ticket';
import { IAviaTicket } from '../../models/IAviaTicket';

const AviaInfo = () => {
  const aviaContext = React.useContext(AviaFormContext);
  const [tickets, setTickets] = React.useState<IAviaTicket[]>();

  React.useEffect(() => {
    const mockTickets: IAviaTicket[] = [
    {
      id: 1,
      from: aviaContext.from,
      to: aviaContext.to,
      there: aviaContext.there,
      back: aviaContext.back ? aviaContext.back : '',
      possibleTimes: ['09:20 - 11:05', '10:20 - 12:05', '11:20 - 13:05'],
      firm: 'S7 Airlines',
      price: 4150,
      type: 'Невозвратный',
    }
  ]
    setTickets(mockTickets);
  }, [])
  return (
    <div>
      <div style={{ margin: '0 0 10rem 0'}}>
        <div>{aviaContext.from}</div>
        <div>{aviaContext.to}</div>
        <div>{aviaContext.there}</div>
        <div>{aviaContext.back}</div>
      </div>

      <div style={{ width: '920px', margin: '0 auto'}}>
        {tickets?.map((ticket) => (
          <AviaTicket {...ticket} />
        ))}
        
      </div>
    </div>
  )
}

export default AviaInfo;
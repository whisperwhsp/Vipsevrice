export interface IAviaTicket {
  id: number,
  from: string,
  to: string,
  there: string,
  back: string,
  possibleTimes: string[],
  firm: string,
  price: number,
  type: 'Невозвратный' | 'Возвратный'
}
import React from 'react';
import Button from '../../components/ui/button/button';
import Input from '../../components/ui/input/input';
import { IAviaForm } from '../../models/IAviaForm';
import styles from './avia.module.css';


const initialForm: IAviaForm = {
  from: '',
  to: '',
  there: '',
  back: '',
}

const Avia = () => {
  const [form, setForm] = React.useState<IAviaForm>(initialForm);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <Input
            className='vs-input-wrapper'
            type="text"
            name="from"
            value={form.from}
            onChange={handleChange}
            aria-label="Откуда"
            placeholder='Город вылета'
          />
          <Input
            className='vs-input-wrapper'
            type="text"
            name="to"
            value={form.to}
            onChange={handleChange}
            aria-label="Куда"
            placeholder='Город прилёта'
          />
          <Input
            className='vs-input-wrapper'
            type="date"
            name="there"
            value={form.there}
            onChange={handleChange}
            aria-label="Туда"
          />
          <Input
            className='vs-input-wrapper'
            type="date"
            name="back"
            value={form.back}
            onChange={handleChange}
            aria-label="Обратно"
          />

        </div>
        <div className={styles['button-group']}>
          <Button type="submit">Найти билеты</Button>
        </div>
      </form>
    </div>
  )
};

export default Avia;
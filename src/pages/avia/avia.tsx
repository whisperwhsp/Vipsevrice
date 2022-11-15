import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AviaFormContext, aviaFormData } from '../../App';
import Button from '../../components/ui/button/button';
import Input from '../../components/ui/input/input';
import { IAviaForm } from '../../models/IAviaForm';
import styles from './avia.module.css';

type AviaFormNames = 'from' | 'to' | 'there' | 'back';

const initialForm: IAviaForm = {
  from: '',
  to: '',
  there: '',
  back: '',
}

const Avia: React.FC = () => {
  const [form, setForm] = React.useState<IAviaForm>(initialForm);
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const aviaContext = React.useContext(AviaFormContext);
  const navigate = useNavigate();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    aviaContext[e.target.name as AviaFormNames] = e.target.value;
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    setForm(initialForm);
    navigate('/avia/info');
  }

  React.useEffect(() => {
    if (aviaContext.from && aviaContext.to && aviaContext.there) {
      setDisabled(false)
    } else {
      setDisabled(true);
    }
  }, [aviaContext.from, aviaContext.to, aviaContext.there])

  React.useEffect(() => {
    aviaContext.from = initialForm.from;
    aviaContext.to = initialForm.to;
    aviaContext.there = initialForm.there;
    aviaContext.back = initialForm.back;
  }, []);

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
            type="text"
            name="there"
            value={form.there}
            onChange={handleChange}
            aria-label="Туда"
            placeholder='дд.мм.гг'
          />
          <Input
            className='vs-input-wrapper'
            type="text"
            name="back"
            value={form.back}
            onChange={handleChange}
            aria-label="Обратно"
            placeholder='дд.мм.гг'
          />

        </div>
        <div className={styles['button-group']}>
          <Button type="submit" disabled={disabled}>Найти билеты</Button>
        </div>
      </form>
    </div>
  )
};
export default Avia;
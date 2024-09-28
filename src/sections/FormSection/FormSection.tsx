import { useState } from 'react';
import { Button } from './Button/Button';
import { CheckBox } from './CheckBox/CheckBox';
import styles from './FormSection.module.css';
import { Input } from './Input/Input';
import { errorsInterface, formInterface } from '../../types/types';
import { validateField } from '../../utils/utils';
const initialFormData: formInterface = {
  agreement: false,
  name: '',
  phone: '',
};

const initialErrors: errorsInterface = {
  name: [false, ''],
  phone: [false, ''],
};

export const FormSection = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [loading, setLoading] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<[boolean, boolean]>([false, false]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone } = validateField(formData.name, formData.phone);

    setErrors({ name, phone });

    if (!name[0] || !phone[1]) {
      setIsValid([!name[0], !phone[0]]);
    }

    if (!name[0] && !phone[0]) {
      console.log(name, phone);

      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log(data);
      console.log(formData);
      setFormData(initialFormData);
      setLoading(false);
    }
  };

  const inputFields = [
    { name: 'name', type: 'text', placeholder: 'Имя', error: errors.name, isValid: isValid[0] },
    {
      name: 'phone',
      type: 'tel',
      placeholder: 'Телефон',
      error: errors.phone,
      isValid: isValid[1],
    },
  ];

  return (
    <section id="sectionForm" className={styles.wrapper}>
      <strong className={styles.title}>Отправь форму</strong>
      <form onSubmit={onSubmit} className={styles.form_container}>
        {inputFields.map(({ name, type, placeholder, error, isValid }) => (
          <Input
            setIsValid={setIsValid}
            isValid={isValid}
            key={name}
            setErrors={setErrors}
            error={error}
            data={formData}
            type={type}
            setData={setFormData}
            name={name}
            placeholder={placeholder}
          />
        ))}
        <CheckBox
          onClick={() => setFormData((prev) => ({ ...prev, agreement: !formData.agreement }))}
          isChecked={formData.agreement}
          label={'Согласен, отказываюсь'}
        />
        <Button isLoading={loading} text={'Отправить'} />
      </form>
    </section>
  );
};

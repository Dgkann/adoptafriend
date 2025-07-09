// pages/adoption-form/[id].js
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/AdoptionForm.module.css';

export default function AdoptionForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', zipCode: '',
    housingType: '', ownRent: '', hasYard: '', children: '',
    otherPets: '', experience: '', workSchedule: '', reasonForAdoption: ''
  });

  const formSteps = {
    1: {
      title: 'Personal Information',
      fields: [
        { name: 'firstName', label: 'First Name', type: 'text' },
        { name: 'lastName', label: 'Last Name', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'phone', label: 'Phone Number', type: 'tel' },
        { name: 'address', label: 'Address', type: 'text' },
        { name: 'city', label: 'City', type: 'text' },
        { name: 'state', label: 'State', type: 'text' },
        { name: 'zipCode', label: 'ZIP Code', type: 'text' }
      ]
    },
    2: {
      title: 'Living Situation',
      fields: [
        { 
          name: 'housingType', 
          label: 'Housing Type', 
          type: 'select',
          options: ['house', 'apartment', 'condo', 'other']
        },
        { 
          name: 'ownRent', 
          label: 'Do you own or rent?', 
          type: 'select',
          options: ['own', 'rent']
        },
        { 
          name: 'hasYard', 
          label: 'Do you have a yard?', 
          type: 'select',
          options: ['yes', 'no']
        },
        { 
          name: 'children', 
          label: 'Do you have children?', 
          type: 'select',
          options: ['yes', 'no']
        }
      ]
    },
    3: {
      title: 'Pet Experience',
      fields: [
        { 
          name: 'otherPets', 
          label: 'Do you have other pets?', 
          type: 'select',
          options: ['yes', 'no']
        },
        { 
          name: 'experience', 
          label: 'Pet Care Experience', 
          type: 'select',
          options: ['first-time', 'some', 'experienced']
        },
        { 
          name: 'workSchedule', 
          label: 'Typical Work Schedule', 
          type: 'select',
          options: ['home', 'part-time', 'full-time']
        },
        { 
          name: 'reasonForAdoption', 
          label: 'Why do you want to adopt?', 
          type: 'textarea'
        }
      ]
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    router.push('/adoption-success');
  };

  const renderField = (field) => {
    const commonProps = {
      id: field.name,
      name: field.name,
      value: formData[field.name],
      onChange: handleInputChange,
      required: true
    };

    if (field.type === 'select') {
      return (
        <select {...commonProps}>
          <option value="">Select...</option>
          {field.options.map(opt => (
            <option key={opt} value={opt}>
              {opt.charAt(0).toUpperCase() + opt.slice(1)}
            </option>
          ))}
        </select>
      );
    }

    if (field.type === 'textarea') {
      return <textarea {...commonProps} rows={4} />;
    }

    return <input type={field.type} {...commonProps} />;
  };

  return (
    <div className={styles.container}>
      <div className={styles.formProgress}>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${(step / 3) * 100}%` }} />
        </div>
        <div className={styles.steps}>
          {Object.values(formSteps).map((s, i) => (
            <div key={i} className={`${styles.step} ${step >= i + 1 ? styles.active : ''}`}>
              {s.title}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.adoptionForm}>
        <div className={styles.formStep}>
          <h2>{formSteps[step].title}</h2>
          <div className={styles.formGrid}>
            {formSteps[step].fields.map((field) => (
              <div key={field.name} className={styles.formGroup}>
                <label htmlFor={field.name}>{field.label}*</label>
                {renderField(field)}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formNavigation}>
          {step > 1 && (
            <button type="button" onClick={() => setStep(s => s - 1)} className={styles.prevButton}>
              Previous
            </button>
          )}
          {step < 3 ? (
            <button type="button" onClick={() => setStep(s => s + 1)} className={styles.nextButton}>
              Next
            </button>
          ) : (
            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
import { Formik } from 'formik';
import { useState } from 'react';
import Modal from 'react-modal';

import towns from '../../assets/towns.json';

Modal.setAppElement('#root');

export default function AddDriver({ modalIsOpen, closeModal }) {
  const createDriver = (values, actions) => {
    console.log(values);
  };
  //   console.log(cars.filter((brand) => brand.models));
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Formik
        initialValues={{ name: '', phone: '', email: '', address: '' }}
        onSubmit={(values, actions) => createDriver(values, actions)}
      >
        {(props) => {
          return (
            <div>
              <div>
                <h3 className={'text-xl font-semibold'}>Add new driver</h3>
              </div>
              <hr className={'my-2'} />
              <div>
                <h3 className={'text-sm'}>Personal details</h3>
              </div>
              <div className={'p-2 w-full'}>
                <label className={'w-full'}>Full name</label>
                <input
                  name={'registrationNumber'}
                  type={'text'}
                  className={'w-full mt-1 bg-gray-100 p-3'}
                  onChange={props.handleChange('name')}
                  onBlur={props.handleBlur('name')}
                  value={props.values.name}
                />
              </div>
              <div className={'flex flex-row'}>
                <div className={'p-2 w-1/2'}>
                  <label className={'w-full'}>Phone</label>
                  <input
                    name={'phone'}
                    type={'text'}
                    className={'w-full mt-1 bg-gray-100 p-3'}
                    onChange={props.handleChange('phone')}
                    onBlur={props.handleBlur('phone')}
                    value={props.values.phone}
                  />
                </div>
                <div className={'p-2 w-1/2'}>
                  <label className={'w-full'}>Email</label>
                  <input
                    name={'email'}
                    type={'text'}
                    className={'w-full mt-1 bg-gray-100 p-3'}
                    onChange={props.handleChange('email')}
                    onBlur={props.handleBlur('email')}
                    value={props.values.email}
                  />
                </div>
              </div>
              <div className={'p-2 w-full'}>
                <label className={'w-full'}>Address</label>
                <textarea
                  name={'address'}
                  className={'w-full mt-1 bg-gray-100 p-3'}
                  onChange={props.handleChange('address')}
                  onBlur={props.handleBlur('address')}
                  value={props.values.address}
                />
              </div>
              <div>
                <h3 className={'text-sm'}>Station details</h3>
              </div>
              <div className={'flex flex-row items-end'}>
                <div className={'p-2 w-full'}>
                  <label className={'w-full'}>Assign station</label>
                  <input
                    name={'destination'}
                    type={'text'}
                    className={'w-full mt-1 bg-gray-100 p-3'}
                  />
                </div>
              </div>
              <div className={'p-2 w-auto'}>
                <button
                  onClick={() => props.handleSubmit()}
                  className={
                    ' mr-2 text-white bg-blue-800 shadow px-3 py-2 text-sm rounded'
                  }
                >
                  Save as driver
                </button>
                <button
                  onClick={closeModal}
                  className={
                    'text-blue-800 border border-blue-800 shadow px-3 py-2 text-sm rounded'
                  }
                >
                  Cancel
                </button>
              </div>
            </div>
          );
        }}
      </Formik>
    </Modal>
  );
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

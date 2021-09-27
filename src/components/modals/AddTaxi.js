import { useState } from 'react';
import Modal from 'react-modal';
import { regionCode, year } from '../../assets/numberPlates';

import towns from '../../assets/towns.json';
import cars from '../../assets/car-brands.json';
import { Formik } from 'formik';

Modal.setAppElement('#root');

export default function AddTaxi({ modalIsOpen, closeModal }) {
  console.log(cars.filter((brand) => brand.models));
  const createTaxi = (values, actions) => {
    console.log(values);
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Formik
        initialValues={{
          region: '',
          carNumber: '',
          year: '',
          vin: '',
          brand: '',
          model: '',
          ownerName: '',
          ownerContact: '',
          ownerAddress: '',
        }}
        onSubmit={(values, actions) => createTaxi(values, actions)}
      >
        {(props) => {
          return (
            <div>
              <div>
                <h3 className={'text-xl font-semibold'}>Add new taxi</h3>
              </div>
              <hr className={'my-2'} />
              <div>
                <h3 className={'text-sm'}>Place details</h3>
              </div>
              <div className={'flex flex-row'}>
                <div className={'p-2 w-full lg:w-1/2'}>
                  <label className={'w-full'}>Registration Number</label>
                  <div className={'flex flex-row'}>
                    <select
                      className={'bg-gray-100'}
                      name={'region'}
                      value={props.values.region}
                      onChange={props.handleChange('region')}
                    >
                      <option>Select</option>
                      {regionCode.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                    <input
                      name={'carNumber'}
                      type={'text'}
                      className={'w-full mt-1 bg-gray-100 p-3'}
                      onChange={props.handleChange('carNumber')}
                      value={props.values.carNumber}
                    />
                    <select
                      className={'bg-gray-100'}
                      name={'year'}
                      value={props.values.year}
                      onChange={props.handleChange('year')}
                    >
                      <option>Select</option>
                      {year.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={'p-2 w-full lg:w-1/2'}>
                  <label className={'w-full'}>VIN</label>
                  <input
                    name={'vin'}
                    type={'text'}
                    className={'w-full mt-1 bg-gray-100 p-3'}
                    onChange={props.handleChange('vin')}
                    value={props.values.vin}
                  />
                </div>
              </div>
              <div className={'flex flex-row'}>
                <div className={'p-2 w-1/2'}>
                  <label className={'w-full'}>Brand</label>
                  <select
                    name={'brand'}
                    className={'w-full mt-1 bg-gray-100 p-3'}
                    value={props.values.brand}
                    onChange={props.handleChange('brand')}
                  >
                    {cars.map((item, index) => (
                      <option key={index} value={item.brand}>
                        {item.brand}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={'p-2 w-1/2'}>
                  <label className={'w-full'}>Model</label>
                  <select
                    name={'model'}
                    className={'w-full mt-1 bg-gray-100 p-3'}
                    value={props.values.model}
                    onChange={props.handleChange('model')}
                  >
                    <option>Select one</option>
                    {Object.keys(towns).map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={'flex flex-row'}>
                <div className={'p-2 w-1/3'}>
                  <label className={'w-full'}>Owner name</label>
                  <input
                    name={'ownerName'}
                    type={'text'}
                    className={'w-full mt-1 bg-gray-100 p-3'}
                    onChange={props.handleChange('ownerName')}
                    value={props.values.ownerName}
                  />
                </div>
                <div className={'p-2 w-1/3'}>
                  <label className={'w-full'}>Owner contact</label>
                  <input
                    name={'ownerContact'}
                    type={'number'}
                    className={'w-full mt-1 bg-gray-100 p-3'}
                    onChange={props.handleChange('ownerContact')}
                    value={props.values.ownerContact}
                  />
                </div>
                <div className={'p-2 w-1/3'}>
                  <label className={'w-full'}>Owner Address</label>
                  <input
                    name={'ownerAddress'}
                    type={'text'}
                    className={'w-full mt-1 bg-gray-100 p-3'}
                    onChange={props.handleChange('ownerAddress')}
                    value={props.values.ownerAddress}
                  />
                </div>
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
                  type={'button'}
                  onClick={() => props.handleSubmit()}
                  className={
                    ' mr-2 text-white bg-blue-800 shadow px-3 py-2 text-sm rounded'
                  }
                >
                  Save as taxi
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

import { useState } from 'react';
import Modal from 'react-modal';
import { Formik } from 'formik';

import towns from '../../assets/towns.json';
import Autocomplete from 'react-autocomplete';

Modal.setAppElement('#root');

export default function AddStation({ stationModal, closeStationModal }) {
  const createStation = (values, actions) => {
    console.log(values);
  };
  return (
    <Modal
      isOpen={stationModal}
      onRequestClose={closeStationModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Formik
        initialValues={{
          name: '',
          vicinity: '',
          region: '',
          adminName: '',
          phone: '',
          email: '',
          fare: '',
        }}
        onSubmit={(values, actions) => createStation(values, actions)}
      >
        {(props) => {
          return (
            <div>
              <div>
                <h3 className={'text-xl font-semibold'}>
                  Add new taxi station
                </h3>
              </div>
              <hr className={'my-2'} />
              <div>
                <h3 className={'text-sm'}>Place details</h3>
              </div>
              <div className={'p-2 w-full'}>
                <label className={'w-full'}>Place Name</label>
                <input
                  name={'name'}
                  type={'text'}
                  className={'w-full mt-1 bg-gray-200 p-3'}
                  value={props.values.name}
                  onChange={props.handleChange('name')}
                />
                {/* <Autocomplete
                  className={'w-full mt-1 bg-gray-200 p-3'}
                  getItemValue={(item) => item.label}
                  items={[
                    { label: 'apple' },
                    { label: 'banana' },
                    { label: 'pear' },
                  ]}
                  renderItem={(item, isHighlighted) => (
                    <div
                      style={{
                        background: isHighlighted ? 'lightgray' : 'white',
                      }}
                    >
                      {item.label}
                    </div>
                  )}
                  value={props.values.name}
                  onChange={props.handleChange('name')}
                  onSelect={(val) => (value = val)}
                /> */}
              </div>
              <div className={'flex flex-row'}>
                <div className={'p-2 w-1/2'}>
                  <label className={'w-full'}>Primary Contact</label>
                  <input
                    name={'phone'}
                    type={'number'}
                    className={'w-full mt-1 bg-gray-200 p-3'}
                    value={props.values.phone}
                    onChange={props.handleChange('phone')}
                  />
                </div>
              </div>
              <div>
                <h3 className={'text-sm'}>Administration details</h3>
              </div>
              <div className={'flex flex-row'}>
                <div className={'p-2 w-1/3'}>
                  <label className={'w-full'}>Name</label>
                  <input
                    name={'adminName'}
                    type={'text'}
                    className={'w-full mt-1 bg-gray-200 p-3'}
                    value={props.values.adminName}
                    onChange={props.handleChange('adminName')}
                  />
                </div>
                <div className={'p-2 w-1/3'}>
                  <label className={'w-full'}>Phone</label>
                  <input
                    name={'adminPhone'}
                    type={'number'}
                    className={'w-full mt-1 bg-gray-200 p-3'}
                    value={props.values.adminPhone}
                    onChange={props.handleChange('adminPhone')}
                  />
                </div>
                <div className={'p-2 w-1/3'}>
                  <label className={'w-full'}>Email</label>
                  <input
                    name={'email'}
                    type={'adminEmail'}
                    className={'w-full mt-1 bg-gray-200 p-3'}
                    value={props.values.email}
                    onChange={props.handleChange('email')}
                  />
                </div>
              </div>
              <div>
                <h3 className={'text-sm'}>Add Destinations</h3>
              </div>
              <div className={'flex flex-row items-end'}>
                <div className={'p-2 w-1/2'}>
                  <label className={'w-full'}>Destination</label>
                  <input
                    name={'destination'}
                    type={'text'}
                    className={'w-full mt-1 bg-gray-200 p-3'}
                  />
                </div>
                <div className={'p-2 w-1/2'}>
                  <label className={'w-full'}>Fare</label>
                  <input
                    name={'fare'}
                    type={'number'}
                    className={'w-full mt-1 bg-gray-200 p-3'}
                  />
                </div>
                <div className={'p-2 w-auto'}>
                  <button
                    className={
                      'text-white bg-blue-800 shadow px-3 py-2 text-sm rounded'
                    }
                  >
                    Add
                  </button>
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
                  Save as station
                </button>
                <button
                  onClick={closeStationModal}
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

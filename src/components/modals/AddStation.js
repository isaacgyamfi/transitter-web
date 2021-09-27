import { useState } from 'react';
import Modal from 'react-modal';
import { Formik } from 'formik';

import towns from '../../assets/towns.json';

Modal.setAppElement('#root');

export default function AddStation({ modalIsOpen, closeModal }) {
  const createStation = (values, actions) => {
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
          name: '',
          vicinity: '',
          region: '',
          gps: '',
          longitude: '',
          latitude: '',
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
                <label className={'w-full'}>Name</label>
                <input
                  name={'name'}
                  type={'text'}
                  className={'w-full mt-1 bg-gray-100 p-3'}
                  value={props.values.name}
                  onChange={props.handleChange('name')}
                />
              </div>
              <div className={'flex flex-row'}>
                <div className={'p-2 w-1/2'}>
                  <label className={'w-full'}>Vicinity</label>
                  <select
                    name={'vicinity'}
                    className={'w-full mt-1 bg-gray-100 p-3'}
                    value={props.values.vicinity}
                    onChange={props.handleChange('vicinity')}
                  >
                    {Object.values(towns)
                      .flat(1)
                      .sort()
                      .map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                  </select>
                </div>
                <div className={'p-2 w-1/2'}>
                  <label className={'w-full'}>Region</label>
                  <select
                    name={'region'}
                    className={'w-full mt-1 bg-gray-100 p-3'}
                    value={props.values.region}
                    onChange={props.handleChange('region')}
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
                  <label className={'w-full'}>GPS Address</label>
                  <input
                    name={'gps'}
                    type={'text'}
                    className={'w-full mt-1 bg-gray-100 p-3'}
                    value={props.values.gps}
                    onChange={props.handleChange('gps')}
                  />
                </div>
                <div className={'p-2 w-1/3'}>
                  <label className={'w-full'}>longitude</label>
                  <input
                    name={'longitude'}
                    type={'number'}
                    className={'w-full mt-1 bg-gray-100 p-3'}
                    value={props.values.longitude}
                    onChange={props.handleChange('longitude')}
                  />
                </div>
                <div className={'p-2 w-1/3'}>
                  <label className={'w-full'}>latitude</label>
                  <input
                    name={'latitude'}
                    type={'number'}
                    className={'w-full mt-1 bg-gray-100 p-3'}
                    value={props.values.latitude}
                    onChange={props.handleChange('latitude')}
                  />
                </div>
              </div>
              <div>
                <h3 className={'text-sm'}>Station details</h3>
              </div>
              <div className={'flex flex-row items-end'}>
                <div className={'p-2 w-1/2'}>
                  <label className={'w-full'}>Destination</label>
                  <input
                    name={'destination'}
                    type={'text'}
                    className={'w-full mt-1 bg-gray-100 p-3'}
                  />
                </div>
                <div className={'p-2 w-1/2'}>
                  <label className={'w-full'}>Fare</label>
                  <input
                    name={'amount'}
                    type={'number'}
                    className={'w-full mt-1 bg-gray-100 p-3'}
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

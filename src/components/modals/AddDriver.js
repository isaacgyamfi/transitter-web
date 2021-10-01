import axios from 'axios';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import towns from '../../assets/towns.json';

Modal.setAppElement('#root');

export default function AddDriver({ modalIsOpen, closeModal }) {
  const [taxis, setTaxis] = useState([]);
  const [stations, setStations] = useState([]);
  const loadRegisteredTaxis = async () => {
    const response = await axios.get(
      `${
        process.env.NODE_ENV === 'development'
          ? process.env.REACT_APP_DEV_API_BASE_URL
          : null
      }/taxis`,
    );
    console.log(response.data.data);
    return setTaxis(response.data.data);
  };
  const loadRegisteredStations = async () => {
    const response = await axios.get(
      `${
        process.env.NODE_ENV === 'development'
          ? process.env.REACT_APP_DEV_API_BASE_URL
          : null
      }/stations`,
    );
    console.log(response.data.data);
    return setStations(response.data.data);
  };
  const createDriver = async (values, actions) => {
    console.log(values);
    const response = await axios.post(
      `${
        process.env.NODE_ENV === 'development'
          ? process.env.REACT_APP_DEV_API_BASE_URL
          : null
      }/drivers/add`,
      {
        name: values.name,
        phone: values.phone,
        email: values.email,
        address: values.address,
        taxi: values.registrationNumber,
        taxiLocal: values.station,
      },
    );
    closeModal();
    console.log(response);
  };
  //   console.log(cars.filter((brand) => brand.models));

  useEffect(() => {
    loadRegisteredStations();
    loadRegisteredTaxis();
  }, []);

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
                  name={'name'}
                  type={'text'}
                  className={'w-full mt-1 bg-gray-200 p-3'}
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
                    type={'tel'}
                    className={'w-full mt-1 bg-gray-200 p-3'}
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
                    className={'w-full mt-1 bg-gray-200 p-3'}
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
                  className={'w-full mt-1 bg-gray-200 p-3'}
                  onChange={props.handleChange('address')}
                  onBlur={props.handleBlur('address')}
                  value={props.values.address}
                />
              </div>
              <div>
                <h3 className={'text-sm'}>Other details</h3>
              </div>
              <div className={'flex flex-row items-center'}>
                <div className={'p-2 w-full'}>
                  <label className={'w-full'}>Assign station</label>
                  <select
                    name={'type'}
                    className={'w-full mt-1 bg-gray-200 p-3'}
                    value={props.values.station}
                    onChange={props.handleChange('station')}
                  >
                    <option>Select one</option>
                    {stations
                      ? stations.map((item, index) => (
                          <option key={index} value={item.address.name}>
                            {item.address.name}
                            {', '}
                            {item.address.vicinity}
                          </option>
                        ))
                      : null}
                  </select>
                </div>
                <div className={'p-2 w-full'}>
                  <label className={'w-full'}>Link to taxi</label>
                  <select
                    name={'type'}
                    className={'w-full mt-1 bg-gray-200 p-3'}
                    value={props.values.registrationNumber}
                    onChange={props.handleChange('registrationNumber')}
                  >
                    <option>Select one</option>
                    {taxis
                      ? taxis.map((item, index) => (
                          <option key={index} value={item.registrationNumber}>
                            {item.registrationNumber}
                          </option>
                        ))
                      : null}
                  </select>
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

import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Formik } from 'formik';
import axios from 'axios';

Modal.setAppElement('#root');

export default function AssignDriver({ modalIsOpen, closeModal, taxi }) {
  const [drivers, setDrivers] = useState([]);
  const loadRegisteredDrivers = async () => {
    const response = await axios.get(
      `${
        process.env.NODE_ENV === 'development'
          ? process.env.REACT_APP_DEV_API_BASE_URL
          : null
      }/drivers`,
    );
    return setDrivers(response.data.data);
  };
  const assignDriverToTaxi = async (values, actions) => {
    try {
      const response = await axios.post(
        `${
          process.env.NODE_ENV === 'development'
            ? process.env.REACT_APP_DEV_API_BASE_URL
            : null
        }/taxis/assign-driver`,
        {
          registrationNumber: values.registrationNumber,
          driver: values.driver,
        },
      );
      closeModal();
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadRegisteredDrivers();
  }, []);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Formik
        initialValues={{
          driver: '',
          registrationNumber: taxi && taxi.registrationNumber,
        }}
        onSubmit={(values, actions) => assignDriverToTaxi(values, actions)}
      >
        {(props) => {
          return (
            <div>
              <div>
                <h3 className={'text-xl font-semibold'}>
                  Add a driver to taxi
                </h3>
              </div>
              <hr className={'my-2'} />
              <div>
                <h3 className={'text-sm'}>Driver</h3>
              </div>
              <div className={'flex flex-row items-end'}>
                <div className={'p-2 w-full'}>
                  <label className={'w-full'}>Select Driver</label>
                  <select
                    name={'driver'}
                    className={'w-full mt-1 bg-gray-200 p-3'}
                    value={props.values.driver}
                    onChange={props.handleChange('driver')}
                  >
                    <option disabled>Select one</option>
                    {drivers
                      ? drivers.map((item, index) => (
                          <option key={index} value={item._id}>
                            {item.name}
                            {', '}
                            {item.phone}
                          </option>
                        ))
                      : null}
                  </select>
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
                  Assign
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

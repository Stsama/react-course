import React, {useState} from 'react'

const ArrayOfObjects = () => {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    const addCar = () => {
        const newCar = {year: carYear, make: carMake, model: carModel};
        setCars(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');


    }

    const removeCar = (index) => {
        setCars(c=> c.filter((_, i) => i !== index));

    }
    const handleYearChange = (e) => {
        setCarYear(e.target.value);
    }
    const handleMakeChange = (e) => {
        setCarMake(e.target.value);
    }
    const handleModelChange = (e) => {
        setCarModel(e.target.value);
    }






  return (
    <div>
        <h2>List of car objects</h2>
        <ul>
            {cars.map((car, index) => 
                <li key={index} onClick={() => removeCar(index)}>{car.year} {car.make} {car.model} </li>
            )}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange} placeholder='Enter car year' /> <br />
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter car Make' /> <br />
        <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter car Model' />
        <button onClick={addCar}>Add Car</button>  

    </div>
  )
}

export default ArrayOfObjects
"use client";
import { useRef, useState } from 'react';
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { countries } from 'countries-list';
import toast from 'react-hot-toast';
import database from '../../utils/Firebase';
import { ref, set, push } from 'firebase/database'

const countryNames = Object.values(countries).map((country) => country.name);

export default function Home() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const genderRef = useRef(null);
  const contactRef = useRef(null);
  const emailRef = useRef(null);
  const residenceAreaRef = useRef(null);
  const pledgeNightFastingRef = useRef(null);
  const pledgeMealFastingRef = useRef(null);
  const pledgeDrivingFastingRef = useRef(null);
  const pledgeSleepFastingRef = useRef(null);
  const pledgeWakeupFastingRef = useRef(null);
  const pledgeAddDriveRef = useRef(null);
  const ScreenTimeRef = useRef(null);
  const TopAppsRef = useRef(null);

  const [selectedCountry, setSelectedCountry] = useState('');
  const [pledgeList, setPledgeList] = useState([]);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const handlePledgeChange = (pledgeName) => {
    setPledgeList((prevPledges) => {
      if (prevPledges.includes(pledgeName)) {
        return prevPledges.filter((pledge) => pledge !== pledgeName);
      } else {
        return [...prevPledges, pledgeName];
      }
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      gender: genderRef.current.value,
      contact: contactRef.current.value,
      email: emailRef.current.value,
      residenceArea: residenceAreaRef.current.value,
      country: selectedCountry,
      pledges: pledgeList,
      screenTime: ScreenTimeRef.current.value,
      topApps: TopAppsRef.current.value,
    };
    try {
      const dataRef = ref(database, '/entries')
      const newPostRef = push(dataRef);
      await set(newPostRef,{
        data: data,
      });

      toast.success('Form submitted successfully!')
    } catch (error) { 
      console.log(error)
      toast.error('Form submission unsuccessful!')
    }
  };

  return (
    <div className="min-h-screen text-[#664228]">
      <div className="py-12">
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <div className=" overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-xl font-semibold leading-tight mb-8 text-center ">Anuvrat Digital Detox Pledge Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    inputRef={nameRef}
                    fullWidth
                    required
                    className='text-brown'
                  />
                  <TextField
                    label="Age"
                    variant="outlined"
                    size="small"
                    inputRef={ageRef}
                    type="number"
                    fullWidth
                    required
                  >
                    <MenuItem value="12-18">12-18 yearls old</MenuItem>
                    <MenuItem value="18-24">18-24 yearls old</MenuItem>
                    <MenuItem value="24-32">24-32 yearls old</MenuItem>
                    <MenuItem value="32-38">32-38 yearls old</MenuItem>
                    <MenuItem value="38-44">38-34 yearls old</MenuItem>
                    <MenuItem value="44+">44+ yearls old</MenuItem>
                  </TextField>
                  <TextField
                    select
                    label="Gender"
                    variant="outlined"
                    size="small"
                    inputRef={genderRef}
                    fullWidth
                    required
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </TextField>
                  <TextField
                    label="Contact No."
                    variant="outlined"
                    size="small"
                    inputRef={contactRef}
                    fullWidth
                    InputProps={{
                      startAdornment: <InputAdornment position="start">+</InputAdornment>,
                    }}
                    helperText="Include country code"
                    required
                  />
                  <TextField
                    label="Email ID"
                    variant="outlined"
                    size="small"
                    inputRef={emailRef}
                    type="email"
                    fullWidth
                    required
                  />
                  <TextField
                    label="Residence Area"
                    variant="outlined"
                    size="small"
                    inputRef={residenceAreaRef}
                    fullWidth
                    required
                  />
                  <TextField
                  select
                    label="Country"
                    id='country'
                    variant="outlined"
                    size="small"
                    value={selectedCountry}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    fullWidth
                    required
                  >
                    {countryNames.map((country, index) => (
                      <MenuItem key={index} value={country}>
                        {country}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className="my-8">
                  <label className="block text-lg font-medium mb-4">I Pledge to</label>
                  <div className="space-y-2 mb-4">
                    <FormControlLabel
                      control={<Checkbox inputRef={pledgeNightFastingRef} color="primary" onChange={() => handlePledgeChange('Digital Navkarsi')} />}
                      label="Practice Digital Fasting between 11PM-7AM"
                    />
                    <FormControlLabel
                      control={<Checkbox inputRef={pledgeMealFastingRef} color="primary" onChange={() => handlePledgeChange('Digital Fasting During Meals')} />}
                      label="Practice Digital Fasting during meals"
                    />
                    <FormControlLabel
                      control={<Checkbox inputRef={pledgeDrivingFastingRef} color="primary" onChange={() => handlePledgeChange('Digital Fasting while driving')} />}
                      label="Practice Digital Fasting while Driving"
                    />
                    <FormControlLabel
                      control={<Checkbox inputRef={pledgeSleepFastingRef} color="primary" onChange={() => handlePledgeChange('sleepFasting')} />}
                      label="Practice Digital Fasting 30 mins prior to sleep"
                    />
                    <FormControlLabel
                      control={<Checkbox inputRef={pledgeWakeupFastingRef} color="primary" onChange={() => handlePledgeChange('wakeupFasting')} />}
                      label="Practice Digital Fasting till 30 mins post wakeup"
                    />
                    <FormControlLabel
                      control={<Checkbox inputRef={pledgeAddDriveRef} color="primary" onChange={() => handlePledgeChange('addDrive')} />}
                      label="Add 3 people to ADD Drive"
                    />
                  </div>
                  <div className='grid grid-cols-1 gap-4 mb-8'>
                    <TextField
                      label="What's you're screen time?"
                      variant="outlined"
                      size="small"
                      inputRef={ScreenTimeRef}
                      type="number"
                      helperText="In Hours"
                      fullWidth
                      required
                    />
                    <TextField
                      label="What are the 5 most apps you use?"
                      variant="outlined"
                      size="small"
                      inputRef={TopAppsRef}
                      type="text"
                      fullWidth
                      helperText="use comma"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#987554] text-white p-2 rounded-md hover:bg-[#664229]"
                  style={{ width: '100%' }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

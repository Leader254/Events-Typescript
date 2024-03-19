import React, { FormEvent, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

export interface Props {
  name: string;
  age: number;
  email: string;
  // getName: (name: string) => string;
}

interface City {
  name: string;
  code: string;
}
interface FormData {
  firstname: string;
  lastname: string;
  address: string;
  city: string;
  zip: string;
}

export const Person: React.FC<Props> = () => {
  const [country, setCountry] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    zip: "",
  });

  const cities: City[] = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCountry(event.target.value);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Button Clicked!!");
  };

  // Mouse events can either be used with the generic type<T> or without
  // const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault();
  //     console.log("Button Clicked!!");
  //   }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
  };

  return (
    <>
      <div className="card flex justify-content-center gap-3">
        <span className="p-float-label">
          <InputText id="username" value={country} onChange={handleChange} />
          <label htmlFor="country">Country</label>
        </span>
        <Button label="Submit" onClick={handleClick} />
        {country}
      </div>
      <InputTextarea
        value={value}
        onChange={handleTextChange}
        rows={5}
        cols={40}
      />

      <form onSubmit={handleSubmit}>
        <div className="htmlFormgrid grid">
          <div className="field col-12 md:col-6">
            <label htmlFor="firstname6">Firstname</label>
            <InputText
              id="firstname"
              type="text"
              onChange={handleInputChange}
              value={formData.firstname}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>
          <div className="field col-12 md:col-6">
            <label htmlFor="lastname6">Lastname</label>
            <InputText
              id="lastname6"
              type="text"
              onChange={handleInputChange}
              value={formData.lastname}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>
          <div className="field col-12">
            <label htmlFor="address">Address</label>
            <InputTextarea
              id="address"
              rows={4}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>
          <div className="field col-12 md:col-6">
            <label htmlFor="city">City</label>
            <InputText
              id="city"
              type="text"
              onChange={handleInputChange}
              value={formData.city} 
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>
          <div className="field col-12 md:col-3">
            <Dropdown
              value={selectedCity}
              onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              showClear
              placeholder="Select a City"
              className="w-full text-base border-solid surface-border mt-4"
            />
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="zip">Zip</label>
            <InputText
              id="zip"
              type="text"
              onChange={handleInputChange}
              value={formData.zip}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>
        </div>
        <Button type="submit" label="Submit" />
      </form>
    </>
  );
};

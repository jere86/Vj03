interface DataData {
  email: string;
  name: string;
  country: string;
  address: string;
  paymentMethod: string;
  acceptTerms: boolean;
}

export const countries = [
  "Hrvatska",
  "Srbija",
  "Bosna i Hercegovina",
  "Crna Gora",
  "Slovenija",
  "Makedonija",
  "Slovačka",
  "Češka",
  "Mađarska",
  "Poljska",
  "Njemačka",
  "Austrija",
  "Švicarska",
  "Italija",
  "Francuska",
  "Španjolska",
  "Portugal",
  "Grčka",
  "Turska",
  "Norveška",
  "Švedska",
  "Danska",
  "Finska",
  "Island",
  "Irska",
  "Ujedinjeno Kraljevstvo",
  "Nizozemska",
  "Belgija",
  "Luksemburg",
];

export const isValidEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  setData: React.Dispatch<React.SetStateAction<DataData>>
) => {
  const { name, value } = e.target;

  setData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

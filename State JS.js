const nationalities = [
    "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Argentine", "Armenian", "Australian", "Austrian", "Azerbaijani",
    "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian", "Brazilian", "British", "Bruneian", "Bulgarian", "Burkinabé", "Burmese", "Burundian",
    "Cambodian", "Cameroonian", "Canadian", "Cape Verdean", "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comoran", "Congolese", "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech",
    "Danish", "Djiboutian", "Dominican", "Dutch",
    "East Timorese", "Ecuadorean", "Egyptian", "Emirian", "Equatorial Guinean", "Eritrean", "Estonian", "Ethiopian",
    "Fijian", "Filipino", "Finnish", "French",
    "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek", "Grenadian", "Guatemalan", "Guinea-Bissauan", "Guinean", "Guyanese",
    "Haitian", "Honduran", "Hungarian",
    "Icelandic", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Ivorian",
    "Jamaican", "Japanese", "Jordanian",
    "Kazakh", "Kenyan", "Kiribati", "Korean", "Kuwaiti", "Kyrgyz",
    "Laotian", "Latvian", "Lebanese", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourger",
    "Macedonian", "Malagasy", "Malawian", "Malaysian", "Maldivian", "Malian", "Maltese", "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monacan", "Mongolian", "Moroccan", "Mozambican",
    "Namibian", "Nauruan", "Nepalese", "New Zealander", "Nicaraguan", "Nigerian", "Nigerien", "North Korean", "Norwegian",
    "Omani",
    "Pakistani", "Palauan", "Palestinian", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Polish", "Portuguese",
    "Qatari",
    "Romanian", "Russian", "Rwandan",
    "Saint Lucian", "Salvadoran", "Samoan", "San Marinese", "Sao Tomean", "Saudi", "Scottish", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean", "Slovak", "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean", "Spanish", "Sri Lankan", "Sudanese", "Surinamer", "Swazi", "Swedish", "Swiss", "Syrian",
    "Taiwanese", "Tajik", "Tanzanian", "Thai", "Togolese", "Tongan", "Trinidadian/Tobagonian", "Tunisian", "Turkish", "Tuvaluan",
    "Ugandan", "Ukrainian", "Uruguayan", "Uzbek",
    "Venezuelan", "Vietnamese",
    "Welsh",
    "Yemenite",
    "Zambian", "Zimbabwean"
];

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
];

function populateDataList(listId, dataArray) {
    const dataList = document.getElementById(listId);
    dataArray.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        dataList.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateDataList('nationality-list', nationalities);
    populateDataList('country-list', countries);
});

const personalInfoState = {
    studentType: "", religion: "", civilStatus: "",
    firstName: "", middleName: "", lastName: "", suffix: "",
    contactNumber: "", birthDate: "", sex: "",
    email: "", nationality: "", country: "",
    completeAddress: "", bloodType: "",
    spouseName: "", spouseOccupation: ""
};

const form = document.getElementById('personalInfoForm');
const contactInput = document.getElementById('contactNumber');

contactInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    if (e.target.value.length > 11) {
        e.target.value = e.target.value.slice(0, 11);
    }
});

['input', 'change'].forEach(eventType => {
    form.addEventListener(eventType, (e) => {
        const { name, value } = e.target;
        if (name in personalInfoState) {
            personalInfoState[name] = value;
            if (value.trim() !== "") {
                e.target.classList.remove('input-error');
                if (name === 'contactNumber') {
                     e.target.nextElementSibling.style.display = 'none';
                }
            }
            console.log("State Updated:", personalInfoState);
        }
    });
});

const modal = document.getElementById('successModal');
const closeX = document.getElementById('closeModalX');
const closeBtn = document.getElementById('closeModalBtn');

function showModal() {
    modal.classList.add('active');
}

function hideModal() {
    modal.classList.remove('active');
}

if (closeX) closeX.addEventListener('click', hideModal);
if (closeBtn) closeBtn.addEventListener('click', hideModal);
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) hideModal();
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    const requiredInputs = form.querySelectorAll('[required]');

    requiredInputs.forEach(input => {
        const key = input.name;
        if (!personalInfoState[key] || personalInfoState[key].trim() === "") {
            input.classList.add('input-error');
            isValid = false;
        }
    });

    const contactVal = personalInfoState.contactNumber;
    const contactErrorMsg = contactInput.nextElementSibling;
    
    if (contactVal.length !== 11 || !contactVal.startsWith('0')) {
        contactInput.classList.add('input-error');
        contactErrorMsg.style.display = 'block';
        isValid = false;
    } else {
        contactErrorMsg.style.display = 'none';
    }

    if (isValid) {
        localStorage.setItem('personalInfoData', JSON.stringify(personalInfoState));
        
        showModal();
        
    } else {
        if (isValid === false && (contactVal.length === 11 && contactVal.startsWith('0'))) {
             alert("Please fill in all required fields marked with *");
        }
    }
});
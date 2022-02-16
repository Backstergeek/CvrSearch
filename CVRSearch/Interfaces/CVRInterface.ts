import { IInputs } from "../generated/ManifestTypes";

export interface IProductionunit {
    pno: number;
    main: boolean;
    name: string;
    address: string;
    zipcode: string;
    city: string;
    cityname: string;
    protected: boolean;
    phone?: any;
    email?: any;
    fax?: any;
    startdate: string;
    enddate?: any;
    employees: number;
    addressco: string;
    industrycode: number;
    industrydesc: string;
}

export interface ICVRRootObject {
    vat: number;
    name: string;
    address: string;
    zipcode: string;
    city: string;
    cityname: string;
    protected: boolean;
    phone?: any;
    email?: any;
    fax?: any;
    startdate: string;
    enddate?: any;
    employees: number;
    addressco: string;
    industrycode: number;
    industrydesc: string;
    companycode: number;
    companydesc: string;
    creditstartdate?: any;
    creditbankrupt: boolean;
    creditstatus?: any;
    owners?: any;
    productionunits: IProductionunit[];
    t: number;
    version: number;
}

export interface ICvrProps {
    context: ComponentFramework.Context<IInputs>,
    countryCode: string,
    outPutFunction?: (name: string, cvr: string, address: string, city: string, zipcode: string, startDate: string, email: string, phone: string) => void;
}


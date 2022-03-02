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


/*The model for the final call*/


export interface Periode {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface Vaerdier {
    periode: Periode;
    sidstOpdateret: Date;
    vaerdi: string;
}

export interface Attributter {
    sekvensnr: number;
    type: string;
    vaerdier: Vaerdier[];
    vaerditype: string;
}

export interface Periode2 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface Kommune {
    kommuneKode: number;
    kommuneNavn: string;
    periode: Periode2;
    sidstOpdateret: Date;
}

export interface Periode3 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface Beliggenhedsadresse {
    adresseId: string;
    bogstavFra?: any;
    bogstavTil?: any;
    bynavn: string;
    conavn: string;
    etage?: any;
    fritekst?: any;
    husnummerFra: number;
    husnummerTil?: any;
    kommune: Kommune;
    landekode: string;
    periode: Periode3;
    postboks?: any;
    postdistrikt: string;
    postnummer: number;
    sidedoer?: any;
    sidstOpdateret: Date;
    sidstValideret: Date;
    vejkode: number;
    vejnavn: string;
}

export interface Periode4 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface Kommune2 {
    kommuneKode: number;
    kommuneNavn: string;
    periode: Periode4;
    sidstOpdateret: Date;
}

export interface Periode5 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface Beliggenhedsadresse2 {
    adresseId: string;
    bogstavFra?: any;
    bogstavTil?: any;
    bynavn: string;
    conavn: string;
    etage?: any;
    fritekst?: any;
    husnummerFra?: number;
    husnummerTil?: any;
    kommune: Kommune2;
    landekode: string;
    periode: Periode5;
    postboks?: any;
    postdistrikt: string;
    postnummer?: number;
    sidedoer?: any;
    sidstOpdateret: Date;
    sidstValideret?: Date;
    vejkode?: number;
    vejnavn: string;
}

export interface Periode6 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface Navne {
    navn: string;
    periode: Periode6;
    sidstOpdateret?: Date;
}

export interface Deltager {
    adresseHemmelig?: boolean;
    adresseHemmeligUndtagelse?: boolean;
    adresseOpdateringOphoert?: boolean;
    beliggenhedsadresse: Beliggenhedsadresse2[];
    enhedsNummer: any;
    enhedstype: string;
    forretningsnoegle?: number;
    navne: Navne[];
    organisationstype?: any;
    postadresse: any[];
    sidstIndlaest: Date;
    sidstOpdateret: Date;
}

export interface Periode7 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface Vaerdier2 {
    periode: Periode7;
    sidstOpdateret: Date;
    vaerdi: string;
}

export interface Attributter2 {
    sekvensnr: number;
    type: string;
    vaerdier: Vaerdier2[];
    vaerditype: string;
}

export interface Periode8 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface Vaerdier3 {
    periode: Periode8;
    sidstOpdateret: Date;
    vaerdi: string;
}

export interface Attributter3 {
    sekvensnr: number;
    type: string;
    vaerdier: Vaerdier3[];
    vaerditype: string;
}

export interface MedlemsData {
    attributter: Attributter3[];
}

export interface Periode9 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface OrganisationsNavn {
    navn: string;
    periode: Periode9;
    sidstOpdateret: Date;
}

export interface Organisationer {
    attributter: Attributter2[];
    enhedsNummerOrganisation: any;
    hovedtype: string;
    medlemsData: MedlemsData[];
    organisationsNavn: OrganisationsNavn[];
}

export interface DeltagerRelation {
    deltager: Deltager;
    kontorsteder: any[];
    organisationer: Organisationer[];
}

export interface Periode10 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface Hovedbranche {
    branchekode: string;
    branchetekst: string;
    periode: Periode10;
    sidstOpdateret: Date;
}

export interface Periode11 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface Livsforloeb {
    periode: Periode11;
    sidstOpdateret: Date;
}

export interface Periode12 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface Navne2 {
    navn: string;
    periode: Periode12;
    sidstOpdateret: Date;
}

export interface Periode13 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface Penheder {
    pNummer: number;
    periode: Periode13;
    sidstOpdateret: Date;
}

export interface Periode14 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface Kommune3 {
    kommuneKode: number;
    kommuneNavn: string;
    periode: Periode14;
    sidstOpdateret: Date;
}

export interface Periode15 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface NyesteBeliggenhedsadresse {
    adresseId: string;
    bogstavFra?: any;
    bogstavTil?: any;
    bynavn: string;
    conavn: string;
    etage?: any;
    fritekst?: any;
    husnummerFra: number;
    husnummerTil?: any;
    kommune: Kommune3;
    landekode: string;
    periode: Periode15;
    postboks?: any;
    postdistrikt: string;
    postnummer: number;
    sidedoer?: any;
    sidstOpdateret: Date;
    sidstValideret: Date;
    vejkode: number;
    vejnavn: string;
}

export interface Periode16 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface NyesteHovedbranche {
    branchekode: string;
    branchetekst: string;
    periode: Periode16;
    sidstOpdateret: Date;
}

export interface Periode17 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface NyesteNavn {
    navn: string;
    periode: Periode17;
    sidstOpdateret: Date;
}

export interface Periode18 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface NyesteVirksomhedsform {
    ansvarligDataleverandoer: string;
    kortBeskrivelse: string;
    langBeskrivelse: string;
    periode: Periode18;
    sidstOpdateret: Date;
    virksomhedsformkode: number;
}

export interface VirksomhedMetadata {
    antalPenheder: number;
    nyesteAarsbeskaeftigelse?: any;
    nyesteBeliggenhedsadresse: NyesteBeliggenhedsadresse;
    nyesteBibranche1?: any;
    nyesteBibranche2?: any;
    nyesteBibranche3?: any;
    nyesteBinavne: any[];
    nyesteErstMaanedsbeskaeftigelse?: any;
    nyesteHovedbranche: NyesteHovedbranche;
    nyesteKontaktoplysninger: any[];
    nyesteKvartalsbeskaeftigelse?: any;
    nyesteMaanedsbeskaeftigelse?: any;
    nyesteNavn: NyesteNavn;
    nyesteStatus?: any;
    nyesteVirksomhedsform: NyesteVirksomhedsform;
    sammensatStatus: string;
    stiftelsesDato: string;
    virkningsDato: string;
}

export interface Periode19 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface Virksomhedsform {
    ansvarligDataleverandoer: string;
    kortBeskrivelse: string;
    langBeskrivelse: string;
    periode: Periode19;
    sidstOpdateret: Date;
    virksomhedsformkode: number;
}

export interface Periode20 {
    gyldigFra: string;
    gyldigTil?: any;
}

export interface Virksomhedsstatu {
    periode: Periode20;
    sidstOpdateret: Date;
    status: string;
}

export interface CVRRootObject {
    aarsbeskaeftigelse: any[];
    attributter: Attributter[];
    beliggenhedsadresse: Beliggenhedsadresse[];
    bibranche1: any[];
    bibranche2: any[];
    bibranche3: any[];
    binavne: any[];
    brancheAnsvarskode?: any;
    cvrNummer: number;
    dataAdgang: number;
    deltagerRelation: DeltagerRelation[];
    elektroniskPost: any[];
    enhedsNummer: number;
    enhedstype: string;
    erstMaanedsbeskaeftigelse: any[];
    fejlBeskrivelse?: any;
    fejlRegistreret: boolean;
    fejlVedIndlaesning: boolean;
    fusioner: any[];
    hjemmeside: any[];
    hovedbranche: Hovedbranche[];
    kvartalsbeskaeftigelse: any[];
    livsforloeb: Livsforloeb[];
    maanedsbeskaeftigelse: any[];
    naermesteFremtidigeDato?: any;
    navne: Navne2[];
    obligatoriskEmail: any[];
    penheder: Penheder[];
    postadresse: any[];
    regNummer: any[];
    reklamebeskyttet: boolean;
    samtId: number;
    sekundaertTelefaxNummer: any[];
    sekundaertTelefonNummer: any[];
    sidstIndlaest: Date;
    sidstOpdateret: Date;
    spaltninger: any[];
    status: any[];
    telefaxNummer: any[];
    telefonNummer: any[];
    virkningsAktoer: string;
    virksomhedMetadata: VirksomhedMetadata;
    virksomhedsform: Virksomhedsform[];
    virksomhedsstatus: Virksomhedsstatu[];
}


/*---------------------------------------------*/







import { Stack, TextField, IStackTokens, PrimaryButton} from '@fluentui/react';
import * as React from 'react';
import { ICvrProps, ICVRRootObject } from "../Interfaces/CVRInterface";



export const CvrSearch: React.FC<ICvrProps> = (props) => {

    const [cvrObj, setCvrObj] = React.useState<ICVRRootObject>();
    const [input, setinput] = React.useState<string>("");
    const [res, setRes] = React.useState<string>("");
    const [show, setShow] = React.useState<boolean>(false);

    function getCvrData(): void {
        setRes("Searching...")
        let searchString: string = input;
        let headers = new Headers({
            "user-Agent" : "Donkey Power - CRM Help when creating account - Andreas Helbo Berg - ahb@donkeypower.dk"
        });

        let queryString = `//cvrapi.dk/api?search=${searchString}&country=${props.countryCode}`;

        fetch(queryString, {headers}).then(res => res.json()).then((r: ICVRRootObject) => {
            setRes(`Name: ${r?.name}\n CVR: ${r?.vat}\n Address: ${r?.address}`)
            setCvrObj(r)
            setShow(true);
        })
    }

    function setData(): void {
        if (props.outPutFunction)
        props.outPutFunction(
            cvrObj!.name,
            cvrObj!.vat.toString(),
            cvrObj!.address,
            cvrObj!.city,
            cvrObj!.zipcode,
            cvrObj!.startdate,
            cvrObj!.email,
            cvrObj!.phone,
        )
    }

    


    const stackTokens: IStackTokens = {childrenGap: 5};


    return (
        <Stack tokens={stackTokens}>
            <Stack horizontal>
                <Stack.Item align='start'> 
                    <TextField 
                        onChange={(e, val) => {setinput(val!)}} 
                        placeholder='Write CVR no or company name'
                    />
                </Stack.Item>
                <Stack.Item align='start'>
                    <PrimaryButton 
                        text='Search' 
                        onClick={getCvrData}
                    />
                </Stack.Item>   
            </Stack>
            <Stack horizontal style={{display: (show ? 'block': 'none')}}>
                <Stack.Item align='start'>
                    <TextField multiline rows={3} value={res}/>
                </Stack.Item>
                <Stack.Item align='start'>
                    <PrimaryButton onClick={setData} text='Set data'></PrimaryButton>
                </Stack.Item>      
            </Stack>
        </Stack>
    )
}
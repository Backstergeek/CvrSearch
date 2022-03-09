import { Stack, StackItem } from '@fluentui/react/lib/Stack';
import { TextField } from '@fluentui/react/lib/TextField';
import * as React from 'react';
import { CVRRootObject, ICvrProps } from "../Interfaces/CVRInterface";



export const CvrSearch: React.FC<ICvrProps> = (props) => {

    const [cvrFinalObj, setCvrObj] = React.useState<CVRRootObject[]>();
    const [input, setinput] = React.useState<string>("");
    const [show, setShow] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [loadingTxt, setLoadingTxt] = React.useState<string>("");

  
    function getCvrData(): void {

        setLoading(true);
        setLoadingTxt(props.context.resources.getString("seachText"))
        let searchString: string = input;
        let isName: boolean = false;

        if (isNaN(Number(searchString))) {
          isName = true
        } 

        let queryString = `https://prod-197.westeurope.logic.azure.com/workflows/e442ab56ea5f4ef9b9735801710e33bc/triggers/manual/paths/invoke/cvr_number/${searchString}/isText/${isName}?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=twqBcn8feKqds9ixm9yv4m0ZXJ0ZwvlCxtUhBMnx86c`
        
        var requestOptions: RequestInit = {
            method: 'GET',
        }



        fetch(queryString,requestOptions).then(res => res.json()).then((r: CVRRootObject[]) => {

          setLoading(false);
          setCvrObj(r)
          setShow(true);
          
        }).catch((e) => {
          setLoadingTxt(props.context.resources.getString("NoResult"))
        })
    }

    return (
        <Stack>
            <Stack horizontal>
              <StackItem grow={4}>
                <TextField 
                    onChange={(e, val) => {setinput(val!)}} 
                    placeholder={props.context.resources.getString("TextFieldPlaceHolder")}
                    onBlur={() => {setTimeout(() => {setShow(false)},100)}}
                    onFocus={() => {setTimeout(() => {setShow(true)},100)}}
                    onKeyDown={(event) => {if(event.key === "Enter") {
                      getCvrData()
                    }}}
                />
              </StackItem>
            </Stack>
            {loading ? <Stack><StackItem>{loadingTxt}</StackItem></Stack> :
            <Stack style={{display: (show? 'block': 'none')}}>
              <ul id="CVRlist">
                  {
                    cvrFinalObj?.map(i => (
                      <li key={i.cvrNummer} 
                      onClick={() => {
                        if(props.outPutFunction)
                        props.outPutFunction(
                          i.virksomhedMetadata.nyesteNavn.navn,
                          i.cvrNummer.toString(),
                          `${i.virksomhedMetadata.nyesteBeliggenhedsadresse.vejnavn} ${i.virksomhedMetadata.nyesteBeliggenhedsadresse.husnummerFra}`,
                          i.virksomhedMetadata.nyesteBeliggenhedsadresse.postdistrikt,
                          i.virksomhedMetadata.nyesteBeliggenhedsadresse.postnummer.toString(),
                          "",
                          "",
                          ""
                        )
                        setTimeout(() => {setShow(false)},200)
                      }}>
                        {i.virksomhedMetadata.nyesteNavn.navn} - {i.cvrNummer}
                      </li>
                    ))
                  }
              </ul>
            </Stack>}
        </Stack>
    )
}
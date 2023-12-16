import _React, { useState } from "react";
// import { Link } from 'react-router-dom';
import {styled } from '@mui/system';
import { Button, Typography, Box } from '@mui/material';
// import TranslateIcon from '@mui/icons-material/Translate';



//internal imports 
import translateImage from '../../assets/images/basic-japanese-pronunciation-2-91cbac0a.jpg';
import { InputText } from "../sharedComponents";
import { SubmitHandler, useForm } from "react-hook-form";
import { serverCalls } from "../../api/server";
import { ref, getDatabase, push } from "firebase/database";
import { NavBar } from "../sharedComponents";


// interface Props {
//     title: string
// }


// style components(Restyle for Tranlator page)
const Root = styled('div')({
    padding: '0px',
    margin: '0px'
})


const Main = styled('main') ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .6)), url(${translateImage});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top', 
    position: 'absolute',
    marginTop: '0px'
})


const MainText = styled('div') ({
    textAlign: 'center',
    position: 'relative',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white' 
})



// const ContainerButton = styled('div') ({
//     textAlign: 'center',
//     position: 'fixed',
//     top: '350%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)', 
// })


export interface SubmitProps {
    sentence: string
}

interface TranslateProps {
    text: string,
    translatedLanguage: string,
    language: string,
    translate: string
}





// finish creating page for translator and add translation function
export const Translate = () => {
    const { register, handleSubmit } = useForm<SubmitProps>({})

    const [translateData, setTranslateData] = useState<TranslateProps>({})
    const db = getDatabase()
    const onSubmit: SubmitHandler<SubmitProps> = async (data: SubmitProps, event: any) => {
        if (event) event.preventDefault(); 

       const translateText = await serverCalls.translator(data.sentence)

       setTranslateData(translateText as TranslateProps) 
    }


    //const userText = localStorage.getItem('')
    const transData = () => {
        const _userId = localStorage.getItem('uuid')
        const dataRef = ref(db, `translate/`)

        push(dataRef, translateData)
        .then((_newDataRef) => {
            console.log('success')
        })
        .then(() => {
            setTimeout(()=>{window.location.reload()}, 2000)
        })
        //set hooks for error
        .catch((error) => {
            console.log(error.message)
            
        })
    } 





    
    return (
        
        <Root>
        <Main>
            <NavBar />
            <MainText>
    
                <Box>
                    <form onSubmit = {handleSubmit(onSubmit)}>
                    <label htmlFor="sentence"> What would you like to translate?</label>
                    <InputText {...register('sentence')} name='sentence' placeholder='Text Here!' />
                    
                    <Button type='submit' variant='contained'>Submit</Button>
                    </form>
                    <Box> 
                        <Typography>Your original text: {translateData.text}</Typography>
                        <Typography>In Japanese: {translateData.translate}</Typography>
                    </Box>
                    <Button onClick={transData} variant='contained'> Add to database</Button>
                </Box>
            </MainText>
        </Main>
    </Root>
        
    )
}
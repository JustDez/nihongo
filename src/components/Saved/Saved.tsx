import * as _React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';



//internal imports **img not working
import saveImage from '../../assets/images/kanji-knowledge-2c57ec43.jpg';
import { NavBar } from '../sharedComponents';

interface Props {
    title: string
}


// style components(Restyle for Tranlator page)
const Root = styled('div')({
    padding: '0px',
    margin: '0px'
})


const Main = styled('main') ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .6)), url(${saveImage});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'contain',
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

const ContainerButton = styled('div') ({
    textAlign: 'center',
    position: 'fixed',
    top: '350%',
    left: '50%',
    transform: 'translate(-50%, -50%)', 
})

export const Saved = () => {
    return (
        <Main>
            <NavBar />
            <h1 style={{marginTop: '45px'}}>Saved files go here!</h1>
        </Main>
    )
}




// saved files will be saved to cards where users
// can name the files. When they select a file 
// they will be able to view the contents
import * as _React from 'react'; 
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';


//internal imports
import homeImage from '../../assets/images/reading-hiragana-dc667116.jpg';
import { NavBar } from '../sharedComponents';


interface Props {
    title: string
}

// style components
const Root = styled('div')({
    padding: '0px',
    margin: '0px'
})

const Main = styled('main') ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .6)), url(${homeImage});`,
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

const ContainerButton = styled('div') ({
    textAlign: 'center',
    position: 'fixed',
    top: '350%',
    left: '50%',
    transform: 'translate(-50%, -50%)', 
})


export const Home = (props: Props) => {
    const myAuth = localStorage.getItem('auth')
    return (
        <Root>
            <NavBar/>
            <Main>
                <MainText>
                    <Typography variant='h2'sx={{marginTop: '-20px'}}> {props.title} </Typography>
                     <ContainerButton>
                     <Button sx={{ marginTop: '50px', marginRight: '20px'}} component={Link} to={myAuth === 'true' ? "/translate" : "/auth"} variant='contained'>Translator</Button>
                     <Button sx={{ marginTop: '50px', marginRight: '20px'}} component={Link} to={myAuth === 'true' ? "/saved" : "/auth"} variant='contained'>Saved</Button>
                     </ContainerButton>
                </MainText>
            </Main>
        </Root>
    );
};